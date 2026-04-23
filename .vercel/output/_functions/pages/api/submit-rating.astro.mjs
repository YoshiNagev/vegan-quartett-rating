import { s as saveResponse } from '../../chunks/db_CPu0aJoN.mjs';
export { renderers } from '../../renderers.mjs';

const SESSION_COOKIE_NAME = "vq_session";

function getOrCreateSessionId(cookies) {
  const existing = cookies.get(SESSION_COOKIE_NAME)?.value;
  if (existing) {
    return existing;
  }
  const sessionId = crypto.randomUUID();
  cookies.set(SESSION_COOKIE_NAME, sessionId, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 365
  });
  return sessionId;
}

const allowedMetricIds = ["verbreitung", "komplexitaet", "trigger"];
const allowedResponseTypes = ["rated", "unknown", "skipped"];
function clampSliderValue(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return null;
  }
  if (num < 0) {
    return 0;
  }
  if (num > 100) {
    return 100;
  }
  return Math.round(num);
}
function isValidMetricId(value) {
  return typeof value === "string" && allowedMetricIds.includes(value);
}
function isValidResponseType(value) {
  return typeof value === "string" && allowedResponseTypes.includes(value);
}
function toSafeString(value) {
  return typeof value === "string" ? value : "";
}
function toSafeNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const promptId = toSafeString(formData.get("promptId"));
  const argumentId = toSafeNumber(formData.get("argumentId"));
  const metricIdRaw = formData.get("metricId");
  const responseTypeRaw = formData.get("responseType");
  if (!promptId || argumentId <= 0) {
    return new Response("Ungültige Formulardaten.", { status: 400 });
  }
  if (!isValidMetricId(metricIdRaw)) {
    return new Response("Ungültige Kategorie.", { status: 400 });
  }
  if (!isValidResponseType(responseTypeRaw)) {
    return new Response("Ungültiger Antworttyp.", { status: 400 });
  }
  const sliderValue = responseTypeRaw === "rated" ? clampSliderValue(formData.get("sliderValue")) : null;
  if (responseTypeRaw === "rated" && sliderValue === null) {
    return new Response("Ungültiger Sliderwert.", { status: 400 });
  }
  const sessionId = getOrCreateSessionId(cookies);
  await saveResponse({
    promptId,
    argumentId,
    metricId: metricIdRaw,
    sliderValue,
    responseType: responseTypeRaw,
    sessionId
  });
  return redirect("/rate");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
