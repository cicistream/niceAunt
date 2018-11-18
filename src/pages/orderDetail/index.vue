<template>
  <div class="container" style="background-color:#f8f8f9">
    <div class="orderDetail">
      <view class="orderTitle">
        <p class="boldFont" style="font-size: 16px;">{{order.type}}</p>
        <p>
          <span class="orange" style="font-size: 14px;">{{order.salary}} 元/月</span>
          <span style="color: #bbbec4">(实际收入以签约价格为准)</span>
        </p>
        <p>
          发布时间：
          <span>
            <i-icon type="time" style="margin-right:10rpx;"></i-icon>
            {{order.time}}
          </span>
        </p>
      </view>
      <view class="infoBlock">
        <p class="orderTag">
          <span class="tag-name">雇主姓名</span>
          {{order.name}}
        </p>
        <p class="orderTag">
          <span class="tag-name">雇主电话</span>
          {{order.phoneNum}}
        </p>
        <p class="orderTag">
          <span class="tag-name">订单技能要求</span>
          <i-tag 
            v-for="(tag, index) in order.ability"
            :key="index"
            style="margin-right:10rpx"
            class="i-tags"
            >
            {{tag}}
          </i-tag>
        </p>
        <p class="orderTag">
          <span class="tag-name">订单年龄要求</span>
          <i-tag 
            v-for="(tags, num) in order.ageRange"
            :key="num"
            style="margin-right:10rpx"
            class="i-tags"
            >
            {{tags}}
          </i-tag>
        </p>
        <p class="orderTag">
          <span class="tag-name">订单户籍要求</span>
          <i-tag 
            v-for="(tags, count) in order.birthplace"
            :key="count"
            style="margin-right:10rpx"
            class="i-tags"
            >
            {{tags}}
          </i-tag>
        </p>
        <p class="orderTag">
          <span class="tag-name">订单经验要求</span>
          <i-tag 
            v-for="(tags, id) in order.seniority"
            :key="id"
            style="margin-right:10rpx"
            class="i-tags"
            >
            {{tags}}
          </i-tag>
        </p>
        <p class="orderTag">
          <span class="tag-name">每周休息天数</span>
          {{order.restDay}}
        </p>
        <p class="orderTag">
          <span class="tag-name">是否住家</span>
          {{order.isLiveHome ? '住家' : '不住家'}}
        </p>
        <p class="orderTag">
          <span class="tag-name">详细内容</span>
          {{order.detail}}
        </p>
      </view>
       <view class="detailBlock">
        <p class="detail-title"><i-icon type="message" />  地图</p>
        <view>
          <view class="moreInfoBlock">
          </view>
        </view>
      </view>
    </div>
  </div>
</template>

<script>
import Fly from "flyio/dist/npm/wx";
import global from "../../utils/common.js";
import "../../main.css";

export default {
  data() {
    return {
      order: {
        ability: "老人生活照料,老人医疗护理,老人康复保健",
        ageRange: "40-45岁,45-50岁",
        birthplace: "江苏,浙江,上海",
        detail: "发的撒打 ",
        id: 10,
        isActive: true,
        isLiveHome: false,
        name: "测试2",
        phoneNum: "15777787774",
        restDay: "单休",
        salary: 8000,
        seniority: "6-8年,8年以上",
        time: "2018-11-10",
        type: "养老护理",
        workCity: "上海",
        workLocDetail: "第三方撒范德萨第三方"
      }
    };
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getOrderInfo() {
      //  通过订单ID查询数据，命名为order
      this.order.ability = this.order.ability.split(",");
      console.log(this.order.ability);
      this.order.ageRange = this.order.ageRange.split(",");
      this.order.birthplace = this.order.birthplace.split(",");
      this.order.seniority = this.order.seniority.split(",");
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },
  onLoad: function(options) {
    console.log(options.orderId);
    // console.log(this.$root.$mp.appOption);
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getOrderInfo();
    this.location = wx.getLocation({
      type: "wgs84",
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        const speed = res.speed;
        const accuracy = res.accuracy;
      }
    });
  }
};
</script>

<style>
.orderTitle {
  line-height: 80rpx;
  padding: 10rpx 40rpx;
  background-color: #fff;
}
.orderTag {
  line-height: 60rpx;
  color: #1c2438;
}
.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: #2d8cf0;
  border: 1px solid 2d8cf0;
}
.slide-image {
  width: 100%;
  height: 100%;
}
.noticeBar.i-noticebar {
  font-size: 12px;
}
.auntResult {
  padding: 10rpx;
}
.auntItem {
  position: relative;
}
.auntResult .auntItem {
  padding: 10rpx;
  height: 200rpx;
  margin-bottom: 10rpx;
  border-bottom: 1px solid #f8f8f8;
  display: block;
  overflow: hidden;
}
.auntItem .aunt-avatar {
  height: 180rpx;
  overflow: hidden;
}
.auntBtn {
  position: absolute;
  top: 10rpx;
  right: 20rpx;
}
.auntBtn ._button {
  font-size: 12px !important;
  height: 30px;
  line-height: 30px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #2d8cf0;
  background-color: #fff !important;
  touch-action: manipulation;
}
.auntBtn .button-hover {
  box-shadow: inset 0 0 0 1px #2d8cf0;
}
.auntKind {
  text-align: left;
  padding: 30rpx 0;
  background: #f8f8f9;
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  z-index: 2;
  overflow: hidden;
}
.auntKind .tag {
  padding: 4px 20px;
}
.auntKind .active-tag {
  color: #fff;
  background: #2d8cf0;
  border-color: #2d8cf0;
}
.flex-wrp .item-col {
  line-height: 60rpx;
}
.modal-btn {
  position: flex;
}
.showSelect {
  display: none;
}
</style>
