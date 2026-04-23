import { argumentsList } from "../data/arguments";
import { metrics } from "../data/metrics";
import type { StoredResponse } from "./types";

export function getArgumentTextById(argumentId: number): string {
  const argument = argumentsList.find((item) => item.id === argumentId);
  return argument?.text ?? `Unbekanntes Argument (${argumentId})`;
}

export function getMetricNameById(metricId: string): string {
  const metric = metrics.find((item) => item.id === metricId);
  return metric?.name ?? `Unbekannte Kategorie (${metricId})`;
}

export function enrichResponses(responses: StoredResponse[]) {
  return responses.map((response) => ({
    ...response,
    argumentText: getArgumentTextById(response.argumentId),
    metricName: getMetricNameById(response.metricId),
  }));
}