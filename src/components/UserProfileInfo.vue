<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img class="img-fluid" src="../assets/profilePhoto.png" alt="" />
        </div>
        <div class="col-9">
          <div class="username">{{ fullname }}</div>
          <div class="fans">fellow: {{ user.followerCount }}</div>
          <button @click="follow" v-if="!user.is_followed" type="button" id="follow" class="btn btn-success btn-small">
            +follow
          </button>
          <button @click="unfollow" v-if="user.is_followed" type="button" id="follow" class="btn btn-success btn-small">
            unfollow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "UserProfileInfo",
  props: {
    user: {
      type: Object,
      required: true,
    }
  },

  setup(props, context) {
    const fullname = computed(() => props.user.lastname + ' ' + props.user.firstname);

    const follow = () => {
      context.emit('follow');
    }

    const unfollow = () => {
      context.emit('unfollow');
    }

    return {
      fullname,
      follow,
      unfollow,
    }
  }
  
};
</script>

<style>
img {
  border-radius: 25%;
}

#follow {
  padding: 2px 4px;
  font-size: 12px;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;
  color: grey;
}
</style>