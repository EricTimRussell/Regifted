<template>
  <div class="col-md-3 card m-3 card">
    <div class="card-header card-head"></div>
    <img class="rounded img-fluid pt-3 px-3 img" :src="gift.url" alt="gift">
    <div class="card-body d-flex justify-content-between mt-3">
      <p>{{gift.tag}}</p>
      <button class="btn btn-success" @click="openGift(id)">Open</button>
    </div>
  </div>

</template>



<script>

import { Gift } from "../models/Gift";
import { giftsService } from "../services/GiftsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {
      async openGift(id) {
        try {
          await giftsService.openGift(props.gift.id)
        } catch (error) {
          logger.error('opening Gift', error)
          Pop.error(error)
        }
      }
    }

  }



}



</script>

<style lang="scss">
.card {
  min-height: 25rem;
  max-height: 25rem;
  background-color: rgba(255, 0, 0, 0.623);
  color: rgb(30, 255, 0);
}

.img {
  min-height: 19rem;
  max-height: 19rem;
  object-position: center;
}

.card-head {
  background-color: rgb(124, 31, 31);
  min-width: 20rem;
  margin-right: 0%;
}
</style>