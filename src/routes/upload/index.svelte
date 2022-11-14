<script lang="ts">
  import { account } from "../../store/account";
  import Upload from "../../components/_pages/Upload/Upload.svelte";
  import Login from "../../components/_pages/Login/Login.svelte";
</script>

{#if $account}
  <Upload />
{:else}
  <Login />
{/if}
