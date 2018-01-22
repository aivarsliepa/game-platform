import { generateMessage } from "../message";

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const msg = "hello there";
    const from = "testUser";
    const result = generateMessage(from, msg);

    expect(result).toMatchObject({ msg, from });
    expect(typeof result.time).toBe("number");
  });
});
