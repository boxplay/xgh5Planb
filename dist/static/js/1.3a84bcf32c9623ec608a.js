webpackJsonp([1],{fGoN:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Index",data(){var e=this;return{diySiwperBtnShowleft:!0,diySiwperBtnShowright:!0,complete:!1,DayIndex:1,DayList:[],imgList:[],swiperOption:{autoplay:!0,speed:1e3},swiperOptionForMedia:{init:!1,autoplay:!1,speed:1e3,effect:"coverflow",slidesPerView:3,centeredSlides:!0,initialSlide:2,loop:!1,slidesPerView:"auto",slideToClickedSlide:!1,coverflowEffect:{rotate:0,depth:300,modifier:2,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChangeTransitionStart:function(){e.diySiwperBtnShowleft=!1,e.diySiwperBtnShowright=!1,e.stopVideo()},slideChangeTransitionEnd:function(){var t=e.swiper.activeIndex;0==t?(e.diySiwperBtnShowleft=!1,e.diySiwperBtnShowright=!0):4==t?(e.diySiwperBtnShowleft=!0,e.diySiwperBtnShowright=!1):(e.diySiwperBtnShowleft=!0,e.diySiwperBtnShowright=!0)}}},playerOptions:[],menuTop:!1,index:1,offsetTop:0,screenWidth:0,Imgcomplete:!1,goWhere:"what",isPlayTop:0,videoPlayIndex:"",swiperInit:!1}},methods:{stopVideo(){this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()},CplayerPlay(e,t){"swiper"==t&&this.swiper.autoplay.stop()},onPlayerEnded(e){this.videoPlayIndex=""},CplayerPause(e,t){},changeDay(e){this.DayIndex=e},imgLoad(){this.Imgcomplete=!0,this.swiper.init()},playVideo(e,t){console.log("开始播放",t+"-----"+e),this.isPlayTop?(this.videoPlayIndex="",this.isPlayTop=0,this.playerTop.pause(),this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):(this.isPlayTop=1,"top"==e?(this.playerTop.play(),this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):"bottom"==e&&(this.videoPlayIndex=t,this.playerTop.pause(),this.swiper.autoplay.stop(),0==t?(this.player0.play(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause()):1==t?(this.player0.pause(),this.player1.play(),this.player2.pause(),this.player3.pause(),this.player4.pause()):2==t?(this.player0.pause(),this.player1.pause(),this.player2.play(),this.player3.pause(),this.player4.pause()):3==t?(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.play(),this.player4.pause()):4==t&&(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.play())))},handleScroll(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#what_pc").offsetTop-28,i=document.querySelector("#where_pc").offsetTop-28,s=document.querySelector("#who_pc").offsetTop-28;if(e>t&&e<i&&"what"!=this.goWhere?this.goWhere="what":e>i&&e<s&&"where"!=this.goWhere?this.goWhere="where":e>s&&"who"!=this.goWhere&&(this.goWhere="who"),e>document.querySelector("#what_pc").offsetTop&&this.playerTop.pause(),this.imgList.xgPlayMedias.isShow){document.querySelector("#videoBottomForPC").clientHeight;e<document.querySelector("#videoBottomForPC").offsetTop-document.querySelector("#videoBottomForPC").clientHeight-videoBottomForPC&&(this.player0.pause(),this.player1.pause(),this.player2.pause(),this.player3.pause(),this.player4.pause())}},goTicket(){window.location.href="https://traveldetail.fliggy.com/item.htm?id=596217589260"},goPoint(e){var t;this.goWhere=e,"what"==e?t=document.querySelector("#what_pc"):"where"==e?t=document.querySelector("#where_pc"):"who"==e&&(t=document.querySelector("#who_pc"));var i=t.offsetTop;this.offsetTop=i-28;this._isMobile()?(console.log("手机端"),this.scrollEvent(e)):(console.log("PC端"),this.scrollEvent(e))},goRule(){window.location.href="https://d.toutiao.com/k99/"},scrollEvent(e){if(this._isMobile()){if("what"==e)document.getElementById("what_pc").scrollIntoView(!0);else if("where"==e){document.getElementById("where_pc").scrollIntoView(!0)}else if("who"==e){document.getElementById("who_pc").scrollIntoView(!0)}}else{document.documentElement.scrollTop;window.scrollTo(0,this.offsetTop)}},_isMobile:()=>navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},components:{},computed:{player0(){return this.$refs.videoPlayerBottom0.player},player1(){return this.$refs.videoPlayerBottom1.player},player2(){return this.$refs.videoPlayerBottom2.player},player3(){return this.$refs.videoPlayerBottom3.player},player4(){return this.$refs.videoPlayerBottom4.player},playerTop(){return this.$refs.videoPlayerTop.player},swiper(){return this.$refs.videoSwiper.swiper}},mounted(){var e=this;this.$axios.get("/static/img.json").then(t=>{e.imgList=t.data,e.complete=!0,e.$nextTick(()=>{e.screenWidth=e.$refs.main.clientWidth?e.$refs.main.clientWidth:"414",e.swiperOptionForMedia.coverflowEffect.stretch=-2*(this.screenWidth/10-50),e.swiperOptionForMedia.coverflowEffect.stretch>-120&&(e.swiperOptionForMedia.coverflowEffect.stretch=-120),e.swiperInit=!0}),window.onresize=(()=>(()=>{this.$nextTick(()=>{e.screenWidth=e.$refs.main.clientWidth;e.screenWidth})})())}),window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.complete?i("div",{staticClass:"loadingPage"},[e._m(0)]):e._e(),e._v(" "),1==e.complete?i("div",{ref:"main",staticClass:"main relativeBox",staticStyle:{"min-width":"1200px","margin-top":"5%"}},[i("img",{staticStyle:{display:"block"},attrs:{src:"https://xgh5planb.someet.cc/718.jpg",alt:"",width:"100%"},on:{load:e.imgLoad}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayVideoTop.isShow,expression:"imgList.xgPlayVideoTop.isShow"}],staticClass:"imgBoxImg_pc"},[i("div",{staticClass:"videoBox1"},[i("video-player",{ref:"videoPlayerTop",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.imgList.xgPlayVideoTop.options},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")}}})],1)]),e._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"what_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"where_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"positionLine",attrs:{id:"who_pc"}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{staticClass:"positionBlock",attrs:{id:"rule_pc"},on:{click:e.goRule}},[e._v("\n\t\t\t这是分界线\n\t\t")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow&&1==e.Imgcomplete,expression:"imgList.xgPlayMedias.isShow  && Imgcomplete==true"}],staticClass:"imgBoxImg relativeBox",attrs:{id:"videoBottomForPC"}},[1==e.complete?i("div",{directives:[{name:"show",rawName:"v-show",value:e.imgList.xgPlayMedias.isShow,expression:"imgList.xgPlayMedias.isShow"}],staticClass:"swiper2"},[e.imgList.xgPlayMedias.isShow&&1==e.swiperInit?i("swiper",{ref:"videoSwiper",attrs:{id:"videoSwiper",options:e.swiperOptionForMedia}},[i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",0)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:0===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[0])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom0",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[0]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",1)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:1===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[1])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom1",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[1]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",2)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:2===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[2])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom2",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[2]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",3)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:3===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[3])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom3",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[3]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])]),e._v(" "),i("swiper-slide",{staticClass:"swiper1-video"},[i("div",{staticClass:"videoBox1",on:{click:function(t){return e.playVideo("bottom",4)}}},[i("div",{staticClass:"vPage",staticStyle:{position:"absolute"},attrs:{id:"vPage"}},[i("div",{class:4===e.videoPlayIndex?"videoPage videoPageHide":"videoPage"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.imgList.xgPlayMedias.title[4])+"\n\t\t\t\t\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"videoBackBox"},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/videoBack.png",alt:"",width:"100%"}})]),e._v(" "),i("div",{staticClass:"video-vue-box"},[i("video-player",{ref:"videoPlayerBottom4",staticClass:"video-player vjs-custom-skin smallVideo",attrs:{id:"mob-imgBoxImg_pc",playsinline:!0,options:e.imgList.xgPlayMedias.options[4]},on:{play:function(t){return e.CplayerPlay(t,"top")},pause:function(t){return e.CplayerPause(t,"top")},ended:function(t){return e.onPlayerEnded(t)}}})],1)])])],1):e._e()],1):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.diySiwperBtnShowleft,expression:"diySiwperBtnShowleft == true"}],staticClass:"swiper-button-prev diySiwperBtn",staticStyle:{left:"20%","background-image":"url(https://xgh5planb.someet.cc/left.svg)","min-left":"6rem"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.diySiwperBtnShowright,expression:"diySiwperBtnShowright == true"}],staticClass:"swiper-button-next diySiwperBtn",staticStyle:{right:"20%","background-image":"url(https://xgh5planb.someet.cc/right.svg)","min-right":"6rem"}})])]):e._e(),e._v(" "),i("div",{attrs:{id:"topMenuForPc"}},[e._m(1),e._v(" "),i("div",{staticClass:"menuChildBox child-right"},[i("div",{staticClass:"menu-list-mob-pc"},[i("span",{on:{click:function(t){return e.goPoint("what")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"what"!=e.goWhere,expression:"goWhere!='what'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/what_btn.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"what"==e.goWhere,expression:"goWhere=='what'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/what_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),i("span",{on:{click:function(t){return e.goPoint("where")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"where"!=e.goWhere,expression:"goWhere!='where'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/where_btn.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"where"==e.goWhere,expression:"goWhere=='where'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/where_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),i("span",{on:{click:function(t){return e.goPoint("who")}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"who"!=e.goWhere,expression:"goWhere!='who'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/who_btn.png",alt:"",width:"100%"}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"who"==e.goWhere,expression:"goWhere=='who'"}],attrs:{src:"https://xgh5planb.someet.cc/btn/who_btn_blue.png",alt:"",width:"100%"}})]),e._v(" "),i("span",{on:{click:e.goTicket}},[i("img",{attrs:{src:"https://xgh5planb.someet.cc/btn/goTicket_btn_blue.png",alt:"",width:"100%"}})])])]),e._v(" "),i("div",{staticClass:"menuChildBox child-blank"})])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xiguaCircle"},[t("img",{attrs:{src:"https://xgh5planb.someet.cc/loading.jpg",alt:"",width:"100%;"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menuChildBox child-left"},[t("img",{attrs:{src:"https://xgh5planb.someet.cc/logo_white.png",alt:"",width:"100%"}})])}]};var a=i("C7Lr")(s,o,!1,function(e){i("o2WO"),i("lqNn")},"data-v-4cf7636a",null);t.default=a.exports},lqNn:function(e,t){},o2WO:function(e,t){}});
//# sourceMappingURL=1.3a84bcf32c9623ec608a.js.map