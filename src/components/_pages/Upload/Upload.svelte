<script lang="ts">
  import InputField from "../../InputField/InputField.svelte";
  import type { PictureUploadData } from "src/data/pictures";
  import PictureForm from "../../PictureForm/PictureForm.svelte";
  import Button from "../../Button/Button.svelte";
  import { addDate } from "$lib/firebase";
  import Loader from "../../Loader/Loader.svelte";
  import { goto } from "$app/navigation";

  let loading: boolean = false;
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

  const upload = async () => {
    loading = true;
    await addDate(date, pictures);
    loading = false;
    goto("/upload/success");
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

<div class="max-w-screen-sm mx-auto mt-8">
  <h2 class="text-3xl text-center">Upload</h2>
  <form on:submit|preventDefault={upload} class="mt-4">
    <InputField
      type="date"
      bind:value={date}
      required
      label="Date"
      disabled={loading}
    />
    {#each pictures as p}
      <div class="my-4">
        <PictureForm
          bind:picture={p}
          on:remove={removePicture}
          canRemove={pictures.length > 1}
          disabled={loading}
        />
      </div>
    {/each}
    <div class="mb-4">
      <Button label="Add Picture" on:click={addPicture} disabled={loading} />
    </div>
    <div>
      <Button label="Upload" submit disabled={loading} />
    </div>
  </form>
</div>
{#if loading}
  <Loader />
{/if}
