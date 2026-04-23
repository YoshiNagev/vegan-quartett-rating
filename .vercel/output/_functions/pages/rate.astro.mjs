import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CYy9ufCC.mjs';
import { a as argumentsList, m as metrics } from '../chunks/metrics_CwUDe8BT.mjs';
export { renderers } from '../renderers.mjs';

const prompts = argumentsList.flatMap(
  (argument) => metrics.map((metric) => ({
    id: `${argument.id}-${metric.id}`,
    argumentId: argument.id,
    metricId: metric.id
  }))
);

function pickRandomItem(items) {
  if (items.length === 0) {
    throw new Error("pickRandomItem received an empty array.");
  }
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function getRandomHydratedPrompt() {
  const prompt = pickRandomItem(prompts);
  const argument = argumentsList.find((item) => item.id === prompt.argumentId);
  const metric = metrics.find((item) => item.id === prompt.metricId);
  if (!argument) {
    throw new Error(`Argument not found for prompt ${prompt.id}`);
  }
  if (!metric) {
    throw new Error(`Metric not found for prompt ${prompt.id}`);
  }
  return {
    prompt,
    argument,
    metric
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Rate = createComponent(async ($$result, $$props, $$slots) => {
  const { prompt, argument, metric } = getRandomHydratedPrompt();
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const form = document.getElementById("ratingForm");\n  const card = document.getElementById("ratingCard");\n  const responseTypeInput = document.getElementById("responseType");\n  const submitButton = document.getElementById("submitButton");\n\n  let isSubmitting = false;\n\n  async function sendForm(responseType = "rated") {\n    if (!form || !card || !responseTypeInput || isSubmitting) return;\n\n    isSubmitting = true;\n    responseTypeInput.value = responseType;\n\n    if (submitButton) {\n      submitButton.setAttribute("disabled", "disabled");\n      submitButton.textContent = "Wird gesendet...";\n    }\n\n    const formData = new FormData(form);\n\n    try {\n      const response = await fetch("/api/submit-rating", {\n        method: "POST",\n        body: formData,\n      });\n\n      if (!response.ok) {\n        throw new Error("Request failed");\n      }\n\n      if (responseType === "rated") {\n        card.classList.add("swipe-out-left");\n      } else if (responseType === "unknown") {\n        card.classList.add("swipe-out-up");\n      } else {\n        card.classList.add("swipe-out-right");\n      }\n\n      setTimeout(() => {\n        window.location.href = "/rate";\n      }, 320);\n    } catch (error) {\n      console.error(error);\n      isSubmitting = false;\n\n      if (submitButton) {\n        submitButton.removeAttribute("disabled");\n        submitButton.textContent = "Bewertung absenden";\n      }\n\n      alert("Beim Speichern ist ein Fehler aufgetreten.");\n    }\n  }\n\n  form?.addEventListener("submit", async (event) => {\n    event.preventDefault();\n    await sendForm("rated");\n  });\n\n  async function submitSpecial(type) {\n    await sendForm(type);\n  }\n\n  window.submitSpecial = submitSpecial;\n<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bewerten" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <section class="rating-page"> <div class="page-head"> <a class="back-link" href="/">← Zur Startseite</a> <p class="eyebrow">Eine zufällige Einzelbewertung</p> </div> <article class="rating-card animated-card" id="ratingCard"> <div class="rating-meta"> <span class="pill">${argument.categoryGroup}</span> <span class="pill pill-accent">${metric.name}</span> </div> <h1>${metric.name}</h1> <p class="question">${metric.question}</p> <blockquote class="argument-box"> ${argument.text} </blockquote> <form id="ratingForm" class="rating-form"> <input type="hidden" name="promptId"${addAttribute(prompt.id, "value")}> <input type="hidden" name="argumentId"${addAttribute(argument.id, "value")}> <input type="hidden" name="metricId"${addAttribute(metric.id, "value")}> <input type="hidden" name="responseType" id="responseType" value="rated"> <div class="slider-card"> <label for="sliderValue" class="slider-label">Deine Einschätzung</label> <input id="sliderValue" name="sliderValue" type="range" min="0" max="100" value="50" class="slider-input"> <div class="range-labels"> <span>${metric.leftLabel}</span> <span>${metric.rightLabel}</span> </div> </div> <div class="submit-row"> <button type="submit" class="button button-primary" id="submitButton">
Bewertung absenden
</button> </div> <div class="secondary-actions"> <button type="button" onclick="submitSpecial('unknown')">
Kenne ich nicht
</button> <button type="button" onclick="submitSpecial('skipped')">
Überspringen
</button> </div> </form> </article> </section> </main> ` }));
}, "C:/Users/josia/vegan-quartett-rating/src/pages/rate.astro", void 0);

const $$file = "C:/Users/josia/vegan-quartett-rating/src/pages/rate.astro";
const $$url = "/rate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
