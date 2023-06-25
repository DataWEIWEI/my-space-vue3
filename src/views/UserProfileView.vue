<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserProfileInfo from "@/components/UserProfileInfo.vue";
import UserProfilePosts from "@/components/UserProfilePosts.vue";
import UserProfileWrite from "@/components/UserProfileWrite.vue";
import { reactive } from "vue";

export default {
  name: "UserProfileView",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const user = reactive({
      id: 1,
      username: "weiwei",
      lastname: "Wei",
      firstname: "Wei",
      followerCount: 0,
      is_followed: false, // false by default. 用户是否已经点击了关注的按钮
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1, // id must be unique. 每个post都应该有一个唯一的id. 这个id是post的唯一标识符. 可以自由选择. 一般来说这个id应该是数字. 如果不能整除，则会给出错误消息。 如果这个post被点击了，则count应该改为1. 如果这个post被怪异的一个用户点击了，则count应该改为-1. 如果
          userId: 1,
          content: "今天上来了web课，真开心！",
        },

        {
          id: 2, // id must be unique. 每个post都应该有一个唯一的id. 这个id是post的唯一标识符. 可以自由选择. 一般来说这个id应该是数字. 如果不能整除，则会给出错误消息。 如果这个post被点击了，则count应该改为1. 如果这个post被怪异的一个用户点击了，则count应该改为-1. 如果
          userId: 1,
          content: "今天上来了web课，真开心！",
        },

        {
          id: 3, // id must be unique. 每个post都应该有一个唯一的id. 这个id是post的唯一标识符. 可以自由选择. 一般来说这个id应该是数字. 如果不能整除，则会给出错误消息。 如果这个post被点击了，则count应该改为1. 如果这个post被怪异的一个用户点击了，则count应该改为-1. 如果
          userId: 1,
          content: "今天上来了web课，真开心！",
        },
      ],
    });

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

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>

<style scoped></style>
