webpackJsonp([5],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"App",data:function(){return{}},methods:{_isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return localStorage.setItem("ismobile",e?1:0),e}}},r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"blankText"}},[this._v("\n\t\t\t西瓜PLAY视频嘉年华是西瓜视频年度最大规模的线下品牌活动，是国内视频行业最全面、最先锋、最有趣的嘉年华盛会，也是链接行业、创作人与用户的桥梁。\n\t\t\t2019年西瓜PLAY全面升级——海上邮轮嘉年华，8月22日-8月26日，将满载数千名视频创作人、明星大咖、行业领袖在上海起航。\n\t\t\t「2019 西瓜PLAY」与首席共创伙伴「福特领界」一起驾着「创作人方舟，领你看世界」！\n\t\t")]),this._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]};var i=t("C7Lr")(o,r,!1,function(e){t("sO0i")},null,null).exports,a=new VueRouter({mode:"history",routes:[{path:"/",name:"Web",component:function(){return t.e(1).then(t.bind(null,"fGoN"))}},{path:"/mob",name:"Mob",component:function(){return t.e(0).then(t.bind(null,"CH82"))}},{path:"/rule",name:"Rule",component:function(){return t.e(4).then(t.bind(null,"OTv9"))}},{path:"/web",name:"Web2",component:function(){return t.e(3).then(t.bind(null,"5vSP"))}},{path:"/prule",name:"RuleForPc",component:function(){return t.e(2).then(t.bind(null,"5E4F"))}}],scrollBehavior:function(e,n,t){return t||{x:0,y:0}}});t("erWL");Vue.prototype.$axios=axios,a.beforeEach(function(e,n,t){var o=localStorage.getItem("ismobile");null==o&&(o=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?1:0);0==o&&("/"!=e.path?"/prule"==e.path?t():t("/"):t()),1==o&&("/mob"!=e.path?"/rule"==e.path?t():t("/mob"):t())}),a.afterEach(function(e,n,t){gtag("config","UA-100002932-38",{page_path:e.fullPath})}),Vue.config.productionTip=!1,Vue.use(window.VueVideoPlayer),Vue.use(window.VueAwesomeSwiper),new Vue({el:"#app",router:a,components:{App:i},template:"<App/>"})},OMN4:function(e,n){e.exports=axios},erWL:function(e,n){},sO0i:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.e9b47c94f62db41cd554.js.map