import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CYy9ufCC.mjs';
import { g as getAllResponses } from '../../chunks/db_CPu0aJoN.mjs';
import { e as enrichResponses } from '../../chunks/admin_Bo7zc8K_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Responses = createComponent(async ($$result, $$props, $$slots) => {
  const responses = await getAllResponses();
  const enrichedResponses = enrichResponses(responses);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rohdaten" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="admin-section"> <div class="admin-head"> <a class="back-link" href="/admin">← Zurück zum Admin-Bereich</a> <h1>Rohdaten</h1> <p>${enrichedResponses.length} gespeicherte Antworten</p> </div> ${enrichedResponses.length === 0 ? renderTemplate`<div class="empty-state"> <p>Noch keine Antworten gespeichert.</p> </div>` : renderTemplate`<div class="table-wrap"> <table class="data-table"> <thead> <tr> <th>Argument-ID</th> <th>Argument</th> <th>Kategorie</th> <th>Typ</th> <th>Wert</th> <th>Session</th> <th>Zeit</th> </tr> </thead> <tbody> ${enrichedResponses.map((response) => renderTemplate`<tr> <td>${response.argumentId}</td> <td>${response.argumentText}</td> <td>${response.metricName}</td> <td>${response.responseType}</td> <td>${response.sliderValue ?? "\u2014"}</td> <td>${response.sessionId}</td> <td>${response.createdAt ?? "\u2014"}</td> </tr>`)} </tbody> </table> </div>`} </section> </main> ` })}`;
}, "C:/Users/josia/vegan-quartett-rating/src/pages/admin/responses.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/admin/responses.astro";
const $$url = "/admin/responses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Responses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
