<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img class="img-fluid" src="../assets/profilePhoto.png" alt="" />
        </div>
        <div class="col-9">
          <div class="username">DATA_WEI</div>
          <div class="fans">fellow: 123</div>
          <button type="button" id="follow" class="btn btn-success btn-small">
            +follow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileInfo",
};
</script>

<style>
img {
  border-radius: 25%;
}

#follow {
  padding: 2px 4px;
  font-size: 14px;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;
  color: grey;
}
</style>