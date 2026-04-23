import { g as getAllResponses } from '../../chunks/db_CPu0aJoN.mjs';
import { s as summarizeResponses } from '../../chunks/scoring_DZvbW_FM.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const responses = await getAllResponses();
  const summary = summarizeResponses(responses);
  return new Response(JSON.stringify(summary, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
