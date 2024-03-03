import{r as f,a as O,w as E,o as n,c as r,b as t,u as a,d as F,F as d,e as u,f as x,v as P,g as q,i as z,W as I,n as g,t as b,h as W}from"./index-22529255.js";import{f as V,S as y}from"./fetchData-0e835b49.js";const G={id:"PayPage",class:"py-3 sm:px-12 sm:py-7 container border border-none"},H={class:"grid grid-cols-9 gap-3 mx-auto text-center mb-4 sm:mb-8"},J=t("i",{"data-feather":"chevron-left"},null,-1),K=[J],Q={class:"col-span-7 sm:col-span-3"},X=t("div",{class:"col-span-1 sm:col-span-3 mx-auto"},[t("i",{"data-feather":"chevron-right"})],-1),Y={class:"grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2"},Z={class:"row-span-2"},ee=t("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"類別",-1),te={class:"shadow-sm rounded-md border dark:border-none w-full"},se={class:"grid grid-cols-4 sm:grid-cols-8 SelPayCg bg-teal-400"},oe=["onMouseover"],le={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelCg"},ae=["onClick"],ne=t("label",{for:"Detail",class:"font-semibold mb-2 text-left block dark:text-white"},"明細",-1),re=t("label",{for:"Amount",class:"font-semibold mb-2 text-left block dark:text-white"},"金額",-1),ie={key:0,class:"text-right text-red-300"},ce=t("div",{class:"sm:col-span-2"},[t("hr")],-1),de={class:""},ue=t("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"帳戶",-1),be={class:"shadow-sm rounded-md border dark:border-none w-full"},me={class:"grid grid-cols-2 sm:grid-cols-4 SelPayAcc bg-teal-400"},he=["onMouseover"],pe={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc"},fe=["onClick"],ge={class:""},ye=t("label",{for:"Message",class:"font-semibold mb-2 text-left block dark:text-white"},"經手",-1),ke={class:"shadow-sm rounded-md border dark:border-none w-full"},xe={class:"grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md"},_e=["onClick"],ve={class:"sm:col-span-2"},we=t("label",{for:"Other",class:"font-semibold mb-2 text-left block dark:text-white"},"備註",-1),Oe={class:"grid grid-cols-2 sm:grid-cols-6 bg-slate-100 dark:bg-neutral-700 shadow-sm rounded-md"},Pe=["id","value"],Ae=["for"],Ce={class:"flex w-full col-span-2 px-1 py-1"},De=t("input",{type:"checkbox",name:"其他",id:"其他"},null,-1),Se=t("label",{class:"dark:text-white",for:"其他"},"其他",-1),je={class:"mt-10 mx-auto grid grid-cols-2 gap-3 sm:block"},Le={__name:"PayPage",setup(Me,{emit:k}){(async()=>{try{k("loading",!0);const o=await V("get","Pay");o.status===200?(m.push(...o.data[0].PayCategories),h.push(...o.data[1].PayAccounts),A.push(...o.data[2].PayMents),C.push(...o.data[3].PayOthers),_.value=Object.values(m[0])[0],v.value=Object.values(h[0])[0],s.Account=Object.keys(h[0])[0],s.Category=Object.keys(m[0])[0]):y.fire({title:"oops!",text:o.data,icon:"info"})}catch(o){y.fire({title:"ERROR",text:o.message,icon:"error"}),console.error(o)}k("loading",!1)})();const m=f([]),h=f([]),A=f([]),C=f([]);let _=O(""),v=O(""),c=O(""),s=f({Type:"支出",Account:"",Acc:"",Category:"",Cg:"",Date:new Date,Amount:"",Detail:"",Payment:"",Other:[]});const $=o=>{_.value=Object.values(o)[0],s.Category=Object.keys(o)[0]},L=o=>{v.value=Object.values(o)[0],s.Account=Object.keys(o)[0]},U=o=>{D(m,s.Category,".SelPayCg"),s.Cg=o},N=o=>{D(h,s.Account,".SelPayAcc"),s.Acc=o},D=(o,l,e)=>{const i=o.find(p=>p[l]),w=Object.keys(i)[0],j=Array.from(document.querySelectorAll(e+" li"));j.forEach(p=>p.classList.remove("bg-teal-100"));const M=j.find(p=>p.innerText.includes(w));M.classList.remove("bg-teal-400"),M.classList.add("bg-teal-100")},S=()=>{for(const o in s)o!=="Other"&&(s[o]="");s.Other=[],s.Type="支出",s.Date=new Date},R=o=>{c.value.length!==0&&s.Other.push(c.value),o.Other=o.Other.join(", ");for(const e of Object.keys(s))if(e!=="Payment"&&e!=="Other"&&!s[e]&&o.Pay!==""){y.fire({title:"資料未輸入完整!",icon:"warning"});return}const l=new FormData;for(const e in o)l.append(e,o[e]);T(l)};async function T(o){k("loading",!0);try{const l=await V("post","",o);l.data.status==="success"?(y.fire({title:"記帳成功!",icon:l.data.status}),S()):console.log(l),console.log("response")}catch(l){y.fire({title:"失敗!",text:l.message,icon:"error"}),console.error(l)}k("loading",!1)}const B=o=>{const l=o===""?0:o;return!/^\d+$/.test(l)};return E(()=>s.Amount,o=>{}),(o,l)=>(n(),r("div",G,[t("div",H,[t("div",{class:"col-span-1 sm:col-span-3 mx-auto",onClick:l[0]||(l[0]=(...e)=>a(s).Date&&a(s).Date(...e))},K),t("div",Q,[F(a(I),{modelValue:a(s).Date,"onUpdate:modelValue":l[1]||(l[1]=e=>a(s).Date=e),"enable-time-picker":!1,locale:"zh-tw","six-weeks":"center",required:"","text-input":"","auto-apply":"",dark:""},null,8,["modelValue"])]),X]),t("div",Y,[t("div",Z,[ee,t("div",te,[t("ul",se,[(n(!0),r(d,null,u(m,e=>(n(),r("li",{key:e,class:g({"px-1 py-1":!0,"bg-white":a(s).Category===e}),onMouseover:i=>$(e)},b(Object.keys(e)[0]),43,oe))),128))]),t("ul",le,[(n(!0),r(d,null,u(a(_),e=>(n(),r("li",{key:e,class:g({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-block":a(s).Cg===e,"dark:text-white":a(s).Cg!==e}),onClick:i=>U(e)},b(e),11,ae))),128))])])]),t("div",null,[ne,x(t("input",{type:"text",id:"Detail","onUpdate:modelValue":l[2]||(l[2]=e=>a(s).Detail=e),class:"shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700"},null,512),[[P,a(s).Detail]])]),t("div",null,[re,x(t("input",{type:"text",id:"Amount","onUpdate:modelValue":l[3]||(l[3]=e=>a(s).Amount=e),class:"px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md"},null,512),[[P,a(s).Amount]]),B(a(s).Amount)?(n(),r("h5",ie,"* 只能輸入數字")):q("",!0)]),ce,t("div",de,[ue,t("div",be,[t("ul",me,[(n(!0),r(d,null,u(h,e=>(n(),r("li",{key:e,class:g({"px-1 py-1":!0,"bg-white":a(s).Account===e}),onMouseover:i=>L(e)},b(Object.keys(e)[0]),43,he))),128))]),t("ul",pe,[(n(!0),r(d,null,u(a(v),e=>(n(),r("li",{key:e,class:g({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-block":a(s).Acc===e,"dark:text-white":a(s).Acc!==e}),onClick:i=>N(e)},b(e),11,fe))),128))])])]),t("div",ge,[ye,t("div",ke,[t("ul",xe,[(n(!0),r(d,null,u(A,e=>(n(),r("li",{key:e,class:g({"text-left px-1 py-1 cursor-pointer":!0,"bg-teal-100 dark:text-blcok":a(s).Payment===e,"dark:text-white":a(s).Payment!==e}),onClick:i=>a(s).Payment=e},b(e),11,_e))),128))])])]),t("div",ve,[we,t("div",Oe,[(n(!0),r(d,null,u(C,(e,i)=>(n(),r("div",{key:e,class:"px-1 py-1 text-left"},[x(t("input",{type:"checkbox",id:"PayOthers"+i,"onUpdate:modelValue":l[4]||(l[4]=w=>a(s).Other=w),value:e},null,8,Pe),[[W,a(s).Other]]),t("label",{class:"dark:text-white cursor-pointer",for:"PayOthers"+i},b(e),9,Ae)]))),128)),t("div",Ce,[De,Se,x(t("input",{type:"text",class:"dark:text-white bg-transparent","onUpdate:modelValue":l[5]||(l[5]=e=>z(c)?c.value=e:c=e)},null,512),[[P,a(c)]])])])])]),t("div",je,[t("button",{class:"rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:mr-5",onClick:l[6]||(l[6]=e=>R(a(s)))},"送出"),t("button",{class:"rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600",onClick:l[7]||(l[7]=e=>S())},"清除")])]))}};export{Le as default};
