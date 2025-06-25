import { describe, expect, it } from 'vitest';

import { parseBrowserLanguage } from './locale';

describe('parseBrowserLanguage', () => {
  // Helper function to create Headers with accept-language
  const createHeaders = (acceptLanguage?: string) => {
    const headers = new Headers();
    if (acceptLanguage) {
      headers.set('accept-language', acceptLanguage);
    }
    return headers;
  };

  describe('when DEFAULT_LANG is en-US', () => {
    it('should return en-US for empty accept-language header', () => {
      const headers = createHeaders();
      expect(parseBrowserLanguage(headers)).toBe('en-US');
    });

    it('should return en-US for English language preference', () => {
      const headers = createHeaders('en-US,en;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('en-US');
    });

    it('should handle Arabic language special case', () => {
      const headers = createHeaders('ar-SA,ar;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('ar');
    });

    it('should convert ar-EG to ar', () => {
      const headers = createHeaders('ar-EG,ar;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('ar');
    });

    it('should handle multiple language preferences', () => {
      const headers = createHeaders('zh-CN,zh;q=0.9,en;q=0.8');
      // This expectation might need to be adjusted based on your locales configuration
      expect(parseBrowserLanguage(headers)).toBe('zh-CN');
    });
  });

  describe('when DEFAULT_LANG is not en-US', () => {
    it('should return the non-en-US DEFAULT_LANG regardless of accept-language', () => {
      const headers = createHeaders('en-US,en;q=0.9');
      expect(parseBrowserLanguage(headers, 'zh-CN')).toBe('zh-CN');
    });
  });

  describe('error handling', () => {
    it('should handle invalid accept-language header format', () => {
      const headers = createHeaders('invalid-format');
      expect(parseBrowserLanguage(headers)).toBe('en-US');
    });

    it('should handle empty Headers object', () => {
      const headers = new Headers();
      expect(parseBrowserLanguage(headers)).toBe('en-US');
    });
  });
});
