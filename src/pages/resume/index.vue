<template>
  <div class="container resume" style="background: #f8f8f9;min-height:100vh;font-size: 12px;">
    <view class="mine-block">
      <p>基础信息</p>
      <i-input :value="mine.name" title="姓名" autofocus placeholder="名字" />
      <i-input :value="mine.age" type="number" title="年龄" placeholder="岁数" />
      <i-input :value="mine.phone" type="number" title="联系电话" placeholder="请输入手机号" />
      <!-- <i-input value="{{ value3 }}" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
      <i-input value="{{ value4 }}" title="用户信息" disabled /> -->
    </view>
  </div>
</template>

<script>
// Use Vuex
export default {
  data() {
    return {
      mine: {
        name: "",
        age: "",
        phone: ""
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style>
.mine-avatar {
  line-height: 120rpx;
  height: 120rpx;
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
.resume .mine-block {
  margin: 20rpx 0;
  background: #fff;
  line-height: 40rpx;
}
.resume ._i-input {
  font-size: 12px;
}
.resume .mine-block p {
  padding: 30rpx;
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
