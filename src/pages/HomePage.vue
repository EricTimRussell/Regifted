<template>
  <section class="container-fluid">
    <div class="row">
      <CreateGift />
    </div>
    <div class="row">
      <GiftCard v-for="g in gifts" :gift="g" />
    </div>
  </section>
</template>


<script>

import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { giftsService } from '../services/GiftsService'
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import GiftCard from "../components/GiftCard.vue";
import CreateGift from "./CreateGift.vue";

export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        logger.error("Get Gifts", error);
        Pop.error(error);
      }
    }
    getGifts();
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
  components: { GiftCard, CreateGift }
}

</script>
















<style scoped lang="scss">

</style>
