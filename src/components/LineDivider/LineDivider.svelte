<script lang="ts">
  export let small = false;
</script>

<style lang="scss">
  .line-divider {
    height: 2rem;
    border-left: 2px solid $text;

    &--small {
      height: 1rem;
    }
    &--wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>

<div class="line-divider--wrapper">
  <div class="line-divider {small ? 'line-divider--small' : ''}" />
</div>
