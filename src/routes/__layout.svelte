<script context="module" lang="ts">
  import { browser } from "$app/env";
  import { initialiseFirebase } from "$lib/firebase";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async function load({ session, url }) {
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
</script>

<main class="max-w-screen-lg p-8 mx-auto">
  <Header />
  <slot />
</main>
