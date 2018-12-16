require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(40);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a5d4dc2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(43);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a5d4dc2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a5d4dc2", Component.options)
  } else {
    hotAPI.reload("data-v-3a5d4dc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common_js__ = __webpack_require__(4);
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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
    bindViewTap: function bindViewTap() {
      var url = "../logs/main";
      wx.navigateTo({ url: url });
    },
    getOrderInfo: function getOrderInfo() {
      //  通过订单ID查询数据，命名为order
      this.order.ability = this.order.ability.split(",");
      console.log(this.order.ability);
      this.order.ageRange = this.order.ageRange.split(",");
      this.order.birthplace = this.order.birthplace.split(",");
      this.order.seniority = this.order.seniority.split(",");
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
    clickHandle: function clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },
  onLoad: function onLoad(options) {
    console.log(options.orderId);
    // console.log(this.$root.$mp.appOption);
  },
  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getOrderInfo();
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background-color": "#f8f8f9"
    }
  }, [_c('div', {
    staticClass: "orderDetail"
  }, [_c('view', {
    staticClass: "orderTitle"
  }, [_c('p', {
    staticClass: "boldFont",
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v(_vm._s(_vm.order.type))]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "orange",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v(_vm._s(_vm.order.salary) + " 元/月")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#bbbec4"
    }
  }, [_vm._v("(实际收入以签约价格为准)")])]), _vm._v(" "), _c('p', [_vm._v("\n        发布时间：\n        "), _c('span', [_c('i-icon', {
    staticStyle: {
      "margin-right": "10rpx"
    },
    attrs: {
      "type": "time",
      "mpcomid": '0'
    }
  }), _vm._v("\n          " + _vm._s(_vm.order.time) + "\n        ")], 1)])], 1), _vm._v(" "), _c('view', {
    staticClass: "infoBlock"
  }, [_c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("雇主姓名")]), _vm._v("\n        " + _vm._s(_vm.order.name) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("雇主电话")]), _vm._v("\n        " + _vm._s(_vm.order.phoneNum) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("订单技能要求")]), _vm._v(" "), _vm._l((_vm.order.ability), function(tag, index) {
    return _c('i-tag', {
      key: index,
      staticClass: "i-tags",
      staticStyle: {
        "margin-right": "10rpx"
      },
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_vm._v("\n          " + _vm._s(tag) + "\n        ")])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("订单年龄要求")]), _vm._v(" "), _vm._l((_vm.order.ageRange), function(tags, num) {
    return _c('i-tag', {
      key: num,
      staticClass: "i-tags",
      staticStyle: {
        "margin-right": "10rpx"
      },
      attrs: {
        "mpcomid": '2-' + num
      }
    }, [_vm._v("\n          " + _vm._s(tags) + "\n        ")])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("订单户籍要求")]), _vm._v(" "), _vm._l((_vm.order.birthplace), function(tags, count) {
    return _c('i-tag', {
      key: count,
      staticClass: "i-tags",
      staticStyle: {
        "margin-right": "10rpx"
      },
      attrs: {
        "mpcomid": '3-' + count
      }
    }, [_vm._v("\n          " + _vm._s(tags) + "\n        ")])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("订单经验要求")]), _vm._v(" "), _vm._l((_vm.order.seniority), function(tags, id) {
    return _c('i-tag', {
      key: id,
      staticClass: "i-tags",
      staticStyle: {
        "margin-right": "10rpx"
      },
      attrs: {
        "mpcomid": '4-' + id
      }
    }, [_vm._v("\n          " + _vm._s(tags) + "\n        ")])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("每周休息天数")]), _vm._v("\n        " + _vm._s(_vm.order.restDay) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("是否住家")]), _vm._v("\n        " + _vm._s(_vm.order.isLiveHome ? '住家' : '不住家') + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "orderTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("详细内容")]), _vm._v("\n        " + _vm._s(_vm.order.detail) + "\n      ")])], 1), _vm._v(" "), _c('view', {
    staticClass: "detailBlock"
  }, [_c('p', {
    staticClass: "detail-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "message",
      "mpcomid": '5'
    }
  }), _vm._v("  地图")], 1), _vm._v(" "), _vm._m(0)], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "moreInfoBlock"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a5d4dc2", esExports)
  }
}

/***/ })

},[39]);
//# sourceMappingURL=main.js.map