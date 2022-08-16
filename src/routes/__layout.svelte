<script context="module" lang="ts">
  import { browser } from "$app/env";
  import { initialiseFirebase } from "$lib/firebase";
  import type { Load } from "@sveltejs/kit";
  import { protectedPages } from "../data/protectedPages";
  import { nonLoggedInPages } from "../data/nonLoggedInPages";

  export const load: Load = async function load({ session, url }) {
    // If not logged in, return to homepage
    const account = getCookie("account");
    if (!account && protectedPages.has(url.pathname)) {
      return { redirect: "/login", status: 302 };
    } else if (account && nonLoggedInPages.has(url.pathname)) {
      return { redirect: "/upload", status: 302 };
    }
    if (browser) {
      try {
        initialiseFirebase();
      } catch (ex) {
        console.error(ex);
      }
    }

    return {};
  };
</script>

<script lang="ts">
  import Header from "../components/Header/Header.svelte";
  import "../styles/app.css";
  import { getCookie } from "$lib/cookie";
</script>

<main class="max-w-screen-lg p-8 mx-auto">
  <Header />
  <slot />
</main>
