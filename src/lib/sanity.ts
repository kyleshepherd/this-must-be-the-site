import type { SanityClient } from "@sanity/client";
import sanityClient from "@sanity/client";
import { PUBLIC_SANITY_DATASET } from "$env/static/public";

let client: SanityClient;

export type EntryReturn = {
  date: string;
  pictures: {
    imageUrl: string;
    time: string;
    caption?: string;
    location: string;
    locationUrl?: string;
  }[];
};

export const setClient = () => {
  client = sanityClient({
    projectId: "3w8ykysz",
    dataset: PUBLIC_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: false,
  });
};

export const getEntries = async () => {
  if (!client) {
    setClient();
  }

  return await client.fetch(`*[_type == "entry"] | order(date desc){
		date,
		pictures[] | order(time asc) {
			"imageUrl": image.asset->url,
			caption,
			location,
			locationUrl,
      time,
		}
	}`);
};
