import { commonEventLogger, makeProductEventLogger } from "@saflib/vue";
import type { ProductEvent } from "@your-org/tasktap-spec";

export const eventLogger = makeProductEventLogger<ProductEvent>();
eventLogger.onProductEvent(commonEventLogger<ProductEvent>);
