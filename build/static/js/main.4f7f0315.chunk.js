(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(17),a=t.n(r),o=t(8),i=t(3),u=t(18),s=t(0),d=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSummit,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.handleDelete;return Object(s.jsxs)("li",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"delete"})]})},h=function(e){var n=e.personsToShow,t=e.handleDelete;return Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsx)(l,{person:e,handleDelete:function(){return t(e)}},e.id)}))})},j=function(e){var n=e.filter,t=e.handleFilterChange;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{value:n,onChange:t})]})},b=t(4),f=t.n(b),m="api/persons",O=function(){return f.a.get(m).then((function(e){return e.data}))},p=function(e){return f.a.post(m,e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},x=function(e){return f.a.put("".concat(m,"/").concat(e.id),e).then((function(e){return e.data}))},w=function(e){var n=e.message,t=e.color;return null===n?null:Object(s.jsx)("div",{className:"notification",style:{color:t},children:n})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),b=l[0],f=l[1],m=Object(c.useState)(""),g=Object(i.a)(m,2),C=g[0],S=g[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),D=k[0],y=k[1],L=Object(c.useState)(null),T=Object(i.a)(L,2),E=T[0],F=T[1],I=Object(c.useState)(""),J=Object(i.a)(I,2),A=J[0],B=J[1];Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var P=function(e,n){F(e),B(n),setTimeout((function(){F(null)}),5e3)},q=t.filter((function(e){return e.name.toLocaleLowerCase().includes(D.toLocaleLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(w,{message:E,color:A}),Object(s.jsx)(j,{filter:D,handleFilterChange:function(e){y(e.target.value)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(d,{newName:b,newNumber:C,handleSummit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===b}))){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===b})),c=Object(o.a)(Object(o.a)({},n),{},{number:C});x(c).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e})))})).catch((function(e){r(t.filter((function(e){return e.id!==c.id}))),P("Information of ".concat(b," has already been removed from the server"),"red")}))}}else p({name:b,number:C}).then((function(e){t.concat(e),Object(u.a)("persons"),P("Added ".concat(e.name),"green")})).catch((function(e){console.log(e.response.data),P(e.response.data.error,"red")}))},handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){S(e.target.value)}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(h,{personsToShow:q,handleDelete:function(e){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&v(e.id).then((function(n){r(t.filter((function(n){return n.id!==e.id})))}))}(e)}})]})};t(42);a.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4f7f0315.chunk.js.map