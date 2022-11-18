<script lang="ts">
  import Header from "../components/Header/Header.svelte";
  import "../styles/app.css";
</script>

<main class="max-w-screen-lg p-8 mx-auto">
  <Header />
  <slot />
</main>
