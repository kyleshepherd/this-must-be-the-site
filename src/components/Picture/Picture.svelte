<script lang="ts">
  import type { PictureData } from "src/data/pictures";

  export let picture: PictureData;

  $: time = new Date(picture.time);

  $: ratio = typeof window !== "undefined" ? window.devicePixelRatio : 1;
</script>

<div class="text-center">
  <img
    class="w-full rounded-3xl shadow-lg shadow-black/15"
    src={`${picture.imageUrl}?w=600&auto=format&dpr=${ratio}`}
    loading="lazy"
    alt=""
  />
  <div class="mt-2">
    <p class="m-0">
      {#if picture.locationUrl}
        <a
          href={picture.locationUrl}
          target="_blank"
          rel="noreferrer"
          class="underline"
        >
          {picture.location}
        </a>
      {:else}
        {picture.location}
      {/if}
      {#if picture.time}
        - {`${("0" + time.getHours().toLocaleString()).slice(-2)}:${(
          "0" + time.getMinutes().toLocaleString()
        ).slice(-2)}`}
      {/if}
    </p>
    {#if picture.caption}
      <p class="mt-1">
        {picture.caption}
      </p>
    {/if}
  </div>
</div>
