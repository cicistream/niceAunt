require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42983f95_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42983f95_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42983f95", Component.options)
  } else {
    hotAPI.reload("data-v-42983f95", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: "Hello World",
      userInfo: {},
      showModal: true,
      imgUrls: ["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],
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
      showList: [{
        show: false,
        list: ["月嫂", "育儿嫂", "钟点工"]
      }, {
        show: false,
        list: ["月嫂", "育儿嫂", "钟点工"]
      }, {
        show: false,
        list: ["月嫂", "育儿嫂", "钟点工"]
      }, {
        show: false,
        list: ["月嫂", "育儿嫂", "钟点工"]
      }],
      auntList: [{
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
        orders: 4[({}, {}, {}, {})],
        phoneNum: "13022515154",
        seniority: 0,
        status: 1,
        time: "2018-10-19 21:03:56",
        userType: 1,
        wantJob: { id: 9, isLiveHome: true, salary: 2000, type: "育儿嫂" },
        workHistorys: [{}, {}],
        address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
      }, {
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
        orders: 4[({}, {}, {}, {})],
        phoneNum: "13022515154",
        seniority: 0,
        status: 1,
        time: "2018-10-19 21:03:56",
        userType: 1,
        wantJob: { id: 9, isLiveHome: true, salary: 2000, type: "育儿嫂" },
        workHistorys: [],
        address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
      }, {
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
        orders: 4[({}, {}, {}, {})],
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
      }]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    getAuntList: function getAuntList() {
      // 获取数据.
      this.initAuntList(this.auntList);
    },
    initAuntList: function initAuntList(data) {
      var _this2 = this;

      // 初始化列表到符合显示的格式
      // this.auntList = [];
      data.forEach(function (item) {
        item.ability = item.ability.split(",");
        item.name = item.name.slice(0, 1);
        item.age = __WEBPACK_IMPORTED_MODULE_2__utils_common_js__["a" /* default */].initAge(item.birthday);
        if (item.userType === 1) {
          _this2.auntList.push(item);
        }
      });
    },
    searchChange: function searchChange(num) {
      if (!this.showModal) {
        this.showList.forEach(function (item, index) {
          item.show = false;
        });
      } else {
        this.showList[num].show = !this.showList[num].show;
      }
      this.selectList = this.showList[num].list; //根据筛选条件填写
      this.showModal = !this.showModal;
    },
    toDetail: function toDetail(aunt) {
      var url = "../auntDetail/main?aunt=" + aunt;
      wx.navigateTo({ url: url });
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getAuntList();
    this.location = wx.getLocation({
      type: "wgs84",
      success: function success(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
      }
    });
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "mode": "scaleToFill"
      }
    })])
  })), _vm._v(" "), _c('i-notice-bar', {
    attrs: {
      "icon": "systemprompt",
      "i-class": "noticeBar",
      "closable": "",
      "loop": "",
      "mpcomid": '1'
    }
  }, [_vm._v("\n    2018年世界杯,将于6月14日至7月15日举行\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "auntList"
  }, [_c('view', {
    staticClass: "searchAunt"
  }, [_c('view', [_c('view', {
    staticClass: "searchItem",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.searchChange(0)
      }
    }
  }, [_vm._v("\n            阿姨类型\n            "), _c('i-icon', {
    staticClass: "blue",
    attrs: {
      "type": _vm.showList[0].show ? 'unfold' : 'packup',
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "blue"
  }, [_vm._v("|")]), _vm._v(" "), _c('view', {
    staticClass: "searchItem",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.searchChange(1)
      }
    }
  }, [_vm._v("\n            年龄区间\n            "), _c('i-icon', {
    staticClass: "blue",
    attrs: {
      "type": _vm.showList[1].show ? 'unfold' : 'packup',
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "blue"
  }, [_vm._v("|")]), _vm._v(" "), _c('view', {
    staticClass: "searchItem",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.searchChange(2)
      }
    }
  }, [_vm._v("\n            工作经验\n            "), _c('i-icon', {
    staticClass: "blue",
    attrs: {
      "type": _vm.showList[2].show ? 'unfold' : 'packup',
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "blue"
  }, [_vm._v("|")]), _vm._v(" "), _c('view', {
    staticClass: "searchItem",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.searchChange(3)
      }
    }
  }, [_vm._v("\n            阿姨籍贯\n            "), _c('i-icon', {
    staticClass: "blue",
    attrs: {
      "type": _vm.showList[3].show ? 'unfold' : 'packup',
      "mpcomid": '5'
    }
  })], 1)]), _vm._v(" "), _c('view', {
    staticClass: "auntKind",
    class: {
      showSelect: _vm.showModal
    }
  }, [_c('span', {
    staticClass: "tag active-tag",
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_vm._v("\n              全部\n          ")]), _vm._v(" "), _vm._l((_vm.selectList), function(tag, num) {
    return _c('span', {
      key: num,
      staticClass: "tag",
      staticStyle: {
        "margin-right": "5px"
      }
    }, [_vm._v("\n              " + _vm._s(tag) + "\n          ")])
  })], 2)]), _vm._v(" "), _c('view', {
    staticClass: "auntResult"
  }, _vm._l((_vm.auntList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "auntItem",
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.id)
        }
      }
    }, [_c('i-row', {
      staticClass: "row",
      attrs: {
        "mpcomid": '10-' + index
      }
    }, [_c('i-col', {
      attrs: {
        "span": "5",
        "i-class": "aunt-avatar",
        "mpcomid": '6-' + index
      }
    }, [_c('image', {
      staticClass: "avatar-image",
      attrs: {
        "src": item.careerPicPath
      }
    })]), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "18",
        "i-class": "col-class",
        "offset": "1",
        "mpcomid": '9-' + index
      }
    }, [_c('view', {
      staticClass: "flex-wrp",
      staticStyle: {
        "flex-direction": "column"
      }
    }, [_c('view', {
      staticClass: "item-col"
    }, [_c('span', [_vm._v("\n                  " + _vm._s(item.name) + "阿姨\n                  ")]), _vm._v(" "), _c('i-tag', {
      staticClass: "i-tags",
      staticStyle: {
        "margin-left": "20rpx"
      },
      attrs: {
        "color": "yellow",
        "mpcomid": '7-' + index
      }
    }, [_vm._v("\n                      " + _vm._s(item.wantJob.type) + "\n                  ")])], 1), _vm._v(" "), _c('view', {
      staticClass: "item-col"
    }, [_c('span', {
      staticClass: "mini-tag"
    }, [_vm._v("\n                    " + _vm._s(item.age) + "岁\n                  ")]), _vm._v(" "), _c('span', {
      staticClass: "mini-tag"
    }, [_vm._v("\n                    " + _vm._s(item.education) + "\n                  ")]), _vm._v(" "), _c('span', {
      staticClass: "mini-tag"
    }, [_vm._v("\n                    " + _vm._s(item.birthplace) + "人\n                  ")]), _vm._v(" "), _c('span', [_vm._v("\n                    " + _vm._s(item.workHistorys.length) + "年\n                  ")]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("\n                    ￥"), _c('span', {
      staticClass: "orange"
    }, [_vm._v("\n                      " + _vm._s(item.wantJob.salary) + "\n                    ")]), _vm._v("元 / 月\n                  ")])], 1), _vm._v(" "), _c('view', {
      staticClass: "item-col"
    }, _vm._l((item.ability), function(tag, num) {
      return _c('i-tag', {
        key: num,
        staticClass: "i-tags",
        staticStyle: {
          "margin-right": "5px"
        },
        attrs: {
          "color": "blue",
          "type": "border",
          "mpcomid": '8-' + index + '-' + num
        }
      }, [_vm._v("\n                      " + _vm._s(tag) + "\n                  ")])
    }))])]), _vm._v(" "), _c('view', {
      staticClass: "auntBtn"
    }, [_c('button', {
      attrs: {
        "type": "ghost",
        "eventid": '4-' + index
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_vm._v("联系阿姨")])], 1)], 1)], 1)
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42983f95", esExports)
  }
}

/***/ })

},[16]);
//# sourceMappingURL=main.js.map