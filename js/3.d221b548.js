webpackJsonp([3],{342:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){alert("执行 onBeforeSelect 方法")}Object.defineProperty(t,"__esModule",{value:!0});var i=l(344),u=a(i),r=l(152),s=a(r),c=l(153),d=a(c),o=l(154),f=a(o),m=l(156),p=a(m),h=l(155),g=a(h),E=l(9),v=a(E),S=l(346),b=a(S),y=l(349),k=a(y),P=l(347),N=a(P),_=l(348);l(581);var M=function(e){function t(e){(0,d.default)(this,t);var l=(0,p.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return l.state={multiFiles:[],files:[],filesWithToast:[],allTypeFiles:{},toast:{visible:!1,onMaskClick:function(){var e=l.state.toast;e.visible=!1,l.setState({toast:e})}}},l.onSelectMulti=l.onSelectMulti.bind(l),l.onSelect=l.onSelect.bind(l),l}return(0,g.default)(t,e),(0,f.default)(t,[{key:"onSelectMulti",value:function(e){console.log(e);var t=this.state.multiFiles,l=this.state.toast;if(t=t.concat(e),t.length>5)return l.visible=!0,l.children="最多只能选择5张图片",void this.setState({toast:l});this.setState({multiFiles:t})}},{key:"onSelect",value:function(e){console.log(e);var t=this.state.files;t.push(e),this.setState({files:t})}},{key:"remove",value:function(e,t){var l,a=this.state[e],n=this.state.toast;a.splice(t,1),n.visible=!0,n.children="图片删除成功",this.setState({toast:n}),this.setState((l={},(0,u.default)(l,e,a),(0,u.default)(l,"toast",n),l))}},{key:"fileRender",value:function(e){var t=this;return this.state[e].map(function(l,a){return v.default.createElement(_.Badge,{sup:!0,className:"uploader-item",shape:"circle",text:v.default.createElement(_.Icon,{type:"wrong"}),key:+a,onClick:function(){return t.remove(e,+a)}},v.default.createElement("div",{className:"uploader-item-img"},v.default.createElement("a",{href:l.thumbnail,target:"_blank"},v.default.createElement("img",{src:l.thumbnail,alt:""}))))})}},{key:"render",value:function(){var e=this.state,t=e.toast,l=e.multiFiles;return v.default.createElement(b.default,{className:"uploader-page"},v.default.createElement(k.default,{title:"上传组件 Uploader"}),v.default.createElement("main",null,v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"点击一次选择单张"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},this.fileRender("files"),v.default.createElement(_.Uploader,{className:"uploader-btn",accept:"image/jpg, image/jpeg, image/gif, image/png",onChange:this.onSelect},v.default.createElement(_.Icon,{type:"add"}))))),v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"点击一次选择多张"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},this.fileRender("multiFiles"),l.length<5?v.default.createElement(_.Uploader,{multiple:!0,className:"uploader-btn",accept:"image/jpg, image/jpeg, image/gif, image/png",onBeforeSelect:n,onChange:this.onSelectMulti},v.default.createElement(_.Icon,{type:"add"})):null))),v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"禁用状态"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},v.default.createElement(_.Uploader,{className:"uploader-btn",disabled:!0},v.default.createElement(_.Icon,{type:"add"}))))),v.default.createElement(_.Toast,t)),v.default.createElement(N.default,null))}}]),t}(E.Component);t.default=M,e.exports=t.default},581:function(e,t){}});