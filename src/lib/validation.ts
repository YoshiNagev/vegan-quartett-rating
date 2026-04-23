import type { MetricId, ResponseType } from "./types";

const allowedMetricIds: MetricId[] = ["verbreitung", "komplexitaet", "trigger"];
const allowedResponseTypes: ResponseType[] = ["rated", "unknown", "skipped"];

export function clampSliderValue(value: unknown): number | null {
  const num = Number(value);

  if (!Number.isFinite(num)) {
    return null;
  }

  if (num < 0) {
    return 0;
  }

  if (num > 100) {
    return 100;
  }

  return Math.round(num);
}

export function isValidMetricId(value: unknown): value is MetricId {
  return typeof value === "string" && allowedMetricIds.includes(value as MetricId);
}

export function isValidResponseType(value: unknown): value is ResponseType {
  return (
    typeof value === "string" &&
    allowedResponseTypes.includes(value as ResponseType)
  );
}

export function toSafeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function toSafeNumber(value: unknown): number {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}