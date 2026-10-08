import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "ced_session";
const MAX_AGE = 60 * 60 * 8;

function digest(value) {
  return createHash("sha256").update(String(value || "")).digest();
}

function safeEqual(a, b) {
  return timingSafeEqual(digest(a), digest(b));
}

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value) throw new Error("SESSION_SECRET is not configured.");
  return value;
}

function sign(payload) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function encodeSession(role) {
  const payload = Buffer.from(
    JSON.stringify({ role, exp: Date.now() + MAX_AGE * 1000 })
  ).toString("base64url");
  return payload + "." + sign(payload);
}

function decodeSession(value) {
  if (!value || !value.includes(".")) return null;
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  if (!safeEqual(signature, expected)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!parsed?.role || !parsed?.exp || parsed.exp < Date.now()) return null;
    if (!["volunteer", "staff", "admin"].includes(parsed.role)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function roleForCode(code) {
  if (process.env.ADMIN_ACCESS_CODE && safeEqual(code, process.env.ADMIN_ACCESS_CODE)) return "admin";
  if (process.env.STAFF_ACCESS_CODE && safeEqual(code, process.env.STAFF_ACCESS_CODE)) return "staff";
  if (process.env.VOLUNTEER_ACCESS_CODE && safeEqual(code, process.env.VOLUNTEER_ACCESS_CODE)) return "volunteer";
  return null;
}

export async function createSession(role) {
  const store = await cookies();
  store.set(COOKIE_NAME, encodeSession(role), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getSession() {
  const store = await cookies();
  return decodeSession(store.get(COOKIE_NAME)?.value);
}

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}
