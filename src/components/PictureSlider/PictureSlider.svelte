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

<style lang="scss">
  .picture-slider {
    max-width: 350px;
    margin: 0.25rem auto;
    @include breakpoint(md) {
      max-width: 500px;
    }
  }
</style>

<div class="picture-slider">
  <Swiper
    slidesPerView={1}
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={10}
  >
    {#each pictures as picture}
      <SwiperSlide>
        <div class="picture-slider--slide">
          <Picture {picture} />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
