require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bea4f3c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bea4f3c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/auntDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bea4f3c4", Component.options)
  } else {
    hotAPI.reload("data-v-bea4f3c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
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
//
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
      auntDetail: {
        name: "杨勃测试小程序开发公司测试测试测",
        nationality: "汉族",
        openId: "oIkrE5Ns_7-ovAOiXVdy61_2yqV8",
        birthday: "1973-06-01",
        businessLicPath: "../../image/aunt.png",
        authStatus: 2,
        careerPicPath: "../../image/home.png",
        certificates: [{
          id: 7,
          picPath: "../../image/aunt-ac.png",
          type: "育婴师证"
        }],
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
        workHistorys: [{
          detail: "照顾孩子",
          endTime: "2015-01",
          id: 25,
          startTime: "2015-01",
          workType: "月嫂"
        }, {
          detail: "照顾孩子",
          endTime: "2015-01",
          id: 26,
          startTime: "2015-01",
          workType: "月嫂"
        }],
        address: "南京市雨花台区花神大道6号重型通讯二期二期二期二期"
      }
    };
  },


  methods: {
    bindViewTap: function bindViewTap() {
      var url = "../logs/main";
      wx.navigateTo({ url: url });
    },
    initAuntDetail: function initAuntDetail(data) {
      this.$set(data, "age", __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].initAge(data.birthday));
    },
    getAuntInfo: function getAuntInfo() {
      //  通过阿姨ID查询数据，命名为auntDetail
      this.initAuntDetail(this.auntDetail);
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
    console.log(options.aunt);
    // console.log(this.$root.$mp.appOption);
  },
  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "background-color": "#f8f8f9"
    }
  }, [_c('div', {
    staticClass: "auntInfo"
  }, [_c('image', {
    staticClass: "detail-image",
    attrs: {
      "mode": "aspectFill",
      "src": _vm.auntDetail.careerPicPath
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "infoBlock"
  }, [_c('p', {
    staticClass: "boldFont"
  }, [_vm._v("\n        " + _vm._s(_vm.auntDetail.name) + " "), (_vm.auntDetail.status === 1) ? _c('span', [_vm._v("阿姨")]) : _vm._e()]), _vm._v(" "), _c('p', {
    staticStyle: {
      "height": "20rpx"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("年龄")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.age) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("籍贯")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.birthplace) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("民族")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.nationality) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("学历")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.education) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("经验")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.seniority) + "年\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag"
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("服务")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.workHistorys.length) + "户\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag",
    staticStyle: {
      "width": "400rpx"
    }
  }, [_c('span', {
    staticClass: "tag-name"
  }, [_vm._v("电话")]), _vm._v("\n        " + _vm._s(_vm.auntDetail.phoneNum) + "\n      ")])], 1)]), _vm._v(" "), _c('view', {
    staticClass: "blue",
    staticStyle: {
      "padding": "0 20rpx",
      "background-color": "#fff",
      "line-height": "60rpx"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "createtask",
      "mpcomid": '0'
    }
  }), _vm._v("  求职意向：\n      " + _vm._s(_vm.auntDetail.wantJob.isLiveHome ? '住家' : '不住家') + "\n      "), _c('i-tag', {
    staticClass: "i-tags",
    staticStyle: {
      "margin-left": "20rpx"
    },
    attrs: {
      "color": "yellow",
      "mpcomid": '1'
    }
  }, [_vm._v("\n          " + _vm._s(_vm.auntDetail.wantJob.type) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("\n        ￥"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("\n          " + _vm._s(_vm.auntDetail.wantJob.salary) + "\n        ")]), _vm._v("元 / 月\n      ")])], 1), _vm._v(" "), _c('div', [_c('view', {
    staticClass: "detailBlock"
  }, [_c('p', {
    staticClass: "detail-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "createtask",
      "mpcomid": '2'
    }
  }), _vm._v("  工作经历")], 1), _vm._v(" "), _c('view', _vm._l((_vm.auntDetail.workHistorys), function(order, index) {
    return _c('view', {
      key: index,
      staticClass: "moreInfoBlock"
    }, [_c('p', {
      staticClass: "blue"
    }, [_c('i-icon', {
      attrs: {
        "type": "flag_fill",
        "mpcomid": '3-' + index
      }
    }), _vm._v("  " + _vm._s(order.startTime) + " - " + _vm._s(order.endTime) + "\n            "), _c('i-tag', {
      staticClass: "i-tags",
      staticStyle: {
        "margin-left": "20rpx"
      },
      attrs: {
        "color": "yellow",
        "mpcomid": '4-' + index
      }
    }, [_vm._v("\n                " + _vm._s(order.workType) + "\n            ")])], 1), _vm._v(" "), _c('view', {
      staticStyle: {
        "margin-left": "20rpx"
      }
    }, [_vm._v("\n          " + _vm._s(order.detail) + "\n          ")])], 1)
  }))], 1), _vm._v(" "), _c('view', {
    staticClass: "detailBlock"
  }, [_c('p', {
    staticClass: "detail-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "dynamic",
      "mpcomid": '5'
    }
  }), _vm._v("  认证资料")], 1), _vm._v(" "), _c('view', [_c('view', {
    staticClass: "moreInfoBlock"
  }, [_c('p', {
    staticClass: "auntInfoTag",
    staticStyle: {
      "width": "320rpx"
    }
  }, [_c('span', {
    staticClass: "tag-name",
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_vm._v("身份证照")]), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": _vm.auntDetail.idCardPath ? 'success_fill' : 'delete_fill',
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "auntInfoTag",
    staticStyle: {
      "width": "320rpx"
    }
  }, [_c('span', {
    staticClass: "tag-name",
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_vm._v("健康证")]), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": _vm.auntDetail.healthPicPath ? 'success_fill' : 'delete_fill',
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _vm._l((_vm.auntDetail.certificates), function(item, index) {
    return _c('p', {
      key: index,
      staticClass: "auntInfoTag",
      staticStyle: {
        "width": "320rpx"
      }
    }, [_c('span', {
      staticClass: "tag-name",
      staticStyle: {
        "margin-right": "5px"
      }
    }, [_vm._v(_vm._s(item.type))]), _vm._v(" "), _c('i-icon', {
      attrs: {
        "type": item.picPath ? 'success_fill' : 'delete_fill',
        "mpcomid": '8-' + index
      }
    })], 1)
  })], 2)])], 1), _vm._v(" "), _c('view', {
    staticClass: "detailBlock"
  }, [_c('p', {
    staticClass: "detail-title"
  }, [_c('i-icon', {
    attrs: {
      "type": "message",
      "mpcomid": '9'
    }
  }), _vm._v("  顾客评论")], 1), _vm._v(" "), _vm._m(0)], 1)])])
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
     require("vue-hot-reload-api").rerender("data-v-bea4f3c4", esExports)
  }
}

/***/ })
],[11]);
//# sourceMappingURL=main.js.map