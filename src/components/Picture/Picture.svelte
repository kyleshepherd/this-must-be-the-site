<script lang="ts">
  import type { PictureData } from "src/data/pictures";

  export let picture: PictureData;

  let loaded = false;
</script>

<div class="text-center">
  {#if !loaded}
    <div
      class="w-full h-img bg-black bg-opacity-20 rounded-3xl shadow-lg shadow-black/15"
    />
  {/if}
  <img
    class="w-full rounded-3xl shadow-lg shadow-black/15"
    src={picture.picture}
    alt=""
    on:load={() => (loaded = true)}
  />
  <div class="mt-2">
    <p class="m-0">
      {#if picture.locationLink}
        <a href={picture.locationLink} target="_blank" class="underline">
          {picture.location}
        </a>
      {:else}
        {picture.location}
      {/if}
      {#if picture.time}
        - {picture.time}
      {/if}
    </p>
    {#if picture.caption}
      <p class="mt-1">
        {picture.caption}
      </p>
    {/if}
  </div>
</div>
