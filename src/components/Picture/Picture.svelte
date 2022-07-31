<script lang="ts">
  import type { PictureData } from "src/data/pictures";

  export let picture: PictureData;
</script>

<style lang="scss">
  .picture {
    text-align: center;
    &--img {
      width: 100%;
      border-radius: 25px;
      box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.15);
    }
    &--loctime {
      margin: 0;
    }
    &--caption {
      margin: 0.25rem 0 0;
    }
    &--details {
      margin: 0.5rem 0 0;
    }
  }
</style>

<div class="picture">
  <img class="picture--img" src="/img/{picture.picture}" alt="" />
  <div class="picture--details">
    <p class="picture--loctime">
      {#if picture.locationLink}
        <a href={picture.locationLink} target="_blank">
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
      <p class="picture--caption">
        {picture.caption}
      </p>
    {/if}
  </div>
</div>
