<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite v-if="is_me" @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :user="user" :posts="posts" @delete_a_post="delete_a_post" />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserProfileInfo from "@/components/UserProfileInfo.vue";
import UserProfilePosts from "@/components/UserProfilePosts.vue";
import UserProfileWrite from "@/components/UserProfileWrite.vue";
import $ from 'jquery'
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex';
import { computed } from "vue";

export default {
  name: "UserProfileView",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = parseInt(route.params.userId);

    const user = reactive({
    });

    const posts = reactive({
    });

    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/getinfo/',
      type: 'GET',
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': 'Bearer ' + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      }
    });

    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/post/',
      type: 'GET',
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': 'Bearer ' + store.state.user.access,
      },
      success(resp) {
        posts.count = resp.length;
        posts.posts = resp;
      }
    })

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true; // true by default. 用户是否已经点击了关注的按钮。发布
      user.followerCount++;
    };

    const unfollow = () => {
      // user.is_followed is false by default. 用户是否已经点击了关注的
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
    };

    const delete_a_post = (post_id) => {
      posts.posts = posts.posts.filter(post => post.id !== post_id);
      posts.count = posts.posts.lenght;
    }

    const is_me = computed(() => userId === store.state.user.id);

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
      userId,
      is_me,
      delete_a_post,
    };
  },
};
</script>

<style scoped></style>
