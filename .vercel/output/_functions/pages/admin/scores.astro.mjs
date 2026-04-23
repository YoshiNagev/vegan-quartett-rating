import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CYy9ufCC.mjs';
import { g as getAllResponses } from '../../chunks/db_CPu0aJoN.mjs';
import { s as summarizeResponses } from '../../chunks/scoring_DZvbW_FM.mjs';
import { g as getMetricNameById, a as getArgumentTextById } from '../../chunks/admin_Bo7zc8K_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Scores = createComponent(async ($$result, $$props, $$slots) => {
  const responses = await getAllResponses();
  const summary = summarizeResponses(responses);
  const summaryWithLabels = summary.map((item) => ({
    ...item,
    argumentText: getArgumentTextById(item.argumentId),
    metricName: getMetricNameById(item.metricId)
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Auswertung" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="admin-section"> <div class="admin-head"> <a class="back-link" href="/admin">← Zurück zum Admin-Bereich</a> <h1>Auswertung</h1> <p>${summaryWithLabels.length} Prompt-Zusammenfassungen</p> </div> ${summaryWithLabels.length === 0 ? renderTemplate`<div class="empty-state"> <p>Noch keine Daten zur Auswertung vorhanden.</p> </div>` : renderTemplate`<div class="table-wrap"> <table class="data-table"> <thead> <tr> <th>Argument-ID</th> <th>Argument</th> <th>Kategorie</th> <th>Gesamt</th> <th>Rated</th> <th>Unknown</th> <th>Skipped</th> <th>Durchschnitt</th> </tr> </thead> <tbody> ${summaryWithLabels.map((item) => renderTemplate`<tr> <td>${item.argumentId}</td> <td>${item.argumentText}</td> <td>${item.metricName}</td> <td>${item.total}</td> <td>${item.ratedCount}</td> <td>${item.unknownCount}</td> <td>${item.skippedCount}</td> <td>${item.average ?? "\u2014"}</td> </tr>`)} </tbody> </table> </div>`} </section> </main> ` })}`;
}, "C:/Users/josia/vegan-quartett-rating/src/pages/admin/scores.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/admin/scores.astro";
const $$url = "/admin/scores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Scores,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
