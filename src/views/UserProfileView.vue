<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
      </div>
      <div class="col-9">
        <UserProfilePosts />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserProfileInfo from "@/components/UserProfileInfo.vue";
import UserProfilePosts from "@/components/UserProfilePosts.vue";
import { reactive } from "vue";

export default {
  name: "UserProfileView",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
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

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true; // true by default. 用户是否已经点击了关注的按钮。发布
      user.followerCount++;
    };

    const unfollow = () => { // user.is_followed is false by default. 用户是否已经点击了关注的
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    }

    return {
      user,
      follow,
      unfollow,
    }
  },
};
</script>

<style scoped></style>
