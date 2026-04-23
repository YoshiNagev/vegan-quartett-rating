import type { APIRoute } from "astro";
import { getAllResponses } from "../../lib/db";
import { rowsToCsv } from "../../lib/csv";

export const GET: APIRoute = async () => {
  const responses = await getAllResponses();

  const rows: unknown[][] = [
    [
      "id",
      "promptId",
      "argumentId",
      "metricId",
      "sliderValue",
      "responseType",
      "sessionId",
      "createdAt",
    ],
    ...responses.map((response) => [
      response.id ?? "",
      response.promptId,
      response.argumentId,
      response.metricId,
      response.sliderValue ?? "",
      response.responseType,
      response.sessionId,
      response.createdAt ?? "",
    ]),
  ];

  const csv = rowsToCsv(rows);

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="vegan-quartett-responses.csv"',
    },
  });
};