<template>
  <div class="card">
    <div class="card-body">
      <div v-for="post in posts.posts" :key="post.id">
        <div class="card single-post">
          <div class="card-body">
            {{ post.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfilePosts",
  props: {
    posts: {
      type: Object,
      required: true, // Props are declared here as objects. Props must always be declared before they are used.
    }
  }
};
</script>

<style>
.single-post {
  margin-top: 10px;
}
</style>