(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,n){"use strict";n.r(t);n(187),n(39);var o=n(156),r=n(7),l=n(0),c=n.n(l),a=n(159),s=n(161),i=(n(167),n(168),n(160),n(169)),b=n(158),d=function(e){var t=e.options,n=e.title;return Object(r.b)(c.a.Fragment,null,Object(r.b)(p,null,Object(r.b)("h2",null,n),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Basic.js"},"Source")),Object(r.b)(b.a,{options:t,values:[],onChange:function(e){return console.log("%c > onChange "+n+" ","background: #555; color: tomato",e)}}))};d.propTypes={};var p=Object(o.a)("div",{target:"e10p7ggj0"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),u=d,m=function(e){var t=e.options,n=e.title;return Object(r.b)(c.a.Fragment,null,Object(r.b)(j,null,Object(r.b)("h2",null,n),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Multi.js"},"Source")),Object(r.b)(b.a,{multi:!0,options:t,values:[],onChange:function(e){return console.log("%c > onChange "+n+" ","background: #555; color: tomato",e)}}))};m.propTypes={};var j=Object(o.a)("div",{target:"efrso840"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),g=m,f=function(e){var t=e.options,n=e.title;return Object(r.b)(c.a.Fragment,null,Object(r.b)(O,null,Object(r.b)("h2",null,n),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/OpenOnTop.js"},"Source")),Object(r.b)(b.a,{multi:!0,openOnTop:!0,options:t,values:[],onChange:function(e){return console.log("%c > onChange "+n+" ","background: #555; color: tomato",e)}}))};f.propTypes={};var O=Object(o.a)("div",{target:"e1mwur5t0"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),h=f,x=function(e){var t=e.options,n=e.title;return Object(r.b)(c.a.Fragment,null,Object(r.b)(v,null,Object(r.b)("h2",null,n),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Styled.js"},"Source")),Object(r.b)(y,{multi:!0,options:t,values:[t[0]],color:"#333",dropdownGap:0,onChange:function(e){return console.log("%c > onChange "+n+" ","background: #555; color: tomato",e)}}))};x.propTypes={};var v=Object(o.a)("div",{target:"ecrspk80"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),y=Object(o.a)(b.a,{target:"ecrspk81"})({name:"rufrgp",styles:"background:#333;border:#333 !important;color:#fff;.react-dropdown-select-clear,.react-dropdown-select-dropdown-handle{color:#fff;}.react-dropdown-select-option{border:1px solid #fff;}.react-dropdown-select-item{color:#333;}.react-dropdown-select-input{color:#fff;}.react-dropdown-select-dropdown{position:absolute;left:0;border:none;width:500px;padding:0;display:flex;flex-direction:column;border-radius:2px;max-height:300px;overflow:auto;z-index:9;background:#333;box-shadow:none;color:#fff !important;}.react-dropdown-select-item{color:#fff;border-bottom:1px solid #333;}.react-dropdown-select-item.react-dropdown-select-item-selected,.react-dropdown-select-item.react-dropdown-select-item-active{border-bottom:1px solid #333;}.react-dropdown-select-item.react-dropdown-select-item-disabled{background:#777;color:#ccc;}"}),w=x,k=function(e){var t=e.options,n=e.title;return Object(r.b)(c.a.Fragment,null,Object(r.b)(C,null,Object(r.b)("h2",null,n),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/ItemRenderer.js"},"Source")),Object(r.b)(b.a,{multi:!0,options:t,values:[],itemRenderer:function(e,t,n,o,l){return Object(r.b)(S,null,e.disabled?Object(r.b)("div",{"aria-disabled":!0},e.label):Object(r.b)("div",{onClick:function(){return l.addItem(e)}},Object(r.b)("input",{type:"checkbox",checked:l.isSelected(e)})," ",e.label))},onChange:function(e){return console.log("%c > onChange "+n+" ","background: #555; color: tomato",e)}}))};k.propTypes={};var C=Object(o.a)("div",{target:"erwdqlg0"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),S=Object(o.a)("div",{target:"erwdqlg1"})({name:"e37idf",styles:"padding:10px;color:#555;border-radius:3px;margin:3px;cursor:pointer;> div{display:flex;align-items:center;}input{margin-right:10px;}:hover{background:#f2f2f2;}"}),T=k,F=(n(82),n(164),n(81),n(60),n(9)),R=n.n(F),A=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))||this).options=function(){return options.map(function(e){return{label:e.username,value:e.email}})},t.customContentRenderer=function(e,t){return Object(r.b)("div",{style:{cursor:"pointer"}},t.values.length," of ",e.options.length," selected")},t.customDropdownRenderer=function(e,t,n){var o=new RegExp(t.search,"i");return Object(r.b)("div",null,Object(r.b)(q,{color:e.color},Object(r.b)(J,null,Object(r.b)("div",null,"Search and select:"),n.areAllSelected()?Object(r.b)(M,{className:"clear",onClick:n.clearAll},"Clear all"):Object(r.b)(M,{onClick:n.selectAll},"Select all")),Object(r.b)("input",{type:"text",value:t.search,onChange:n.setSearch,placeholder:"Type anything"})),Object(r.b)(B,null,e.options.filter(function(t){return o.test(t[e.searchBy]||t[e.labelField])}).map(function(o){return!e.keepSelectedInList&&n.isSelected(o)?null:Object(r.b)(z,{disabled:o.disabled,key:o[e.valueField],onClick:o.disabled?null:function(){return n.addItem(o)}},Object(r.b)("input",{type:"checkbox",onChange:function(){return n.addItem(o)},checked:-1!==t.values.indexOf(o)}),Object(r.b)(E,null,o[e.labelField]))})))},t}return R()(t,e),t.prototype.render=function(){var e=this;return Object(r.b)("div",null,Object(r.b)(I,null,Object(r.b)("h2",null,this.props.title),Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/CustomContentAndDropdown.js"},"Source")),Object(r.b)(D,{placeholder:"Select",multi:!0,contentRenderer:this.customContentRenderer,dropdownRenderer:this.customDropdownRenderer,onChange:function(t){return console.log("%c > onChange "+e.props.title+" ","background: #555; color: tomato",t)},options:this.props.options,values:[]}))},t}(c.a.Component),I=Object(o.a)("div",{target:"e1tcox1a0"})({name:"h9yv4t",styles:"display:flex;justify-content:space-between;align-items:baseline;"}),D=Object(o.a)(b.a,{target:"e1tcox1a1"})({name:"1em8odr",styles:".react-dropdown-select-dropdown{overflow:initial;}"}),q=Object(o.a)("div",{target:"e1tcox1a2"})({name:"rpx32j",styles:"display:flex;flex-direction:column;input{margin:10px 10px 0;line-height:30px;padding:0px 20px;border:1px solid #ccc;border-radius:3px;:focus{outline:none;border:1px solid deepskyblue;}}"}),B=Object(o.a)("div",{target:"e1tcox1a3"})({name:"1nyg2bj",styles:"overflow:auto;min-height:10px;max-height:200px;"}),z=Object(o.a)("div",{target:"e1tcox1a4"})("display:flex;margin:10px;align-items:baseline;",function(e){return e.disabled&&"text-decoration: line-through;"},""),E=Object(o.a)("div",{target:"e1tcox1a5"})({name:"1kvddv4",styles:"margin:5px 10px;"}),J=Object(o.a)("div",{target:"e1tcox1a6"})({name:"mn36he",styles:"display:flex;justify-content:space-between;& div{margin:10px 0 0 10px;font-weight:600;}"}),M=Object(o.a)("button",{target:"e1tcox1a7"})({name:"16ox0su",styles:"background:none;border:1px solid #555;color:#555;border-radius:3px;margin:10px 10px 0;padding:3px 5px;font-size:10px;text-transform:uppercase;cursor:pointer;outline:none;&.clear{color:tomato;border:1px solid tomato;}:hover{border:1px solid deepskyblue;color:deepskyblue;}"});A.propTypes={};var N=A,G=i.a.map(function(e){return Object.assign({},e,{label:e.name,value:e.email})}),L=function(){return Object(r.b)("div",{className:"container px2 sm-px3"},Object(r.b)(a.a,{page:"examples",title:"Examples"}),Object(r.b)(H,null,Object(r.b)(u,{options:G,title:"Basic"})),Object(r.b)(H,null,Object(r.b)(g,{options:G,title:"Multi"})),Object(r.b)(H,null,Object(r.b)(h,{options:G,title:"Open on top"})),Object(r.b)(H,null,Object(r.b)(w,{options:G,title:"Styled"})),Object(r.b)(H,null,Object(r.b)(T,{options:G,title:"Item custom renderer"})),Object(r.b)(H,null,Object(r.b)(N,{options:G,title:"Custom Content And Dropdown renderers"})),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(s.a,null))};L.propTypes={};var H=Object(o.a)("div",{target:"eq64h260"})({name:"1w7i78a",styles:"max-width:500px;margin:0 auto;h2{font-weight:300;}"});t.default=L},187:function(e,t,n){var o=n(29).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(21)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-examples-js-024025ceb43f1375ddbf.js.map