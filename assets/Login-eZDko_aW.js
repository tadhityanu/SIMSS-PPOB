import{a as f,u as C,r as u,j as e,R as d,C as s,I as p,L as w,T as b,b as k}from"./index-CUjr-A8A.js";import{L as A}from"./LoginImage-CqdYnKcb.js";import{F as y}from"./FormInput-GZ-W-LSj.js";import{P as L,s as S}from"./apiConfig-BOjPIKd7.js";import{F as I}from"./index-tooShlfA.js";import{B as v}from"./button-CmrAK6wj.js";import"./SearchOutlined-DfunDZ8p.js";const F=(o,a,r)=>async n=>{await n({type:"LOGIN"}),L("/login",o).then(t=>{console.log(t);const c=t.data.token;return f.set("user-token",c),n({type:"LOAD_AUTH_SUCCESS",payload:{data:t==null?void 0:t.data}}),a&&a(t)}).catch(t=>{n({type:"LOAD_AUTH_FAILED"}),r&&r(t)})},{Text:l}=b,D=()=>{const o=C(),[a,r]=S.useMessage(),[n,t]=u.useState(null),[c,h]=u.useState(null),g=i=>{t(i.target.value)},m=i=>{h(i.target.value)},x=()=>{o(F({email:n,password:c},()=>{},j=>{a.open({type:"error",content:j})}))};return e.jsxs(e.Fragment,{children:[r,e.jsx(I,{layout:"vertical",onFinish:x,children:e.jsxs(d,{style:{height:"85vh",justifyContent:"center",alignItems:"center"},children:[e.jsx(s,{span:12,children:e.jsx(d,{style:{justifyContent:"center"},children:e.jsx(s,{span:12,children:e.jsxs(d,{gutter:[24,24],style:{justifyContent:"center",alignContent:"center"},children:[e.jsxs(s,{span:24,style:{display:"flex",gap:"12px",justifyContent:"center",alignItems:"center"},children:[e.jsx(p,{src:w,preview:!1}),e.jsx(l,{style:{fontSize:"18px",fontWeight:"bold"},children:"SIMS PPOB"})]}),e.jsx(s,{span:18,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:e.jsx(l,{style:{fontSize:"24px",textAlign:"center",fontWeight:"600"},children:"Masuk atau buat akun untuk memulai"})}),e.jsxs(s,{span:24,children:[e.jsx(y,{name:"Email",debounceChangeHandler:g}),e.jsx(y,{name:"Password",formName:"password",debounceChangeHandler:m,rules:[{required:!0,message:"Please input your password"},{min:8,message:"Password must be at least 8 character"}]})]}),e.jsx(s,{span:24,children:e.jsx(v,{size:"large",type:"primary",style:{width:"100%"},htmlType:"submit",children:"Masuk"})}),e.jsx(s,{span:24,style:{justifyContent:"center",alignContent:"center",display:"flex"},children:e.jsxs(l,{type:"grey",style:{textAlign:"center",fontWeight:"500"},children:["Belum punya akun? registrasi ",e.jsxs(k,{to:"/register",children:[" ",e.jsx(l,{type:"red",children:"di sini"})]})]})})]})})})}),e.jsx(s,{span:12,style:{display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"blue"},children:e.jsx(p,{height:"100vh",width:"100%",src:A,preview:!1,style:{objectFit:"cover"}})})]})})]})};export{D as default};
