"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { LeadCapturePopup } from "./lead-capture-popup";

const STORAGE_KEY = "lead-magnet-popup-shown";
const POPUP_DELAY_MS = 15000; // 15 seconds
const EXIT_INTENT_THRESHOLD = 100; // pixels
const EXIT_INTENT_THROTTLE_MS = 1000; // throttle exit-intent detection

interface LeadCapturePopupProviderProps {
  children: React.ReactNode;
}

// Detect if user is on mobile device
function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function LeadCapturePopupProvider({ children }: LeadCapturePopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastExitIntentTime = useRef(0);

  // Check if popup was already shown in this session
  const checkSessionStorage = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      const shown = sessionStorage.getItem(STORAGE_KEY);
      return shown === "true";
    } catch {
      return false;
    }
  }, []);

  // Mark popup as shown in session storage
  const markAsShown = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Show the popup
  const showPopup = useCallback(() => {
    setIsOpen(true);
    setHasShownPopup(true);
    markAsShown();
  }, [markAsShown]);

  // Close the popup and persist dismissal so it won't show again this session
  const handleClose = useCallback(() => {
    setIsOpen(false);
    markAsShown(); // Persist dismissal — won't reappear in this session
  }, [markAsShown]);

  // Timer-based popup display
  useEffect(() => {
    // Skip if already shown
    if (checkSessionStorage()) {
      return;
    }

    // Skip on mobile - only show timer popup on desktop for now
    if (isMobileDevice()) {
      return;
    }

    const timer = setTimeout(() => {
      showPopup();
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [checkSessionStorage, showPopup]);

  // Exit intent detection (desktop only)
  useEffect(() => {
    // Skip on mobile
    if (isMobileDevice()) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse exits from top of the viewport
      if (e.clientY <= EXIT_INTENT_THRESHOLD) {
        const now = Date.now();
        
        // Throttle
        if (now - lastExitIntentTime.current < EXIT_INTENT_THROTTLE_MS) {
          return;
        }
        lastExitIntentTime.current = now;

        // Skip if already shown
        if (checkSessionStorage()) {
          return;
        }

        showPopup();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [checkSessionStorage, showPopup]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {children}
      <LeadCapturePopup open={isOpen} onOpenChange={handleClose} />
    </>
  );
}