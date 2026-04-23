import { argumentsList } from "../data/arguments";
import { metrics } from "../data/metrics";
import { prompts } from "../data/prompts";
import { pickRandomItem } from "./random";
import type { ArgumentItem, Metric, Prompt } from "./types";

export type HydratedPrompt = {
  prompt: Prompt;
  argument: ArgumentItem;
  metric: Metric;
};

export function getRandomHydratedPrompt(): HydratedPrompt {
  const prompt = pickRandomItem(prompts);

  const argument = argumentsList.find((item) => item.id === prompt.argumentId);
  const metric = metrics.find((item) => item.id === prompt.metricId);

  if (!argument) {
    throw new Error(`Argument not found for prompt ${prompt.id}`);
  }

  if (!metric) {
    throw new Error(`Metric not found for prompt ${prompt.id}`);
  }

  return {
    prompt,
    argument,
    metric,
  };
}