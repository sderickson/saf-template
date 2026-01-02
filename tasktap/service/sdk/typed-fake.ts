import { typedCreateHandler } from "@saflib/sdk/testing";
import type { paths } from "@your-org/tasktap-spec";

export const { createHandler: tasktapHandler } =
  typedCreateHandler<paths>({
    subdomain: "tasktap",
  });
