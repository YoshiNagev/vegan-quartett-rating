import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CYy9ufCC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="info-card"> <p class="eyebrow">Admin</p> <h1>Verwaltung & Auswertung</h1> <p>
Hier kannst du Rohdaten ansehen, Auswertungen prüfen und die Daten als
        CSV exportieren.
</p> <div class="admin-links"> <a class="button button-primary" href="/admin/responses">Rohdaten ansehen</a> <a class="button" href="/admin/scores">Auswertung ansehen</a> <a class="button" href="/api/export-csv">CSV exportieren</a> </div> </section> </main> ` })}`;
}, "C:/Users/josia/vegan-quartett-rating/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
