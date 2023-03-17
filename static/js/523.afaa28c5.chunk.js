"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[523,494],{7494:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,a,o,i,p=r(2791),x=r(9434),l=r(1413),c=r(2817),u=r(5179),d=function(n){return n.filter},s=r(5653),b={contactName:{type:"text",name:"contactName",label:"Find contacts by name",placeholder:"Enter name"}},f=r(184),m=function(){var n=(0,x.v9)(d),e=(0,x.I0)();return(0,f.jsx)(c.Z,{children:(0,f.jsx)(u.Z,(0,l.Z)({value:n,handleChange:function(n){var r=n.currentTarget.value;return e((0,s.T)(r))}},b.contactName))})},g=r(3433),h=r(9890),Z=r.n(h),v=r(8525),w=r(9713),j=r(168),y=r(6444),k=y.ZP.li(t||(t=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 10px 10px 40px;\n  width: 400px;\n  justify-content: space-between;\n  border: none;\n  border-radius: 4px;\n  background-color: #222;\n  box-shadow: rgba(0, 255, 255, 0.5) 0px 1px 2px,\n    rgba(0, 255, 255, 0.5) 0px 2px 4px, rgba(0, 255, 255, 0.5) 0px 4px 8px,\n    rgba(0, 255, 255, 0.5) 0px 8px 16px 10px;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),C=y.ZP.p(a||(a=(0,j.Z)(["\n  font-weight: 500;\n"]))),P=(y.ZP.button(o||(o=(0,j.Z)(["\n  min-width: 75px;\n  padding: 5px 12px;\n  border: 1px solid red;\n  border-radius: 4px;\n  background-color: white;\n  font-family: inherit;\n  font-size: 16px;\n  cursor: pointer;\n  font-family: inherit;\n  color: red;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: red;\n  }\n"]))),function(n){var e=n.id,r=n.name,t=n.number,a=n.type,o=(0,x.I0)();return(0,f.jsxs)(k,{children:[(0,f.jsx)(Z(),{name:r,size:40,radius:50,color:"#fff",backgroundColor:"#00a2a9"}),(0,f.jsxs)(C,{children:[r,": ",t]}),(0,f.jsx)(w.Z,{onClick:function(){return o((0,v.in)(e))},type:a,children:"Delete"})]})}),S=function(n){var e=n.contacts,r=n.filter;return r?e.items.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())})):e.items},z=function(){var n=(0,x.v9)(S),e=(0,g.Z)(n).sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,f.jsx)(P,{id:e,name:r,number:t,type:"button"},e)}));return(0,f.jsx)("ul",{children:e})},N=r(6214),A=y.ZP.h2(i||(i=(0,j.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  color: #fff;\n  text-shadow: rgb(255, 255, 255) 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px,\n    rgb(255, 255, 255) 0px 0px 0px, rgb(0, 206, 210) 0px 0px 10px,\n    rgb(0, 189, 195) 0px 0px 3px, rgb(0, 206, 210) 0px 0px 9px,\n    rgb(0, 171, 178) 0px 0px 1px, rgb(0, 189, 195) 0px 0px 0px;\n"]))),F=function(){var n=(0,x.I0)(),e=(0,x.v9)(S);return(0,p.useEffect)((function(){n((0,v.yF)())}),[n]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(N.GJ,{children:[(0,f.jsx)(A,{children:"My contacts"}),(0,f.jsx)(m,{}),e.length>0?(0,f.jsx)(z,{}):(0,f.jsx)("p",{children:"The contact list is empty..."})]})})}},9523:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t=r(9434),a=r(1413),o=r(4925),i=r(2791),p=["as","style"],x=i.forwardRef((function(n,e){var r=n.as,t=void 0===r?"span":r,x=n.style,l=void 0===x?{}:x,c=(0,o.Z)(n,p);return i.createElement(t,(0,a.Z)({ref:e,style:(0,a.Z)({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},l)},c))}));x.displayName="VisuallyHidden";var l=r(158),c=r(2817),u=r(5179),d=r(9713),s={name:"",number:""},b={name:{type:"text",name:"name",required:!0,label:"Name",placeholder:"Michael Jackson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},number:{type:"tel",name:"number",required:!0,label:"Number",placeholder:"111-11-11",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}},f=r(184),m=function(n){var e=n.onSubmit,r=(0,l.Z)({initialState:s,onSubmit:e}),t=r.state,o=r.handleChange,i=r.handleSubmit,p=t.name,x=t.number;return(0,f.jsxs)(c.Z,{onSubmit:i,name:"contactForm",autoComplete:"on",children:[(0,f.jsx)(u.Z,(0,a.Z)({value:p,handleChange:o},b.name)),(0,f.jsx)(u.Z,(0,a.Z)({value:x,handleChange:o},b.number)),(0,f.jsx)(d.Z,{type:"submit",children:"Add contact"})]})},g=r(7494),h=r(9869),Z=r(8525),v=r(6214),w=r(5411),j=function(){var n=(0,t.v9)(h.y6),e=(0,t.I0)();return(0,f.jsx)(f.Fragment,{children:n?(0,f.jsxs)(v.GJ,{children:[(0,f.jsx)(v.Mw,{children:"Welcome to the Phonebook!"}),(0,f.jsx)(m,{onSubmit:function(n){e((0,Z.v6)(n))}}),(0,f.jsx)(x,{children:(0,f.jsx)(g.default,{})})]}):(0,f.jsxs)(v.OP,{children:["If you want to use the Phonebook,"," ",(0,f.jsx)(w.r,{to:"/register",style:{margin:0},children:"register"})," ","or ",(0,f.jsx)(w.r,{to:"/login",children:"login"})]})})}},6214:function(n,e,r){r.d(e,{GJ:function(){return x},Mw:function(){return l},OP:function(){return c}});var t,a,o,i=r(168),p=r(6444),x=p.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),l=p.ZP.h1(a||(a=(0,i.Z)(["\n  text-align: center;\n  animation: glow 1s ease-in-out infinite alternate;\n  margin-bottom: 40px;\n  color: #fff;\n  text-shadow: rgb(255, 255, 255) 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px,\n    rgb(255, 255, 255) 0px 0px 0px, rgb(0, 206, 210) 0px 0px 10px,\n    rgb(0, 189, 195) 0px 0px 3px, rgb(0, 206, 210) 0px 0px 9px,\n    rgb(0, 171, 178) 0px 0px 1px, rgb(0, 189, 195) 0px 0px 0px;\n\n  @keyframes glow {\n    from {\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px rgb(0, 189, 195),\n        0 0 20px rgb(0, 189, 195), 0 0 25px rgb(0, 189, 195),\n        0 0 30px rgb(0, 189, 195), 0 0 35px rgb(0, 189, 195);\n    }\n    to {\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgb(0, 189, 195),\n        0 0 40px rgb(0, 189, 195), 0 0 50px rgb(0, 189, 195),\n        0 0 60px rgb(0, 189, 195), 0 0 70px rgb(0, 189, 195);\n    }\n  }\n"]))),c=p.ZP.div(o||(o=(0,i.Z)(["\n  margin: 0 auto;\n  font-size: 20px;\n"])))},2817:function(n,e,r){r.d(e,{Z:function(){return p}});var t,a=r(168),o=r(6444).ZP.form(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  padding: 20px;\n  margin-bottom: 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #222;\n  box-shadow: 0px 1px 2px rgba(0, 255, 255, 0.5),\n    0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5),\n    0px 8px 16px rgba(0, 255, 255, 0.5);\n"]))),i=r(184),p=function(n){var e=n.onSubmit,r=n.children;return(0,i.jsx)(o,{onSubmit:e,children:r})}},5179:function(n,e,r){r.d(e,{Z:function(){return s}});var t,a,o=r(1413),i=r(4925),p=r(168),x=r(6444),l=x.ZP.label(t||(t=(0,p.Z)(["\n  display: inherit;\n  flex-direction: inherit;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 16px;\n"]))),c=x.ZP.input(a||(a=(0,p.Z)(["\n  display: block;\n  margin-top: 4px;\n  margin-bottom: 20px;\n  padding: 4px 8px;\n  width: 270px;\n\n  border: none;\n  outline: none;\n  color: #fff;\n  background: #0f0f0f;\n  font-size: 15px;\n  box-shadow: 0px 1px 2px rgba(0, 255, 255, 0.5),\n    0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5),\n    0px 8px 16px rgba(0, 255, 255, 0.5);\n  border-radius: 5px;\n\n  &::placeholder {\n    font-size: 14px;\n    line-height: 1.14;\n    letter-spacing: 0.01em;\n    color: rgba(117, 117, 117, 0.5);\n  }\n"]))),u=r(184),d=["label","handleChange"],s=function(n){var e=n.label,r=n.handleChange,t=(0,i.Z)(n,d);return(0,u.jsx)("div",{children:(0,u.jsxs)(l,{children:[e," ",(0,u.jsx)(c,(0,o.Z)({onChange:r},t))]})})}},158:function(n,e,r){var t=r(4942),a=r(1413),o=r(9439),i=r(2791);e.Z=function(n){var e=n.initialState,r=n.onSubmit,p=(0,i.useState)((0,a.Z)({},e)),x=(0,o.Z)(p,2),l=x[0],c=x[1];return{state:l,setState:c,handleChange:function(n){var e=n.currentTarget,r=e.name,o=e.value;c((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,t.Z)({},r,o))}))},handleSubmit:function(n){n.preventDefault(),r((0,a.Z)({},l)),c((0,a.Z)({},e))}}}}}]);
//# sourceMappingURL=523.afaa28c5.chunk.js.map