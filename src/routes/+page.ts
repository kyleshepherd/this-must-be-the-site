import { sortIntoYears } from "$lib/dateSorting";
import { getEntries } from "$lib/sanity";
import { error } from "@sveltejs/kit";

export const load = async () => {
  let loading = true;
  const entries = await getEntries();

  if (entries) {
    const sortedEntries = sortIntoYears(entries);
    loading = false;
    return {
      entries: sortedEntries,
      loading,
    };
  }
  throw error(500, "internal server error");
};
