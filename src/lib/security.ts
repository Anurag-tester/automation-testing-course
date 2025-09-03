/**
 * Security utilities for input validation and sanitization
 */

// Input sanitization patterns
const SAFE_STRING_PATTERN = /^[a-zA-Z0-9\s\-_.,!?()]+$/;
const SAFE_ID_PATTERN = /^[a-zA-Z0-9\-_]+$/;
const SAFE_SLUG_PATTERN = /^[a-zA-Z0-9\-]+$/;

/**
 * Sanitize string input to prevent XSS and injection attacks
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') return '';
  
  // Remove potentially dangerous characters
  return input
    .replace(/[<>\"'&]/g, '') // Remove HTML/XML chars
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit length
}

/**
 * Validate and sanitize ID inputs
 */
export function sanitizeId(input: unknown): string {
  if (typeof input !== 'string') return '';
  
  const sanitized = input.replace(/[^a-zA-Z0-9\-_]/g, '').slice(0, 50);
  return SAFE_ID_PATTERN.test(sanitized) ? sanitized : '';
}

/**
 * Validate and sanitize slug inputs
 */
export function sanitizeSlug(input: unknown): string {
  if (typeof input !== 'string') return '';
  
  const sanitized = input.toLowerCase().replace(/[^a-zA-Z0-9\-]/g, '').slice(0, 100);
  return SAFE_SLUG_PATTERN.test(sanitized) ? sanitized : '';
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Generate secure random string for CSRF tokens
 */
export function generateSecureToken(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  constructor(
    private maxRequests: number = 100,
    private windowMs: number = 60000 // 1 minute
  ) {}
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }
}

/**
 * Content Security Policy nonce generator
 */
export function generateCSPNonce(): string {
  return Buffer.from(generateSecureToken(16)).toString('base64');
}