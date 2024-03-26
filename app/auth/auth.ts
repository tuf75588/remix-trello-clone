import { type DataFunctionArgs, createCookie, redirect } from '@remix-run/node';

let secret = process.env.COOKIE_SECRET || "default";
if (secret === "default") {
  console.warn(
    "🚨 No COOKIE_SECRET environment variable set, using default. The app is insecure in production.",
  );
  secret = "default-secret";
}

let cookie = createCookie('auth', {
  secrets: ['default'],
  maxAge: 30 * 24 * 60 * 60,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
});

export async function getAuthFromRequest(
  request: Request
): Promise<string | null> {
  let userId = await cookie.parse(request.headers.get('Cookie'));
  return userId ?? null;
}
