"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[699],{699:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(434),a=t(815),l=t(413);function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=t(791),o=t(184),s=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,r=i(e,s),a=(0,u.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:a,children:n}),(0,o.jsx)("input",(0,l.Z)({id:a,onChange:t},r))]})},c=function(e){var n=e.children,t=e.type,r=void 0===t?"submit":t;return(0,o.jsx)("button",{type:r,children:n})},m=t(942),h=t(439),p=function(e){var n=e.initialState,t=e.onSubmit,r=(0,u.useState)((0,l.Z)({},n)),a=(0,h.Z)(r,2),i=a[0],o=a[1];return{state:i,setState:o,handleChange:function(e){var n=e.currentTarget,t=n.name,r=n.value;o((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,m.Z)({},t,r))}))},handleSubmit:function(e){e.preventDefault(),t((0,l.Z)({},i)),o((0,l.Z)({},n))}}},f={name:"",email:"",password:""},b={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},v=function(e){var n=e.onSubmit,t=p({initialState:f,onSubmit:n}),r=t.state,a=t.handleChange,i=t.handleSubmit,u=r.name,s=r.email,m=r.password;return(0,o.jsxs)("form",{onSubmit:i,children:[(0,o.jsx)(d,(0,l.Z)({value:u,handleChange:a},b.name)),(0,o.jsx)(d,(0,l.Z)({value:s,handleChange:a},b.email)),(0,o.jsx)(d,(0,l.Z)({value:m,handleChange:a},b.password)),(0,o.jsx)(c,{children:"Register"})]})},g=function(){var e=(0,r.I0)();return(0,o.jsx)(v,{onSubmit:function(n){e((0,a.I)(n))}})}}}]);
//# sourceMappingURL=699.d6818ebe.chunk.js.map