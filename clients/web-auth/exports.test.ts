import { expect, it, describe } from "vitest";
import { main } from "@your-org/web-auth";
import { authAppStrings } from "@your-org/web-auth/strings";

describe("web-auth package exports", () => {
  it("should export the main function", () => {
    expect(main).toBeDefined();
  });

  it("should export the strings", () => {
    expect(authAppStrings).toBeDefined();
  });
});
