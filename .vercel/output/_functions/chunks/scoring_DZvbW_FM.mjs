function summarizeResponses(responses) {
  const byPrompt = /* @__PURE__ */ new Map();
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
    const average = ratedItems.length > 0 ? ratedItems.reduce((sum, item) => sum + (item.sliderValue ?? 0), 0) / ratedItems.length : null;
    return {
      promptId,
      argumentId: first.argumentId,
      metricId: first.metricId,
      total: items.length,
      ratedCount: ratedItems.length,
      unknownCount: unknownItems.length,
      skippedCount: skippedItems.length,
      average: average === null ? null : Math.round(average * 100) / 100
    };
  });
}

export { summarizeResponses as s };
