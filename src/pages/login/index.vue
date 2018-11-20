<template>
  <div class="container log">
    <p class="title">请选择你的身份：</p>
    <view class="log-container">
      <view @click="toHome" class="login">
        <image class="avatar-image" src="../../image/aunt-log.svg"/>
        阿姨
      </view>
      <view @click="toHome" class="login">
        <image class="avatar-image" src="../../image/company.svg"/>
        公司
      </view>
    </view>
  </div>
</template>

<script>
// Use Vuex
export default {
  computed: {},
  methods: {
    toHome() {
      const url = "../index/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style>
.log {
  position: absolute;
  font-size: 14px;
  top: 260rpx;
  left: 0;
  right: 0;
}
.log .title {
  font-size: 14px;
  margin-left: 60rpx;
  line-height: 100rpx;
}
.log-container {
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 60rpx;
}
.login {
  width: 300rpx;
  height: 300rpx;
  text-align: center;
}
</style>
