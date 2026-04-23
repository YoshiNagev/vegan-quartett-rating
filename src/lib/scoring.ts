import type { StoredResponse } from "./types";

type PromptSummary = {
  promptId: string;
  argumentId: number;
  metricId: string;
  total: number;
  ratedCount: number;
  unknownCount: number;
  skippedCount: number;
  average: number | null;
};

export function summarizeResponses(responses: StoredResponse[]): PromptSummary[] {
  const byPrompt = new Map<string, StoredResponse[]>();

  for (const response of responses) {
    const existing = byPrompt.get(response.promptId) ?? [];
    existing.push(response);
    byPrompt.set(response.promptId, existing);
  }

  return Array.from(byPrompt.entries()).map(([promptId, items]) => {
    const first = items[0];

    const ratedItems = items.filter(
      (item) => item.responseType === "rated" && item.sliderValue !== null
    );

    const unknownItems = items.filter((item) => item.responseType === "unknown");
    const skippedItems = items.filter((item) => item.responseType === "skipped");

    const average =
      ratedItems.length > 0
        ? ratedItems.reduce((sum, item) => sum + (item.sliderValue ?? 0), 0) /
          ratedItems.length
        : null;

    return {
      promptId,
      argumentId: first.argumentId,
      metricId: first.metricId,
      total: items.length,
      ratedCount: ratedItems.length,
      unknownCount: unknownItems.length,
      skippedCount: skippedItems.length,
      average: average === null ? null : Math.round(average * 100) / 100,
    };
  });
}

export function normalizeToHundred(values: number[]): number[] {
  if (values.length === 0) {
    return [];
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return values.map(() => 50);
  }

  return values.map((value) => {
    const normalized = ((value - min) / (max - min)) * 100;
    return Math.round(normalized);
  });
}