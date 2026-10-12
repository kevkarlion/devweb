"use client";

import { useId } from "react";

/**
 * Premium lightning mark for the hero kicker.
 *
 * A sharp, faceted bolt filled with the brand gradient (blue -> violet)
 * plus a rim-light highlight for depth. Deliberately NOT the generic
 * flat "Zap" glyph. Decorative only, so it is hidden from assistive tech.
 */
export function LightningBolt({ className }: { className?: string }) {
  const gradientId = `bolt-${useId().replace(/[:]/g, "")}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="3.5"
          y1="1.5"
          x2="20.5"
          y2="22.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AA0FF" />
          <stop offset="0.5" stopColor="#1D3FFF" />
          <stop offset="1" stopColor="#9650FF" />
        </linearGradient>
      </defs>

      {/* Faceted bolt */}
      <path
        d="M14.5 1.5 L3.5 14 H10.2 L9.5 22.5 L20.5 9.8 H13.8 Z"
        fill={`url(#${gradientId})`}
      />

      {/* Rim light on the upper-left edge for depth */}
      <path
        d="M14.5 1.5 L3.5 14"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
