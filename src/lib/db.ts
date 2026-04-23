import { supabase } from "./supabase";
import type { StoredResponse } from "./types";

type ResponseRow = {
  id: string;
  prompt_id: string;
  argument_id: number;
  metric_id: string;
  slider_value: number | null;
  response_type: "rated" | "unknown" | "skipped";
  session_id: string;
  created_at: string;
};

function mapRowToStoredResponse(row: ResponseRow): StoredResponse {
  return {
    id: row.id,
    promptId: row.prompt_id,
    argumentId: row.argument_id,
    metricId: row.metric_id as StoredResponse["metricId"],
    sliderValue: row.slider_value,
    responseType: row.response_type,
    sessionId: row.session_id,
    createdAt: row.created_at,
  };
}

export async function saveResponse(response: StoredResponse): Promise<void> {
  const { error } = await supabase.from("responses").insert({
    prompt_id: response.promptId,
    argument_id: response.argumentId,
    metric_id: response.metricId,
    slider_value: response.sliderValue,
    response_type: response.responseType,
    session_id: response.sessionId,
  });

  if (error) {
    throw new Error(`Failed to save response: ${error.message}`);
  }
}

export async function getAllResponses(): Promise<StoredResponse[]> {
  const { data, error } = await supabase
    .from("responses")
    .select(
      "id, prompt_id, argument_id, metric_id, slider_value, response_type, session_id, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch responses: ${error.message}`);
  }

  return (data ?? []).map(mapRowToStoredResponse);
}

export async function getResponsesByPromptId(
  promptId: string
): Promise<StoredResponse[]> {
  const { data, error } = await supabase
    .from("responses")
    .select(
      "id, prompt_id, argument_id, metric_id, slider_value, response_type, session_id, created_at"
    )
    .eq("prompt_id", promptId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch prompt responses: ${error.message}`);
  }

  return (data ?? []).map(mapRowToStoredResponse);
}

export async function clearAllResponses(): Promise<void> {
  const { error } = await supabase
    .from("responses")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");

  if (error) {
    throw new Error(`Failed to clear responses: ${error.message}`);
  }
}