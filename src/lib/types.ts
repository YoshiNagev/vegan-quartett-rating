export type MetricId = "verbreitung" | "komplexitaet" | "trigger";

export type ArgumentItem = {
  id: number;
  categoryGroup: string;
  text: string;
};

export type Metric = {
  id: MetricId;
  name: string;
  question: string;
  leftLabel: string;
  rightLabel: string;
};

export type Prompt = {
  id: string;
  argumentId: number;
  metricId: MetricId;
};

export type ResponseType = "rated" | "unknown" | "skipped";

export type StoredResponse = {
  id?: string;
  promptId: string;
  argumentId: number;
  metricId: MetricId;
  sliderValue: number | null;
  responseType: ResponseType;
  sessionId: string;
  createdAt?: string;
};