<template>
  <div class="card edit-field">
    <div class="card-body">
      <label for="edit-post" class="form-label">Edit Post</label>
      <textarea
        v-model="content"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <button
        @click="post_a_post"
        type="button"
        class="btn btn-primary button-sm"
      >
        send
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UserProfileWrite",
  setup(props, context) {
    let content = ref("");

    const post_a_post = () => {
      if (!content.value) return;
      context.emit("post_a_post", content.value);
      content.value = ""; // clear the textarea field
    };

    return {
      content,
      post_a_post,
    };
  },
};
</script>

<style>
.edit-field {
  margin-top: 10px;
}

.button-sm {
  margin-top: 10px;
}
</style>