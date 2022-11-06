<script lang="ts">
  import type { PictureUploadData } from "src/data/pictures";
  import { createEventDispatcher } from "svelte";
  import InputField from "../InputField/InputField.svelte";

  export let picture: PictureUploadData;
  export let canRemove: boolean = true;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  const removeClick = () => {
    dispatch("remove", picture);
  };
</script>

<div class="relative px-4 py-2 border-2 rounded">
  {#if canRemove}
    <button
      type="button"
      {disabled}
      class="absolute text-lg top-2 right-4"
      on:click={removeClick}>&#10006;</button
    >
  {/if}
  <InputField
    type="image"
    bind:files={picture.picture}
    label="Picture"
    required
    {disabled}
  />
  <InputField
    type="time"
    bind:value={picture.time}
    label="Time"
    required
    {disabled}
  />
  <InputField bind:value={picture.caption} label="Caption" {disabled} />
  <InputField
    bind:value={picture.location}
    label="Location"
    required
    {disabled}
  />
  <InputField
    type="url"
    bind:value={picture.locationLink}
    label="Location URL"
    {disabled}
  />
</div>
