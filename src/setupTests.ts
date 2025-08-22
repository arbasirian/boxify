import "@testing-library/jest-dom";

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock window.innerWidth for responsive testing
Object.defineProperty(window, "innerWidth", {
  writable: true,
  value: 1024, // Default to desktop
});

// Mock window.resizeTo for responsive testing
window.resizeTo = jest.fn();
