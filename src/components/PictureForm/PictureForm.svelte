<script lang="ts">
  import type { PictureData } from "src/data/pictures";
  import { createEventDispatcher } from "svelte";
  import InputField from "../InputField/InputField.svelte";

  export let picture: PictureData;
  export let canRemove: boolean = true;

  const dispatch = createEventDispatcher();

  const removeClick = () => {
    dispatch("remove", picture);
  };
</script>

<div class="relative px-4 py-2 border-2 rounded">
  {#if canRemove}
    <button
      type="button"
      class="absolute text-lg top-2 right-4"
      on:click={removeClick}>&#10006;</button
    >
  {/if}
  <InputField
    type="image"
    bind:value={picture.picture}
    label="Picture"
    required
  />
  <InputField type="time" bind:value={picture.time} label="Time" required />
  <InputField bind:value={picture.caption} label="Caption" />
  <InputField bind:value={picture.location} label="Location" required />
  <InputField
    type="url"
    bind:value={picture.locationLink}
    label="Location URL"
  />
</div>
