(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"Demo",function(){return u});n(173),n(82),n(164),n(81),n(60);var r=n(9),o=n.n(r),a=n(156),c=n(7),l=n(0),i=n.n(l),s=(n(159),n(161),n(167),n(168),n(160),n(158)),d=n(169),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).setValues=function(e){return n.setState({selectValues:e})},n.contentRenderer=function(e,t){return Object(c.b)("div",null,t.values.length," of ",e.options.length," Selected")},n.noDataRenderer=function(){return Object(c.b)("p",{style:{textAlign:"center"}},Object(c.b)("strong",null,"Ooops!")," No data found")},n.itemRenderer=function(e,t,n,r,o){return Object(c.b)("div",{key:e[n.valueField],onClick:function(){return o.addItem(e)}},Object(c.b)("div",{style:{margin:"10px"}},Object(c.b)("input",{type:"checkbox",checked:o.isSelected(e)}),"   ",e[n.labelField]))},n.dropdownRenderer=function(e,t,r){var o=new RegExp(t.search,"i");return Object(c.b)("div",null,Object(c.b)(p,{color:n.state.color},Object(c.b)(j,null,Object(c.b)("div",null,"Search and select:"),r.areAllSelected()?Object(c.b)(g,{className:"clear",onClick:r.clearAll},"Clear all"):Object(c.b)(g,{onClick:r.selectAll},"Select all")),Object(c.b)("input",{type:"text",value:t.search,onChange:r.setSearch,placeholder:"Type anything"})),Object(c.b)(h,null,e.options.filter(function(t){return o.test(t[e.searchBy]||t[e.labelField])}).map(function(o){return!n.state.keepSelectedInList&&r.isSelected(o)?null:Object(c.b)(O,{disabled:o.disabled,key:o[e.valueField],onClick:o.disabled?null:function(){return r.addItem(o)}},Object(c.b)("input",{type:"checkbox",onChange:function(){return r.addItem(o)},checked:-1!==t.values.indexOf(o)}),Object(c.b)(f,null,o[e.labelField]))})))},n.optionRenderer=function(e,t,n,r){return Object(c.b)(i.a.Fragment,null,Object(c.b)("div",{onClick:function(t){return r.removeItem(t,e,!0)}},e.label))},n.inputRenderer=function(e,t,n){return Object(c.b)("input",{tabIndex:"1",className:"react-dropdown-select-input",size:n.getInputSize(),value:t.search,onClick:function(){return n.dropDown("open")},onChange:n.setSearch,placeholder:"Type in"})},n.state={multi:!0,disabled:!1,loading:!1,contentRenderer:!1,dropdownRenderer:!1,inputRenderer:!1,itemRenderer:!1,optionRenderer:!1,noDataRenderer:!1,selectValues:[],searchBy:"username",clearable:!0,separator:!0,forceOpen:!1,handle:!0,labelField:"username",valueField:"email",color:"#0074D9",keepSelectedInList:!0,closeOnSelect:!1,openOnTop:!1,dropdownHeight:"300px"},n}return o()(t,e),t.prototype.render=function(){var e=this;return Object(c.b)("div",{className:this.props.className},Object(c.b)("div",null,Object(c.b)("div",{style:{maxWidth:"500px",margin:"0 auto"}},Object(c.b)(b,{placeholder:"Select peoples",addPlaceholder:"+ click to add",color:this.state.color,disabled:this.state.disabled,loading:this.state.loading,searchBy:this.state.searchBy,separator:this.state.separator,clearable:this.state.clearable,keepOpen:this.state.forceOpen,dropdownHandle:this.state.handle,dropdownHeight:this.state.dropdownHeight,multi:this.state.multi,values:[d.a[0]],labelField:this.state.labelField,valueField:this.state.valueField,options:d.a,dropdownGap:5,keepSelectedInList:this.state.keepSelectedInList,onDropdownOpen:function(){},onDropdownClose:function(){},onClearAll:function(){},onSelectAll:function(){},onChange:function(t){return e.setValues(t)},noDataLabel:"No matches found",closeOnSelect:this.state.closeOnSelect,noDataRenderer:this.state.noDataRenderer?function(){return e.noDataRenderer()}:void 0,openOnTop:this.state.openOnTop,itemRenderer:this.state.itemRenderer?function(t,n,r,o,a){return e.itemRenderer(t,n,r,o,a)}:void 0,inputRenderer:this.state.inputRenderer?function(t,n,r){return e.inputRenderer(t,n,r)}:void 0,optionRenderer:this.state.optionRenderer?function(t,n,r,o){return e.optionRenderer(t,n,r,o)}:void 0,contentRenderer:this.state.contentRenderer?function(t,n){return e.contentRenderer(t,n)}:void 0,dropdownRenderer:this.state.dropdownRenderer?function(t,n,r){return e.dropdownRenderer(t,n,r)}:void 0}))),Object(c.b)("p",null," "),Object(c.b)("p",null,Object(c.b)("input",{type:"checkbox",checked:this.state.multi,onChange:function(){return e.setState({multi:!e.state.multi})}})," ","Multi",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.disabled,onChange:function(){return e.setState({disabled:!e.state.disabled})}})," ","Disabled",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.openOnTop,onChange:function(){return e.setState({openOnTop:!e.state.openOnTop})}})," ","Open on top of select",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.loading,onChange:function(){return e.setState({loading:!e.state.loading})}})," ","Loading",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.clearable,onChange:function(){return e.setState({clearable:!e.state.clearable})}})," ","Clearable",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.separator,onChange:function(){return e.setState({separator:!e.state.separator})}})," ","Separator",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.handle,onChange:function(){return e.setState({handle:!e.state.handle})}})," ","Dropdown handle",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.forceOpen,onChange:function(){return e.setState({forceOpen:!e.state.forceOpen})}})," ","Stay open",Object(c.b)("br",null),"Dropdown Height: ",Object(c.b)("input",{type:"text",checked:this.state.dropdownHeight,value:this.state.dropdownHeight,onChange:function(t){return e.setState({dropdownHeight:t.target.value})}}),Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.contentRenderer,onChange:function(){return e.setState({contentRenderer:!e.state.contentRenderer})}})," ","Custom content renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.dropdownRenderer,onChange:function(){return e.setState({dropdownRenderer:!e.state.dropdownRenderer})}})," ","Custom dropdown renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.itemRenderer,onChange:function(){return e.setState({itemRenderer:!e.state.itemRenderer})}})," ","Custom dropdown item renderer",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.keepSelectedInList,onChange:function(){return e.setState({keepSelectedInList:!e.state.keepSelectedInList})}})," ","Keep selected item in a list",Object(c.b)("br",null),Object(c.b)("input",{type:"checkbox",checked:this.state.closeOnSelect,onChange:function(){return e.setState({closeOnSelect:!e.state.closeOnSelect})}})," ","Close dropdown on select/deselect",Object(c.b)("br",null),Object(c.b)("input",{type:"color",defaultValue:this.state.color,onChange:function(t){return e.setState({color:t.target.value})}})," ","Custom color",Object(c.b)("br",null),"Search by field:"," ",Object(c.b)("select",{defaultValue:this.state.searchBy,onChange:function(t){return e.setState({searchBy:t.target.value})}},Object.keys(d.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)})),Object(c.b)("br",null),"Label field:"," ",Object(c.b)("select",{defaultValue:this.state.labelField,onChange:function(t){return e.setState({labelField:t.target.value,searchBy:t.target.value})}},Object.keys(d.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)})),Object(c.b)("br",null),"Value field:"," ",Object(c.b)("select",{defaultValue:this.state.valueField,onChange:function(t){return e.setState({valueField:t.target.value})}},Object.keys(d.a[0]).map(function(e){return Object(c.b)("option",{key:e,value:e},e)}))),Object(c.b)("details",null,Object(c.b)("summary",null,"Options:"),Object(c.b)("pre",null,JSON.stringify(d.a,!1,2))),Object(c.b)("details",null,Object(c.b)("summary",null,"Selected values:"),Object(c.b)("pre",null,JSON.stringify(this.state.selectValues,!1,2))))},t}(i.a.Component),b=Object(a.a)(s.a,{target:"e82ion00"})(function(e){return e.dropdownRenderer&&"\n\t\t.react-dropdown-select-dropdown {\n\t\t\toverflow: initial;\n\t\t}\n\t"},""),p=Object(a.a)("div",{target:"e82ion01"})("display:flex;flex-direction:column;input{margin:10px 10px 0;line-height:30px;padding:0 20px;border:1px solid #ccc;border-radius:3px;:focus{outline:none;border:1px solid ",function(e){return e.color},";}}"),h=Object(a.a)("div",{target:"e82ion02"})({name:"1nyg2bj",styles:"overflow:auto;min-height:10px;max-height:200px;"}),O=Object(a.a)("div",{target:"e82ion03"})("display:flex;margin:10px;align-items:baseline;cursor:pointer;border-bottom:1px dotted transparent;:hover{border-bottom:1px dotted #ccc;}",function(e){return e.disabled?"\n  \topacity: 0.5;\n  \tpointer-events: none;\n  \tcursor: not-allowed;\n  ":""},""),f=Object(a.a)("div",{target:"e82ion04"})({name:"1kvddv4",styles:"margin:5px 10px;"}),j=Object(a.a)("div",{target:"e82ion05"})({name:"mn36he",styles:"display:flex;justify-content:space-between;& div{margin:10px 0 0 10px;font-weight:600;}"}),g=Object(a.a)("button",{target:"e82ion06"})({name:"16ox0su",styles:"background:none;border:1px solid #555;color:#555;border-radius:3px;margin:10px 10px 0;padding:3px 5px;font-size:10px;text-transform:uppercase;cursor:pointer;outline:none;&.clear{color:tomato;border:1px solid tomato;}:hover{border:1px solid deepskyblue;color:deepskyblue;}"});t.default=u},173:function(e,t,n){var r=n(32),o=n(40);n(174)("keys",function(){return function(e){return o(r(e))}})},174:function(e,t,n){var r=n(13),o=n(22),a=n(30);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],c={};c[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",c)}}}]);
//# sourceMappingURL=component---src-pages-demo-js-65f1656b9a9f8fb3f8e0.js.map