<template>
  <div class="container" style="background-color:#f8f8f9">
    <div class="auntInfo">
      <image class="detail-image" mode="aspectFill" :src="auntDetail.careerPicPath"/>
      <view class="infoBlock">
        <p class="boldFont">
          {{auntDetail.name}} <span v-if="auntDetail.status === 1">阿姨</span>
        </p>
        <p style="height:20rpx;"></p>
        <p class="auntInfoTag">
          <span class="tag-name">年龄</span>
          {{auntDetail.age}}
        </p>
        <p class="auntInfoTag">
          <span class="tag-name">籍贯</span>
          {{auntDetail.birthplace}}
        </p>
        <p class="auntInfoTag">
          <span class="tag-name">民族</span>
          {{auntDetail.nationality}}
        </p>
        <p class="auntInfoTag">
          <span class="tag-name">学历</span>
          {{auntDetail.education}}
        </p>
        <p class="auntInfoTag">
          <span class="tag-name">经验</span>
          {{auntDetail.seniority}}年
        </p>
        <p class="auntInfoTag">
          <span class="tag-name">服务</span>
          {{auntDetail.workHistorys.length}}户
        </p>
        <p class="auntInfoTag" style="width: 400rpx;">
          <span class="tag-name">电话</span>
          {{auntDetail.phoneNum}}
        </p>
      </view>
    </div>
      <view class="blue" style="padding: 0 20rpx;background-color: #fff;line-height:60rpx;">
        <i-icon type="createtask" />  求职意向：
        {{auntDetail.wantJob.isLiveHome ? '住家' : '不住家'}}
        <i-tag 
            style="margin-left:20rpx"
            class="i-tags"
            color="yellow">
            {{auntDetail.wantJob.type}}
        </i-tag>
        <p class="price">
          ￥<span class="orange">
            {{auntDetail.wantJob.salary}}
          </span>元 / 月
        </p>
      </view>
    <div>
      <view class="detailBlock">
        <p class="detail-title"><i-icon type="createtask" />  工作经历</p>
        <view>
          <view v-for="(order, index) in auntDetail.workHistorys" :key="index" class="moreInfoBlock">
            <p class="blue">
              <i-icon type="flag_fill" />  {{order.startTime}} - {{order.endTime}}
              <i-tag 
                  style="margin-left:20rpx"
                  class="i-tags"
                  color="yellow">
                  {{order.workType}}
              </i-tag>
            </p>
            <view style="margin-left:20rpx;">
            {{order.detail}}
            </view>
          </view>
        </view>
      </view>
      <view class="detailBlock">
        <p class="detail-title"><i-icon type="dynamic" />  认证资料</p>
        <view>
          <view class="moreInfoBlock">
            <p class="auntInfoTag" style="width:320rpx">
              <span class="tag-name" style="margin-right: 5px;">身份证照</span>
              <i-icon :type="auntDetail.idCardPath ? 'success_fill': 'delete_fill'" />
            </p>
            <p class="auntInfoTag" style="width:320rpx">
              <span class="tag-name" style="margin-right: 5px;">健康证</span>
              <i-icon :type="auntDetail.healthPicPath ? 'success_fill': 'delete_fill'" />
            </p>
            <p class="auntInfoTag" style="width:320rpx" v-for="(item, index) in auntDetail.certificates" :key="index">
              <span class="tag-name" style="margin-right: 5px;">{{item.type}}</span>
              <i-icon :type="item.picPath ? 'success_fill': 'delete_fill'" />
            </p>
          </view>
        </view>
      </view>
       <view class="detailBlock">
        <p class="detail-title"><i-icon type="message" />  顾客评论</p>
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
      auntDetail: {
        name: "杨勃测试小程序开发公司测试测试测",
        nationality: "汉族",
        openId: "oIkrE5Ns_7-ovAOiXVdy61_2yqV8",
        birthday: "1973-06-01",
        businessLicPath: "../../image/aunt.png",
        authStatus: 2,
        careerPicPath: "../../image/home.png",
        certificates: [
          {
            id: 7,
            picPath: "../../image/aunt-ac.png",
            type: "育婴师证"
          }
        ],
        companyName: "",
        education: "小学",
        birthplace: "江西",
        faith: "无",
        gender: "男",
        healthPicPath: "../../image/order.png",
        idCardPath: "../../image/aunt-ac.png",
        id: 7,
        liveCity: "上海市,上海市,嘉定区",
        mandarin: "标准",
        ability: "洗衣服, 打扫卫生, 做饭",
        marriage: "已婚已育",
        orders: (4)[({}, {}, {}, {})],
        phoneNum: "13022515154",
        seniority: 0,
        status: 1,
        time: "2018-10-19 21:03:56",
        userType: 1,
        wantJob: {
          id: 9,
          isLiveHome: true,
          salary: 2000,
          type: "育儿嫂"
        },
        workHistorys: [
          {
            detail: "照顾孩子",
            endTime: "2015-01",
            id: 25,
            startTime: "2015-01",
            workType: "月嫂"
          },
          {
            detail: "照顾孩子",
            endTime: "2015-01",
            id: 26,
            startTime: "2015-01",
            workType: "月嫂"
          }
        ],
        address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
      }
    };
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    initAuntDetail(data) {
      this.$set(data, "age", global.initAge(data.birthday));
    },
    getAuntInfo() {
      //  通过阿姨ID查询数据，命名为auntDetail
      this.initAuntDetail(this.auntDetail);
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
    console.log(options.aunt);
    // console.log(this.$root.$mp.appOption);
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
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
