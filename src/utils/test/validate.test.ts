import { isRealString } from "../validate";

describe("isRealString", () => {
  it("should return 'false', when argument is not a string", () => {
    expect(isRealString(3)).toBeFalsy();
  });

  it("should return 'false', when argument are just spaces", () => {
    expect(isRealString("   ")).toBeFalsy();
  });

  it("should return 'true', when argument is a string", () => {
    expect(isRealString("Hello There!")).toBeTruthy();
  });
});
