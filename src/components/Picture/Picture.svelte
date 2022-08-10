<script lang="ts">
  import type { PictureData } from "src/data/pictures";

  export let picture: PictureData;
</script>

<div class="text-center">
  <img
    class="w-full rounded-3xl shadow-lg shadow-black/15"
    src="/img/{picture.picture}"
    alt=""
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
