import{aO as e,B as a,u as s,H as l,P as o,U as t,W as i,r as n,O as d,j as r,o as u,d as c,e as m,L as h,m as p,K as g,k as v,w as f,A as _,i as b,D as y}from"./index.a5116b01.js";import{_ as w}from"./VCheckbox.vue_vue_type_style_index_0_lang.b2130110.js";import{_ as k,a as x}from"./VInput.vue_vue_type_script_setup_true_lang.adbe0588.js";import{_ as V}from"./VControl.7628137c.js";import{_ as j}from"./AnimatedLogo.7cf672a4.js";import{u as S}from"./useNotyf.ff761b1d.js";const C=e();const P={class:"auth-wrapper-inner columns is-gapless"},A=_('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns mx-auto"><div class="column"><img class="hero-img" src="/assets/station.d05ed495.svg" alt="" width="450" height="450"></div></div></div></div></div>',1),L={class:"column is-4"},O={class:"hero is-fullheight is-white"},U={class:"hero-heading"},I=["checked"],W=m("span",null,null,-1),B={class:"auth-logo"},D={class:"hero-body"},K={class:"container"},N={class:"columns"},R={class:"column is-12"},T=m("div",{class:"auth-content"},[m("h2",null,"Welcome Back."),m("p",null,"Please sign in to your account")],-1),q={class:"auth-form-wrapper"},F=["onSubmit"],H={class:"login-form"},J={class:"login"},$=b(" Sign In "),z={class:"forgot-link has-text-centered"},E=b("Forgot Password?"),G=a({__name:"login",setup(e){const a=s(!1),_=l(),b=o(),G=t(),M=S(),Q=i(),X=G.query.redirect,Y=n({username:"admin",password:"admin"}),Z=async()=>{if(!a.value){a.value=!0;const e=await async function(e){try{const{data:a}=await C({url:"/auth/login/",method:"POST",data:e});return a}catch(a){throw a}}(Y);localStorage.setItem("user_id",JSON.stringify(e.id)),Q.setToken(e.token),M.dismissAll(),M.success(`Welcome back, ${e.username}`),X?b.push(X):b.push({name:"/app"}),a.value=!1}};return d({title:"Auth Login - Vuero"}),(e,s)=>{const l=j,o=r("RouterLink"),t=k,i=V,n=x,d=w,b=y;return u(),c("div",P,[A,m("div",L,[m("div",O,[m("div",U,[m("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:s[1]||(s[1]=h(p((e=>e.target.click()),["prevent"]),["space"]))},[m("input",{type:"checkbox",checked:!g(_).isDark,onChange:s[0]||(s[0]=(...e)=>g(_).onChange&&g(_).onChange(...e))},null,40,I),W],32),m("div",B,[v(o,{to:"/"},{default:f((()=>[v(l,{width:"36px",height:"36px"})])),_:1})])]),m("div",D,[m("div",K,[m("div",N,[m("div",R,[T,m("div",q,[m("form",{onSubmit:p(Z,["prevent"])},[m("div",H,[v(n,null,{default:f((()=>[v(i,{icon:"feather:user"},{default:f((()=>[v(t,{modelValue:Y.username,"onUpdate:modelValue":s[2]||(s[2]=e=>Y.username=e),type:"text",placeholder:"Username",autocomplete:"username"},null,8,["modelValue"])])),_:1})])),_:1}),v(n,null,{default:f((()=>[v(i,{icon:"feather:lock"},{default:f((()=>[v(t,{modelValue:Y.password,"onUpdate:modelValue":s[3]||(s[3]=e=>Y.password=e),type:"password",placeholder:"Password",autocomplete:"current-password"},null,8,["modelValue"])])),_:1})])),_:1}),v(n,null,{default:f((()=>[v(i,{class:"setting-item"},{default:f((()=>[v(d,{label:"Remember me",paddingless:""})])),_:1})])),_:1}),m("div",J,[v(b,{loading:a.value,color:"primary",type:"submit",bold:"",fullwidth:"",raised:""},{default:f((()=>[$])),_:1},8,["loading"])]),m("div",z,[v(o,{to:"/auth/forgot"},{default:f((()=>[E])),_:1})])])],40,F)])])])])])])])])}}});export{G as default};