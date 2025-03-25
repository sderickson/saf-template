import { describe, it, expect } from "vitest";
import { mountWithPlugins } from "@saflib/vue-spa-dev/components.ts";
import HomePage from "./HomePage.vue";
describe("HomePage", () => {
  it("should render", () => {
    const wrapper = mountWithPlugins(HomePage);
    expect(wrapper.html()).toContain("A blank page. Exciting!");
  });
});
