<script lang="ts">
  import { signIn } from "$lib/firebase";

  let email: string;
  let password: string;
</script>

<div class="mt-8">
  <h2 class="text-3xl text-center">Login</h2>
  <form on:submit|preventDefault={() => signIn(email, password)}>
    <input type="email" name="email" bind:value={email} placeholder="Email" />
    <input
      type="password"
      name="password"
      bind:value={password}
      placeholder="Password"
    />
    <button type="submit">Login</button>
  </form>
</div>
