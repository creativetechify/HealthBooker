"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(n,t,e){e(2791);var i=e(184);t.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},564:function(n,t,e){e.r(t);var i=e(4165),o=e(5861),d=e(9439),r=e(2791),l=e(3321),s=e(2529),c=e(4956),a=e(4971),u=e(5318),v=e(3200),h=e(9434),p=e(456),x=e(3263),m=e(3402),j=(e(5108),e(184));t.default=function(){var n,t=(0,r.useState)([]),e=(0,d.Z)(t,2),f=e[0],g=e[1],b=(0,h.I0)(),k=(0,h.v9)((function(n){return n.root})).loading,Z=(0,p.Z)(localStorage.getItem("token")).userId,I=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b((0,u.K4)(!0)),n.next=4,(0,a.Z)("/appointment/getallappointments?search=".concat(Z));case 4:e=n.sent,g(e),b((0,u.K4)(!1)),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}();(0,r.useEffect)((function(){I()}),[]);var A=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e,o,d,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.ZP.promise(x.Z.put("/appointment/completed",{appointid:null===t||void 0===t?void 0:t._id,doctorId:null===t||void 0===t||null===(e=t.doctorId)||void 0===e?void 0:e._id,doctorname:"".concat(null===t||void 0===t||null===(o=t.userId)||void 0===o?void 0:o.firstname," ").concat(null===t||void 0===t||null===(d=t.userId)||void 0===d?void 0:d.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:r=n.sent,r.data,I(),n.next=11;break;case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.Z,{}),k?(0,j.jsx)(v.Z,{}):(0,j.jsxs)("section",{className:"container notif-section",children:[(0,j.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),f.length>0?(0,j.jsx)("div",{className:"appointments",children:(0,j.jsxs)("table",{children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"S.No"}),(0,j.jsx)("th",{children:"Doctor"}),(0,j.jsx)("th",{children:"Patient"}),(0,j.jsx)("th",{children:"Appointment Date"}),(0,j.jsx)("th",{children:"Appointment Time"}),(0,j.jsx)("th",{children:"Booking Date"}),(0,j.jsx)("th",{children:"Booking Time"}),(0,j.jsx)("th",{children:"Status"}),Z===(null===(n=f[0].doctorId)||void 0===n?void 0:n._id)?(0,j.jsx)("th",{children:"Action"}):(0,j.jsx)(j.Fragment,{})]})}),(0,j.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map((function(n,t){var e,i,o,d,r;return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:t+1}),(0,j.jsx)("td",{children:(null===n||void 0===n||null===(e=n.doctorId)||void 0===e?void 0:e.firstname)+" "+(null===n||void 0===n||null===(i=n.doctorId)||void 0===i?void 0:i.lastname)}),(0,j.jsx)("td",{children:(null===n||void 0===n||null===(o=n.userId)||void 0===o?void 0:o.firstname)+" "+(null===n||void 0===n||null===(d=n.userId)||void 0===d?void 0:d.lastname)}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.date}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.time}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.createdAt.split("T")[0]}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[1].split(".")[0]}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.status}),Z===(null===n||void 0===n||null===(r=n.doctorId)||void 0===r?void 0:r._id)?(0,j.jsx)("td",{children:(0,j.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===n||void 0===n?void 0:n.status)?"disable-btn":""),disabled:"Completed"===(null===n||void 0===n?void 0:n.status),onClick:function(){return A(n)},children:"Complete"})}):(0,j.jsx)(j.Fragment,{})]},null===n||void 0===n?void 0:n._id)}))})]})}):(0,j.jsx)(l.Z,{})]}),(0,j.jsx)(s.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=564.b6710604.chunk.js.map