(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("cd49")},"02d7":function(e,t,n){"use strict";n("6890")},"2ee6":function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/history",name:"游戏设置",component:function(){return Promise.all([n.e("chunk-735fee94"),n.e("chunk-dc430f7e")]).then(n.bind(null,"3c9d"))},meta:{auth:!0,title:"游戏设置",iocn:"SettingOutlined",keepAlive:!1}}]},"39f6":function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/table",name:"商城设置",component:function(){return Promise.all([n.e("chunk-735fee94"),n.e("chunk-9a5b99d6")]).then(n.bind(null,"6005"))},meta:{auth:!0,title:"图表",iocn:"PropertySafetyOutlined",keepAlive:!1}}]},"457e":function(e,t,n){"use strict";(function(){function e(){var e=100,t=1920,n=window.innerWidth,c=n/t*e;document.querySelector("html").style.fontSize=c+"px"}window.onresize=function(){e()},document.addEventListener("DOMContentLoaded",e)})()},"4fbd":function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/notice",name:"公告",component:function(){return n.e("chunk-2d0bae8b").then(n.bind(null,"38e5"))},meta:{auth:!0,title:"公告",iocn:"AuditOutlined",keepAlive:!1}}]},6890:function(e,t,n){},aa8b:function(e,t,n){},af05:function(e,t,n){var c={"./a.ts":"d48a","./b.ts":"d592","./c.ts":"39f6","./d.ts":"2ee6","./e.ts":"4fbd","./f.ts":"c99c"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=a,e.exports=o,o.id="af05"},c99c:function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/journal",name:"日志",component:function(){return n.e("chunk-2d0cc046").then(n.bind(null,"4bac"))},meta:{auth:!0,title:"日志",iocn:"ProfileOutlined",keepAlive:!0}}]},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var c=n("7a23");function o(e,t){var n=Object(c["resolveComponent"])("RouterView");return Object(c["openBlock"])(),Object(c["createBlock"])(n)}n("02d7");const a={};a.render=o;var i=a,u=(n("99af"),n("13d5"),n("d3b7"),n("ddb0"),n("53ca")),r=n("6c02"),l=function(e){return e.keys().reduce((function(t,n){var c=e(n).default;return"object"===Object(u["a"])(c)?t.concat(c):t}),[]).sort((function(e,t){return(e||0)-(t||0)}))},d=l(n("af05"));localStorage.setItem("router",JSON.stringify(d));var s=[{path:"/",name:"Home",meta:{title:"首页",keepAlive:!0},redirect:"home",component:function(){return Promise.all([n.e("chunk-ac0c1182"),n.e("chunk-7c839500")]).then(n.bind(null,"bb51"))},children:d},{path:"/login",name:"登陆",meta:{title:"登陆",keepAlive:!0},component:function(){return n.e("chunk-52e968f2").then(n.bind(null,"d9c9"))}}],f=Object(r["a"])({history:Object(r["b"])(),routes:s}),m=f,p=n("5502"),h=Object(p["a"])({state:{listData:{1:10},police:0,keepLiveRoute:["Notice"],token:"",open:!1,twinkle:!0},mutations:{setData:function(e,t){e.listData=t},pliceChange:function(e,t){e.police=t},openChange:function(e){e.open=!0},setTwinkle:function(e,t){e.twinkle=t}},actions:{setData:function(e,t){e.commit("setData",t)},pliceChange:function(e,t){0===e.state.police?console.log("发送报警"):console.log("报警还没消除"),e.state.police}},modules:{}}),b=(n("b0c0"),n("1c85"),n("ccb9")),k=(n("c721"),n("3af3")),v=(n("b6e5"),n("55f1")),O=(n("519e"),n("0bb7")),w=(n("dccf"),n("a8ba")),g=(n("0c1d"),n("8592")),A=(n("73d0"),n("a600")),D=(n("0723"),n("0020")),j=(n("8b88"),n("681b")),y=(n("19ac"),n("cdeb")),T=(n("a71a"),n("b558")),C=(n("e1f5"),n("5efb")),P={install:function(e){e.component(C["a"].name,C["a"]),e.component(T["a"].name,T["a"]),e.component(y["a"].name,y["a"]),e.component(j["a"].name,j["a"]),e.component(D["a"].name,D["a"]),e.component(A["a"].name,A["a"]),e.component(g["a"].name,g["a"]),e.component(w["a"].name,w["a"]),e.use(O["a"]),e.use(v["a"]),e.use(k["a"]),e.use(b["a"])}},S=P,x=(n("aa8b"),n("840a"),n("457e"),n("c975"),n("96cf"),n("1da1")),L=["/login","/register"];m.beforeEach(function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,n,c){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.title=t.meta.title,o=!0,o)if("/login"===t.path)c();else if(a=h.getters.userData&&h.getters.userData.name,a)c();else try{c()}catch(n){h.commit("user/LOGOUT"),c("/login?redirect=".concat(t.path))}else-1!==L.indexOf(t.path)?c():c("/login?redirect=".concat(t.path));case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()),Object(c["createApp"])(i).use(h).use(m).use(S).mount("#app")},d48a:function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/home",name:"首页",component:function(){return Promise.all([n.e("chunk-896df498"),n.e("chunk-34746cfd")]).then(n.bind(null,"85d4"))},meta:{auth:!0,title:"首页",keepAlive:!1,iocn:"AppstoreOutlined"}}]},d592:function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"/Tree",name:"Tree-Dome",component:function(){return n.e("chunk-2d2138d7").then(n.bind(null,"acba"))},redirect:"/Tree/dome1",children:[{path:"/Tree/dome1",name:"封装tree",component:function(){return Promise.all([n.e("chunk-896df498"),n.e("chunk-627aca88"),n.e("chunk-2bb25fc1")]).then(n.bind(null,"0779"))},meta:{auth:!0,iocn:"CloudOutlined",title:"Dome1",keepAlive:!0}},{path:"/Tree/dome2",name:"顶点概念几何体结构",component:function(){return Promise.all([n.e("chunk-896df498"),n.e("chunk-627aca88"),n.e("chunk-d309c206")]).then(n.bind(null,"dbb7"))},meta:{auth:!0,iocn:"CloudOutlined",title:"Dome2",keepAlive:!0}}],meta:{auth:!0,title:"Tree",keepAlive:!1,iocn:"AppstoreOutlined"}}]}},[[0,"runtime","chunk-libs"]]]);