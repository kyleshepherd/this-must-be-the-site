<script lang="ts">
  export let picture: string;
  export let location: string;
  export let time: string;
  export let caption: string = "";
</script>

<style lang="scss">
  .picture {
    max-width: 350px;
    margin: 0.25rem auto;
    text-align: center;
    @include breakpoint(md) {
      max-width: 500px;
    }
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
      margin: 0 0 0.5rem;
    }
  }
</style>

<div class="picture">
  <div class="picture--details">
    <p class="picture--loctime">
      {location} - {time}
    </p>
    {#if caption}
      <p class="picture--caption">
        {caption}
      </p>
    {/if}
  </div>
  <img class="picture--img" src="/img/{picture}" alt="" />
</div>
