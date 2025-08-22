// SSR utility for collecting and flushing generated CSS rules

// Registry for collecting CSS rules during SSR
let ssrRegistry: Set<string> | null = null;

// Initialize SSR registry
export function initSSR(): void {
  if (typeof window === 'undefined') {
    ssrRegistry = new Set();
  }
}

// Add CSS rule to SSR registry
export function addSSRRule(rule: string): void {
  if (ssrRegistry) {
    ssrRegistry.add(rule);
  }
}

// Get all collected CSS rules for SSR
export function getSSRRules(): string[] {
  if (!ssrRegistry) {
    return [];
  }
  return Array.from(ssrRegistry);
}

// Flush SSR registry and return collected rules
export function flushSSRRules(): string[] {
  if (!ssrRegistry) {
    return [];
  }
  const rules = Array.from(ssrRegistry);
  ssrRegistry.clear();
  return rules;
}

// Generate SSR stylesheet HTML
export function generateSSRStylesheet(): string {
  const rules = getSSRRules();
  if (rules.length === 0) {
    return '';
  }
  
  return `<style data-boxify-ssr>${rules.join('\n')}</style>`;
}

// Check if we're in SSR mode
export const isSSR = typeof window === 'undefined';
