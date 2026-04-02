import { expect, it, describe } from "vitest";
import { vuetifyConfig } from "@your-org/example-clients-common";
import { example_common_strings } from "@your-org/example-clients-common/strings";

describe("example-clients-common package exports", () => {
  it("should export vuetify config", () => {
    expect(vuetifyConfig).toBeDefined();
  });

  it("should export strings", () => {
    expect(example_common_strings).toBeDefined();
  });
});
