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
            <view class="searchItem" @click="searchChange(0)">
              阿姨类型
              <i-icon class="blue" :type="showList[0] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span class="blue">|</span>
            <view class="searchItem" @click="searchChange(1)">
              年龄区间
              <i-icon class="blue" :type="showList[1] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span class="blue">|</span>
            <view class="searchItem" @click="searchChange(2)">
              工作经验
              <i-icon class="blue" :type="showList[2] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span class="blue">|</span>
            <view class="searchItem" @click="searchChange(3)">
              更多筛选
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
          <div class="auntItem" v-for="(item, index) in auntList" :key="index" @click="toDetail(item.id)">
            <i-row class="row">
              <i-col span="5" i-class="aunt-avatar">
                <image class="avatar-image" :src="item.careerPicPath"/>
              </i-col>
              <i-col span="18" i-class="col-class" offset="1">
                <view class="flex-wrp" style="flex-direction:column;">
                  <view class="item-col">
                    <span>
                    {{item.name}}阿姨
                    </span>
                    <i-tag 
                        style="margin-left:20rpx"
                        class="i-tags"
                        color="yellow">
                        {{item.wantJob.type}}
                    </i-tag>
                  </view>
                  <view class="item-col">
                    <span class="mini-tag">
                      {{item.age}}岁
                    </span>
                    <span class="mini-tag">
                      {{item.education}}
                    </span>
                    <span class="mini-tag">
                      {{item.birthplace}}人
                    </span>
                    <span>
                      {{item.workHistorys.length}}年
                    </span>
                    <!-- <i-rate 
                        style="font-size:12px;margin: 0 10rpx;"
                        disabled=true
                        :value="item.rate">
                        {{item.rate}}星
                    </i-rate> -->
                    <p class="price">
                      ￥<span class="orange">
                        {{item.wantJob.salary}}
                      </span>元 / 月
                    </p>
                  </view>
                  <view class="item-col">
                    <i-tag 
                        class="i-tags"
                        v-for="(tag, num) in item.ability" 
                        :key="num"
                        color="blue"
                        type="border"
                        style="margin-right:5px;">
                        {{tag}}
                    </i-tag>
                  </view>
                </view>
              </i-col>
              <view class="auntBtn">
                <button @click="handleClick" type="ghost">联系阿姨</button>
              </view>
            </i-row>
          </div>
      </view>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import Fly from "flyio/dist/npm/wx";
import global from "../../utils/common.js";
import "../../main.css";

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
          name: "杨勃测试小程序开发公司测试测试测",
          nationality: "汉族",
          openId: "oIkrE5Ns_7-ovAOiXVdy61_2yqV8",
          birthday: "1973-06-01",
          businessLicPath: "../../image/aunt.png",
          authStatus: 2,
          careerPicPath: "../../image/home.png",
          certificates: [{}],
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
          wantJob: { id: 9, isLiveHome: true, salary: 2000, type: "育儿嫂" },
          workHistorys: [{}, {}],
          address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
        },
        {
          name: "杨勃测试小程序开发公司测试测试测",
          nationality: "汉族",
          openId: "oIkrE5Ns_7-ovAOiXVdy61_2yqV8",
          birthday: "1973-06-01",
          businessLicPath: "../../image/aunt.png",
          authStatus: 2,
          careerPicPath: "../../image/home.png",
          certificates: [{}],
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
          wantJob: { id: 9, isLiveHome: true, salary: 2000, type: "育儿嫂" },
          workHistorys: [],
          address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
        },
        {
          name: "杨勃测试小程序开发公司测试测试测",
          nationality: "汉族",
          openId: "oIkrE5Ns_7-ovAOiXVdy61_2yqV8",
          birthday: "1973-06-01",
          businessLicPath: "../../image/aunt.png",
          authStatus: 2,
          careerPicPath: "../../image/home.png",
          certificates: [{}],
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
          workHistorys: [],
          address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
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
    getAuntList() {
      // 获取数据.
      this.initAuntList(this.auntList);
    },
    initAuntList(data) {
      // this.auntList = [];
      data.forEach(item => {
        item.ability = item.ability.split(",");
        item.name = item.name.slice(0, 1);
        item.age = global.initAge(item.birthday);
        if (item.userType === 1) {
          this.auntList.push(item);
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    searchChange(val) {
      this.showModal = !this.showModal;
      this.showList[val] = !this.showList[val];
      this.selectList = this.auntKind;
    },
    toDetail(aunt) {
      console.log(aunt);
      const url = `../auntDetail/main?aunt=${aunt}`;
      wx.navigateTo({ url });
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getAuntList();
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
