import { argumentsList } from "./arguments";
import { metrics } from "./metrics";

export const prompts = argumentsList.flatMap((argument) =>
  metrics.map((metric) => ({
    id: `${argument.id}-${metric.id}`,
    argumentId: argument.id,
    metricId: metric.id,
  }))
);