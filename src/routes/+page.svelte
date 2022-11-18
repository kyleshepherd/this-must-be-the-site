<script lang="ts">
  import Year from "../components/Year/Year.svelte";
  import Month from "../components/Month/Month.svelte";
  import LineDivider from "../components/LineDivider/LineDivider.svelte";
  import Day from "../components/Day/Day.svelte";
  import PictureSlider from "../components/PictureSlider/PictureSlider.svelte";
  import Loader from "../components/Loader/Loader.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ entries, loading } = data);
</script>

{#if loading}
  <Loader inline />
{:else}
  <div>
    {#if entries}
      {#each entries as year}
        <div>
          <LineDivider />
          <Year year={year.year} />
          <LineDivider />
          {#each year.months as month, i}
            <div>
              {#if i !== 0}
                <LineDivider medium />
              {/if}
              <Month month={month.month.toString()} />
              {#each month.dates as date}
                <LineDivider small />
                <Day day={date.date} />
                <PictureSlider pictures={date.pictures} />
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    {/if}
  </div>
{/if}
