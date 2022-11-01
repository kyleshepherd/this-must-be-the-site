<script lang="ts">
  import { getOrdinalNum } from "$lib/dateOrdinal";

  export let day: string;
</script>

<h3 class="text-center text-xl">{getOrdinalNum(new Date(day).getDate())}</h3>
