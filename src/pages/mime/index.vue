<template>
  <div class="container" style="background: #f8f8f9;min-height:100vh">
    <view class="mine-avatar">
      <image src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="mine-image" />
      <span class="boldFont name">张三吧</span>
    </view>
    <view class="mine-block">
      <p @click="toResume">
        个人简历
        <i-icon type="enter"  class="auntBtn"/>
      </p>
      <p @click="to">
        应聘记录
        <i-icon type="enter"  class="auntBtn"/>
      </p>
      <p @click="to">
        个人简历
        <i-icon type="enter"  class="auntBtn"/>
      </p>
      <p style="border: 0">
        个人简历
        <i-icon type="enter"  class="auntBtn"/>
      </p>
    </view>
  </div>
</template>

<script>
// Use Vuex
export default {
  computed: {},
  methods: {
    toResume() {
      const url = "../resume/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style>
.mine-avatar {
  line-height: 120rpx;
  height: 140rpx;
  margin: 10rpx 0;
  padding: 10rpx 60rpx;
  background: #fff;
  overflow: hidden;
}
.mine-image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 999px;
  float: left;
}
.mine-avatar .name {
  margin-left: 40rpx;
  line-height: 120rpx;
  float: left;
}
.mine-block {
  margin: 20rpx 0;
  background: #fff;
  line-height: 100rpx;
}
.mine-block p {
  padding: 0 40rpx;
  position: relative;
  border-bottom: 1px solid #e9eaec;
}
.mine-block:last-child {
  border-bottom: 0;
}
.mine-block .auntBtn {
  position: fixed;
  right: 40rpx;
}
</style>
