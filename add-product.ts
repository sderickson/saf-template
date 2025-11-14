import {
  defineWorkflow,
  step,
  makeWorkflowMachine,
} from "@saflib/workflows";
import { AddSpaWorkflowDefinition } from "@saflib/vue/workflows";

const input = [
  {
    name: "name",
    description:
      "Name of the new product",
    exampleValue: "foo",
  },
] as const;

interface AddProductWorkflowContext  {
  productName: string;
}

export const AddProductWorkflowDefinition = defineWorkflow<
  typeof input,
  AddProductWorkflowContext
>({
  id: "saf/add-product",

  description:
    "Create a new web product in the SAF monorepo",

  input,

  sourceUrl: import.meta.url,

  context: ({ input }) => {
    const context = {
      productName: input.name,
    };

    return context;
  },

  templateFiles: {},

  docFiles: {},

  versionControl: {
    allowPaths: [],
  },

  steps: [
    step(makeWorkflowMachine(AddSpaWorkflowDefinition), ({ context }) => ({
      productName: context.productName,
      subdomainName: "root",
    })),

    step(makeWorkflowMachine(AddSpaWorkflowDefinition), ({ context }) => ({
      productName: context.productName,
      subdomainName: "admin",
    })),

    step(makeWorkflowMachine(AddSpaWorkflowDefinition), ({ context }) => ({
      productName: context.productName,
      subdomainName: "app",
    })),

    step(makeWorkflowMachine(AddSpaWorkflowDefinition), ({ context }) => ({
      productName: context.productName,
      subdomainName: "auth",
    })),

    step(makeWorkflowMachine(AddSpaWorkflowDefinition), ({ context }) => ({
      productName: context.productName,
      subdomainName: "account",
    })),
  ],
});

export default AddProductWorkflowDefinition;