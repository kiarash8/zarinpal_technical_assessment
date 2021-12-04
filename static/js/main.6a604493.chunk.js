(this.webpackJsonpzarinpal_technical_assessment=this.webpackJsonpzarinpal_technical_assessment||[]).push([[0],{113:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(30),r=i.n(o),c=i(3),l=i(14),s=i(13),d=["general","task"],u={general:{storage:!1,modelInitial:{taskDialog:{show:!1},completeTaskListDialog:!1}},task:{storage:!1,modelInitial:{items:[]}}},j=i(2),b=Object(a.createContext)({}),x=function(){var e={};return d.forEach((function(t){e[t]=function(e){var t=u[e];if(!t.storage)return t.modelInitial;var i="undefined"!==typeof window?localStorage.getItem(e):null;return null!==i&&void 0!==i?JSON.parse(i):t.modelInitial}(t)})),e};function O(e,t){var i=t.type.toString().split("_"),a=Object(s.a)(i,2),n=a[0],o=a[1];return"SET"===n||"RESET"===n?function(e,t,i,a){var n=u[t],o="RESET"===e?n.modelInitial:{};"SET"===e&&Object.keys(n.modelInitial).forEach((function(e){o[e]=void 0===i.payload[e]?a[t][e]:i.payload[e]}));n.storage&&localStorage.setItem(t,JSON.stringify(o));return Object(l.a)(Object(l.a)({},a),{},Object(c.a)({},t,o))}(n,o,t,e):e}var v,g={Provider:function(e){var t=e.children,i=Object(a.useReducer)(O,x()),n=Object(s.a)(i,2),o=n[0],r=n[1];return Object(j.jsx)(b.Provider,{value:{state:o,dispatch:r},children:t})},Context:b,Action:function(e,t,i,a){return t({type:"".concat(e,"_").concat(i),payload:"SET"===e?a:u[i].modelInitial})}},m=i(16),h=i(160),p=i(149),f=i(162),k=i(159),y=i(163),w=i(164),C=i(153),D=i(119),E=i(166),T=i(167),S=i(168),I=i(57),A=i.n(I),z=i(86),q=i.n(z),F=i(56),P=i.n(F),W=[{value:"low",color:"success"},{value:"medium",color:"warning"},{value:"high",color:"error"}];!function(e){e.low="success",e.medium="warning",e.high="error"}(v||(v={}));var R={validation:function(e){return!Object.keys(e).map((function(t){return e[t]})).filter((function(e){return!0===e.required})).map((function(e){return""!==e.value})).includes(!1)},fieldsValidation:function(e){var t={};return Object.keys(e).forEach((function(i){var a=Object(l.a)(Object(l.a)({},e[i]),{},{value:e[i].value,validation:(!e[i].value||("object"===typeof e[i].value?0===e[i].value.length:""===e[i].value))&&!0===e[i].required,required:e[i].required});Object.assign(t,Object(c.a)({},i,a))})),t},uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:t&&11).toString(16)}))}},_=function(){var e=Object(a.useContext)(g.Context),t=e.state,i=e.dispatch,n=Object(a.useState)("low"),o=Object(s.a)(n,2),r=o[0],d=o[1],u=Object(a.useState)({title:{type:"text",value:"",validation:!1,required:!0},description:{type:"text",value:"",validation:!1,required:!0},indicators:{type:"text",value:"",validation:!1,required:!1}}),b=Object(s.a)(u,2),x=b[0],O=b[1];Object(a.useEffect)((function(){t.general.taskDialog.show?"add"!==t.general.taskDialog.mood&&I():z()}),[t.general.taskDialog.show]);var I=function(){var e=t.task.items,i=e.findIndex((function(e){return e.id===t.general.taskDialog.id}));if(i>-1){var a=e[i];O(Object(l.a)(Object(l.a)({},x),{},{title:Object(l.a)(Object(l.a)({},x.title),{},{value:a.title}),description:Object(l.a)(Object(l.a)({},x.description),{},{value:a.description}),indicators:Object(l.a)(Object(l.a)({},x.indicators),{},{value:a.indicators})})),d(a.priority)}else F()},z=function(){setTimeout((function(){O({title:Object(l.a)(Object(l.a)({},x.title),{},{value:"",validation:!1}),description:Object(l.a)(Object(l.a)({},x.description),{},{value:"",validation:!1}),indicators:Object(l.a)(Object(l.a)({},x.indicators),{},{value:"",validation:!1})}),d("low")}),100)},F=function(){g.Action("SET",i,"general",{taskDialog:Object(l.a)(Object(l.a)({},t.general.taskDialog),{},{show:!1})})},_=function(e,t){var i="text"===x[t].type?e.target.value:e.target.checked;O(Object(l.a)(Object(l.a)({},x),{},Object(c.a)({},t,Object(l.a)(Object(l.a)({},x[t]),{},{value:i,validation:!1}))))},J=function(){g.Action("SET",i,"task",{items:[].concat(Object(m.a)(t.task.items),[{id:R.uuidv4(),title:x.title.value,description:x.description.value,indicators:x.indicators.value,priority:r,complete:!1}])}),F()},L=function(){var e=t.task.items,a=e.findIndex((function(e){return e.id===t.general.taskDialog.id}));e[a]=Object(l.a)(Object(l.a)({},e[a]),{},{title:x.title.value,description:x.description.value,indicators:x.indicators.value,priority:r}),g.Action("SET",i,"task",{items:e}),F()};return Object(j.jsxs)(h.a,{fullWidth:!0,open:t.general.taskDialog.show,onClose:F,children:[Object(j.jsx)(p.a,{children:Object(j.jsxs)(f.a,{sx:{display:"flex",justifyContent:"space-between"},children:[function(){switch(t.general.taskDialog.mood){case"add":return"Create new task";case"edit":return"Edit task";case"view":return x.title.value}}(),"view"===t.general.taskDialog.mood&&Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{sx:{marginRight:1},label:r,color:v[r],size:"small"}),Object(j.jsx)(y.a,{size:"small",color:"primary",onClick:function(){var e=t.task.items,a=e.findIndex((function(e){return e.id===t.general.taskDialog.id}));e[a]=Object(l.a)(Object(l.a)({},e[a]),{},{complete:!0}),g.Action("SET",i,"task",{items:e}),F()},children:Object(j.jsx)(P.a,{})}),Object(j.jsx)(y.a,{size:"small",color:"primary",onClick:function(){g.Action("SET",i,"general",{taskDialog:Object(l.a)(Object(l.a)({},t.general.taskDialog),{},{mood:"edit"})})},children:Object(j.jsx)(A.a,{})}),Object(j.jsx)(y.a,{color:"error",size:"small",onClick:function(){var e=t.task.items,a=e.findIndex((function(e){return e.id===t.general.taskDialog.id}));e.splice(a,1),g.Action("SET",i,"task",{items:e}),F()},children:Object(j.jsx)(q.a,{})})]})]})}),Object(j.jsx)(w.a,{children:"view"!==t.general.taskDialog.mood?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{autoFocus:!0,type:"text",value:x.title.value,onChange:function(e){return _(e,"title")},error:x.title.validation,label:"Title",variant:"outlined",margin:"dense",size:"small",fullWidth:!0}),Object(j.jsx)(C.a,{type:"text",value:x.description.value,onChange:function(e){return _(e,"description")},error:x.description.validation,label:"Description",variant:"outlined",margin:"dense",size:"small",fullWidth:!0,multiline:!0,rows:3}),Object(j.jsx)(C.a,{type:"text",value:x.indicators.value,onChange:function(e){return _(e,"indicators")},error:x.indicators.validation,label:"Indicators",variant:"outlined",margin:"dense",size:"small",fullWidth:!0,multiline:!0,rows:2}),Object(j.jsxs)(f.a,{sx:{marginTop:1},children:[Object(j.jsx)(D.a,{sx:{display:"inline-block",marginRight:1},children:"Priority:"}),Object(j.jsx)(E.a,{variant:"outlined",children:W.map((function(e,t){return Object(j.jsx)(T.a,{onClick:function(){return d(e.value)},variant:e.value===r?"contained":"outlined",color:e.color,disableElevation:!0,children:e.value},t)}))})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D.a,{variant:"body1",gutterBottom:!0,children:x.description.value}),Object(j.jsx)(D.a,{variant:"body2",children:x.indicators.value})]})}),Object(j.jsxs)(S.a,{children:[Object(j.jsx)(T.a,{onClick:F,variant:"outlined",children:"view"===t.general.taskDialog.mood?"Close":"Cancel"}),"view"!==t.general.taskDialog.mood&&Object(j.jsx)(T.a,{onClick:function(){R.validation(x)?"add"===t.general.taskDialog.mood?J():L():O(R.fieldsValidation(x))},variant:"contained",disableElevation:!0,children:t.general.taskDialog.mood})]})]})},J=i(165),L=i(169),V=i(156),B=i(152),M=i(170),N=function(e){var t=e.item,i=e.disableAction,n=void 0!==i&&i,o=Object(a.useContext)(g.Context),r=o.state,c=o.dispatch,s=function(e){g.Action("SET",c,"general",{taskDialog:{show:!0,mood:e,id:t.id}})},d=function(){return Object(j.jsx)(L.a,{primary:Object(j.jsxs)(f.a,{sx:{display:"flex",justifyContent:"space-between"},children:[t.title,Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{sx:{marginRight:1},label:t.priority,color:v[t.priority],size:"small"}),!n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y.a,{size:"small",color:"primary",onClick:function(e){e.stopPropagation(),function(){var e=r.task.items,i=e.findIndex((function(e){return e.id===t.id}));e[i]=Object(l.a)(Object(l.a)({},e[i]),{},{complete:!0}),g.Action("SET",c,"task",{items:e})}()},children:Object(j.jsx)(P.a,{})}),Object(j.jsx)(y.a,{size:"small",color:"primary",onClick:function(e){e.stopPropagation(),s("edit")},children:Object(j.jsx)(A.a,{})})]})]})]}),secondary:t.description})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V.a,{disablePadding:!0,children:n?d():Object(j.jsx)(B.a,{divider:!0,onClick:function(){return s("view")},children:d()})}),n&&Object(j.jsx)(M.a,{component:"li"})]})},X=function(){var e=Object(a.useContext)(g.Context),t=e.state,i=e.dispatch,n=function(){g.Action("SET",i,"general",{completeTaskListDialog:!1})};return Object(j.jsxs)(h.a,{fullWidth:!0,open:t.general.completeTaskListDialog,onClose:n,children:[Object(j.jsx)(p.a,{children:"Done Tasks"}),Object(j.jsx)(w.a,{children:Object(j.jsx)(J.a,{sx:{width:"100%",bgcolor:"background.paper"},children:t.task.items.filter((function(e){return!0===e.complete})).map((function(e,t){return Object(j.jsx)(N,{item:e,disableAction:!0},t)}))})}),Object(j.jsx)(S.a,{children:Object(j.jsx)(T.a,{onClick:n,variant:"outlined",children:"Close"})})]})},G=i(171),H=i(155),Y=i(172),K=i(87),Q=i.n(K),U=function(){var e=Object(a.useContext)(g.Context),t=e.state,i=e.dispatch,n=0===t.task.items.length,o=t.task.items.findIndex((function(e){return!1===e.complete}))>-1,r=t.task.items.findIndex((function(e){return!0===e.complete}))>-1,c=function(){g.Action("SET",i,"general",{taskDialog:{show:!0,mood:"add"}})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(f.a,{sx:{position:"relative",width:"100%",maxWidth:800,height:"95vh",margin:"auto"},children:[Object(j.jsxs)(G.a,{sx:{position:"relative"},children:[Object(j.jsx)(D.a,{sx:{flexGrow:1,textAlign:"".concat(n?"center":"left")},variant:"h6",component:"div",children:"Hello World"}),!n&&Object(j.jsx)(T.a,{disabled:!r,onClick:function(){g.Action("SET",i,"general",{completeTaskListDialog:!0})},color:"primary",variant:"outlined",disableElevation:!0,children:"View Done Tasks"})]}),Object(j.jsx)(f.a,{sx:{textAlign:"center",paddingX:3},children:n?Object(j.jsx)(T.a,{onClick:c,sx:{marginTop:6},color:"primary",variant:"outlined",disableElevation:!0,children:"Create Your First Task ;)"}):o?Object(j.jsx)(J.a,{sx:{width:"100%",bgcolor:"background.paper",height:"85vh",overflowX:"auto"},children:t.task.items.filter((function(e){return!1===e.complete})).map((function(e,t){return Object(j.jsx)(N,{item:e},t)}))}):Object(j.jsx)(H.a,{icon:!1,severity:"info",children:"well done, you did it great."})}),!n&&Object(j.jsx)(Y.a,{onClick:c,sx:{position:"absolute",bottom:16,right:16},color:"primary","aria-label":"add",children:Object(j.jsx)(Q.a,{})})]}),Object(j.jsx)(_,{}),Object(j.jsx)(X,{})]})};var Z=function(){return Object(j.jsx)(U,{})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g.Provider,{children:Object(j.jsx)(Z,{})})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.6a604493.chunk.js.map