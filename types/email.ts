// types/email.ts
export interface EmailData {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export interface WelcomeEmailData {
  email: string;
  name: string;
}

export interface ApiResponse {
  success: boolean;
  messageId?: string;
  message?: string;
  error?: string;
}