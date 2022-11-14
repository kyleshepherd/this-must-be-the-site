<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async function load() {
    if (typeof window !== "undefined" && get(account) === null) {
      return {
        status: 302,
        redirect: "/login",
      };
    }
    return {};
  };
</script>

<script lang="ts">
  import { account } from "../../store/account";
  import { get } from "svelte/store";
  import Upload from "../../components/_pages/Upload/Upload.svelte";
</script>

<Upload />
