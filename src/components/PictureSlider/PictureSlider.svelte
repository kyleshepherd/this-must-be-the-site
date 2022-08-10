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

<div class="max-w-sm my-1 mx-auto md:max-w-lg">
  <Swiper
    slidesPerView={1}
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={10}
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
