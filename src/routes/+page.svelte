<script lang="ts">
  import Year from "../components/Year/Year.svelte";
  import Month from "../components/Month/Month.svelte";
  import LineDivider from "../components/LineDivider/LineDivider.svelte";
  import Day from "../components/Day/Day.svelte";
  import type { YearData } from "../data/pictures";
  import PictureSlider from "../components/PictureSlider/PictureSlider.svelte";
  import { onMount } from "svelte";
  import { getPictures } from "$lib/firebase";
  import Loader from "../components/Loader/Loader.svelte";

  let years: YearData[];
  let loading: boolean = false;

  onMount(async () => {
    loading = true;
    years = await getPictures();
    loading = false;
  });
</script>

{#if loading}
  <Loader inline />
{:else}
  <div>
    {#if years}
      {#each years as year}
        <div>
          <LineDivider />
          <Year year={year.year} />
          <LineDivider />
          {#each year.months as month}
            <div>
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
