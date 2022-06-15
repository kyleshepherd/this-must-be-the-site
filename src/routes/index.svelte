<script>
  import Year from "../components/Year/Year.svelte";
  import Header from "../components/Header/Header.svelte";
  import Month from "../components/Month/Month.svelte";
  import LineDivider from "../components/LineDivider/LineDivider.svelte";
</script>

<Header />
<LineDivider />
<Year year={2022} />
<Month month="June" />
