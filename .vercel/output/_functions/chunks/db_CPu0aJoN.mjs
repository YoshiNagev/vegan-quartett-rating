import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pcfaczbzfiqwvjjcoefd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZmFjemJ6Zmlxd3ZqamNvZWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MzkxMzQsImV4cCI6MjA5MjUxNTEzNH0.IeG2pyr_Y3Il7bi2mF0APQC6EpFI3Au6YeAzI36nNMc";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function mapRowToStoredResponse(row) {
  return {
    id: row.id,
    promptId: row.prompt_id,
    argumentId: row.argument_id,
    metricId: row.metric_id,
    sliderValue: row.slider_value,
    responseType: row.response_type,
    sessionId: row.session_id,
    createdAt: row.created_at
  };
}
async function saveResponse(response) {
  const { error } = await supabase.from("responses").insert({
    prompt_id: response.promptId,
    argument_id: response.argumentId,
    metric_id: response.metricId,
    slider_value: response.sliderValue,
    response_type: response.responseType,
    session_id: response.sessionId
  });
  if (error) {
    throw new Error(`Failed to save response: ${error.message}`);
  }
}
async function getAllResponses() {
  const { data, error } = await supabase.from("responses").select(
    "id, prompt_id, argument_id, metric_id, slider_value, response_type, session_id, created_at"
  ).order("created_at", { ascending: false });
  if (error) {
    throw new Error(`Failed to fetch responses: ${error.message}`);
  }
  return (data ?? []).map(mapRowToStoredResponse);
}

export { getAllResponses as g, saveResponse as s };
