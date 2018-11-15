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
              订单类型
              <i-icon color="#2d8cf0" :type="showList[0] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view class="searchItem" @click="searchChange(1)">
              工资区间
              <i-icon color="#2d8cf0" :type="showList[1] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view class="searchItem" @click="searchChange(2)">
              服务城市
              <i-icon color="#2d8cf0" :type="showList[2] ? 'unfold' : 'packup'"></i-icon>
            </view>
            <span style="color:#2d8cf0">|</span>
            <view class="searchItem" @click="searchChange(3)">
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
                  <view class="">
                    <span class="boldFont">
                      育儿嫂
                    </span>
                    <span 
                        style="margin-left:20rpx;"
                        class="orange"
                        >
                        {{item.home ? '住家' : '不住家'}}
                    </span>
                    <p class="price">
                      ￥<span class="orange">
                        {{item.workHistorys.salary}}
                      </span>元 / 月
                    </p>
                  </view>
                  <view class="item-col">
                    需求技能：
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
                  <p class="textEllipsis">
                  服务地址：
                      <i-icon type="coordinates" style="margin-right:10rpx;"></i-icon>
                      {{item.address}}
                  </p>
                  <view class="item-col">
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
  </div>
</template>

<script>
import card from "@/components/card";
import Fly from "flyio/dist/npm/wx";
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
          status: 2,
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
    formateAge(str) {
      var r = String(str).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
      if (r == null) return false;
      var d = new Date(r[1], r[3] - 1, r[4]);
      if (
        d.getFullYear() == r[1] &&
        d.getMonth() + 1 == r[3] &&
        d.getDate() == r[4]
      ) {
        var Y = new Date().getFullYear();
        return Y - r[1];
      }
      return "输入的日期格式错误！";
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
        if (item.userType === 2) {
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
  height: 250rpx;
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
  bottom: 10rpx;
  right: 20rpx;
}
.auntBtn ._button {
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
