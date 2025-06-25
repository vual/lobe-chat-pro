import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useQueryRoute } from './useQueryRoute';

// Mocks
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn((href) => href),
    replace: vi.fn((href) => href),
  })),
}));

vi.mock('@/utils/env', () => ({
  isOnServerSide: false,
}));

beforeEach(() => {
  location.search = 'foo=bar';
});

describe('useQueryRoute', () => {
  it('should generate correct href without hash and replace', () => {
    const { result } = renderHook(() =>
      useQueryRoute().push('/example', {
        query: { baz: 'qux' },
      }),
    );

    expect(result.current).toBe('/example?baz=qux&foo=bar');
  });

  it('should replace entire query string when replace is true', () => {
    const { result } = renderHook(() =>
      useQueryRoute().push('/example', {
        replace: true,
        query: { baz: 'qux' },
      }),
    );

    expect(result.current).toBe('/example?baz=qux');
  });

  it('should append hash to the URL', () => {
    const { result } = renderHook(() =>
      useQueryRoute().push('/example', {
        replace: true,
        query: { foo: 'bar' },
        hash: 'section1',
      }),
    );

    expect(result.current).toBe('/example?foo=bar#section1');
  });

  it('should handle scenarios when on server side', () => {
    const { result } = renderHook(() =>
      useQueryRoute().push('/example', {
        query: { foo: 'bar' },
        hash: 'section1',
      }),
    );

    expect(result.current).toBe('/example?foo=bar#section1');
  });

  it('should handle cases with empty query and hash', () => {
    const { result } = renderHook(() =>
      useQueryRoute().replace('/example', {
        replace: true,
        query: {},
        hash: '',
      }),
    );

    expect(result.current).toBe('/example');
  });

  it('should handle cases without hash when on server side', () => {
    const { result } = renderHook(() =>
      useQueryRoute().replace('/example', {
        query: { foo: 'bar' },
      }),
    );

    expect(result.current).toBe('/example?foo=bar');
  });
});
