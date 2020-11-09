import { isString } from "./isString";

describe("isString", () => {
  it("returns true when string is passed as argument", () => {
    expect(isString(String(123))).toBeTruthy();
    expect(isString("123")).toBeTruthy();
    expect(Number(123).toString()).toBeTruthy();
  });

  it("returns false when value in any other type than string is passed as argument", () => {
    expect(isString(undefined)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(Number("123"))).toBeFalsy();
    expect(isString(123)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString({})).toBeFalsy();
  });
});
