import { g as getAllResponses } from '../../chunks/db_CPu0aJoN.mjs';
export { renderers } from '../../renderers.mjs';

function escapeCsvCell(value) {
  const stringValue = String(value ?? "");
  return `"${stringValue.replaceAll('"', '""')}"`;
}
function rowsToCsv(rows) {
  return rows.map((row) => row.map(escapeCsvCell).join(",")).join("\n");
}

const GET = async () => {
  const responses = await getAllResponses();
  const rows = [
    [
      "id",
      "promptId",
      "argumentId",
      "metricId",
      "sliderValue",
      "responseType",
      "sessionId",
      "createdAt"
    ],
    ...responses.map((response) => [
      response.id ?? "",
      response.promptId,
      response.argumentId,
      response.metricId,
      response.sliderValue ?? "",
      response.responseType,
      response.sessionId,
      response.createdAt ?? ""
    ])
  ];
  const csv = rowsToCsv(rows);
  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="vegan-quartett-responses.csv"'
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
