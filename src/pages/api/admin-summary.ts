import type { APIRoute } from "astro";
import { getAllResponses } from "../../lib/db";
import { summarizeResponses } from "../../lib/scoring";

export const GET: APIRoute = async () => {
  const responses = await getAllResponses();
  const summary = summarizeResponses(responses);

  return new Response(JSON.stringify(summary, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};