import { expect, it, describe } from "vitest";
import { vuetifyConfig } from "@your-org/tasktap-clients-common";
import { tasktap_common_strings } from "@your-org/tasktap-clients-common/strings";

describe("tasktap-clients-common package exports", () => {
  it("should export vuetify config", () => {
    expect(vuetifyConfig).toBeDefined();
  });

  it("should export strings", () => {
    expect(tasktap_common_strings).toBeDefined();
  });
});
