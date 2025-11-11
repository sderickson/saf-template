import {
  CopyStepMachine,
  PromptStepMachine,
  defineWorkflow,
  step,
  type ParsePackageNameOutput,
  parsePackageName,
  makeLineReplace,
  CommandStepMachine,
} from "@saflib/workflows";
import path from "node:path";

const sourceDir = path.join(import.meta.dirname, "template");

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
    


  ],
});
