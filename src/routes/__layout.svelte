<style lang="scss">
  :global {
    @import "../styles/global.scss";
  }

  main {
    position: relative;
    max-width: $lg;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
