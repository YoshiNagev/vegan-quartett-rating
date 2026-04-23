import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CYy9ufCC.mjs';
export { renderers } from '../renderers.mjs';

const $$Thanks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Danke" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="info-card"> <p class="eyebrow">Danke</p> <h1>Deine Antwort wurde gespeichert.</h1> <p>
Du kannst direkt mit der nächsten zufälligen Bewertung weitermachen.
</p> <div class="actions"> <a class="button button-primary" href="/rate">Nächstes Argument</a> <a class="button" href="/">Zur Startseite</a> </div> </section> </main> ` })}`;
}, "C:/Users/josia/vegan-quartett-rating/src/pages/thanks.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/thanks.astro";
const $$url = "/thanks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thanks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
