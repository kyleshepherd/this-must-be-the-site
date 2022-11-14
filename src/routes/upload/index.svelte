<script lang="ts">
  import { account } from "../../store/account";
  import { get } from "svelte/store";
  import Upload from "../../components/_pages/Upload/Upload.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    if (get(account) === null) {
      goto("/login");
    }
  });
</script>

<Upload />
