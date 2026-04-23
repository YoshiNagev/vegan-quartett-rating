import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CYy9ufCC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Vegan Quartett Rating" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="hero"> <p class="eyebrow">Vegan Quartett Rating</p> <h1>Bewerte einzelne Veganismus-Argumente</h1> <p class="intro">
Du bekommst jeweils genau ein Argument in genau einer Kategorie angezeigt:
<strong>Verbreitung</strong>, <strong>Komplexität</strong> oder
<strong>Trigger</strong>.
</p> <p class="intro">
Du kannst das Argument per Slider bewerten, als
<strong>„kenne ich nicht / kann ich nicht einschätzen“</strong> markieren
        oder einfach überspringen.
</p> <div class="actions"> <a class="button button-primary" href="/rate">Jetzt bewerten</a> <a class="button" href="/admin">Admin-Bereich</a> </div> </section> <section class="info-card"> <h2>Die drei Kategorien</h2> <ul class="metric-list"> <li> <strong>Verbreitung:</strong>
Wie häufig begegnet dir dieses Argument in Gesprächen, Kommentaren oder
          Debatten über Veganismus?
</li> <li> <strong>Komplexität:</strong>
Wie viel Fachwissen oder Hintergrundwissen braucht man, um dieses
          Argument wirklich fundiert zu beantworten?
</li> <li> <strong>Trigger:</strong>
Wie emotional aufgeladen ist dieses Argument typischerweise für die
          Person, die es bringt?
</li> </ul> </section> </main> ` })}`;
}, "C:/Users/josia/vegan-quartett-rating/src/pages/index.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
