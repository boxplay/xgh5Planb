webpackJsonp([0],{CH82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("X1H5"),n=i.n(o),a=i("OMN4"),s=i.n(a);var r={isweixin(){if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))return!0},wxRegister(e){var t=Qs.stringify({reqUrl:window.location.href});s.a.post("/php/getToken.php",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{e=Qs.parse(e.data),n.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})}).catch(e=>{console.log(e)}),n.a.ready(t=>{e&&e()})},ShareTimeline(e){n.a.updateTimelineShareData({title:e.title,link:e.link,imgUrl:e.imgUrl,success(){e.success()},cancel(){e.error()}})},ShareAppMessage(e){n.a.updateAppMessageShareData({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,success(){e.success()},cancel(){e.error()}})}},c={name:"Index",data:()=>({daySelect:0,complete:!1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForBanner:{autoplay:!0,speed:2e3,loop:!0},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what",isPlayTop:0,videoPlayIndex:""}),methods:{stopVideo(){this.player0.pause()},CplayerPlay(e,t){"swiper"==t&&this.swiper.autoplay.stop()},CplayerPause(e,t){},onPlayerEnded(e){this.videoPlayIndex=""},playerStateChanged(e){console.log("playing")},playVideo(e,t){console.log("开始播放",t+"-----"+e),this.isPlayTop?(this.isPlayTop=0,this.playerTop.pause(),this.player0.pause()):(this.isPlayTop=1,"top"==e?(this.playerTop.play(),this.player0.pause()):"bottom"==e&&(this.videoPlayIndex=t,this.playerTop.pause(),0==t&&this.player0.play()))},changeDay(e){this.daySelect=e,console.log(this.daySelect)},imgLoad(){this.Imgcomplete=!0,this.getSwiperHeight(),this.$nextTick(function(){$(document).ready(function(){$(".scrollbar-rail").scrollbar()})})},handleScroll(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#topMennuFormobBox").offsetTop;this.menuTop=e>t;var i=document.querySelector("#mob-what_pc").offsetTop-28,o=document.querySelector("#mob-where_pc").offsetTop-28,n=document.querySelector("#mob-who_pc").offsetTop-28;if(e>i&&e<o&&"what"!=this.goWhere?this.goWhere="what":e>o&&e<n&&"where"!=this.goWhere?this.goWhere="where":e>n&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#mob-what_pc").offsetTop&&(this.playerTop.pause(),this.isPlayTop=0),this.imgList.xgPlayMedias.isShow){var a=document.querySelector("#videoBottom").clientHeight;e<document.querySelector("#videoBottom").offsetTop-document.querySelector("#videoBottom").clientHeight-a&&(this.player0.pause(),this.isPlayTop=0)}},goTicket(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#mob-what_pc"):"where"==e?t=document.querySelector("#mob-where_pc"):"who"==e&&(t=document.querySelector("#mob-who_pc"));var i=t.offsetTop;this.offsetTop=i-28;this._isMobile(),this.scrollEvent(e)},goRule(){this.openInWebview()?window.location.href="sslocal://webcast_webview?url=https://webcast.ixigua.com/falcon/xigua_activity/xigua_play_2019.html&hide_nav_bar=1&status_bar_color=white&status_bar_bg_color=#00000000":window.location.href="https://d.toutiao.com/k99/"},openInWebview(){var e=navigator.userAgent.toLowerCase();return"micromessenger"!=e.match(/MicroMessenger/i)&&("qq"!=e.match(/QQ/i)&&("weibo"!=e.match(/WeiBo/i)&&(null!=e.match(/Android/i)?null==e.match(/browser/i):null==e.match(/iPhone/i)||null==e.match(/safari/i))))},scrollEvent(e){if(this._isMobile()){if(console.log(e),"what"==e)document.getElementById("mob-what_pc").scrollIntoView(!0);else if("where"==e){document.getElementById("mob-where_pc").scrollIntoView(!0)}else if("who"==e){document.getElementById("mob-who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:()=>navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),isIOS:()=>isApp()&&navigator.userAgent.indexOf("iOS")>-1,isInIOS:()=>!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),wxRegCallback(){this.wxShareTimeline(),this.wxShareAppMessage()},wxShareTimeline(){var e={title:"2019西瓜PLAY视频嘉年华",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};r.ShareTimeline(e)},wxShareAppMessage(){var e={title:"2019西瓜PLAY视频嘉年华",desc:"一艘承载数千创作人的神奇方舟，一个用58天建造的海上世界。8.22-8.26 五天四夜邮轮嘉年华之旅等你来！",link:window.location.href,imgUrl:"https://xgh5.someet.cc/logo-xigua.png"};r.ShareAppMessage(e)},getSwiperHeight(){var e=this;e.$nextTick(function(){e.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414";e.screenWidth;window.addEventListener("scroll",e.handleScroll),e.isInIOS()&&window.addEventListener("touchmove",e.handleScroll)})}},watch:{$route(e,t){"/rule"==e.path&&window.removeEventListener("scroll",this.handleScroll),"/mob"==e.path&&window.addEventListener("scroll",this.handleScroll)}},components:{},computed:{player0(){return this.$refs.videoPlayerBottom0.player},playerTop(){return this.$refs.videoPlayerTop.player}},mounted(){var e=this;this.$axios.get("/static/img.json").then(function(t){e.imgList=t.data,e.complete=!0}),r.isweixin()&&(console.log("微信环境"),r.wxRegister(this.wxRegCallback))},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.complete?i("div",{staticClass:"loadingPage"},[e._m(0)]):e._e(),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"mob-main relativeBox mobCss"},[i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-1.jpg",alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/718-2.jpg",alt:"",width:"100%"}}),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/812-3.jpg",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"mob-day-main"},[e._m(1),e._v(" "),i("div",{staticClass:"mob-day-box"},[i("div",{staticClass:"mob-day-container"},[i("div",{staticClass:"mob-day-container-img"},[i("div",{on:{click:function(t){return e.changeDay(0)}}},[i("img",{attrs:{src:0==e.daySelect?"https://xgh5.someet.cc/day22_red.png":"https://xgh5.someet.cc/day22.png",width:"100%",alt:""}})]),e._v(" "),i("div",{on:{click:function(t){return e.changeDay(1)}}},[i("img",{attrs:{src:1==e.daySelect?"https://xgh5.someet.cc/day23_red.png":"https://xgh5.someet.cc/day23.png",width:"100%",alt:""}})]),e._v(" "),i("div",{on:{click:function(t){return e.changeDay(2)}}},[i("img",{attrs:{src:2==e.daySelect?"https://xgh5.someet.cc/day24_red.png":"https://xgh5.someet.cc/day24.png",width:"100%",alt:""}})]),e._v(" "),i("div",{on:{click:function(t){return e.changeDay(3)}}},[i("img",{attrs:{src:3==e.daySelect?"https://xgh5.someet.cc/day25_red.png":"https://xgh5.someet.cc/day25.png",width:"100%",alt:""}})])])]),e._v(" "),i("div",{staticClass:"mob-day-content scrollbar-rail",class:0==e.daySelect||2==e.daySelect?"scroll-scrolly_visible":""},[i("img",{directives:[{name:"show",rawName:"v-show",value:0==e.daySelect,expression:"daySelect == 0"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act22.png",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:1==e.daySelect,expression:"daySelect == 1"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act23.png",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:2==e.daySelect,expression:"daySelect == 2"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act24.jpg",alt:""}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:3==e.daySelect,expression:"daySelect == 3"}],attrs:{width:"100%",src:"https://xgh5.someet.cc/act25.png",alt:""}})])])]),e._v(" "),i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5.someet.cc/812-4.jpg",alt:"",width:"100%"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Imgcomplete,expression:"Imgcomplete==true"}],staticClass:"mob-slideBox"},[e._m(2)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.complete&&1==e.Imgcomplete,expression:"complete==true &&  Imgcomplete==true"}],ref:"topMennuFormobBox",staticStyle:{position:"absolute",top:"12.8%"},attrs:{id:"topMennuFormobBox"}},[i("div",{class:e.menuTop?"mob-fixedMenu":"mob-relativeMenu",staticStyle:{"max-width":"700px"},attrs:{id:"topMennuFormob"}},[i("div",{staticStyle:{width:"100%",position:"relative"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere == 'who'"}],ref:"imgHeight",attrs:{id:"imgHeight",src:"https://xgh5.someet.cc/who.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere == 'where'"}],attrs:{src:"https://xgh5.someet.cc/where.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere == 'what'"}],attrs:{src:"https://xgh5.someet.cc/what.png",alt:"",width:"100%"}}),e._v(" "),i("div",{staticClass:"mob-menu-list-mob-pc",staticStyle:{position:"absolute",opacity:"0",top:"-9%"}},[i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("what")}}},[e._v("\n\t\t\t\t\t\t\t玩什么\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("where")}}},[e._v("\n\t\t\t\t\t\t\t在哪玩\n\t\t\t\t\t\t")]),e._v(" "),i("span",{staticStyle:{width:"calc(100% / 3)"},on:{click:function(t){return e.goPoint("who")}}},[e._v("\n\t\t\t\t\t\t\t跟谁玩\n\t\t\t\t\t\t")])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow&&1==e.Imgcomplete&&1==e.complete,expression:"imgList.xgPlayVideoTop.isShow && Imgcomplete==true && complete==true"}],staticClass:"mob-imgBoxImg_pc"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("top",0)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}}),e._v(" "),i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-what_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-where_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionLine",attrs:{id:"mob-who_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-positionBlock",attrs:{id:"mob-rule_pc"},on:{click:e.goRule}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"mob-banner-div"},[i("div",{staticClass:"mob-banner-swiper"},[1==e.complete?i("swiper",{ref:"BannerSwiper",attrs:{id:"BannerSwiper",options:e.swiperOptionForBanner}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("a",{attrs:{href:"https://www.toutiao.com/i6721317691421901326/"}},[i("img",{attrs:{src:"https://xgh5.someet.cc/ft_mobile.jpg",width:"100%",alt:""}})])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("a",{attrs:{href:"https://www.ixigua.com/i6719331585704854024/"}},[i("img",{attrs:{src:"https://xgh5.someet.cc/ss.jpg",width:"100%",alt:""}})])])],1):e._e()],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow&&1==e.Imgcomplete&&1==e.complete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true && complete == true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottom"}},[1==e.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2",on:{click:function(t){return e.playVideo("bottom",0)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}}),e._v(" "),i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerBottom0",staticClass:"video-player vjs-custom-skin",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[0]}})],1)]):e._e()])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xiguaCircle"},[t("img",{attrs:{src:"https://xgh5.someet.cc/loading.jpg",alt:"",width:"100%;"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{attrs:{src:"https://xgh5.someet.cc/812-day.jpg",alt:"",width:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mob-slideBoxList"},[t("div",{staticClass:"mob-chevron",staticStyle:{position:"absolute"}}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"}),this._v(" "),t("div",{staticClass:"mob-chevron"})])}]};var d=i("C7Lr")(c,l,!1,function(e){i("zJJu"),i("z7e0")},"data-v-67bfa0f1",null);t.default=d.exports},X1H5:function(e,t){var i;i=window,e.exports=function(e,t){function i(t,i,o){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,o)}):c(t,o)}function o(t,i,o){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){o&&o.trigger&&o.trigger(e),s(t,e,i)}):c(t,o||i)}function n(e){return(e=e||{}).appId=k.appId,e.verifyAppId=k.appId,e.verifySignType="sha1",e.verifyTimestamp=k.timestamp+"",e.verifyNonceStr=k.nonceStr,e.verifySignature=k.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var o=t.errMsg;o||(o=t.err_msg,delete t.err_msg,o=function(e,t){var i=e,o=u[i];o&&(i=o);var n="ok";if(t){var a=t.indexOf(":");"confirm"==(n=t.substring(a+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}(e,o),t.errMsg=o),(i=i||{})._complete&&(i._complete(t),delete i._complete),o=t.errMsg||"",k.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=o.indexOf(":");switch(o.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function r(e){if(e){for(var t=0,i=e.length;t<i;++t){var o=e[t],n=m[o];n&&(e[t]=n)}return e}}function c(e,t){if(!(!k.debug||t&&t.isInnerInvoke)){var i=u[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(){return(new Date).getTime()}function d(t){S&&(e.WeixinJSBridge?t():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",t,!1))}function p(){L.invoke||(L.invoke=function(t,i,o){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),o)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},u=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),h=e.document,g=h.title,f=navigator.userAgent.toLowerCase(),v=navigator.platform.toLowerCase(),w=!(!v.match("mac")&&!v.match("win")),y=-1!=f.indexOf("wxdebugger"),S=-1!=f.indexOf("micromessenger"),_=-1!=f.indexOf("android"),x=-1!=f.indexOf("iphone")||-1!=f.indexOf("ipad"),I=function(){var e=f.match(/micromessenger\/(\d+\.\d+\.\d+)/)||f.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},T={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:_?2:-1,clientVersion:I,url:encodeURIComponent(location.href)},k={},P={_completes:[]},C={state:0,data:{}};d(function(){b.initEndTime=l()});var M=!1,B=[],L={config:function(e){k=e,c("config",e);var t=!1!==k.check;d(function(){if(t)i(m.config,{verifyJsApiList:r(k.jsApiList)},function(){P._complete=function(e){b.preVerifyEndTime=l(),C.state=1,C.data=e},P.success=function(e){T.isPreVerifyOk=0},P.fail=function(e){P._fail?P._fail(e):C.state=-1};var e=P._completes;return e.push(function(){!function(e){if(!(w||y||k.debug||I<"6.0.2"||T.systemType<0)){var t=new Image;T.appId=k.appId,T.initTime=b.initEndTime-b.initStartTime,T.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){T.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+T.version+"&o="+T.isPreVerifyOk+"&s="+T.systemType+"&c="+T.clientVersion+"&a="+T.appId+"&n="+T.networkType+"&i="+T.initTime+"&p="+T.preVerifyTime+"&u="+T.url;t.src=i}})}}()}),P.complete=function(t){for(var i=0,o=e.length;i<o;++i)e[i]();P._completes=[]},P}()),b.preVerifyStartTime=l();else{C.state=1;for(var e=P._completes,o=0,n=e.length;o<n;++o)e[o]();P._completes=[]}}),p()},ready:function(e){0!=C.state?e():(P._completes.push(e),!S&&k.debug&&e())},error:function(e){I<"6.0.2"||(-1==C.state?e(C.data):P._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:r(e.jsApiList)},(e._complete=function(e){if(_){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var o=u[i];o&&(t[o]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){o(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||g,desc:e.title||g,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(m.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(_){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===M?(M=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(M=!1,B.length>0){var t=B.shift();wx.getLocalImgData(t)}},e))):B.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var o=t.indexOf(":"),n=t.substring(o+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(m.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,o=[],n=0,a=t.length;n<a;++n){var s=t[n],r={card_id:s.cardId,card_ext:s.cardExt};o.push(r)}i(m.addCard,{card_list:o},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,o=(t=JSON.parse(t)).length;i<o;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:k.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,o=[],n=0,a=t.length;n<a;++n){var s=t[n],r={card_id:s.cardId,code:s.code};o.push(r)}i(m.openCard,{card_list:o},e)},consumeAndShareCard:function(e){i(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(m.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){i(m.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){i(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){o(m.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},A=1,V={};return h.addEventListener("error",function(e){if(!_){var t=e.target,i=t.tagName,o=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=o.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=A++,t["wx-id"]=n),V[n])return;V[n]=!0,wx.ready(function(){wx.getLocalImgData({localId:o,success:function(e){t.src=e.localData}})})}}},!0),h.addEventListener("load",function(e){if(!_){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var o=t["wx-id"];o&&(V[o]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(i)},z7e0:function(e,t){},zJJu:function(e,t){}});
//# sourceMappingURL=0.12218f3d2a495fcaf2cb.js.map