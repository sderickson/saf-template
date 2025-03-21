import createClient from "openapi-fetch";
import type { paths } from "@your-org/specs-apis/dist/openapi";
export const client = createClient<paths>({
  baseUrl: `${document.location.protocol}//api.${document.location.host}`,
  credentials: "include",
});
