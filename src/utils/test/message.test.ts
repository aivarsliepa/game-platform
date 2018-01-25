import { generateMessage } from "../message";

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const message = "hello there";
    const from = "testUser";
    const result = generateMessage(from, message);

    expect(result).toMatchObject({ message, from });
    expect(typeof result.time).toBe("number");
  });
});
