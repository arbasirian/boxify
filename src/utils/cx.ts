/**
 * Utility function for conditionally joining class names together.
 * Similar to the classnames library but lightweight and focused.
 */

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | ClassValue[];

/**
 * Joins class names together, filtering out falsy values.
 * @param args - Class names to join
 * @returns Joined class names string
 */
export function cx(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === null || arg === undefined || arg === false) continue;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(cx(...arg));
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

/**
 * Alias for cx function for better developer experience.
 * @param args - Class names to join
 * @returns Joined class names string
 */
export const classNames = cx;
