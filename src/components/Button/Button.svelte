<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let submit: boolean = false;
  export let label: string;
  export let disabled: boolean = false;
  export let href: string = "";

  const dispatch = createEventDispatcher();

  function onClick(event: Event) {
    dispatch("click", event);
  }
</script>

{#if !href}
  <button
    class="p-2 border border-white rounded transition-colors hover:bg-white hover:text-green {disabled
      ? 'pointer-events-none'
      : ''}"
    on:click={onClick}
    type={submit ? "submit" : "button"}
    {disabled}
  >
    {label}
  </button>
{:else}
  <a
    {href}
    class="p-2 border border-white rounded transition-colors hover:bg-white hover:text-green {disabled
      ? 'pointer-events-none'
      : ''}"
    {disabled}
  >
    {label}
  </a>
{/if}
