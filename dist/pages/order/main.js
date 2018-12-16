require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(35);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_67d7b311_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_67d7b311_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67d7b311", Component.options)
  } else {
    hotAPI.reload("data-v-67d7b311", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);
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
      }, {
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
      }, {
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
      }]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = "../logs/main";
      wx.navigateTo({ url: url });
    },
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

      // this.auntList = [];
      data.forEach(function (item) {
        item.ability = item.ability.split(",").slice(0, 2);
        if (item.userType === 2) {
          _this2.auntList.push(item);
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    searchChange: function searchChange(num) {
      this.showModal = !this.showModal;
      if (this.showModal) {
        this.showList.forEach(function (item, index) {
          item.show = false;
        });
      } else {
        this.showList[num].show = !this.showList[num].show;
      }
      this.selectList = this.showList[num].list; //根据筛选条件填写
    },
    toDetail: function toDetail(orderId) {
      console.log(orderId);
      var url = "../orderDetail/main?orderId=" + orderId;
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

/***/ 38:
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
  }, [_vm._v("\n            订单类型\n            "), _c('i-icon', {
    attrs: {
      "color": "#2d8cf0",
      "type": _vm.showList[0].show ? 'unfold' : 'packup',
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#2d8cf0"
    }
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
  }, [_vm._v("\n            工资区间\n            "), _c('i-icon', {
    attrs: {
      "color": "#2d8cf0",
      "type": _vm.showList[1].show ? 'unfold' : 'packup',
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#2d8cf0"
    }
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
  }, [_vm._v("\n            服务城市\n            "), _c('i-icon', {
    attrs: {
      "color": "#2d8cf0",
      "type": _vm.showList[2].show ? 'unfold' : 'packup',
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#2d8cf0"
    }
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
  }, [_vm._v("\n            时间排序\n            "), _c('i-icon', {
    attrs: {
      "type": "more",
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
        "eventid": '6-' + index
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
        "span": "20",
        "i-class": "col-class",
        "offset": "1",
        "mpcomid": '9-' + index
      }
    }, [_c('view', {
      staticClass: "flex-wrp",
      staticStyle: {
        "flex-direction": "column"
      }
    }, [_c('view', {}, [_c('span', {
      staticClass: "boldFont"
    }, [_vm._v("\n                    育儿嫂\n                  ")]), _vm._v(" "), _c('span', {
      staticClass: "orange",
      staticStyle: {
        "margin-left": "20rpx"
      }
    }, [_vm._v("\n                      " + _vm._s(item.home ? '住家' : '不住家') + "\n                  ")]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("\n                    ￥"), _c('span', {
      staticClass: "orange"
    }, [_vm._v("\n                      " + _vm._s(item.salary) + "\n                    ")]), _vm._v("元 / 月\n                  ")])], 1), _vm._v(" "), _c('view', {
      staticClass: "item-col"
    }, [_vm._v("\n                  需求技能：\n                  "), _vm._l((item.ability), function(tag, num) {
      return _c('i-tag', {
        key: num,
        staticClass: "i-tags",
        staticStyle: {
          "margin-right": "5px"
        },
        attrs: {
          "color": "blue",
          "type": "border",
          "mpcomid": '6-' + index + '-' + num
        }
      }, [_vm._v("\n                      " + _vm._s(tag) + "\n                  ")])
    })], 2), _vm._v(" "), _c('p', {
      staticClass: "textEllipsis"
    }, [_vm._v("\n                服务地址：\n                    "), _c('i-icon', {
      attrs: {
        "type": "coordinates",
        "mpcomid": '7-' + index
      }
    }), _vm._v("\n                    " + _vm._s(item.workCity + item.workLocDetail) + "\n                ")], 1), _vm._v(" "), _c('view', {
      staticClass: "item-col"
    }, [_vm._v("\n                  发布时间：\n                  "), _c('span', {
      staticStyle: {
        "margin-right": "10rpx"
      }
    }, [_c('i-icon', {
      attrs: {
        "type": "time",
        "mpcomid": '8-' + index
      }
    }), _vm._v("\n                    " + _vm._s(item.time) + "\n                  ")], 1)])], 1)]), _vm._v(" "), _c('view', {
      staticClass: "auntBtn"
    }, [_c('button', {
      attrs: {
        "type": "ghost",
        "eventid": '4-' + index
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_vm._v("联系老师")]), _vm._v(" "), _c('button', {
      attrs: {
        "type": "ghost",
        "eventid": '5-' + index
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_vm._v("一键应聘")])], 1)], 1)], 1)
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67d7b311", esExports)
  }
}

/***/ })

},[34]);
//# sourceMappingURL=main.js.map