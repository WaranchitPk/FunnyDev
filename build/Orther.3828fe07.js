parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({135:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=require("react"),r=u(n),a=require("../components"),o=require("react-redux"),i=require("../actions/Orhter");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(o){function u(){var e,t,n;c(this,u);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=l(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this].concat(a))),n.state={type:6,rating:10,rowsPerPage:5,page:0},n.ChangeCampus=function(){var e={limit:n.state.rating};n.props.dispatch((0,i.find)(e))},n.handleSelect=function(e){n.setState(s({},e.target.name,e.target.value))},n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:e.target.value})},l(n,t)}return p(u,n.Component),t(u,[{key:"componentDidMount",value:function(){var e={limit:this.state.rating};this.props.dispatch((0,i.find)(e))}},{key:"render",value:function(){var t=this.props.cmData.dataCourse;return console.log("aaa",this.props.resultFind),r.default.createElement("div",null,r.default.createElement(a.OrtherStatComponent,e({onSelect:this.handleSelect},this.state,{onSubmit:this.ChangeCampus,onChangePage:this.handleChangePage,onChangeRow:this.handleChangeRowsPerPage,data:this.props.resultFind,dataCourse:t})))}}]),u}(),h=function(e){return{cmData:e.ChiangmaiCorse,resultFind:e.FindRatingCourse}};exports.default=(0,o.connect)(h)(f);
},{"react":10,"../components":24,"react-redux":14,"../actions/Orhter":501}]},{},[135], null)
//# sourceMappingURL=Orther.3828fe07.map