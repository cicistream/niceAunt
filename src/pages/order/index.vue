<template>
  <div class="container">
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay">
        <swiper-item v-for="(item, index) in imgUrls" :key="index">
          <image :src="item" class="slide-image" mode="scaleToFill"/>
        </swiper-item>
    </swiper>
    <i-notice-bar icon="systemprompt" i-class="noticeBar">
      2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>
    <div class="auntList">
      <view class="searchAunt">
        <view>
            <view style="width: 24%" class="searchItem" @click="searchChange(0)">
              订单类型
              <i-icon color="#2d8cf0" :type="showList[0] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view style="width: 24%" class="searchItem" @click="searchChange(1)">
              工资区间
              <i-icon color="#2d8cf0" :type="showList[1] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view style="width: 24%" class="searchItem" @click="searchChange(2)">
              服务城市
              <i-icon color="#2d8cf0" :type="showList[2] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view style="width: 24%" class="searchItem" @click="searchChange(3)">
              排序
              <i-icon type="more"></i-icon>
            </view>
        </view>
        <view class="auntKind"
        :class="{ showSelect: showModal }">
            <span
                class="tag active-tag"
                style="margin-right:5px;">
                全部
            </span>
            <span
                class="tag"
                v-for="(tag, num) in selectList"
                :key="num"
                style="margin-right:5px;">
                {{tag}}
            </span>
        </view>
      </view>
      <view class="auntResult">
          <div class="auntItem" v-for="(item, index) in auntList" :key="index" @click="toDetail">
            <i-row class="row">
              <i-col span="18" i-class="col-class" offset="1">
                <view class="flex-wrp" style="flex-direction:column;">
                  <view style="line-height:60rpx;">
                    <span style="font-size:14px;font-weight: bold;">
                      {{item.position}}
                    </span>
                    <span 
                        style="margin-left:20rpx;color:#f90;"
                        >
                        {{item.home ? '住家' : '不住家'}}
                    </span>
                    <p style="display:inline-block;position:absolute;right:20rpx;">
                      ￥<span style="color:#f90">
                        {{item.price}}
                      </span>元 / 月
                    </p>
                  </view>
                  <view style="line-height:60rpx">
                    需求技能：
                    <i-tag 
                        class="i-tags"
                        v-for="(tag, num) in item.tags" 
                        :key="num"
                        color="blue"
                        type="border"
                        style="margin-right:5px;">
                        {{tag}}
                    </i-tag>
                  </view>
                  <view style="line-height:60rpx">
                    服务地址：
                    <span style="margin-right:10rpx;">
                      <i-icon type="coordinates"></i-icon>
                      {{item.address}}
                    </span>
                  </view>
                  <view style="line-height:60rpx">
                    发布时间：
                    <span style="margin-right:10rpx;">
                      <i-icon type="time"></i-icon>
                      {{item.date}}
                    </span>
                  </view>
                </view>
              </i-col>
              <view class="auntBtn">
                <button @click="handleClick" type="ghost">联系老师</button>
                <button @click="handleClick" type="ghost">一键应聘</button>
              </view>
            </i-row>
          </div>
      </view>
    </div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <a href="/pages/mime/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from "@/components/card";
import Fly from "flyio/dist/npm/wx";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      showModal: true,
      imgUrls: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      location: "",
      auntKind: {
        1: "月嫂",
        2: "育儿嫂",
        3: "钟点工"
      },
      showList: [
        {
          kind: "auntKind"
        }
      ],
      auntList: [
        {
          position: "育儿嫂",
          home: true,
          tags: ["洗衣服", "打扫卫生", "做饭"],
          date: "2018-11-11",
          price: 7000,
          address: "杭州市西湖区融创河滨之城"
        },
        {
          position: "育儿嫂",
          home: true,
          tags: ["洗衣服", "打扫卫生", "做饭"],
          date: "2018-11-11",
          price: 7000,
          address: "杭州市西湖区融创河滨之城"
        },
        {
          position: "育儿嫂",
          home: true,
          tags: ["洗衣服", "打扫卫生", "做饭"],
          date: "2018-11-11",
          price: 7000,
          address: "杭州市西湖区融创河滨之城"
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
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
    },
    searchChange(val) {
      this.showModal = !this.showModal;
      this.showList[val] = !this.showList[val];
      switch (val) {
        case 0:
          this.selectList = this.auntKind;
          break;
        case 1:
          this.selectList = this.auntKind;
          break;
        case 2:
          this.selectList = this.auntKind;
          break;
        default:
          break;
      }
    },
    toDetail() {}
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

<style scoped>
* {
  font-size: 12px !important;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
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
.searchAunt /deep/ .searchItem {
  line-height: 70rpx;
  text-align: center;
  display: inline-block;
}
.auntResult {
  padding: 10rpx;
}
.auntItem {
  position: relative;
}
.auntResult /deep/ .auntItem {
  padding: 10rpx;
  height: 250rpx;
  margin-bottom: 10rpx;
  border-bottom: 1px solid #f8f8f8;
  display: block;
  overflow: hidden;
}
.auntItem /deep/ .aunt-avatar {
  height: 180rpx;
  overflow: hidden;
}
.auntBtn {
  position: absolute;
  bottom: 10rpx;
  right: 20rpx;
}
.auntBtn /deep/ ._button {
  float: left;
  font-size: 12px !important;
  height: 30px;
  line-height: 30px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #2d8cf0;
  background-color: #fff !important;
  touch-action: manipulation;
  margin-left: 10px;
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
.tag {
  height: 18px;
  line-height: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  background: #fff;
  font-size: 12px;
  vertical-align: middle;
  border: 1rpx solid #dddee1;
  color: #495060;
  background: #fff;
  border-color: #ccc;
}
.auntKind .tag {
  padding: 4px 20px;
}
.auntKind .active-tag {
  color: #fff;
  background: #2d8cf0;
  border-color: #2d8cf0;
}
.modal-btn {
  position: flex;
}
.showSelect {
  display: none;
}
</style>
