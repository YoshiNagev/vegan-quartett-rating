import type { APIRoute } from "astro";
import { saveResponse } from "../../lib/db";
import { getOrCreateSessionId } from "../../lib/session";
import {
  clampSliderValue,
  isValidMetricId,
  isValidResponseType,
  toSafeNumber,
  toSafeString,
} from "../../lib/validation";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
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

  const sliderValue =
    responseTypeRaw === "rated"
      ? clampSliderValue(formData.get("sliderValue"))
      : null;

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
    sessionId,
  });

  return redirect("/rate");
};