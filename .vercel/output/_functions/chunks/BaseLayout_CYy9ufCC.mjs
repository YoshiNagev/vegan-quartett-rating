import { e as createComponent, l as renderHead, n as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_y1XpGNYX.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Vegan Quartett Rating" } = Astro2.props;
  return renderTemplate`<html lang="de"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description" content="Bewerte Veganismus-Argumente nach Verbreitung, Komplexität und Trigger.">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/josia/vegan-quartett-rating/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
