<script lang="ts">
  import type { PictureData } from "src/data/pictures";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import Picture from "../Picture/Picture.svelte";
  import { Navigation, Pagination } from "swiper";

  export let pictures: PictureData[];
</script>

<div class="max-w-sm mx-auto my-1 md:max-w-lg">
  <Swiper
    slidesPerView={1}
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true, horizontalClass: "mb-6" }}
    spaceBetween={10}
    autoHeight
  >
    {#each pictures as picture}
      <SwiperSlide>
        <div>
          <Picture {picture} />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
