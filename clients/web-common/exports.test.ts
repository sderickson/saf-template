import { expect, it, describe } from "vitest";
import { vuetifyConfig } from "@your-org/web-common";
import { webCommonStrings } from "@your-org/web-common/strings";

describe("web-auth package exports", () => {
  it("should export every SPA's vuetify config", () => {
    expect(vuetifyConfig).toBeDefined();
  });

  it("should export strings for common components", () => {
    expect(webCommonStrings).toBeDefined();
  });
});
