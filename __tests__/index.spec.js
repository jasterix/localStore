const { input } = require("../index.js");

describe("Check user input", () => {
  it("should be a string", () => {
    const input = "hi";
    expect(typeof input).toMatch("str");
  });
});
