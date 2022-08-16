<script lang="ts">
  import Year from "../components/Year/Year.svelte";
  import Month from "../components/Month/Month.svelte";
  import LineDivider from "../components/LineDivider/LineDivider.svelte";
  import Day from "../components/Day/Day.svelte";
  import { years } from "../data/pictures";
  import { Month as MonthEnum } from "../data/pictures";
  import PictureSlider from "../components/PictureSlider/PictureSlider.svelte";

  // let currentMonth: MonthEnum;
  // const date = new Date();
  // const month = date.toLocaleString("default", { month: "long" });
  // currentMonth = MonthEnum[month as keyof typeof MonthEnum];
  // console.log(currentMonth);
</script>

<div>
  {#each years as year}
    <div>
      <LineDivider />
      <Year year={year.year} />
      <LineDivider />
      {#each year.months as month}
        <div>
          <Month month={month.month.toString()} />
          {#each month.days as day}
            <LineDivider small />
            <Day day={day.day} />
            <PictureSlider pictures={day.pictures} />
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>
