<template>
  <div class="col-md-3 mt-3">
    <form @submit.prevent="handleSubmit">
      <div class='input-group'>
        <input name="gif" type="url" class="form-control" required="true" maxlength="250" placeholder="url"
          v-model="editable.url">
        <input name="tag" type="text" class="form-control" required="true" maxlength="50" placeholder="gift message"
          v-model="editable.tag">
        <button type="submit" class="btn btn-dark">Add</button>
      </div>
    </form>
  </div>
</template>






<script>
import { ref } from "vue";
import { giftsService } from "../services/GiftsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {

    const editable = ref({})

    return {
      editable,
      async handleSubmit() {
        try {
          await giftsService.addGift(editable.value)
        } catch (error) {
          logger.error('addgift', error)
          Pop.error(error)
        }
      }
    }
  }
}

</script>