<script lang="ts">
  export let value: string = "";
  export let files: FileList | undefined = undefined;
  export let required: boolean = false;
  export let label: string = "";
  export let type: string = "text";
  export let disabled: boolean = false;
</script>

{#if type === "text"}
  <label class="flex flex-col my-2">
    {label}
    <input type="text" bind:value {required} class="input-field" {disabled} />
  </label>
{:else if type === "time"}
  <label class="flex flex-col my-2">
    {label}
    <input type="time" bind:value {required} class="input-field" {disabled} />
  </label>
{:else if type === "image"}
  <label class="flex flex-col my-2">
    {label}
    <input
      type="file"
      accept="image/*"
      bind:files
      {required}
      class="text-white"
      {disabled}
    />
  </label>
{:else if type === "url"}
  <label class="flex flex-col my-2">
    {label}
    <input type="url" bind:value {required} class="input-field" {disabled} />
  </label>
{:else if type === "date"}
  <label class="flex flex-col my-2">
    {label}
    <input type="date" bind:value {required} class="input-field" {disabled} />
  </label>
{/if}
