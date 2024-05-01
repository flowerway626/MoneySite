import{r as g,a as D,o as B,w as F,b as T,c as r,d as c,e as t,f as d,u as l,g as b,F as h,h as x,i as y,v as S,j as q,k as z,W,n as w,t as k,l as G}from"./index-3924c5e7.js";import{s as H,f as V,S as M,u as J,P as K,C as N,N as Q,A as X}from"./dataValidation-6d1db4c4.js";const Y={id:"IncomePage",class:"py-3 sm:px-12 sm:py-7 container border border-none"},Z={class:"grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2"},ee={class:"grid grid-cols-4 sm:grid-cols-5 gap-3 mx-auto sm:mt-9 w-full"},te={class:"col-span-3 sm:col-span-3"},se={class:"col-span-1 sm:col-span-none"},oe={for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},le={class:"shadow-sm rounded-md border dark:border-none w-full"},ne={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md"},ae=["onClick"],re={for:"Detail",class:"font-semibold mb-2 text-left block dark:text-white"},ce={for:"Amount",class:"font-semibold mb-2 text-left block dark:text-white"},ie={key:0,class:"text-right text-red-300"},de=t("div",{class:"sm:col-span-2"},[t("hr")],-1),ue={class:""},me={for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},be={class:"shadow-sm rounded-md border dark:border-none w-full"},fe={class:"grid grid-cols-2 sm:grid-cols-4 SelIncomeAcc bg-teal-400"},pe=["onMouseover"],ge={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc"},he=["onClick"],xe={class:""},ke={for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},_e={class:"shadow-sm rounded-md border dark:border-none w-full"},ve={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md"},ye=["onClick"],we={class:"sm:col-span-2"},Ae={for:"Other",class:"font-semibold mb-2 text-left block dark:text-white"},Ie={class:"grid grid-cols-2 sm:grid-cols-6 bg-slate-100 dark:bg-neutral-700 shadow-sm rounded-md"},Oe=["id","value"],Ce=["for"],De={class:"flex w-full col-span-2 px-1 py-1"},Se=t("input",{type:"checkbox",name:"其他",id:"其他"},null,-1),Me=t("label",{class:"dark:text-white",for:"其他"},"其他",-1),je={class:"mt-10 mx-auto grid grid-cols-2 gap-3 sm:block"},Re={__name:"IncomePage",setup(Pe,{emit:f}){const A=s=>{_.push(...s[0].IncomeCategories),u.push(...s[1].PayAccounts),I.push(...s[2].PayMents),O.push(...s[3].PayOthers),C.value=Object.values(u[0])[0],o.Account=Object.keys(u[0])[0],o.Cg=Object.keys(_)[0]};(async()=>{try{f("loading",!0),H("Income")||await V("get","Income",A)}catch(s){M.fire({title:"ERROR",text:s.message,icon:"error"}),console.error(s)}f("loading",!1)})();const _=g([]),u=g([]),I=g([]),O=g([]);let C=D(""),m=D(""),j=D(!1),o=g({Type:"收入",Account:"",Acc:"",Cg:"",Date:new Date,Amount:"",Detail:"",Incomement:"",Other:[]});B(()=>{J("Income",A)});const R=async()=>{try{f("loading",!0),[_,u,I,O].forEach(s=>s.splice(0,s.length)),localStorage.removeItem("Income"),await V("get","Income",A)}catch(s){M.fire({title:"ERROR",text:s.message,icon:"error"}),console.error(s)}f("loading",!1)},L=s=>{C.value=Object.values(s)[0],o.Account=Object.keys(s)[0]},$=s=>{E(u,o.Account,".SelIncomeAcc"),o.Acc=s},E=(s,n,a)=>{const e=s.find(p=>p[n]),i=Object.keys(e)[0],v=Array.from(document.querySelectorAll(a+" li"));v.forEach(p=>p.classList.remove("bg-teal-100"));const P=v.find(p=>p.innerText.includes(i));P.classList.remove("bg-teal-400"),P.classList.add("bg-teal-100")},U=s=>{m.value.length!==0&&o.Other.push(m.value),s.Other=s.Other.join(", ");for(const a of Object.keys(o))if(a!=="Incomement"&&a!=="Other"&&!o[a]&&s.Income!==""){M.fire({title:"資料未輸入完整!",icon:"warning",showConfirmButton:!1});return}const n=new FormData;for(const a in s)n.append(a,s[a]);K(n,f,"收入",o,N)};return F(()=>o.Amount,s=>{s=s.replaceAll(",",""),o.Amount=Q(s),j.value=X(s)}),(s,n)=>{const a=T("font-awesome-icon");return r(),c("div",Y,[t("div",Z,[t("div",ee,[t("div",te,[d(l(W),{modelValue:l(o).Date,"onUpdate:modelValue":n[0]||(n[0]=e=>l(o).Date=e),"enable-time-picker":!1,locale:"zh-tw","six-weeks":"center",required:"","text-input":"","auto-apply":"",dark:"","week-start":"0"},null,8,["modelValue"])]),t("div",se,[t("button",{class:"rounded-md bg-teal-400 px-3 sm:px-5 py-2.5 text-center text-sm shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400",onClick:n[1]||(n[1]=e=>R())},"重整")])]),t("div",null,[t("label",oe,[d(a,{icon:["fas","chart-pie"]}),b(" 類別")]),t("div",le,[t("ul",ne,[(r(!0),c(h,null,x(_,e=>(r(),c("li",{key:e,class:w({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-blcok":l(o).Cg===e,"dark:text-white":l(o).Cg!==e}),onClick:i=>l(o).Cg=e},k(e),11,ae))),128))])])]),t("div",null,[t("label",re,[d(a,{icon:["fas","align-left"]}),b(" 明細")]),y(t("input",{type:"text",id:"Detail","onUpdate:modelValue":n[2]||(n[2]=e=>l(o).Detail=e),class:"shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700"},null,512),[[S,l(o).Detail]])]),t("div",null,[t("label",ce,[d(a,{icon:["fas","dollar-sign"]}),b(" 金額")]),y(t("input",{type:"text",id:"Amount","onUpdate:modelValue":n[3]||(n[3]=e=>l(o).Amount=e),class:"px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md"},null,512),[[S,l(o).Amount]]),l(j)?(r(),c("h5",ie,"* 只能輸入數字")):q("",!0)]),de,t("div",ue,[t("label",me,[d(a,{icon:["fas","wallet"]}),b(" 帳戶")]),t("div",be,[t("ul",fe,[(r(!0),c(h,null,x(u,e=>(r(),c("li",{key:e,class:w({"px-1 py-1":!0,"bg-white":l(o).Account===e}),onMouseover:i=>L(e)},k(Object.keys(e)[0]),43,pe))),128))]),t("ul",ge,[(r(!0),c(h,null,x(l(C),e=>(r(),c("li",{key:e,class:w({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-block":l(o).Acc===e,"dark:text-white":l(o).Acc!==e}),onClick:i=>$(e)},k(e),11,he))),128))])])]),t("div",xe,[t("label",ke,[d(a,{icon:["fas","money-bill-transfer"]}),b(" 經手")]),t("div",_e,[t("ul",ve,[(r(!0),c(h,null,x(I,e=>(r(),c("li",{key:e,class:w({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-blcok":l(o).Incomement===e,"dark:text-white":l(o).Incomement!==e}),onClick:i=>l(o).Incomement=e},k(e),11,ye))),128))])])]),t("div",we,[t("label",Ae,[d(a,{icon:["fas","pen-to-square"]}),b(" 備註")]),t("div",Ie,[(r(!0),c(h,null,x(O,(e,i)=>(r(),c("div",{key:e,class:"px-1 py-1 text-left"},[y(t("input",{type:"checkbox",id:"IncomeOthers"+i,"onUpdate:modelValue":n[4]||(n[4]=v=>l(o).Other=v),value:e},null,8,Oe),[[G,l(o).Other]]),t("label",{class:"dark:text-white cursor-pointer",for:"IncomeOthers"+i},k(e),9,Ce)]))),128)),t("div",De,[Se,Me,y(t("input",{type:"text",class:"dark:text-white bg-transparent","onUpdate:modelValue":n[5]||(n[5]=e=>z(m)?m.value=e:m=e)},null,512),[[S,l(m)]])])])])]),t("div",je,[t("button",{class:"rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 sm:mr-5",onClick:n[6]||(n[6]=e=>U(l(o)))},"送出"),t("button",{class:"rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm shadow-sm hover:bg-teal-500 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400",onClick:n[7]||(n[7]=e=>l(N)(l(o),"收入"))},"清除")])])}}};export{Re as default};
