<script lang="ts">
  import Year from "../../Year/Year.svelte";
  import LineDivider from "../../LineDivider/LineDivider.svelte";
  import Month from "../../Month/Month.svelte";
  import Day from "../../Day/Day.svelte";
  import PictureSlider from "../../PictureSlider/PictureSlider.svelte";
  import type { YearData } from "../../../data/pictures";

  export let yearsData: YearData[];
</script>

<div>
  {#each yearsData as year}
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
</div>
