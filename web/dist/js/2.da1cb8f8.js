webpackJsonp([2],{"0dJU":function(t,e){},"6L7y":function(t,e){},D2lH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("ytD3"),s={name:"detail-api",mixins:[a["a"]],data:function(){return{topBarItems:[{name:"编辑",type:"md-settings",action:"btnEdit"},{name:"删除",type:"md-remove-circle",action:"btnDelete"}],simpleItem:[{label:"名称",key:"name"},{label:"方法",key:"method"},{label:"URL",key:"url"},{label:"二级路径",key:"path"},{label:"二级路径字段预期值",key:"pathEqual"},{label:"延时设置",key:"delay"},{label:"描述",key:"description"}],modelItem:[],modelItemPre:[{label:"判断条件",key:"condition",type:"javascript"},{label:"输出过滤函数",key:"afterFunc",type:"javascript"},{label:"输入参数模板",key:"inputParam",type:"json"},{label:"输出参数模板",key:"outputParam",type:"json"},{label:"mock数据",key:"data",type:"json"}]}},props:{info:{type:Object,default:function(){return{}}}},created:function(){this.setGData()},methods:{setGData:function(){var t=this.$route.query;this.apiInfo.id=t.id,this.apiInfo.project=t.project}}},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cus-api-detail"},[i("Card",{staticClass:"left-info",attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n      "+t._s(t.info.name)+"\n    ")]),i("template",{slot:"extra"},t._l(t.topBarItems,function(e){return i("a",{key:e.action,staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:e.type,color:"#9ea7b4"},nativeOn:{click:function(i){t.btnAction(e.action)}}})],1)})),t._l(t.simpleItem,function(e){return i("div",{key:e.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(e.label)+": ")]),i("span",[t._v(t._s(t.info[e.key]||"未配置"))])])})],2),i("Card",{staticClass:"right-container",attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\n        API分支列表\n    ")],1),i("div",{staticClass:"right-list"},[t._l(t.info.model,function(e){return i("Card",{key:e._id,staticClass:"right-list-item"},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n          分支 - "+t._s(e.name)+"\n        ")]),t._l(t.modelItem,function(a){return i("div",{key:a.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(a.label)+": ")]),i("span",[t._v(t._s(e[a.key]||"未配置"))])])}),t._l(t.modelItemPre,function(a){return i("div",{key:a.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(a.label)+": ")]),i("pre",[i("code",[t._v(t._s(e[a.key]))])])])})],2)}),t._l([1,2,3,4,5,6,7,8,9,10],function(t){return i("div",{key:t,staticClass:"flex-fill"})})],2)])],1)},o=[],r=i("XyMi");function l(t){i("6L7y")}var c=!1,d=l,u=null,p=null,h=Object(r["a"])(s,n,o,c,d,u,p),f=h.exports,m=i("P9l9"),v={name:"api-detail",data:function(){return{info:{}}},components:{detailApi:f},watch:{},mounted:function(){var t=this.$route.query;t.id&&this.getApiDetail({id:t.id})},methods:{getApiDetail:function(t){var e=this;return Object(m["w"])(t).then(function(t){t.code||(e.info=t.data.result)})}}},y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("detailApi",{attrs:{info:t.info}})},_=[];function g(t){i("bfDs")}var b=!1,x=g,j="data-v-5c98c03e",k=null,A=Object(r["a"])(v,y,_,b,x,j,k);e["default"]=A.exports},"Dh/V":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("EuXz");var a=i("rzQm"),s=i.n(a),n=(i("n12u"),i("WpTh"),i("ytD3")),o=i("P9l9"),r={name:"api-card",mixins:[n["a"]],data:function(){return{methodList:[{value:"GET",label:"GET"},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"DELETE",label:"DELETE"},{value:"PATCH",label:"PATCH"}],libList:[],ModelList:[],modifyPort:8080,modifyDelay:0,modifyPageNo:0,modifyFixedOutput:"",modifyPathEqual:"",modifyPath:"",modifyFixedType:"",modifyFixedWrong:"",modifyFixedBranch:"",modifyFixedThrow:"",modifyUrl:"",modifyMethod:"",modifyKeys:["path","delay","port","pageNo","pathEqual","url","method"]}},props:{name:{type:String},id:{type:String},mt:{type:Number},method:{type:String},project:{type:String},url:{type:String},path:{type:String},pathEqual:{type:String},delay:{type:[Number,String],default:0},fixedOutput:{type:Object},description:{type:String},pageNo:{type:String},fromSearch:{type:Boolean}},methods:{submitItem:function(t){t.id=this.id,Object(o["r"])(t).then(this.afterEdit)},submitFixData:function(){var t=this.modifyFixedType,e={type:t,project:this.project,api:this.id};e.id="1"===t?this.modifyFixedWrong:"3"===t?this.modifyFixedBranch:void 0,e.data="2"===t?{code:~~this.modifyFixedThrow}:void 0,Object(o["F"])(e).then(this.afterEdit)},setGData:function(){this.apiInfo.id=this.id,this.apiInfo.project=this.project},getSelection:function(){this.$emit("setFix",{id:this.id})},shareApi:function(){this.$emit("shareApi",this.id)}},mounted:function(){this.setGData()}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{staticClass:"api-card-simple",attrs:{bordered:!1}},[i("h3",{attrs:{title:t.name}},[t._v(t._s(t.name))]),i("Icon",{staticClass:"cus-close-icon",attrs:{type:"md-close-circle",color:"DarkGray"},nativeOn:{click:function(e){t.btnAction("btnDelete")}}}),i("ul",{staticClass:"cus-list-db"},[i("li",[i("span",{staticClass:"cus-small url-type",class:t.method},[t._v(t._s(t.method))]),i("span",{staticClass:"cus-small"},[t._v(t._s(t.url))])]),i("li",[i("span",{staticClass:"cus-small"},[t._v("\n        介绍\n      ")]),i("span",{staticClass:"cus-small cus-description",attrs:{title:t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]),i("li",[i("span",{staticClass:"cus-small"},[t._v("\n        修改\n      ")]),i("span",{staticClass:"cus-small"},[t._v("\n        "+t._s(t.timer(t.mt))+"\n      ")])]),i("li",{staticStyle:{"margin-top":"10px"}},[i("ButtonGroup",[i("Button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return t.shareApi(e)}}},[t._v("上传")]),i("Button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return t.getSelection(e)}}},[t._v("固定")]),i("Button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){t.btnAction("btnEdit")}}},[t._v("编辑")])],1)],1)])],1)},c=[],d=i("XyMi");function u(t){i("RkW5")}var p=!1,h=u,f="data-v-1bd9d624",m=null,v=Object(d["a"])(r,l,c,p,h,f,m),y=v.exports,_=i("c+K7"),g={name:"detail-project",mixins:[_["a"]],data:function(){return{topBarItems:[{name:"启动",type:"md-play",action:"btnPlay"},{name:"停止",type:"md-square",action:"btnStop"},{name:"刷新",type:"md-refresh",action:"btnRefresh"}],topDropdownItems:[{name:"编辑",type:"md-settings",action:"btnEdit"},{name:"删除",type:"md-remove-circle",action:"btnDelete"}],simpleItem:[{label:"项目名称",key:"name"},{label:"简称",key:"shortcut"},{label:"本地路径",key:"path"},{label:"启动端口",key:"port"},{label:"父级项目名称",key:"parentName"},{label:"分页数",key:"pageNo"},{label:"404代理服务器地址",key:"proxyTo"},{label:"网页注入",key:"injectHtml",type:"boolean"}],projData:{name:"",shortcut:"",path:"",port:"",parentName:"",pageNo:0,proxyTo:"",injectHtml:!1,proxyTable:[],staticPath:[],urls:[],gulp:{}}}},props:{info:{type:Object,default:function(){return{name:""}}}},watch:{info:function(){this.initData()},"info.id":function(){}},methods:{getItemVal:function(t){return"boolean"===t.type?this.projData[t.key]?"是":"否":this.projData[t.key]||"未配置"},submitItem:function(t,e){var i={id:this.id};i[t]=e,Object(o["u"])(i).then(this.afterEdit)},btnEdit:function(){this.$router.push({name:"项目编辑",query:{id:this.info._id,fromDetail:!0}})},initData:function(){this.projInfo.id=this.info._id,this.copyToObj(this.projData,this.info)},getUrl:function(t){return"http://"+window.location.hostname+":"+this.projData.port+t.url}},created:function(){this.initData()}},b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.info.name)+"\n  ")]),i("template",{slot:"extra"},[t._l(t.topBarItems,function(e){return i("a",{key:e.name,staticClass:"cus-card-tbar-btn",staticStyle:{"margin-left":"10px"},attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:e.type,color:"#9ea7b4"},nativeOn:{click:function(i){t.btnAction(e.action)}}})],1)}),i("Dropdown",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"click",placement:"bottom-end"}},[i("a",{attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:"md-more",color:"#9ea7b4"}})],1),i("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},t._l(t.topDropdownItems,function(e){return i("Dropdown-item",{key:e.type,nativeOn:{click:function(i){t.btnAction(e.action)}}},[i("Icon",{staticClass:"cus-dw-icon",attrs:{type:e.type,color:"#9ea7b4"}}),t._v(t._s(e.name)+"\n        ")],1)}))],1)],2),t._l(t.simpleItem,function(e){return i("div",{key:e.label,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(e.label)+": ")]),i("span",[t._v(t._s(t.getItemVal(e)))])])}),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("静态资源")]),i("div",{staticClass:"json-list"},[t.projData.staticPath&&t.projData.staticPath.length?t._e():i("span",[t._v("未配置")]),t._l(t.projData.staticPath,function(e){return i("div",{key:e},[t._v(t._s(e))])})],2)]),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("代理")]),i("div",{staticClass:"json-list"},[t.projData.proxyTable&&t.projData.proxyTable.length?t._e():i("span",[t._v("未配置")]),t._l(t.projData.proxyTable,function(e){return i("div",{key:e.api},[i("span",[t._v(t._s(e.api))]),i("span",[t._v(t._s(e.target))])])})],2)]),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("常用URL列表")]),i("div",{staticClass:"json-list"},[t.projData.urls&&t.projData.urls.length?t._e():i("span",[t._v("未配置")]),t._l(t.projData.urls,function(e){return e.list?i("div",{key:e.nam,staticClass:"json-list-folder"},t._l(e.list,function(e){return i("div",{key:e.name,staticClass:"json-list-urls"},[i("span",[t._v(t._s(e.name))]),i("a",{attrs:{href:t.getUrl(e)}},[t._v(t._s(e.url))])])})):t._e()}),t._l(t.projData.urls,function(e){return e.list?t._e():i("div",{key:e.name,staticClass:"json-list-urls"},[i("span",[t._v(t._s(e.name))]),i("a",{staticStyle:{"word-break":"break-all"},attrs:{href:t.getUrl(e),target:"_blank"}},[t._v(t._s(e.url))])])})],2)]),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("GULP配置")]),i("div",{staticClass:"json-list"},[t.projData.gulp&&Object.keys(t.projData.gulp).length?t._e():i("span",[t._v("未配置")]),t._l(t.projData.gulp,function(e,a){return i("div",{key:a},[i("span",[t._v(t._s(a))]),t._v(" -> "),i("span",[t._v(t._s(e))])])})],2)])],2)},x=[];function j(t){i("Rmx0")}var k=!1,A=j,C="data-v-1e7f689d",S=null,w=Object(d["a"])(g,b,x,k,A,C,S),T=w.exports,D={name:"projectDetail",data:function(){return{rehearse:{hVal:0,vVal:0},methodList:[{value:"GET",label:"GET"},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"DELETE",label:"DELETE"},{value:"PATCH",label:"PATCH"}],libList:[],ModelList:[],throwList:[{value:"302",label:"302"},{value:"304",label:"304"},{value:"400",label:"400"},{value:"401",label:"401"},{value:"403",label:"403"},{value:"404",label:"404"},{value:"500",label:"500"},{value:"502",label:"502"}],jsonData:"",info:{},searchVal:"",apiList:[],leftApis:[],showShare:!1,showShareResult:!1,showFixData:!1,modalLoading:!1,shareType:"本机",remoteTarget:"",remoteProjs:[],localTarget:"",selectedApi:"",modifyDelay:0,modifyFixedType:"3",modifyFixedOutput:"",modifyFixedWrong:"",modifyFixedBranch:"",modifyFixedThrow:"",loading:!0}},components:{apiCard:y,detailProject:T},computed:{pageSize:function(){return this.$store.state.api.pageSize},pageNo:function(){return this.$store.state.api.pageNo},total:function(){return this.$store.state.api.total},searchData:function(){return this.$store.state.api.searchVal},sortBy:function(){return this.$store.state.api.sortBy},localProjs:function(){return this.$store.state.project.list},selectedProject:function(){var t=this;return"本机"===this.shareType?this.localProjs.find(function(e){return e._id===t.localTarget})||{}:this.remoteProjs.find(function(e){return e._uid===t.remoteTarget})||{}},leftApiData:function(){var t=(this.leftApis[0]||{}).api||{};return"本机"===this.shareType?this.leftApis[0]||{}:Object.assign({},t.base,{model:t.model})},flowTabList:function(){var t=this.rehearse.vVal,e=[],i=-1;if(0===t)return e;for(var a=0;a<this.apiList.length;a++)a%t===0&&i++,e[i]||e.push([]),e[i].push(this.apiList[a]);return e}},watch:{searchVal:function(t){var e=this;this.$store.commit("api/SET_SEARCH",t),clearTimeout(this.delayHandle),this.delayHandle=setTimeout(function(){e.$store.commit("api/SET_ZERO"),e.getApi()},200)}},mounted:function(){var t=this;this.searchVal=this.searchData,this.callTime=0,this.checkProjectList().then(function(){if(t.$route.query.id){var e=t.$route.query.id,i=t.$store.state.project.list.find(function(t){return t._id===e});t.setPageSize(),i?(t.info=i,t.getApi()):t.$Message.error("项目未找到！")}else t.$Message.error("抱歉，走错了呢")})},methods:{getApi:function(){var t=this;clearTimeout(this.delayHandle),this.callTime++,this.loading=!0;var e=this.searchData?o["E"]:o["v"],i={project:this.info._id,pageSize:this.pageSize,pageNo:this.pageNo,sortBy:this.sortBy,order:this.sortBy?-1:1};return this.searchData&&(i.words=this.searchData),e(i).then(function(e){t.loading=!1,e.code||(t.apiList=e.data.list,t.$store.commit("api/SET_TOTAL",e.data.pagination.pageCnt||1))})},getLibList:function(){var t=this,e={pageSize:1e3,pageNo:0};Object(o["z"])(e).then(function(e){e.code||(t.libList=e.data.list)})},getModelList:function(t){var e=this,i={pageSize:1e3,pageNo:0,baseid:this.selectedApi};Object(o["x"])(i).then(function(t){t.code||(e.ModelList=[{_id:"0",name:"基础数据"}].concat(s()(t.data.list)))})},pageNext:function(){this.pageNo>=this.total-1||(this.$store.commit("api/INCREMENT",1),this.getApi())},pageBefore:function(){this.pageNo<=0||(this.$store.commit("api/INCREMENT",-1),this.getApi())},addApi:function(){this.$router.push({name:"API编辑",query:{project:this.info._id}})},copyApi:function(){this.$router.push({name:"API复制",query:{id:this.info._id,uid:this.info._uid,name:this.info.name}})},setPageSize:function(){var t=document.querySelector(".right-container").getBoundingClientRect(),e=Math.floor((t.width-52)/370),i=Math.floor((t.height-32)/165);this.rehearse.hVal=e,this.rehearse.vVal=i;var a=i*e;this.$store.commit("api/SET_PAGE_SIZE",a)},sortList:function(t){this.$store.commit("api/SET_SORT",t),this.getApi()},setFix:function(t){var e=t.id;this.selectedApi=e,this.getLibList(),this.getModelList(e),this.showFixData=!0},submitFixData:function(){var t=this,e=this.modifyFixedType,i={type:e,project:this.$route.query.id,api:this.selectedApi};i.id="1"===e?this.modifyFixedWrong:"3"===e?this.modifyFixedBranch:void 0,i.data="2"===e?{code:~~this.modifyFixedThrow}:void 0,Object(o["F"])(i).then(function(e){e.code||(t.$Message.success(e.message),t.showFixData=!1)})},shareApi:function(t){var e=this,i=this.apiList.find(function(e){return e._id===t});if(i){this.sharedApi=i,this.showShare=!0;var a={pageSize:1e4,pageNo:0};Object(o["k"])(a).then(function(t){var i;t.code||(i=e.remoteProjs).splice.apply(i,[0,e.remoteProjs.length].concat(s()(t.data.list)))}).catch(function(t){console.log(t)})}},shareApiAction:function(t,e){var i,a=this;if("服务端"===this.shareType){if(!this.remoteTarget)return;i=this.postShare(t,e)}else{if(!this.localTarget)return;i=this.postCopy(t,e)}this.modalLoading=!0,i.then(function(t){var e;if(a.modalLoading=!1,!t.code){a.showShare=!1,a.showShareResult=!a.showShareResult;var i="本机"===a.shareType?t.data.list[0].apis:t.data.api.fail;i&&((e=a.leftApis).splice.apply(e,[0,a.leftApis.length].concat(s()(i))),a.$Message.success(t.message))}}).catch(function(t){a.modalLoading=!1})},closeShareResult:function(){this.showShareResult=!1},closeFixModel:function(){this.showFixData=!1},postShare:function(t,e){var i={id:this.sharedApi._id,project:this.remoteTarget,force:t,forceRemove:e};return Object(o["l"])(i)},postCopy:function(t,e){var i={from:this.sharedApi._id,to:this.localTarget,force:t,forceRemove:e};return Object(o["m"])(i)}}},P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-detail"},[i("detail-project",{staticClass:"left-info",attrs:{info:t.info}}),i("Card",{staticClass:"right-container",attrs:{bordered:!1,"dis-hover":"dis-hover"}},[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\n        API列表\n        "),i("span",{staticClass:"cus-card-left-bar"},[i("Input",{staticStyle:{width:"150px",margin:"0 10px"},attrs:{icon:"search",placeholder:"输入API名进行检索"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),t.sortBy?i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"20px"},attrs:{href:"javascript:;"},on:{click:function(e){t.sortList("")}}},[i("Icon",{attrs:{type:"md-navigate"}}),t._v(" 按名称排序")],1):i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"20px"},attrs:{href:"javascript:;"},on:{click:function(e){t.sortList("_mt")}}},[i("Icon",{attrs:{type:"md-clock"}}),t._v(" 按时间排序")],1),i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:;"},on:{click:t.addApi}},[i("Icon",{attrs:{type:"md-create"}}),t._v(" 新建")],1),i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:;"},on:{click:t.copyApi}},[i("Icon",{attrs:{type:"md-arrow-down"}}),t._v(" 导入API")],1)],1)],1),i("template",{slot:"extra"},[i("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.pageBefore()}}},[t._v("\n           "),i("Icon",{attrs:{type:"md-arrow-round-back"}}),t._v(" \n        ")],1),i("div",{staticClass:"cus-page-info"},[i("span",[t._v(t._s(t.pageNo+1))]),t._v("/"),i("span",[t._v(t._s(t.total))])]),i("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.pageNext()}}},[t._v("\n           "),i("Icon",{attrs:{type:"md-arrow-round-forward"}}),t._v(" \n        ")],1)]),i("div",{staticClass:"right-list flex-api-card-list",staticStyle:{position:"relative",height:"100%"}},[t.loading?i("Spin",{staticStyle:{"background-color":"rgba(255, 255, 255, .3)"},attrs:{fix:""}},[i("Icon",{staticClass:"ios-loading",attrs:{type:"load-c",size:"18"}}),i("div",[t._v("Loading")])],1):t._e(),t._l(t.flowTabList,function(e,a){return i("div",{key:a,staticClass:"card-tab"},t._l(e,function(e){return i("apiCard",{key:e._id,staticClass:"card-color",attrs:{name:e.name,id:e._id,mt:e._mt,method:e.method,project:e.project,url:e.url,path:e.path,pathEqual:e.pathEqual,delay:~~e.delay,fixedOutput:e.fixedOutput,description:e.description,pageNo:e.pageNo},on:{delete:t.getApi,shareApi:t.shareApi,setFix:t.setFix}})}))})],2)],2),i("Modal",{attrs:{width:"360"},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}},[i("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[i("Icon",{attrs:{type:"md-information-circle"}}),i("span",[t._v("贡献API")])],1),i("div",{staticClass:"cus-share-box",staticStyle:{"text-align":"center"}},[i("RadioGroup",{attrs:{type:"button"},model:{value:t.shareType,callback:function(e){t.shareType=e},expression:"shareType"}},[i("Radio",{attrs:{label:"本机"}}),i("Radio",{attrs:{label:"服务端"}})],1),i("div",{staticClass:"cus-share-choose"},[i("label",{attrs:{for:""}},[t._v("选择项目")]),"服务端"==t.shareType?i("Select",{attrs:{filterable:""},model:{value:t.remoteTarget,callback:function(e){t.remoteTarget=e},expression:"remoteTarget"}},t._l(t.remoteProjs,function(e){return i("Option",{key:e._uid,attrs:{value:e._uid}},[t._v(t._s(e.name))])})):t._e(),"本机"==t.shareType?i("Select",{attrs:{filterable:""},model:{value:t.localTarget,callback:function(e){t.localTarget=e},expression:"localTarget"}},t._l(t.localProjs,function(e){return i("Option",{key:e._id,attrs:{value:e._id}},[t._v(t._s(e.name))])})):t._e()],1),i("p",{staticClass:"cus-info"},[t._v("当前选中的项目为：\n        "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.selectedProject.name))]),t._v("\n        , 项目简称为:\n        "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.selectedProject.shortcut))])]),i("p",{staticClass:"cus-share-tip"},[t._v("提示: 提交后如果API已存在则不会覆盖原API，需要再次确认才能强制覆盖")])],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"primary",size:"large",long:"",loading:t.modalLoading},on:{click:function(e){t.shareApiAction()}}},[t._v("提交")])],1)]),i("Modal",{attrs:{width:"360"},model:{value:t.showShareResult,callback:function(e){t.showShareResult=e},expression:"showShareResult"}},[i("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[i("span",[t._v("提交结果")])]),i("div",{staticClass:"cus-share-box",staticStyle:{"text-align":"center"}},[i("p",{staticClass:"cus-info"},[t._v("API冲突个数：\n        "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApis.length))]),t._v("个。\n      ")]),t.leftApis.length?i("div",{staticClass:"cus-info"},[i("span",{staticStyle:{"font-size":"14px"}},[t._v("冲突的API信息: ")]),i("div",[t._v("名称: "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApiData.name))])]),i("div",[t._v("URL: "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApiData.url))])]),i("div",[t._v("方法: "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApiData.method))])]),i("div",[t._v("二级路径: "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApiData.path))])]),i("div",[t._v("对应的值: "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApiData.pathEqual))])])]):t._e(),t.leftApis.length?i("p",{staticClass:"cus-share-tip"},[t._v("提示: 更新会将当前API与已有API合并，删除并更新会删除原API，并插入当前API")]):t._e(),t.leftApis.length?t._e():i("p",{staticClass:"cus-share-tip"},[t._v("恭喜，全部提交成功！")])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large",loading:t.modalLoading},on:{click:t.closeShareResult}},[t._v("关闭")]),t.leftApis.length?i("Button",{attrs:{type:"warning",size:"large",loading:t.modalLoading},on:{click:function(e){t.shareApiAction(1,1)}}},[t._v("删除并更新")]):t._e(),t.leftApis.length?i("Button",{attrs:{type:"primary",size:"large",loading:t.modalLoading},on:{click:function(e){t.shareApiAction(1,0)}}},[t._v("更新")]):t._e()],1)]),i("Modal",{attrs:{width:"360"},model:{value:t.showFixData,callback:function(e){t.showFixData=e},expression:"showFixData"}},[i("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[i("span",[t._v("固定数据")])]),i("div",[i("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("选择要设置的固定数据类型和值")]),i("div",{staticClass:"cus-radio-group"},[i("div",{staticClass:"label-data"},[i("div",{staticClass:"label"},[t._v("选择类型")]),i("Radio-group",{attrs:{type:"button",vertical:""},model:{value:t.modifyFixedType,callback:function(e){t.modifyFixedType=e},expression:"modifyFixedType"}},[i("Radio",{attrs:{label:"1"}},[t._v("错误")]),i("Radio",{attrs:{label:"2"}},[t._v("异常")]),i("Radio",{attrs:{label:"3"}},[t._v("分支")]),i("Radio",{attrs:{label:"0"}},[t._v("无空")])],1)],1),i("div",{staticClass:"label-data"},[i("div",{staticClass:"label"},[t._v("选择数值")]),i("div",{staticClass:"selection-list"},[i("Select",{directives:[{name:"show",rawName:"v-show",value:1==t.modifyFixedType,expression:"modifyFixedType == 1"}],staticClass:"radio-select",attrs:{placeholder:"错误",size:"small"},model:{value:t.modifyFixedWrong,callback:function(e){t.modifyFixedWrong=e},expression:"modifyFixedWrong"}},t._l(t.libList,function(e){return i("Option",{key:e.name,attrs:{value:e._id}},[t._v(t._s(e.name))])})),i("Select",{directives:[{name:"show",rawName:"v-show",value:2==t.modifyFixedType,expression:"modifyFixedType == 2"}],staticClass:"radio-select",attrs:{placeholder:"异常",size:"small"},model:{value:t.modifyFixedThrow,callback:function(e){t.modifyFixedThrow=e},expression:"modifyFixedThrow"}},t._l(t.throwList,function(e){return i("Option",{key:e.label,attrs:{value:e.value}},[t._v(t._s(e.label))])})),i("Select",{directives:[{name:"show",rawName:"v-show",value:3==t.modifyFixedType,expression:"modifyFixedType == 3"}],staticClass:"radio-select",attrs:{placeholder:"分支",size:"small"},model:{value:t.modifyFixedBranch,callback:function(e){t.modifyFixedBranch=e},expression:"modifyFixedBranch"}},t._l(t.ModelList,function(e){return i("Option",{key:e.name,attrs:{value:e._id}},[t._v(t._s(e.name))])}))],1)])])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large",loading:t.modalLoading},on:{click:t.closeFixModel}},[t._v("关闭")]),i("Button",{attrs:{type:"primary",size:"large",loading:t.modalLoading},on:{click:t.submitFixData}},[t._v("提交")])],1)])],1)},I=[];function L(t){i("pxsM"),i("oxEv")}var E=!1,O=L,F="data-v-3cbff483",R=null,$=Object(d["a"])(D,P,I,E,O,F,R);e["default"]=$.exports},HugX:function(t,e){},LhTa:function(t,e,i){var a=i("rFzY"),s=i("Q6Nf"),n=i("FryR"),o=i("BbyF"),r=i("plSV");t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,d=4==t,u=6==t,p=5==t||u,h=e||r;return function(e,r,f){for(var m,v,y=n(e),_=s(y),g=a(r,f,3),b=o(_.length),x=0,j=i?h(e,b):l?h(e,0):void 0;b>x;x++)if((p||x in _)&&(m=_[x],v=g(m,x,y),t))if(i)j[x]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:j.push(m)}else if(d)return!1;return u?-1:c||d?d:j}}},PP4U:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("rzQm"),s=i.n(a),n=(i("n12u"),i("P9l9")),o={name:"sync-list",data:function(){return{columns:[{type:"selection",align:"center",width:60},{title:"选择API同步",key:"name",width:290}],selectedList:[]}},props:{data:{type:Array,default:function(){return[]}},name:{type:String},type:{type:String}},methods:{clientDownLoadApi:function(t){this.$emit("submit",this.selectedList)},setSelection:function(t){this.selectedList=t}}},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.name))]),i("Table",{attrs:{columns:t.columns,data:t.data,height:"300",width:"360",size:"small"},on:{"on-selection-change":t.setSelection}}),i("div",{staticStyle:{padding:"10px 0","text-align":"right"}},["clientSide"!=t.type?i("Button",{attrs:{type:"primary"},on:{click:function(e){t.clientDownLoadApi(t.item)}}},[t._v("提交")]):t._e()],1)],1)},l=[],c=i("XyMi");function d(t){i("HugX")}var u=!1,p=d,h="data-v-70e1fd79",f=null,m=Object(c["a"])(o,r,l,u,p,h,f),v=m.exports,y=Object.assign,_={name:"sync-list",data:function(){return{list:{},typeList:[{name:"落后于服务端",key:"behind",download:"base"},{name:"领先于服务端",key:"ahead",download:"base"},{name:"本机独有",key:"clientSide",download:""},{name:"服务端独有",key:"serverSide",download:"all"},{name:"无变化项目",key:"unchanged",download:""},{name:"未知项目",key:"unstaged",download:""}],leftApis:[],showShareResult:!1}},components:{syncCard:v},created:function(){this.getSyncData()},methods:{getSyncData:function(){var t=this,e=this.$route.query.uid;return this.id=this.$route.query.id,this.uid=e,Object(n["h"])({id:e}).then(function(e){e.code||(t.list=e.data)})},clientDownLoadApi:function(t){this.currentApis=t,this.downLoadApi()},downLoadApi:function(t,e){var i=this,a=this.currentApis,o=a.map(function(t){return t._uid}).join(","),r={project:this.uid,ids:o,localProject:this.id,force:t,forceRemove:e};return Object(n["e"])(r).then(function(e){if(!e.code){i.$Message.success(e.message);var a,n=e.data.api.fail.map(function(t){return Object.assign({},t.api.base)});if(n.length)(a=i.leftApis).splice.apply(a,[0,i.leftApis.length].concat(s()(n))),i.showShareResult=!0;t&&(i.showShareResult=!1)}})},filterList:function(t){return(this.list[t]||[]).map(function(e){return y((e.client||e.server).base,{key:t})})},shareApiAction:function(t,e){this.downLoadApi(t,e)},closeShareResult:function(){this.showShareResult=!1}}},g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"sync-list"},[t._l(t.typeList,function(e){return t.list[e.key]&&t.list[e.key].length?i("syncCard",{key:e.key,attrs:{data:t.filterList(e.key),name:e.name,show:"clientSide"!==e.key},on:{submit:t.clientDownLoadApi}}):t._e()}),t._l([1,2,3,4,5,6,7,8,9,10],function(t){return i("div",{key:t})})],2),i("Modal",{attrs:{width:"360"},model:{value:t.showShareResult,callback:function(e){t.showShareResult=e},expression:"showShareResult"}},[i("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[i("span",[t._v("提交结果")])]),i("div",{staticClass:"cus-share-box",staticStyle:{"text-align":"center"}},[i("p",{staticClass:"cus-info"},[t._v("API冲突个数：\n        "),i("span",{staticClass:"cus-focus"},[t._v(t._s(t.leftApis.length))]),t._v("个。\n      ")]),i("p",{staticStyle:{"text-align":"left"}},t._l(t.leftApis,function(e){return i("span",{key:e._id,staticClass:"copy-api-conflict"},[t._v(t._s(e.name))])})),t.leftApis.length?i("p",{staticClass:"cus-share-tip"},[t._v("提示: 更新会将当前API与已有API合并，删除并更新会删除原API，并插入当前API")]):t._e(),t.leftApis.length?t._e():i("p",{staticClass:"cus-share-tip"},[t._v("恭喜，全部提交成功！")])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large"},on:{click:t.closeShareResult}},[t._v("关闭")]),t.leftApis.length?i("Button",{attrs:{type:"warning",size:"large"},on:{click:function(e){t.shareApiAction(1,1)}}},[t._v("删除并更新")]):t._e(),t.leftApis.length?i("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.shareApiAction(1,0)}}},[t._v("更新")]):t._e()],1)])],1)},b=[];function x(t){i("0dJU")}var j=!1,k=x,A="data-v-3b1da24d",C=null,S=Object(c["a"])(_,g,b,j,k,A,C);e["default"]=S.exports},RhFG:function(t,e,i){var a=i("kkCw")("unscopables"),s=Array.prototype;void 0==s[a]&&i("2p1q")(s,a,{}),t.exports=function(t){s[a][t]=!0}},RkW5:function(t,e){},Rmx0:function(t,e){},WpTh:function(t,e,i){"use strict";var a=i("Ds5P"),s=i("LhTa")(5),n="find",o=!0;n in[]&&Array(1)[n](function(){o=!1}),a(a.P+a.F*o,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("RhFG")(n)},XO1R:function(t,e,i){var a=i("ydD5");t.exports=Array.isArray||function(t){return"Array"==a(t)}},bfDs:function(t,e){},boo2:function(t,e,i){var a=i("UKM+"),s=i("XO1R"),n=i("kkCw")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),a(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},"c+K7":function(t,e,i){"use strict";var a=i("P9l9");e["a"]={data:function(){return{projInfo:{}}},methods:{btnEdit:function(){this.$router.push({name:"项目编辑",query:{id:this.projInfo.id}})},btnView:function(){this.$router.push({name:"项目详情",query:{id:this.projInfo.id}})},btnDelete:function(){var t=this;this.$Modal.confirm({title:"是否删除该项目？",content:"<p>删除后将相关的API均会删除且无法恢复</p>",onOk:function(){Object(a["q"])({id:t.projInfo.id}).then(t.afterEdit)}})},btnPlay:function(){Object(a["H"])({id:this.projInfo.id,force:!1}).then(this.afterEdit)},btnRefresh:function(){Object(a["H"])({id:this.projInfo.id,force:!0}).then(this.afterEdit)},btnStop:function(){Object(a["I"])({id:this.projInfo.id}).then(this.afterEdit)},afterEdit:function(t){t.code||(this.$Message.success(t.message),this.freshProject())}}}},oxEv:function(t,e){},plSV:function(t,e,i){var a=i("boo2");t.exports=function(t,e){return new(a(t))(e)}},pxsM:function(t,e){},ytD3:function(t,e,i){"use strict";var a=i("P9l9");e["a"]={data:function(){return{apiInfo:{}}},methods:{btnView:function(){this.$router.push({name:"API详情",query:{id:this.apiInfo.id,project:this.apiInfo.project}})},btnProject:function(){this.$router.push({name:"项目详情",query:{id:this.apiInfo.project}})},btnEdit:function(){this.$router.push({name:"API编辑",query:{id:this.apiInfo.id,project:this.apiInfo.project}})},btnDelete:function(){var t=this;this.$Modal.confirm({title:"是否删除该API？",content:"<p>删除后将相关的分支均会删除且无法恢复</p>",onOk:function(){Object(a["n"])({id:t.apiInfo.id}).then(t.afterEdit)}})},afterEdit:function(t){t.code||(this.$Message.success(t.message),this.$emit("delete"))}}}}});
//# sourceMappingURL=2.da1cb8f8.js.map