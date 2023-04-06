import{B as e,S as a,u as l,c as t,J as o,z as n,o as s,a as r,e as i,L as u,m as c,t as d,f as p,b as m,K as v,a9 as g,d as f,g as y,aa as b,U as h,j as k,w as x,k as w,l as _,i as C,F as P,h as j,ab as $,ac as B,v as K,r as L,a6 as N,a7 as V,ad as M,ae as S,Y as R,M as T,af as z,ag as O,D as F,O as W}from"./index.a5116b01.js";import{_ as D}from"./VControl.7628137c.js";import{u as H}from"./viewWrapper.3c54c69e.js";const E={class:"modal-content"},A={class:"modal-card"},I={class:"modal-card-head"},Q=[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1)],q={class:"inner-content"},G=e({__name:"VModal",props:{title:null,size:{default:void 0},actions:{default:void 0},open:{type:Boolean},rounded:{type:Boolean},noscroll:{type:Boolean},noclose:{type:Boolean},tabs:{type:Boolean},cancelLabel:{default:void 0}},emits:["close"],setup(e,{emit:f}){const y=e,{t:b}=a(),h=l(!1),k=t((()=>y.cancelLabel||b("cancel-label")));return o((()=>{y.noscroll&&y.open?(document.documentElement.classList.add("no-scroll"),h.value=!0):h.value&&y.noscroll&&!y.open&&(document.documentElement.classList.remove("no-scroll"),h.value=!1)})),n((()=>{document.documentElement.classList.remove("no-scroll")})),(a,l)=>(s(),r(g,{to:"body"},[i("div",{class:p([[e.open&&"is-active",e.size&&`is-${e.size}`],"modal v-modal"])},[i("div",{class:"modal-background v-modal-close",tabindex:"0",onKeydown:l[0]||(l[0]=u(c((()=>!1===e.noclose&&f("close")),["prevent"]),["space"])),onClick:l[1]||(l[1]=()=>!1===e.noclose&&f("close"))},null,32),i("div",E,[i("div",A,[i("header",I,[i("h3",null,d(e.title),1),i("button",{class:"v-modal-close ml-auto","aria-label":"close",tabindex:"0",onKeydown:l[2]||(l[2]=u(c((e=>f("close")),["prevent"]),["space"])),onClick:l[3]||(l[3]=e=>f("close"))},Q,32)]),i("div",{class:p(["modal-card-body",[y.tabs&&"has-tabs"]])},[i("div",q,[m(a.$slots,"content")])],2),i("div",{class:p(["modal-card-foot",["center"===e.actions&&"is-centered","right"===e.actions&&"is-end"]])},[m(a.$slots,"cancel",{close:()=>f("close")},(()=>[i("a",{tabindex:"0",class:p(["button v-button v-modal-close",[e.rounded&&"is-rounded"]]),onKeydown:l[4]||(l[4]=u(c((e=>f("close")),["prevent"]),["space"])),onClick:l[5]||(l[5]=e=>f("close"))},d(v(k)),35)])),m(a.$slots,"action",{close:()=>f("close")})],2)])])],2)]))}}),U={class:"section-placeholder"},X={class:"placeholder-content"},Y={class:"dark-inverted"},J={key:0},Z=e({__name:"VPlaceholderSection",props:{title:null,subtitle:{default:void 0}},setup(e){const a=e;return(e,l)=>(s(),f("div",U,[i("div",X,[m(e.$slots,"image"),i("h3",Y,d(a.title),1),a.subtitle?(s(),f("p",J,d(a.subtitle),1)):y("",!0),m(e.$slots,"action")])]))}}),ee={class:"v-flex"},ae=e({__name:"VFlex",props:{inline:{type:Boolean},flexDirection:{default:"row"},flexWrap:{default:"nowrap"},justifyContent:{default:"normal"},alignItems:{default:"normal"},alignContent:{default:"normal"},rowGap:{default:"normal"},columnGap:{default:"normal"}},setup(e){const a=e;b((e=>({"505254cf":v(l),"099f6015":a.flexDirection,"3e5cf1f4":a.flexWrap,b9dbbdcc:a.justifyContent,d28be4e8:a.alignItems,e9fdd176:a.alignContent,"4bbd0e26":a.rowGap,"76786baf":a.columnGap})));const l=t((()=>a.inline?"inline-flex":"flex"));return(e,a)=>(s(),f("div",ee,[m(e.$slots,"default")]))}}),le={class:"pagination-list"},te=C(" 1 "),oe={key:0},ne=[i("span",{class:"pagination-ellipsis"},"…",-1)],se={key:1},re=[i("span",{class:"pagination-ellipsis"},"…",-1)],ie={key:2},ue=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),ce=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),de=e({__name:"VFlexPagination",props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(e,{emit:l}){const o=e,{t:n}=a(),g=h(),b=t((()=>Math.ceil(o.totalItems/o.itemPerPage)||1)),j=t((()=>b.value>o.maxLinksDisplayed+2?o.maxLinksDisplayed+2:b.value)),$=t((()=>{const e=[];let a=o.currentPage-Math.floor(j.value/2),l=a+(j.value-Math.ceil(j.value%2));a<1&&(a=1,l=a+(j.value-1)),l>b.value&&(l=b.value,a=l-(j.value-1));for(let t=a;t<=l;t+=1)t!==a&&t!==l&&e.push(t);return e})),B=t((()=>b.value>1)),K=(e=1)=>{if(o.noRouter)return{};const a=Math.max(1,Math.min(e,b.value)),l={...g.query};return o.routerQueryKey&&(l[o.routerQueryKey]=a<=1?void 0:a),{name:g.name,params:g.params,query:l}},L=(e,a=1)=>{const t=Math.max(1,Math.min(a,b.value));if(l("update:currentPage",t),o.noRouter)return e.preventDefault(),e.stopPropagation(),!1};return(a,l)=>{const t=k("RouterLink"),o=ae;return s(),r(o,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:x((()=>[i("ul",le,[m(a.$slots,"before-pagination"),i("li",null,[w(t,{to:K(1),tabindex:"0",class:p(["pagination-link",[1===e.currentPage&&"is-current"]]),"aria-label":v(n)("goto-page-title",{page:1}),onKeydown:l[0]||(l[0]=u(c((e=>e.target.click()),["prevent"]),["space"])),onClick:l[1]||(l[1]=e=>L(e,1))},{default:x((()=>[te])),_:1},8,["to","aria-label","class"])]),v(B)&&(0===v($).length||v($)[0]>2)?(s(),f("li",oe,ne)):y("",!0),(s(!0),f(P,null,_(v($),(a=>(s(),f("li",{key:a},[w(t,{to:K(a),tabindex:"0",class:p(["pagination-link",[e.currentPage===a&&"is-current"]]),"aria-label":v(n)("goto-page-title",{page:a}),"aria-current":e.currentPage===a?"page":void 0,onKeydown:l[2]||(l[2]=u(c((e=>e.target.click()),["prevent"]),["space"])),onClick:e=>L(e,a)},{default:x((()=>[C(d(a),1)])),_:2},1032,["to","aria-label","aria-current","class","onClick"])])))),128)),v(B)&&v($)[v($).length-1]<v(b)-1?(s(),f("li",se,re)):y("",!0),v(B)?(s(),f("li",ie,[w(t,{to:K(v(b)),tabindex:"0",class:p(["pagination-link",[e.currentPage===v(b)&&"is-current"]]),"aria-label":v(n)("goto-page-title",{page:v(b)}),onKeydown:l[3]||(l[3]=u(c((e=>e.target.click()),["prevent"]),["space"])),onClick:l[4]||(l[4]=e=>L(e,v(b)))},{default:x((()=>[C(d(v(b)),1)])),_:1},8,["to","aria-label","class"])])):y("",!0),m(a.$slots,"after-pagination")]),m(a.$slots,"before-navigation"),w(t,{to:K(e.currentPage-1),tabindex:"0",class:"pagination-previous has-chevron",onKeydown:l[5]||(l[5]=u(c((e=>e.target.click()),["prevent"]),["space"])),onClick:l[6]||(l[6]=a=>L(a,e.currentPage-1))},{default:x((()=>[ue])),_:1},8,["to"]),w(t,{to:K(e.currentPage+1),tabindex:"0",class:"pagination-next has-chevron",onKeydown:l[7]||(l[7]=u(c((e=>e.target.click()),["prevent"]),["space"])),onClick:l[8]||(l[8]=a=>L(a,e.currentPage+1))},{default:x((()=>[ce])),_:1},8,["to"]),m(a.$slots,"after-navigation")])),_:3})}}});function pe(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{de:{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["Gehe zu Seite ",l(t("page"))])}},en:{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["Goto page ",l(t("page"))])}},"es-MX":{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["Ir a la página ",l(t("page"))])}},es:{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["Ir a la página ",l(t("page"))])}},fr:{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["Aller à la page ",l(t("page"))])}},"zh-CN":{"goto-page-title":e=>{const{normalize:a,interpolate:l,named:t}=e;return a(["转到第",l(t("page")),"页"])}}}})}pe(de);const me=["data-th"],ve=e({__name:"VFlexTableCell",props:{column:{default:()=>({})}},setup(e){const a=e;return(e,l)=>(s(),f("div",{class:p(["flex-table-cell is-relative",[a.column.bold&&"is-bold",a.column.media&&"is-media",!0===a.column.grow&&"is-grow","lg"===a.column.grow&&"is-grow-lg","xl"===a.column.grow&&"is-grow-xl",a.column.scrollX&&!a.column.scrollY&&"has-slimscroll-x",!a.column.scrollX&&a.column.scrollY&&"has-slimscroll",a.column.scrollX&&a.column.scrollY&&"has-slimscroll-all","end"===a.column.align&&"cell-end","center"===a.column.align&&"cell-center",a.column.cellClass]]),"data-th":a.column.label||void 0},[m(e.$slots,"default")],10,me))}}),ge=e({props:{id:{type:String,required:!0},label:{type:String,default:void 0},modelValue:{type:String,default:void 0},noRouter:{type:Boolean,default:void 0},routerQueryKey:{type:String,default:"sort"}},emits:["update:modelValue"],setup(e,a){const l=h(),o=t((()=>{var a,t;return null!=(t=null!=(a=e.modelValue)?a:l.query[e.routerQueryKey])?t:""})),n=t((()=>o.value===`${e.id}:asc`)),s=t((()=>o.value===`${e.id}:desc`)),r=t((()=>n.value?`${e.id}:desc`:s.value?void 0:`${e.id}:asc`)),i=t((()=>{if(e.noRouter)return{};const a={...l.query};return e.routerQueryKey&&(a[e.routerQueryKey]=r.value),{name:l.name,params:l.params,query:a}})),u=l=>{if(a.emit("update:modelValue",r.value),e.noRouter)return l.preventDefault(),l.stopPropagation(),!1};return()=>{var l,t;const c=null==(t=null==(l=a.slots)?void 0:l.default)?void 0:t.call(l,{isDesc:s.value,isAsc:n.value,nextSort:r.value,value:o.value}),d=j($,{to:i.value,onClick:u,onKeydown(e){"Space"===e.code&&(e.preventDefault(),e.stopPropagation(),e.target instanceof HTMLAnchorElement&&e.target.dispatchEvent(new MouseEvent("click")))}},{default(){const a=j("span",{key:`${o.value}`,class:"is-inline"},j("span",{class:"ml-3 iconify is-inline","data-icon":n.value?"fa:sort-asc":s.value?"fa:sort-desc":"fa:sort"}));return[null!=c?c:e.label,a]}});return j("span",{},d)}}}),fe=Symbol(),ye=e=>e,be=({key:e,order:a,a:l,b:t})=>{const o=l[e],n=t[e];return"string"==typeof o?"asc"===a?o.localeCompare(n):n.localeCompare(o):o>n?"asc"===a?1:-1:o<n?"asc"===a?-1:1:0};e({props:{data:{type:[Array,Function],default:void 0},columns:{type:Object,default:void 0},sort:{type:String,default:void 0},searchTerm:{type:String,default:void 0},limit:{type:Number,default:void 0},page:{type:Number,default:void 0},total:{type:Number,default:void 0},debounceSearch:{type:Number,default:300}},emits:["update:sort","update:page","update:limit","update:searchTerm"],setup(e,a){const n=l(),s=l(!1),r=l(""),i=t({get:()=>{var a;return null!=(a=e.sort)?a:r.value},set(l){void 0===e.sort?r.value=l:a.emit("update:sort",l)}}),u=l(""),c=t({get:()=>{var a;return null!=(a=e.searchTerm)?a:u.value},set(l){void 0===e.searchTerm?u.value=l:a.emit("update:searchTerm",l)}}),d=l(1),p=t({get:()=>{var a;return null!=(a=e.page)?a:d.value},set(l){void 0===e.page?d.value=l:a.emit("update:page",l)}}),m=l(10),v=t({get:()=>{var a;return Math.max(1,null!=(a=e.limit)?a:m.value)},set(l){void 0===e.limit?m.value=l:a.emit("update:limit",l)}}),g=t((()=>{const a=e.columns;if(!a)return a;const l={};return Object.keys(a).reduce(((e,l)=>{const t=a[l];return"string"==typeof t?e[l]={format:ye,label:t,key:l}:"object"==typeof t&&(e[l]={format:ye,label:l,key:l,...t},!0===t.sortable&&(t.renderHeader?e[l].renderHeader=()=>j(ge,{id:l,noRouter:!0,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e},{default:t.renderHeader}):e[l].renderHeader=()=>{var e;return j(ge,{id:l,label:null!=(e=t.label)?e:l,noRouter:!0,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e})}),!0!==t.searchable||t.sort||(e[l].sort=be)),e}),l),l})),f=t((()=>{let a=n.value;if(!a)return a;if("function"==typeof e.data)return a;if(h.value){const e=g.value?Object.values(g.value).filter((e=>!(!e||"string"==typeof e)&&!0===e.searchable)):[];if(e.length){const l=new RegExp(h.value,"i");a=a.filter(((a,t)=>e.some((e=>{if(!e.key)return!1;const o=a[e.key];return e.filter?e.filter({searchTerm:h.value,value:o,row:a,column:e,index:t}):"string"==typeof o&&o.match(l)}))))}}return a})),y=t((()=>{let a=f.value;if(!a)return a;if("function"==typeof e.data)return a;if(i.value&&i.value.includes(":")){const[e,l]=i.value.split(":"),t=g.value?Object.values(g.value).find((a=>!(!a||"string"==typeof a)&&(!0===a.sortable&&a.key===e))):null;if(t){const e=[...a];e.sort(((e,a)=>t.key&&t.sort?t.sort({order:l,column:t,key:t.key,a:e,b:a}):0)),a=e}}return a})),b=t((()=>{if("function"==typeof e.data)return n.value;if(!n.value)return n.value;let a=y.value;return null==a?void 0:a.slice(x.value,x.value+v.value)})),h=B(c,e.debounceSearch),k=t((()=>{var a,l,t;return null!=(t=null!=(l=e.total)?l:null==(a=y.value)?void 0:a.length)?t:0})),x=t((()=>(p.value-1)*v.value)),w=t((()=>k.value?Math.ceil(k.value/v.value):0));async function _(a){if("function"==typeof e.data){s.value=!0;try{n.value=await e.data({searchTerm:h.value,start:x.value,limit:v.value,sort:i.value,controller:a})}finally{s.value=!1}}}K([h,v],(()=>{1!==p.value&&(p.value=1)})),o((async a=>{let l;"function"==typeof e.data?(l=new AbortController,await _(l)):n.value=e.data,a((()=>{null==l||l.abort()}))}));const C=L({data:b,columns:g,loading:s,searchInput:c,searchTerm:h,start:x,page:p,limit:v,sort:i,total:k,totalPages:w,fetchData:_});return N(fe,C),a.expose(C),()=>{var e,l;const t=null==(l=(e=a.slots).default)?void 0:l.call(e,C);return j("div",{class:"flex-table-wrapper"},t)}}});const he={key:0,class:"flex-table-header"},ke=["tabindex","onKeydown","onClick"],xe={key:0},we={class:"language-json py-4"},_e=e({__name:"VFlexTable",props:{data:{default:()=>[]},columns:{default:void 0},printObjects:{type:Boolean},reactive:{type:Boolean},compact:{type:Boolean},rounded:{type:Boolean},separators:{type:Boolean},clickable:{type:Boolean},subtable:{type:Boolean},noHeader:{type:Boolean}},emits:["rowClick"],setup(e,{emit:a}){const l=e,o=V(fe,null),n=t((()=>(null==o?void 0:o.data)?o.data:l.reactive?M(l.data)?l.data:L(l.data):S(l.data))),g=e=>e,b=t((()=>{var e;const a=null!=(e=null==o?void 0:o.columns)?e:l.columns;let t=[];if(a)for(const[l,o]of Object.entries(a))"string"==typeof o?t.push({format:g,label:o,key:l}):t.push({format:g,label:l,key:l,...o});else if(n.value.length>0)for(const[l]of Object.entries(n.value[0]))t.push({format:g,label:l,key:l});return t}));return(t,o)=>{const g=ve;return s(),f("div",{class:p(["flex-table",[l.compact&&"is-compact",l.rounded&&"is-rounded",l.separators&&"with-separators",l.noHeader&&"no-header",l.clickable&&"is-table-clickable",l.subtable&&"sub-table"]])},[m(t.$slots,"header",{},(()=>[l.noHeader?y("",!0):(s(),f("div",he,[(s(!0),f(P,null,_(v(b),(e=>m(t.$slots,"header-column",{key:"col"+e.key,column:e},(()=>[e.renderHeader?(s(),r(R({render:e.renderHeader}),{key:0,class:p([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},null,8,["class"])):(s(),f("span",{key:1,class:p([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},d(e.label),3))])))),128))]))])),m(t.$slots,"body",{},(()=>[(s(!0),f(P,null,_(v(n),((o,n)=>(s(),f(P,{key:n},[m(t.$slots,"body-row-pre",{row:o,columns:v(b),index:n}),i("div",{class:p(["flex-table-item",[l.clickable&&"is-clickable"]]),tabindex:l.clickable?0:void 0,onKeydown:u(c((()=>{l.clickable&&a("rowClick",o,n)}),["prevent"]),["space"]),onClick:()=>{l.clickable&&a("rowClick",o,n)}},[m(t.$slots,"body-row",{row:o,columns:v(b),index:n},(()=>[(s(!0),f(P,null,_(v(b),(a=>(s(),r(g,{key:"row"+a.key,column:a},{default:x((()=>[m(t.$slots,"body-cell",{row:o,column:a,index:n,value:a.format(o[a.key],o,n)},(()=>[a.renderRow?(s(),r(R({render:()=>{var e;return null==(e=a.renderRow)?void 0:e.call(a,o,a,n)}}),{key:0})):"object"==typeof a.format(o[a.key],o,n)?(s(),f("span",{key:1,class:p([a.cellClass,a.inverted&&"dark-inverted",!a.inverted&&(a.bold?"dark-text":"light-text")])},[e.printObjects?(s(),f("details",xe,[i("div",we,[i("pre",null,[i("code",null,d(a.format(o[a.key],o,n)),1)])])])):y("",!0)],2)):(s(),f("span",{key:2,class:p([a.cellClass,a.inverted&&"dark-inverted",!a.inverted&&(a.bold?"dark-text":"light-text")])},d(a.format(o[a.key],o,n)),3))]))])),_:2},1032,["column"])))),128))]))],42,ke),m(t.$slots,"body-row-post",{row:o,columns:v(b),index:n})],64)))),128))]))],2)}}}),Ce=e({__name:"VTag",props:{label:{default:void 0},color:{default:void 0},size:{default:void 0},rounded:{type:Boolean},curved:{type:Boolean},outlined:{type:Boolean},elevated:{type:Boolean},remove:{type:Boolean}},setup(e){const a=e;return(e,l)=>(s(),f("small",{class:p(["tag",[a.color&&"is-"+a.color,a.size&&"is-"+a.size,a.rounded&&"is-rounded",a.curved&&"is-curved",a.outlined&&"is-outlined",a.elevated&&"is-elevated",a.remove&&"is-delete"]])},[m(e.$slots,"default",{},(()=>[C(d(a.label),1)]))],2))}}),Pe={class:"page-placeholder"},je={class:"placeholder-content"},$e={class:"dark-inverted"},Be=e({__name:"VPlaceholderPage",props:{title:null,subtitle:{default:void 0},larger:{type:Boolean}},setup(e){const a=e;return(e,l)=>(s(),f("div",Pe,[i("div",je,[m(e.$slots,"image"),i("h3",$e,d(a.title),1),a.subtitle?(s(),f("p",{key:0,class:p([a.larger&&"is-larger"])},d(a.subtitle),3)):y("",!0),m(e.$slots,"action")])]))}}),Ke="/assets/projects-dark.89f8c300.svg",Le=[{id:0,name:"Website Redesign",employeeName:"Blake & Mortimer",status:"Опубликован",date:"23.10.2023"},{id:1,name:"Mobile App Rework",employeeName:"Blake & Mortimer",status:"В ожидании",date:"22.10.2023"},{id:2,name:"ERP Solution Development",employeeName:"Best Mart",status:"В ожидании",date:"22.10.2023"},{id:3,name:"Lorem ipsum",employeeName:"Los Fragueros",status:"В ожидании",date:"24.10.2023"},{id:4,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"Опубликован",date:"22.10.2023"},{id:5,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"В ожидании",date:"22.10.2023"},{id:6,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"В ожидании",date:"22.10.2023"},{id:7,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"Опубликован",date:"22.10.2023"},{id:8,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"В ожидании",date:"22.10.2023"},{id:9,name:"Website Proof Of Concept",employeeName:"Los Fragueros",status:"Опубликован",date:"22.10.2023"}],Ne={class:"list-flex-toolbar is-reversed"},Ve={class:"tabs-inner"},Me={class:"tabs"},Se={class:"mr-3"},Re=[i("span",null,"Все",-1)],Te=[i("span",null,"Опубликованные",-1)],ze=[i("span",null,"В Ожидании",-1)],Oe=i("li",{class:"tab-naver"},null,-1),Fe=C(" Создать страницу "),We={class:"flex-list-wrapper flex-list-v2"},De=i("img",{class:"light-image",src:"/assets/search-4.66fa8833.svg",alt:""},null,-1),He=i("img",{class:"dark-image",src:"/assets/search-4-dark.9a71a7e6.svg",alt:""},null,-1),Ee={key:1,class:"tab-content is-active"},Ae={class:"item-name dark-inverted"},Ie={class:"item-meta"},Qe=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:clock"},null,-1),qe=C(" Предпросмотр "),Ge=C(" Редактировать "),Ue=C(" Удалить "),Xe={key:2,class:"tab-content is-active"},Ye=i("img",{class:"light-image is-larger",src:"/assets/projects.6491e794.svg",alt:""},null,-1),Je=i("img",{class:"dark-image is-larger",src:Ke,alt:""},null,-1),Ze={key:3,class:"tab-content is-active"},ea=i("img",{class:"light-image is-larger",src:"/assets/projects.6491e794.svg",alt:""},null,-1),aa=i("img",{class:"dark-image is-larger",src:Ke,alt:""},null,-1),la=C("Удалить"),ta=e({__name:"FlexListV2",props:{activeTab:{default:"all"}},setup(e){const a=e,o=l(!1),n=Le,m=l(""),g=l(a.activeTab),b={name:"Name",status:"Status",actions:{label:"Actions",align:"end"}},h=t((()=>{if(m.value){const e=new RegExp(m.value,"i");return n.filter((a=>a.name.match(e)||a.employeeName.match(e)||a.status.match(e)||a.date.match(e)))}return n}));return(e,a)=>{const l=D,t=F,n=Be,k=Ce,j=ve,$=_e,B=de,K=Z,L=G;return s(),f("div",null,[i("div",Ne,[w(l,{icon:"feather:search"},{default:x((()=>[T(i("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[z,m.value]])])),_:1}),i("div",Ve,[i("div",Me,[i("ul",Se,[i("li",{class:p(["all"===g.value&&"is-active"])},[i("a",{tabindex:"0",onKeydown:a[1]||(a[1]=u(c((e=>g.value="all"),["prevent"]),["space"])),onClick:a[2]||(a[2]=e=>g.value="all")},Re,32)],2),i("li",{class:p(["publish"===g.value&&"is-active"])},[i("a",{tabindex:"0",onKeydown:a[3]||(a[3]=u(c((e=>g.value="publish"),["prevent"]),["space"])),onClick:a[4]||(a[4]=e=>g.value="publish")},Te,32)],2),i("li",{class:p(["pending"===g.value&&"is-active"])},[i("a",{tabindex:"0",onKeydown:a[5]||(a[5]=u(c((e=>g.value="pending"),["prevent"]),["space"])),onClick:a[6]||(a[6]=e=>g.value="pending")},ze,32)],2),Oe]),w(t,{color:"primary",rounded:"",to:"/app/pages/create"},{default:x((()=>[Fe])),_:1})])])]),i("div",We,["all"===g.value&&0===v(h).length?(s(),r(n,{key:0,title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:x((()=>[De,He])),_:1})):y("",!0),"all"===g.value?(s(),f("div",Ee,[v(h).length?(s(),r($,{key:0,data:v(h),columns:v(b),rounded:""},{body:x((()=>[w(O,{name:"list",tag:"div",class:"flex-list-inner"},{default:x((()=>[(s(!0),f(P,null,_(v(h),(e=>(s(),f("div",{key:e.id,class:"flex-table-item"},[w(j,null,{default:x((()=>[w(k,{rounded:""},{default:x((()=>[C(d(e.name),1)])),_:2},1024)])),_:2},1024),w(j,{column:{media:!0,grow:!0}},{default:x((()=>[i("div",null,[i("span",Ae,d(e.employeeName),1),i("span",Ie,[i("span",null,[C(d(e.status)+" ",1),Qe,C(" "+d(e.date),1)])])])])),_:2},1024),w(j,null,{default:x((()=>[w(t,{color:"primary"},{default:x((()=>[qe])),_:1}),w(t,{color:"info",class:"mx-2",to:"/app/pages/edit"},{default:x((()=>[Ge])),_:1}),w(t,{color:"danger",onClick:a[7]||(a[7]=e=>o.value=!0)},{default:x((()=>[Ue])),_:1})])),_:1})])))),128))])),_:1})])),_:1},8,["data","columns"])):y("",!0),v(h).length>5?(s(),r(B,{key:1,"item-per-page":10,"total-items":v(h).length,"current-page":3,"max-links-displayed":7},null,8,["total-items"])):y("",!0)])):"publish"===g.value?(s(),f("div",Xe,[w(n,{title:"No closed projects.",subtitle:"Looks like you don't have any closed project yet. When you'll\n              start closing off projects, they will be showing up in here."},{image:x((()=>[Ye,Je])),_:1})])):"pending"===g.value?(s(),f("div",Ze,[w(n,{title:"No closed projects.",subtitle:"Looks like you don't have any closed project yet. When you'll\n              start closing off projects, they will be showing up in here."},{image:x((()=>[ea,aa])),_:1})])):y("",!0)]),w(L,{open:o.value,actions:"right",title:"Удаление",onClose:a[8]||(a[8]=e=>o.value=!1)},{content:x((()=>[w(K,{title:"Удаление",subtitle:"Вы хотите удалить страицу"})])),action:x((()=>[w(t,{color:"danger"},{default:x((()=>[la])),_:1})])),_:1},8,["open"])])}}}),oa={class:"page-content-inner"},na=e({__name:"index",setup(e){const a=l("all");return H().setPageTitle("Kibera Pages"),W({title:"Kibera - Pages"}),(e,l)=>{const t=ta;return s(),f("div",oa,[w(t,{class:"is-navbar","active-tab":a.value},null,8,["active-tab"])])}}});export{na as default};
