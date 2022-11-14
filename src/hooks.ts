import type { Handle } from "@sveltejs/kit";
import cookie from "cookie";
import { nonLoggedInPages } from "./data/nonLoggedInPages";
import { protectedPages } from "./data/protectedPages";

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const account = cookies["tmbts-account"];
  const response = await resolve(event);

  if (!account && protectedPages.has(event.url.pathname)) {
    console.log(
      "should redirect from upload to login because account:",
      account,
    );
    return response;
    // return new Response("Redirect", {
    //   status: 302,
    //   headers: { Location: "/login" },
    // });
  } else if (account && nonLoggedInPages.has(event.url.pathname)) {
    console.log(
      "should redirect from login to upload because account:",
      account,
    );
    return response;
    // return new Response("Redirect", {
    //   status: 302,
    //   headers: { Location: "/upload" },
    // });
  }
  return response;
};
