(this["webpackJsonpeasyclean-backend"]=this["webpackJsonpeasyclean-backend"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(11),i=a.n(c),r=(a(83),a(22)),o=(a(84),a(29)),d=a.p+"static/media/que.cce4b359.svg",l=a(69),j=a(175),b=(a(54),a(49),a(55),a(62),a(176)),u=a(178),h=a(174),m=a(177),f=a(170),g=a(172),p=a.p+"static/media/pro.294938a1.svg",O=a(9),v=Object(f.a)((function(e){return{paper:{fontFamily:"Montserrat",marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},avatar:{width:"15w",height:"15vw"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var x=function(e){var t=e.code,a=Object(n.useState)(!1),s=Object(r.a)(a,2),c=s[0],i=s[1],d=Object(n.useState)(!0),l=Object(r.a)(d,2),j=l[0],f=l[1],x=Object(n.useState)(!0),w=Object(r.a)(x,2),y=w[0],C=w[1],S=Object(n.useState)(""),P=Object(r.a)(S,2),F=P[0],I=P[1],k=Object(n.useState)(""),q=Object(r.a)(k,2),A=q[0],M=q[1];console.log(t);var N=v();return Object(O.jsx)("div",{children:Object(O.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(h.a,{}),Object(O.jsxs)("div",{className:N.paper,children:[Object(O.jsx)("img",{className:N.avatar,src:p}),Object(O.jsx)("h1",{fontFamily:"Montserrat",children:"Reset Password"}),Object(O.jsxs)("form",{className:N.form,noValidate:!0,children:[Object(O.jsx)(b.a,{disabled:c,fontFamily:"Montserrat",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password1",value:F,onChange:function(e){return I(e.target.value)}}),Object(O.jsx)(b.a,{disabled:c,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm Password",type:"password",onChange:function(e){return M(e.target.value)},id:"password2",value:A}),Object(O.jsx)(u.a,{disabled:c,fullWidth:!0,variant:"contained",color:"primary",onClick:function(){F===A&&(i(!0),o.a.auth().confirmPasswordReset(t,F).then((function(){console.log("changed"),C(!1)})).catch((function(){console.log("nah"),f(!1)})))},className:N.submit,children:"Confirm"})]}),Object(O.jsx)("div",{hidden:y,children:"Password successfully changed!!"}),Object(O.jsxs)("div",{hidden:j,children:[Object(O.jsx)("div",{children:"Something went wrong :("}),Object(O.jsx)("div",{children:"Please contact Administrator"}),Object(O.jsx)("div",{children:"iit2019232@iiita.ac.in"})]})]}),Object(O.jsx)(m.a,{mt:8})]})})},w=Object(l.a)({typography:{fontFamily:["Montserrat"].join(",")}});o.a.initializeApp({apiKey:"AIzaSyAeoaFkcxcOgqczZHcoJwA_S-3rq2JNoqM",authDomain:"easyclean-se.firebaseapp.com",databaseURL:"https://easyclean-se-default-rtdb.firebaseio.com",projectId:"easyclean-se",storageBucket:"easyclean-se.appspot.com",messagingSenderId:"16498016959",appId:"1:16498016959:web:b401877f2b0a32a0ff7c0a",measurementId:"G-KDCVYEE9H3"}),o.a.auth(),new o.a.auth.GoogleAuthProvider;var y=function(){function e(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]===e)return n[1]}return!1}var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(r.a)(i,2),b=l[0],u=l[1];return Object(n.useEffect)((function(){e("oobCode")?o.a.auth().verifyPasswordResetCode(e("oobCode")).then((function(e){c(!0)})).catch((function(){u(!0)})):u(!0)})),s?Object(O.jsx)(j.a,{theme:w,children:Object(O.jsx)(x,{code:e("oobCode")})}):b?Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)("div",{class:"mainbox",children:[Object(O.jsx)("div",{class:"err",children:"4"}),Object(O.jsx)("img",{src:d,class:"far spinner"}),Object(O.jsx)("div",{class:"err2",children:"4"}),Object(O.jsxs)("div",{class:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(O.jsxs)("p",{children:["Let's go to ",Object(O.jsx)("a",{href:"https://www.google.com/",children:"Google"})," and try from there."]})]})]})," "]}):Object(O.jsx)("div",{class:"loading",children:" Loading . . . "})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),C()},83:function(e,t,a){},84:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.6eff6fa4.chunk.js.map