import { m as metrics, a as argumentsList } from './metrics_CwUDe8BT.mjs';

function getArgumentTextById(argumentId) {
  const argument = argumentsList.find((item) => item.id === argumentId);
  return argument?.text ?? `Unbekanntes Argument (${argumentId})`;
}
function getMetricNameById(metricId) {
  const metric = metrics.find((item) => item.id === metricId);
  return metric?.name ?? `Unbekannte Kategorie (${metricId})`;
}
function enrichResponses(responses) {
  return responses.map((response) => ({
    ...response,
    argumentText: getArgumentTextById(response.argumentId),
    metricName: getMetricNameById(response.metricId)
  }));
}

export { getArgumentTextById as a, enrichResponses as e, getMetricNameById as g };
