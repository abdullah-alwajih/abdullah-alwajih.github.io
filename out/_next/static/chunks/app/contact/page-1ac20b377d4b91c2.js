(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5520:function(e,a,s){Promise.resolve().then(s.bind(s,4647))},6463:function(e,a,s){"use strict";var n=s(1169);s.o(n,"usePathname")&&s.d(a,{usePathname:function(){return n.usePathname}})},4647:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return i}});var n=s(7437),t=s(6463),r=s(2265);function l(){let[e,a]=(0,r.useState)({fullname:"",email:"",message:""}),[s,t]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=document.querySelector("form");t(!!e&&e.checkValidity())},[e]);let l=e=>{let{name:s,value:n}=e.target;a(e=>({...e,[s]:n}))};return(0,n.jsxs)("section",{className:"contact-form",children:[(0,n.jsx)("h3",{className:"h3 form-title",children:"Contact Form"}),(0,n.jsxs)("form",{className:"form",onSubmit:e=>{e.preventDefault()},children:[(0,n.jsxs)("div",{className:"input-wrapper",children:[(0,n.jsx)("input",{type:"text",name:"fullname",className:"form-input",placeholder:"Full name",required:!0,value:e.fullname,onChange:l}),(0,n.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Email address",required:!0,value:e.email,onChange:l})]}),(0,n.jsx)("textarea",{name:"message",className:"form-input",placeholder:"Your Message",required:!0,value:e.message,onChange:l}),(0,n.jsxs)("button",{className:"form-btn",type:"submit",disabled:!s,children:[(0,n.jsx)("ion-icon",{name:"paper-plane"}),(0,n.jsx)("span",{children:"Send Message"})]})]})]})}function c(e){let{isActive:a}=e;return(0,n.jsxs)("article",{className:"contact ".concat(a?"active":""),children:[(0,n.jsx)("header",{children:(0,n.jsx)("h2",{className:"h2 article-title",children:"Contact"})}),(0,n.jsx)("section",{className:"mapbox","data-mapbox":!0,children:(0,n.jsx)("figure",{children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.63804280147!2d46.49288314717239!3d24.724831573306542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1721416699865!5m2!1sen!2ssa",width:"400",height:"300",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),(0,n.jsx)(l,{})]})}function i(){return(0,n.jsx)(c,{isActive:"/contact"===(0,t.usePathname)()})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=5520)}),_N_E=e.O()}]);