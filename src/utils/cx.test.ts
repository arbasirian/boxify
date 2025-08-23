import { cx, classNames } from "./cx";

describe("cx utility function", () => {
  describe("basic functionality", () => {
    it("should join multiple strings with spaces", () => {
      expect(cx("foo", "bar")).toBe("foo bar");
      expect(cx("foo", "bar", "baz")).toBe("foo bar baz");
    });

    it("should handle single string", () => {
      expect(cx("foo")).toBe("foo");
    });

    it("should return empty string for no arguments", () => {
      expect(cx()).toBe("");
    });
  });

  describe("object syntax", () => {
    it("should include keys with truthy values", () => {
      expect(cx({ foo: true, bar: true })).toBe("foo bar");
      expect(cx({ "foo-bar": true, baz: true })).toBe("foo-bar baz");
    });

    it("should exclude keys with falsy values", () => {
      expect(cx({ foo: true, bar: false })).toBe("foo");
      expect(cx({ foo: false, bar: null, baz: undefined })).toBe("");
    });

    it("should handle mixed truthy/falsy values", () => {
      expect(cx({ foo: true, bar: false, baz: true, qux: 0 })).toBe("foo baz");
    });
  });

  describe("array syntax", () => {
    it("should flatten arrays recursively", () => {
      expect(cx("foo", ["bar", "baz"])).toBe("foo bar baz");
      expect(cx(["foo", "bar"], "baz")).toBe("foo bar baz");
    });

    it("should handle nested arrays", () => {
      expect(cx("a", ["b", ["c", "d"]])).toBe("a b c d");
    });

    it("should handle arrays with objects", () => {
      expect(cx("foo", ["bar", { baz: true, qux: false }])).toBe("foo bar baz");
    });
  });

  describe("mixed syntax", () => {
    it("should handle mixed string, object, and array arguments", () => {
      expect(cx("foo", { bar: true }, ["baz", { qux: true }])).toBe(
        "foo bar baz qux"
      );
    });

    it("should handle complex nested structures", () => {
      expect(
        cx(
          "base",
          { "is-active": true, "is-disabled": false },
          ["state", { "has-error": true }],
          "component"
        )
      ).toBe("base is-active state has-error component");
    });
  });

  describe("falsy values", () => {
    it("should ignore null, undefined, and false", () => {
      expect(cx(null, false, "bar", undefined)).toBe("bar");
    });

    it("should handle zero as a valid value", () => {
      expect(cx(0)).toBe("0");
    });

    it("should handle empty string as a valid value", () => {
      expect(cx("")).toBe("");
    });
  });

  describe("number values", () => {
    it("should convert numbers to strings", () => {
      expect(cx(42)).toBe("42");
      expect(cx("foo", 42, "bar")).toBe("foo 42 bar");
    });
  });

  describe("classNames alias", () => {
    it("should work identically to cx", () => {
      expect(classNames("foo", "bar")).toBe("foo bar");
      expect(classNames({ foo: true, bar: false })).toBe("foo");
      expect(classNames(["foo", { bar: true }])).toBe("foo bar");
    });
  });

  describe("edge cases", () => {
    it("should handle empty strings", () => {
      expect(cx("foo", "", "bar")).toBe("foo  bar");
    });

    it("should handle objects with empty string keys", () => {
      expect(cx({ "": true, foo: true })).toBe(" foo");
    });

    it("should handle deeply nested falsy values", () => {
      expect(cx("foo", [null, false, "bar", undefined])).toBe("foo bar");
    });
  });
});
