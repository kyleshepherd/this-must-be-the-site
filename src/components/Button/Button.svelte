<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let submit: boolean = false;
  export let label: string;

  const dispatch = createEventDispatcher();

  function onClick(event: Event) {
    dispatch("click", event);
  }
</script>

<button
  class="p-2 border border-white rounded transition-colors hover:bg-white hover:text-green"
  on:click={onClick}
  type={submit ? "submit" : "button"}
>
  {label}
</button>
