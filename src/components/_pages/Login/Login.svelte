<script lang="ts">
  import { signIn } from "$lib/firebase";

  let email: string;
  let password: string;
</script>

<div class="mt-8">
  <h2 class="text-3xl text-center">Login</h2>
  <form
    class="flex flex-col max-w-xl gap-2 mx-auto mt-4"
    on:submit|preventDefault={() => signIn(email, password)}
  >
    <input
      class="p-2"
      type="email"
      name="email"
      bind:value={email}
      placeholder="Email"
    />
    <input
      class="p-2"
      type="password"
      name="password"
      bind:value={password}
      placeholder="Password"
    />
    <button class="p-2 border border-white" type="submit">Login</button>
  </form>
</div>
