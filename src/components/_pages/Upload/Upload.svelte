<script lang="ts">
  import InputField from "../../InputField/InputField.svelte";
  import type { PictureUploadData } from "src/data/pictures";
  import PictureForm from "../../PictureForm/PictureForm.svelte";
  import Button from "../../Button/Button.svelte";
  import { addDate } from "$lib/firebase";

  let date: string;
  let pictures: PictureUploadData[] = [
    {
      location: "",
      picture: undefined,
      time: "",
      caption: "",
      locationLink: "",
    },
  ];

  const upload = () => {
    addDate(date, pictures);
  };

  const addPicture = () => {
    pictures = [
      ...pictures,
      {
        location: "",
        picture: undefined,
        time: "",
        caption: "",
        locationLink: "",
      },
    ];
  };

  const removePicture = (e: CustomEvent<any>) => {
    if (pictures.length > 1) {
      const index = pictures.indexOf(e.detail);
      if (index > -1) {
        pictures.splice(index, 1);
        pictures = pictures;
      }
    }
  };
</script>

<img src="IMG_6139.HEIC" />
<div class="max-w-screen-sm mx-auto mt-8">
  <h2 class="text-3xl text-center">Upload</h2>
  <form on:submit|preventDefault={upload} class="mt-4">
    <InputField type="date" bind:value={date} required label="Date" />
    {#each pictures as p}
      <div class="my-4">
        <PictureForm
          bind:picture={p}
          on:remove={removePicture}
          canRemove={pictures.length > 1}
        />
      </div>
    {/each}
    <div class="mb-4">
      <Button label="Add Picture" on:click={addPicture} />
    </div>
    <div>
      <Button label="Upload" submit />
    </div>
  </form>
</div>
