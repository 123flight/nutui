/*! NutUI v1.2.9 Thu Jun 28 2018 17:03:52 GMT+0800 (CST) */
webpackJsonpnutui([97],{1032:function(e,t,c){(e.exports=c(1)()).push([e.i,"\n.nut-checkbox {\n  display: inline-block;\n  margin-bottom: 0;\n}\n",""])},1160:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),c("h5",[e._v("示例")]),e._v(" "),c("p",[e._v("默认用法")]),e._v(" "),c("nut-checkbox"),e._v(" "),c("p",[e._v("点击触发事件")]),e._v(" "),c("nut-checkbox",{attrs:{checked:e.checked},on:{change:e.inputCheck}}),e._v(" "),c("p",[e._v("禁用选项")]),e._v(" "),c("nut-checkbox",{attrs:{name:"test2",checked:e.checked2,disabled:!0}}),e._v(" "),c("nut-checkbox",{attrs:{name:"test2",checked:e.checked2}})],1)},staticRenderFns:[]}},1241:function(e,t,c){var n=c(1032);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);c(3)("9d95b830",n,!0,{})},821:function(e,t,c){var n=c(2)(c(919),c(1160),function(e){c(1241)},null,null);e.exports=n.exports},919:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checked:!1,checked2:!1}},methods:{inputCheck:function(){this.checked=!this.checked,alert(this.checked),console.log(event.target.checked)}}}}});