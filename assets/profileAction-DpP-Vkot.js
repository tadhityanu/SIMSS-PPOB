import{G as o,e as O,U as T}from"./apiConfig-BOjPIKd7.js";const U="/simss-ppob/assets/ProfilePhoto-1eMXPXP-.png",I=()=>E=>{E({type:"UNMOUNT_PROFILE"})},L=(E,_)=>async P=>{await P({type:"GET_PROFILE"}),o("/profile").then(a=>(P({type:"GET_PROFILE_SUCCESS",payload:{data:a.data}}),E&&E(a))).catch(a=>(P({type:"GET_PROFILE_FAILED"}),_&&_(a)))},r=(E,_,P)=>async a=>{await a({type:"UPDATE_PROFILE"}),O("/profile/update",E).then(t=>(a({type:"UPDATE_PROFILE_SUCCESS",payload:{data:t==null?void 0:t.data}}),_&&_(t))).catch(t=>(a({type:"UPDATE_PROFILE_FAILED"}),P&&P(t)))},A=(E,_,P)=>async a=>{await a({type:"UPDATE_PROFILE_PHOTO"}),T("/profile/image",E).then(t=>(a({type:"UPDATE_PROFILE_PHOTO_SUCCESS",payload:{data:t==null?void 0:t.data}}),_&&_(t))).catch(t=>(a({type:"UPDATE_PROFILE_PHOTO_FAILED"}),P&&P(t)))};export{U as P,A as a,I as b,L as g,r as u};
