import '@testing-library/jest-dom/vitest';
import { beforeEach, afterEach, vi } from 'vitest';

// jsdom has no ResizeObserver, and GitHeatMap uses one for its grid sizing.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverStub;

// The real app calls a remote contributions API on mount. Stub it so tests
// are deterministic and never touch the network.
beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ contributions: [] }),
      })
    )
  );
  localStorage.clear();
});

afterEach(() => {
  vi.unstubAllGlobals();
});
