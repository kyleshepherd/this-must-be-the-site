<script lang="ts">
  import { getAuth, signOut } from "firebase/auth";
  import { account } from "../../store/account";

  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
</script>

<div class="flex justify-between">
  {#if $account}
    <button on:click={logOut}>
      <span class="material-symbols-outlined">logout</span>
    </button>
  {:else}
    <a href="/login">
      <span class="material-symbols-outlined">login</span>
    </a>
  {/if}
  <h1 class="text-5xl text-center">
    <a href="/">This Must Be The Site</a>
  </h1>
  <a href="/upload">
    <span class="material-symbols-outlined">add</span>
  </a>
</div>
