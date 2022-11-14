<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async function load() {
    if (typeof window !== "undefined" && get(account) === null) {
      console.log(
        "should redirect because window:",
        window,
        "and account:",
        get(account),
      );
      return {};
      // return {
      //   status: 302,
      //   redirect: "/login",
      // };
    }
    console.log(
      "shouldn't redirect because window:",
      window,
      "and account:",
      get(account),
    );
    return {};
  };
</script>

<script lang="ts">
  import { account } from "../../store/account";
  import { get } from "svelte/store";
  import Upload from "../../components/_pages/Upload/Upload.svelte";
</script>

<Upload />
