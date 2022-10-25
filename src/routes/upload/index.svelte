<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { account } from "../../store/account";
  import { get } from "svelte/store";

  export const load: Load = async function load() {
    if (typeof window !== "undefined") {
      if (get(account) === null) {
        goto("/login");
      }
    }
    return {};
  };
</script>

<script lang="ts">
  import Upload from "../../components/_pages/Upload/Upload.svelte";
  import { goto } from "$app/navigation";
</script>

<Upload />
