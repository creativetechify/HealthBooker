"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,t){t(2791);var i=t(184);n.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},3158:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var i=t(4165),s=t(5861),o=t(9439),r=t(2791),a=t(4942),c=t(1413),l=t(3263),d=t(3402),u=t(4373),m=(t(0),t(184)),p=function(e){var n=e.setModalOpen,t=e.ele,p=(0,r.useState)({date:"",time:""}),v=(0,o.Z)(p,2),h=v[0],f=v[1],x=function(e){var n=e.target,t=n.name,i=n.value;return f((0,c.Z)((0,c.Z)({},h),{},(0,a.Z)({},t,i)))},j=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(s){var o,r,a,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(l.Z.post("/appointment/bookappointment",{doctorId:null===t||void 0===t||null===(o=t.userId)||void 0===o?void 0:o._id,date:h.date,time:h.time,doctorname:"".concat(null===t||void 0===t||null===(r=t.userId)||void 0===r?void 0:r.firstname," ").concat(null===t||void 0===t||null===(a=t.userId)||void 0===a?void 0:a.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:c=e.sent,c.data,n(!1),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"modal flex-center",children:(0,m.jsxs)("div",{className:"modal__content",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,m.jsx)(u.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,m.jsx)("div",{className:"register-container flex-center book",children:(0,m.jsxs)("form",{action:"https://formsubmit.co/learnwithfun4567@gmail.com",method:"POST",className:"register-form",children:[(0,m.jsx)("input",{type:"date",name:"date",className:"form-input",value:h.date,onChange:x}),(0,m.jsx)("input",{type:"time",name:"time",className:"form-input",value:h.time,onChange:x}),(0,m.jsx)("button",{type:"submit",className:"btn form-btn",onClick:j,children:"book"}),(0,m.jsx)("button",{type:"submit",className:"btn form-btn",onClick:j,children:"Pay Now"})]})})]})})})},v=function(e){var n,t,i,s,a=e.ele,c=(0,r.useState)(!1),l=(0,o.Z)(c,2),u=l[0],v=l[1],h=(0,r.useState)(localStorage.getItem("token")||""),f=(0,o.Z)(h,2),x=f[0];f[1];return(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("div",{className:"card-img flex-center",children:(0,m.jsx)("img",{src:(null===a||void 0===a||null===(n=a.userId)||void 0===n?void 0:n.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,m.jsxs)("h3",{className:"card-name",children:["Mr. ",(null===a||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.firstname)+" "+(null===a||void 0===a||null===(i=a.userId)||void 0===i?void 0:i.lastname)]}),(0,m.jsxs)("p",{className:"certification",children:[(0,m.jsx)("strong",{children:"Certification: "}),null===a||void 0===a?void 0:a.certification]}),(0,m.jsxs)("p",{className:"specialization",children:[(0,m.jsx)("strong",{children:"Specialization: "}),null===a||void 0===a?void 0:a.specialization]}),(0,m.jsxs)("p",{className:"experience",children:[(0,m.jsx)("strong",{children:"Experience: "}),null===a||void 0===a?void 0:a.experience,"yrs"]}),(0,m.jsxs)("p",{className:"phone",children:[(0,m.jsx)("strong",{children:"Phone: "}),null===a||void 0===a||null===(s=a.userId)||void 0===s?void 0:s.mobile]}),(0,m.jsxs)("p",{className:"fees",children:[(0,m.jsx)("strong",{children:"Fees per consultation: "}),"\u20b9 ",null===a||void 0===a?void 0:a.fees]}),(0,m.jsxs)("p",{className:"timing1",children:[(0,m.jsx)("strong",{children:"Session Duration: "}),null===a||void 0===a?void 0:a.timing1]}),(0,m.jsx)("button",{className:"btn appointment-btn",onClick:function(){if(""==x)return d.Am.error("You must log in first");v(!0)},children:"Book Appointment"}),u&&(0,m.jsx)(p,{setModalOpen:v,ele:a})]})},h=t(2529),f=t(4956),x=t(4971),j=t(3200),g=t(9434),N=t(5318),b=t(3321),k=function(){var e=(0,r.useState)([]),n=(0,o.Z)(e,2),t=n[0],a=n[1],c=(0,g.I0)(),l=(0,g.v9)((function(e){return e.root})).loading,d=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((0,N.K4)(!0)),e.next=3,(0,x.Z)("/doctor/getalldoctors");case 3:n=e.sent,a(n),c((0,N.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){d()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{}),l&&(0,m.jsx)(j.Z,{}),!l&&(0,m.jsxs)("section",{className:"container doctors",children:[(0,m.jsx)("h3",{className:"page-heading",children:"CST Expert"}),t.length>0?(0,m.jsx)("div",{className:"doctors-card-container",children:t.map((function(e){return(0,m.jsx)(v,{ele:e},e._id)}))}):(0,m.jsx)(b.Z,{})]}),(0,m.jsx)(h.Z,{})]})}}}]);
//# sourceMappingURL=158.43c161c8.chunk.js.map