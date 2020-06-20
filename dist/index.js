"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0}),require("core-js/modules/es.array.concat"),require("core-js/modules/es.array.includes"),require("core-js/modules/es.object.to-string"),require("core-js/modules/es.promise"),require("core-js/modules/es.regexp.exec"),require("core-js/modules/es.string.search");var t=require("gridjs"),r=require("nanoid"),i=e(require("element-ready"));function n(){}function s(e,t){if(!t)return e&&e.then?e.then(n):Promise.resolve()}function o(e,t){var r=e();return r&&r.then?r.then(t):t(r)}var u=e(require("vue-runtime-helpers/dist/normalize-component.mjs"))({render:function(){var e=this.$createElement;return(this._self._c||e)("article",{class:"gridjs__wrapper",attrs:{id:"gridjs__"+this.uuid,"data-uuid":this.uuid}})},staticRenderFns:[]},void 0,{name:"Grid",props:{autoWidth:{type:Boolean,default:!0},cols:{type:Array,default:void 0},from:{type:String,default:void 0},language:{type:Object,default:void 0},pagination:{type:[Object,Boolean],default:!1},rows:{type:Array,default:void 0},search:{type:[Object,Boolean],default:!1},server:{type:Object,default:void 0},sort:{type:[Object,Boolean],default:!1},theme:{type:String,default:"mermaid"},width:{type:String,default:"100%"}},data:function(){return{dict:{error:{columnsUndefined:"Column headers are undefined",rowsUndefined:"No data to display"}},grid:null,uuid:null,wrapper:null}},computed:{options:function(){var e={autoWidth:this.autoWidth,columns:this.cols?this.cols:[this.dict.error.columnsUndefined],data:this.rows?this.rows:this.from||this.server?void 0:[[this.dict.error.rowsUndefined]],pagination:this.pagination,sort:this.sort,width:this.width};return this.from&&(e.from=this.from),this.language&&(e.language=this.language),this.search&&(e.search=this.search),this.server&&(e.server=this.server),e}},watch:{autoWidth:function(){this.update()},cols:function(){this.update()},from:function(){this.update()},language:function(){this.update()},pagination:function(){this.update()},rows:function(){this.update()},search:function(){this.update()},server:function(){this.update()},sort:function(){this.update()},width:function(){this.update()}},mounted:function(){try{var e=this;return e.uuid=r.nanoid(),n=i('[data-uuid="'.concat(e.uuid,'"]')),u=function(r){return e.wrapper=r,o((function(){if("none"!==e.theme)return s(e.assignStyles())}),(function(){e.wrapper&&(e.options.data||e.options.from||e.options.server)&&(e.grid=new t.Grid(e.options).render(e.wrapper))}))},a?u?u(n):n:(n&&n.then||(n=Promise.resolve(n)),u?n.then(u):n)}catch(e){return Promise.reject(e)}var n,u,a},destroyed:function(){this.grid=void 0,this.wrapper=void 0},methods:{assignStyles:function(){try{var e=this,t=["mermaid"];return o((function(){if(t.includes(e.theme))return s(new Promise((function(t){t(function(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach((function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})})),t.default=e,t}(require("./themes/".concat(e.theme,".css"))))})))}),(function(){var t=document.styleSheets,r="#gridjs__".concat(e.uuid);for(var i in t){var n=t[i];if(n.cssRules&&n.cssRules.length&&n.cssRules[0]&&n.cssRules[0].selectorText&&/^.gridjs/.test(n.cssRules[0].selectorText)){for(var s in n.cssRules){var o=n.cssRules[s].cssText;if(o&&!/@/g.test(o)){var u="".concat(r," ").concat(o);n.deleteRule(s),n.insertRule(u,s)}}var a="\n            ".concat(r,".gridjs__wrapper {\n              align-items: center;\n              display: flex;\n              height: fit-content;\n              justify-content: center;\n              width: 100%;\n            }\n          ");return n.insertRule(a),void(t[i].disabled=!1)}}}))}catch(e){return Promise.reject(e)}},update:function(){this.grid.updateConfig(this.options).forceRender()}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function a(e){a.installed||(a.installed=!0,e.component("Grid",u))}var d={install:a},c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(d),exports.default=u,exports.install=a;
//# sourceMappingURL=index.js.map
