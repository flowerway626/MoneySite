import{r as p,a as C,o as B,w as q,b as n,c as r,d as s,e as z,u as a,F as m,f,g as k,v as D,h as W,i as G,W as H,n as y,t as g,j as J}from"./index-0cbd6146.js";import{s as K,f as $,S as x,u as Q,a as X}from"./fetchData-9f3fb34f.js";const Y={id:"PayPage",class:"py-3 sm:px-12 sm:py-7 container border border-none"},Z={class:"grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2"},ee={class:"grid grid-cols-4 sm:grid-cols-5 gap-3 mx-auto sm:mt-9 w-full"},te={class:"col-span-3 sm:col-span-3"},se={class:"col-span-1 sm:col-span-none"},oe=s("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"類別",-1),le={class:"shadow-sm rounded-md border dark:border-none w-full"},ae={class:"grid grid-cols-4 sm:grid-cols-8 SelPayCg bg-teal-400"},ne=["onMouseover"],re={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelCg"},ie=["onClick"],ce=s("label",{for:"Detail",class:"font-semibold mb-2 text-left block dark:text-white"},"明細",-1),de=s("label",{for:"Amount",class:"font-semibold mb-2 text-left block dark:text-white"},"金額",-1),ue={key:0,class:"text-right text-red-300"},be=s("div",{class:"sm:col-span-2"},[s("hr")],-1),me={class:""},fe=s("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"帳戶",-1),ge={class:"shadow-sm rounded-md border dark:border-none w-full"},he={class:"grid grid-cols-2 sm:grid-cols-4 SelPayAcc bg-teal-400"},pe=["onMouseover"],ye={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc"},xe=["onClick"],ke={class:""},ve=s("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"經手",-1),_e={class:"shadow-sm rounded-md border dark:border-none w-full"},we={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md"},Pe=["onClick"],Oe={class:"sm:col-span-2"},Ae=s("label",{for:"Other",class:"font-semibold mb-2 text-left block dark:text-white"},"備註",-1),Ce={class:"grid grid-cols-2 sm:grid-cols-6 bg-slate-100 dark:bg-neutral-700 shadow-sm rounded-md"},De=["id","value"],Se=["for"],je={class:"flex w-full col-span-2 px-1 py-1"},Me=s("input",{type:"checkbox",name:"其他",id:"其他"},null,-1),Ve=s("label",{class:"dark:text-white",for:"其他"},"其他",-1),$e={class:"mt-10 mx-auto grid grid-cols-2 gap-3 sm:block"},Ue={__name:"PayPage",setup(Re,{emit:c}){const v=t=>{d.push(...t[0].PayCategories),u.push(...t[1].PayAccounts),_.push(...t[2].PayMents),w.push(...t[3].PayOthers),P.value=Object.values(d[0])[0],O.value=Object.values(u[0])[0],o.Account=Object.keys(u[0])[0],o.Category=Object.keys(d[0])[0]};(async()=>{try{c("loading",!0),K("Pay")||await $("get","Pay",v)}catch(t){x.fire({title:"ERROR",text:t.message,icon:"error"}),console.error(t)}c("loading",!1)})();const d=p([]),u=p([]),_=p([]),w=p([]);let P=C(""),O=C(""),b=C(""),o=p({Type:"支出",Account:"",Acc:"",Category:"",Cg:"",Date:new Date,Amount:"",Detail:"",Payment:"",Other:[]});B(()=>{Q("Pay",v)});const R=async()=>{try{c("loading",!0),[d,u,_,w].forEach(t=>t.splice(0,t.length)),localStorage.removeItem("Pay"),await $("get","Pay",v)}catch(t){x.fire({title:"ERROR",text:t.message,icon:"error"}),console.error(t)}c("loading",!1)},L=t=>{P.value=Object.values(t)[0],o.Category=Object.keys(t)[0]},E=t=>{O.value=Object.values(t)[0],o.Account=Object.keys(t)[0]},U=t=>{S(d,o.Category,".SelPayCg"),o.Cg=t},F=t=>{S(u,o.Account,".SelPayAcc"),o.Acc=t},S=(t,l,e)=>{const i=t.find(h=>h[l]),A=Object.keys(i)[0],M=Array.from(document.querySelectorAll(e+" li"));M.forEach(h=>h.classList.remove("bg-teal-100"));const V=M.find(h=>h.innerText.includes(A));V.classList.remove("bg-teal-400"),V.classList.add("bg-teal-100")},j=()=>{for(const t in o)t!=="Other"&&(o[t]="");o.Other=[],o.Type="支出",o.Date=new Date},I=t=>{b.value.length!==0&&o.Other.push(b.value),t.Other=t.Other.join(", ");for(const e of Object.keys(o))if(e!=="Payment"&&e!=="Other"&&!o[e]&&t.Pay!==""){x.fire({title:"資料未輸入完整!",icon:"warning"});return}const l=new FormData;for(const e in t)l.append(e,t[e]);N(l)};async function N(t){c("loading",!0);try{const l=await X("post","",t);l.data.status==="success"?(x.fire({title:"記帳成功!",icon:l.data.status}),j()):console.log(l),console.log("response")}catch(l){x.fire({title:"失敗!",text:l.message,icon:"error"}),console.error(l)}c("loading",!1)}const T=t=>{const l=t===""?0:t;return!/^\d+$/.test(l)};return q(()=>o.Amount,t=>{}),(t,l)=>(n(),r("div",Y,[s("div",Z,[s("div",ee,[s("div",te,[z(a(H),{modelValue:a(o).Date,"onUpdate:modelValue":l[0]||(l[0]=e=>a(o).Date=e),"enable-time-picker":!1,locale:"zh-tw","six-weeks":"center",required:"","text-input":"","auto-apply":"",dark:"","week-start":"0"},null,8,["modelValue"])]),s("div",se,[s("button",{class:"rounded-md bg-teal-600 px-3 sm:px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600",onClick:l[1]||(l[1]=e=>R())},"重整")])]),s("div",null,[oe,s("div",le,[s("ul",ae,[(n(!0),r(m,null,f(d,e=>(n(),r("li",{key:e,class:y({"px-1 py-1":!0,"bg-white":a(o).Category===e}),onMouseover:i=>L(e)},g(Object.keys(e)[0]),43,ne))),128))]),s("ul",re,[(n(!0),r(m,null,f(a(P),e=>(n(),r("li",{key:e,class:y({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-block":a(o).Cg===e,"dark:text-white":a(o).Cg!==e}),onClick:i=>U(e)},g(e),11,ie))),128))])])]),s("div",null,[ce,k(s("input",{type:"text",id:"Detail","onUpdate:modelValue":l[2]||(l[2]=e=>a(o).Detail=e),class:"shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700"},null,512),[[D,a(o).Detail]])]),s("div",null,[de,k(s("input",{type:"text",id:"Amount","onUpdate:modelValue":l[3]||(l[3]=e=>a(o).Amount=e),class:"px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md"},null,512),[[D,a(o).Amount]]),T(a(o).Amount)?(n(),r("h5",ue,"* 只能輸入數字")):W("",!0)]),be,s("div",me,[fe,s("div",ge,[s("ul",he,[(n(!0),r(m,null,f(u,e=>(n(),r("li",{key:e,class:y({"px-1 py-1":!0,"bg-white":a(o).Account===e}),onMouseover:i=>E(e)},g(Object.keys(e)[0]),43,pe))),128))]),s("ul",ye,[(n(!0),r(m,null,f(a(O),e=>(n(),r("li",{key:e,class:y({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-block":a(o).Acc===e,"dark:text-white":a(o).Acc!==e}),onClick:i=>F(e)},g(e),11,xe))),128))])])]),s("div",ke,[ve,s("div",_e,[s("ul",we,[(n(!0),r(m,null,f(_,e=>(n(),r("li",{key:e,class:y({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-blcok":a(o).Payment===e,"dark:text-white":a(o).Payment!==e}),onClick:i=>a(o).Payment=e},g(e),11,Pe))),128))])])]),s("div",Oe,[Ae,s("div",Ce,[(n(!0),r(m,null,f(w,(e,i)=>(n(),r("div",{key:e,class:"px-1 py-1 text-left"},[k(s("input",{type:"checkbox",id:"PayOthers"+i,"onUpdate:modelValue":l[4]||(l[4]=A=>a(o).Other=A),value:e},null,8,De),[[J,a(o).Other]]),s("label",{class:"dark:text-white cursor-pointer",for:"PayOthers"+i},g(e),9,Se)]))),128)),s("div",je,[Me,Ve,k(s("input",{type:"text",class:"dark:text-white bg-transparent","onUpdate:modelValue":l[5]||(l[5]=e=>G(b)?b.value=e:b=e)},null,512),[[D,a(b)]])])])])]),s("div",$e,[s("button",{class:"rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:mr-5",onClick:l[6]||(l[6]=e=>I(a(o)))},"送出"),s("button",{class:"rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600",onClick:l[7]||(l[7]=e=>j())},"清除")])]))}};export{Ue as default};
