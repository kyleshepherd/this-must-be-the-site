<script>
  import Year from "../components/Year/Year.svelte";
  import Header from "../components/Header/Header.svelte";
  import Month from "../components/Month/Month.svelte";
  import LineDivider from "../components/LineDivider/LineDivider.svelte";
  import Day from "../components/Day/Day.svelte";
  import Picture from "../components/Picture/Picture.svelte";
</script>

<Header />
<LineDivider />
<Year year={2022} />
<LineDivider />
<Month month="July" />
<LineDivider small />
<Day day="23rd" />
<Picture
  picture="test.jpg"
  location="God's Own Junkyard, Walthamstow"
  time="13:21"
  caption="Couple fitties"
/>
<LineDivider small />
<Day day="21st" />
<Picture
  picture="test.jpg"
  location="God's Own Junkyard, Walthamstow"
  time="13:21"
/>
