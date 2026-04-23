import { SESSION_COOKIE_NAME } from "./constants";

export function getOrCreateSessionId(cookies: AstroCookies): string {
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
    maxAge: 60 * 60 * 24 * 365,
  });

  return sessionId;
}