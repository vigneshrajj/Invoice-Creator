var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&o(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{a as i,w as m,r as d,R as u,c as g,g as p,L as y,I as f,F as b,b as E,d as x,G as v,e as h,f as N,h as w,A as C,i as I,j as A,k as S,l as T,M as k,m as j,n as D,o as _,X as M,Y as L,T as O,u as z,p as R,q as U,H as P,s as F,t as q,S as G,v as Y,x as H,y as V,z as Z,B as $,C as B,D as J,E as K,J as Q,K as W,P as X,N as ee,O as te}from"./vendor.215baa52.js";const ae=i.create({baseURL:"https://invoice-app-vignesh.herokuapp.com/api",withCredentials:!0,headers:{"Content-Type":"application/json"}}),re=e=>async t=>{try{const a=await ae.post("/google-login",e);t({type:"AUTH_SUCCESS",payload:await a.data.user})}catch(a){t({type:"AUTH_FAILURE",payload:a.response.data.error})}};var le=e=>{const t=async()=>{const e=await i.get("https://invoice-app-vignesh.herokuapp.com/api/auth-check",{headers:{"content-type":"application/json"},withCredentials:!0});return await e.data.isAuth};return m((function(a){async function r(){await t()||"signup"===window.location.href.split("/")[3]||"login"===window.location.href.split("/")[3]?!(await t())||"signup"!==window.location.href.split("/")[3]&&"login"!==window.location.href.split("/")[3]||a.history.push("/"):a.history.push("/login")}return d.exports.useEffect((()=>{r()}),[r]),u.createElement(e,s({},a))}))};var ne=g((e=>({user:e.user.user,errors:e.user.errors})),(e=>({signup:t=>e((e=>async t=>{try{const a=await ae.post("/signup",e);t({type:"AUTH_SUCCESS",payload:await a.data.user})}catch(a){t({type:"AUTH_FAILURE",payload:a.response.data.errors})}})(t)),googleSignin:t=>e(re(t))})))(m(le((({errors:e,signup:t,googleSignin:a,history:r})=>{const[l,n]=d.exports.useState({name:"",email:"",password:"",phone:""}),[o,i]=d.exports.useState(""),m=e=>{n(c(s({},l),{[e.target.name]:e.target.value}))};return u.createElement("div",{className:"w-full h-screen flex flex-col items-center justify-center overflow-y-scroll bg-gray-800"},u.createElement("div",{className:"bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center"},u.createElement("label",{className:"font-light text-4xl mb-4"},u.createElement("span",{className:"font-bold"},"Invoicer")),u.createElement("input",{onChange:m,name:"name",value:l.name,type:"text",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Full Name"}),e.name&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.name),u.createElement("input",{onChange:m,name:"email",value:l.email,type:"text",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Email"}),e.email&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.email),u.createElement("input",{onChange:m,name:"password",value:l.password,type:"password",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Password"}),e.password&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.password),u.createElement("input",{onChange:m,name:"phone",value:l.phone,type:"text",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Phone number"}),e.phone&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.phone),u.createElement("button",{onClick:async()=>{await t(l),r.push("/"),n({name:"",email:"",password:"",phone:""})},className:"w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"},"Signup"),u.createElement("label",{className:"text-gray-800 mb-4"},"or"),u.createElement(p.exports.GoogleLogin,{clientId:"478210717636-bjs57m0eqvee6a7v3gjfd9jllts7tvgc.apps.googleusercontent.com",render:e=>u.createElement("button",{onClick:e.onClick,className:"w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"},"Sign with Google"),buttonText:"Login",onSuccess:async e=>{i(""),await a({tokenId:e.tokenId,name:e.profileObj.name,email:e.profileObj.email}),r.push("/")},onFailure:e=>{i(e.error.split("_").join(" "))},cookiePolicy:"single_host_origin"}),o&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},o)),u.createElement("p",{className:"text-gray-100 mt-2"},"Already have an account?"," ",u.createElement(y,{to:"/login"},u.createElement("a",{className:"text-gray-500"},"Login"))))}))));var oe=g((e=>({user:e.user.user,errors:e.user.errors})),(e=>({login:t=>e((e=>async t=>{try{const a=await ae.post("/login",e);t({type:"AUTH_SUCCESS",payload:await a.data.user})}catch(a){t({type:"AUTH_FAILURE",payload:a.response.data.errors})}})(t)),googleSignin:t=>e(re(t))})))(m(le((({errors:e,login:t,googleSignin:a,history:r})=>{const[l,n]=d.exports.useState({email:"",password:""}),[o,i]=d.exports.useState(""),m=e=>{n(c(s({},l),{[e.target.name]:e.target.value}))};return u.createElement("div",{className:"w-full h-screen flex flex-col items-center justify-center overflow-y-scroll bg-gray-800"},u.createElement("div",{className:"bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center"},u.createElement("label",{className:"font-light text-4xl mb-4"},u.createElement("span",{className:"font-bold"},"Invoicer")),u.createElement("input",{onChange:m,name:"email",value:l.email,type:"text",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Email"}),e.email&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.email),u.createElement("input",{onChange:m,name:"password",value:l.password,type:"password",className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",placeholder:"Password"}),e.password&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},e.password),u.createElement("button",{onClick:async()=>{await t(l),r.push("/"),n({email:"",password:""})},className:"w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"},"Login"),u.createElement("label",{className:"text-gray-800 mb-4"},"or"),u.createElement(p.exports.GoogleLogin,{clientId:"478210717636-bjs57m0eqvee6a7v3gjfd9jllts7tvgc.apps.googleusercontent.com",render:e=>u.createElement("button",{onClick:e.onClick,className:"w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"},"Sign with Google"),buttonText:"Login",onSuccess:async e=>{i(""),await a({tokenId:e.tokenId,name:e.profileObj.name,email:e.profileObj.email}),r.push("/")},onFailure:e=>{i(e.error.split("_").join(" "))},cookiePolicy:"single_host_origin"}),o&&u.createElement("div",{className:"bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700",role:"alert"},o)),u.createElement("p",{className:"text-gray-100 mt-2"},"Don't have an account?"," ",u.createElement(y,{to:"/signup"},u.createElement("a",{className:"text-gray-500"},"Signup"))))}))));const se=i.create({baseURL:"https://invoice-app-vignesh.herokuapp.com/api/invoice",withCredentials:!0,headers:{"Content-Type":"application/json"}}),ce=e=>async t=>{try{const t=await se.post("/",e);await t.data.message}catch(a){t({type:"ACTION_FAILURE",payload:a.response.data.errors})}};var ie=g(null,(e=>({createInvoice:t=>e(ce(t))})))((({page:e,setIsNextDisabled:t,createInvoice:a,setInvoiceModal:r,getAllInvoices:l,getStats:n,pageNo:o,invoiceNo:i,sendAgain:m})=>{const[g,p]=d.exports.useState({fromAddress:"",fromCity:"",fromZip:"",fromCountry:""}),[y,x]=d.exports.useState({clientName:"",clientEmail:"",toAddress:"",toCity:"",toZip:"",toCountry:""}),[v,h]=d.exports.useState({status:"pending",invoiceDate:"",paymentDue:""}),[N,w]=d.exports.useState(""),[C,I]=d.exports.useState([{name:"",qty:0,price:""}]),A=/^[0-9\b]+$/;d.exports.useEffect((()=>{t(T())}),[g,y,v,N,C,e]),d.exports.useEffect((()=>{e>4&&!i&&(j(),l({pageNo:o,itemsCount:3}),n(),r(!1))}),[e]);const S=t=>{switch(e){case 1:if("toZip"===t.target.id&&""!==t.target.value&&!A.test(t.target.value))break;x(c(s({},y),{[t.target.id]:t.target.value}));break;case 2:if("fromZip"===t.target.id&&""!==t.target.value&&!A.test(t.target.value))break;p(c(s({},g),{[t.target.id]:t.target.value}));break;case 3:"invoiceDate"!==t.target.id&&"paymentDue"!==t.target.id||h(c(s({},v),{[t.target.id]:Date(t.target.value)})),h(c(s({},v),{[t.target.id]:t.target.value}));break;default:"productDescription"===t.target.id&&w(t.target.value)}},T=()=>{if(1===e){for(let e in y)if(""===y[e]||!y[e])return!0;return!1}if(2===e){for(let e in g)if(""===g[e]||!g[e])return!0;return!1}if(3===e){for(let e in v)if(""===v[e]||!v[e])return!0;return!1}{let e=!1;return C.forEach((t=>{for(let a in t)""!==t[a]&&t[a]||(e=!0)})),e}},k=(e,t)=>{let a=[...C];if("inc"===e.target.id)a[t]=c(s({},a[t]),{qty:a[t].qty+1});else if("dec"===e.target.id)a[t]=c(s({},a[t]),{qty:a[t].qty-1});else{if("price"===e.target.id&&""!==e.target.value&&!A.test(e.target.value))return;a[t]=c(s({},a[t]),{[e.target.id]:e.target.value})}I(a)},j=()=>{const e=y.clientName.slice(0,2).toUpperCase()+Math.floor(9999*Math.random()+1e3).toString();let t=c(s(s(s({},g),y),v),{itemList:C,invoiceNo:e});""!==N&&(t=c(s({},t),{productDescription:N})),a(t)};switch(e){case 2:return u.createElement("div",{className:"form mx-2"},u.createElement("input",{type:"text",id:"fromAddress",value:g.fromAddress,onChange:S,placeholder:"Street Address",className:"bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full"}),u.createElement("input",{type:"text",id:"fromCity",value:g.fromCity,onChange:S,placeholder:"City",className:"bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full"}),u.createElement("div",{className:"flex justify-between"},u.createElement("input",{type:"text",id:"fromZip",value:g.fromZip,onChange:S,placeholder:"Zip Code",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2"}),u.createElement("input",{type:"text",id:"fromCountry",value:g.fromCountry,onChange:S,placeholder:"Country",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2"})));case 1:return u.createElement("div",{className:"form mx-2"},u.createElement("div",{className:"flex justify-between mb-5"},u.createElement("input",{type:"text",id:"clientName",value:y.clientName,onChange:S,placeholder:"Client Name",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2"}),u.createElement("input",{type:"text",id:"clientEmail",value:y.clientEmail,onChange:S,placeholder:"Client Email",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2"})),u.createElement("input",{type:"text",id:"toAddress",value:y.toAddress,onChange:S,placeholder:"Street Address",className:"bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full"}),u.createElement("input",{type:"text",id:"toCity",value:y.toCity,onChange:S,placeholder:"City",className:"bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full"}),u.createElement("div",{className:"flex justify-between"},u.createElement("input",{type:"text",id:"toZip",value:y.toZip,onChange:S,placeholder:"Zip Code",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2"}),u.createElement("input",{type:"text",id:"toCountry",value:y.toCountry,onChange:S,placeholder:"Country",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2"})));case 3:return u.createElement("div",{className:"form mx-2"},u.createElement("div",{className:"flex justify-between"},u.createElement("input",{type:"date",id:"invoiceDate",value:v.invoiceDate,onChange:S,placeholder:"Invoice date",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2"}),u.createElement("input",{type:"date",id:"paymentDue",min:v.invoiceDate&&v.invoiceDate,value:v.paymentDue,onChange:S,placeholder:"Payment due date",className:"bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2"})),u.createElement("div",{className:"flex mt-5"},u.createElement("button",{onClick:()=>h(c(s({},v),{status:"overdue"})),className:`w-24 py-1 flex ${"overdue"===v.status?"":"border-gray-800"} border-2 justify-center items-center rounded-full text-white bg-red-500 hover:bg-red-400 duration-100 text-sm font-bold mr-3 pr-1`},u.createElement(f,{size:20,className:"mr-3"}),"Overdue"),u.createElement("button",{onClick:()=>h(c(s({},v),{status:"pending"})),className:`w-24 py-1 flex ${"pending"===v.status?"":"border-gray-800"} border-2 justify-center items-center rounded-full text-white bg-yellow-500 hover:bg-yellow-400 duration-100 text-sm font-bold mr-3 pr-1`},u.createElement(b,{size:18,className:"mr-3"}),"Pending"),u.createElement("button",{onClick:()=>h(c(s({},v),{status:"paid"})),className:`w-20 py-1 flex ${"paid"===v.status?"":"border-gray-800"} border-2 justify-center items-center rounded-full text-white bg-green-500 hover:bg-green-400 duration-100 text-sm font-bold mr-3 pr-2`},u.createElement(E,{size:20,className:"mr-3"}),"Paid")));default:return u.createElement("div",{className:"form mx-2 overflow-y-scroll max-h-60"},u.createElement("textarea",{id:"productDescription",value:N,onChange:e=>w(e.target.value),placeholder:"Product Description (Optional)",row:2,className:"bg-gray-700 p-2 mb-3 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full resize-none"}),u.createElement("p",{className:"text-gray-300 text-sm mb-2"},"Products"),C&&C.map(((e,t)=>u.createElement("div",{key:t,className:"flex justify-between mb-5"},u.createElement("input",{type:"text",id:"name",value:e.name,onChange:e=>k(e,t),placeholder:"Item Name",className:"bg-gray-700 py-2 px-4 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2"}),u.createElement("div",{className:"flex flex-row items-center relative bg-gray-700 rounded-lg border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mx-2 text-gray-400"},u.createElement("button",{id:"dec",onClick:e=>k(e,t),disabled:e.qty<1,className:"font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex justify-center items-center rounded-l-lg focus:outline-none cursor-pointer"},"-"),u.createElement("div",{className:"qty mx-auto"},e.qty),u.createElement("button",{id:"inc",onClick:e=>k(e,t),className:"font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex justify-center items-center rounded-r-lg focus:outline-none cursor-pointer"},"+")),u.createElement("div",{className:"w-full relative mr-2"},""!==e.price&&u.createElement("p",{className:"absolute text-gray-400 ml-3.5 mt-2.5"},"₹"),u.createElement("input",{type:"text",id:"price",value:e.price,onChange:e=>k(e,t),placeholder:"Price",className:"bg-gray-700 py-2 px-4 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2"})),u.createElement("button",{onClick:()=>{I(C.filter((t=>t!==e)))},style:{opacity:C.length-1?1:0},disabled:!(C.length-1),className:"mx-2 text-gray-400 select-none disabled:cursor-default"},"x")))),u.createElement("button",{onClick:()=>I([...C,{name:"",qty:0,price:""}]),className:"add-items w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center text-4xl text-gray-400 mx-auto mt-3"},"+"))}}));var me=g(null,(e=>({createInvoice:t=>e(ce(t))})))((({setInvoiceModal:e,createInvoice:t,getAllInvoices:a,getStats:r,pageNo:l,edit:n,sendAgain:o})=>{const[c,i]=d.exports.useState(o?2:1),[m,g]=d.exports.useState(!0);return d.exports.useState({}),u.createElement(u.Fragment,null,u.createElement("div",{className:"overlay fixed w-screen h-screen opacity-50 bg-black z-10 left-0 top-0"}),u.createElement("div",{className:"create-invoice-modal fixed bg-gray-800 text-gray-300 rounded h-3/5 w-1/2 z-20 inset-0 m-auto py-2 px-3"},u.createElement("div",{className:"header"},u.createElement("p",{className:"font-bold text-3xl text-center mb-5"},"Create Invoice"),u.createElement(x,{onClick:()=>e(!1),className:"text-gray-400 absolute right-3 top-2 cursor-pointer",size:32})),u.createElement(ie,s({},{page:c,setIsNextDisabled:g,setInvoiceModal:e,getAllInvoices:a,getStats:r,pageNo:l,edit:n,sendAgain:o})),u.createElement("div",{className:"footer absolute bottom-0 left-0 w-full flex justify-between mb-4 px-3 items-center"},u.createElement("p",{className:"page-name text-lg"},1===c?"Client details":2===c?"User details":3===c?"Invoice details":"Product details"),u.createElement("div",{className:"page-indication flex justify-between w-14"},!o&&u.createElement("div",{className:"indicator h-1.5 w-1.5 bg-gray-400 rounded-full",style:{outline:1===c&&"3px solid rgba(30, 58, 138)"}}),u.createElement("div",{className:"indicator h-1.5 w-1.5 bg-gray-400 rounded-full",style:{outline:2===c&&"3px solid rgba(30, 58, 138)"}}),u.createElement("div",{className:"indicator h-1.5 w-1.5 bg-gray-400 rounded-full",style:{outline:3===c&&"3px solid rgba(30, 58, 138)"}}),u.createElement("div",{className:"indicator h-1.5 w-1.5 bg-gray-400 rounded-full",style:{outline:4===c&&"3px solid rgba(30, 58, 138)"}})),u.createElement("div",{className:"buttons-container"},u.createElement("button",{onClick:()=>{i(c-1),g(!1)},disabled:c<=1||o&&c<=2,className:"bg-blue-800 hover:bg-blue-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-1 py-2 mr-3 rounded text-lg"},u.createElement(v,null)),u.createElement("button",{onClick:()=>{i(c+1),g(!0)},disabled:m,className:"bg-blue-800 hover:bg-blue-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-1 py-2 rounded text-lg"},u.createElement(h,null))))))}));const de=({invoice:e,setInvoiceView:t,deleteItem:a})=>{const[r,l]=d.exports.useState(!1);return u.createElement("tr",{className:"cursor-pointer"},u.createElement("td",{onClick:()=>{t(e._id)},className:"p-2 rounded-l-lg bg-gray-800"},u.createElement("div",{className:"flex align-items-center"},u.createElement(N,{email:e.clientEmail,className:"rounded-xl h-12 w-12  object-cover"}),u.createElement("div",{className:"ml-3"},u.createElement("div",{className:"name"},e.clientName),u.createElement("div",{className:"text-gray-500"},e.clientEmail)))),u.createElement("td",{onClick:()=>{t(e._id)},className:"p-2 bg-gray-800"},`#${e.invoiceNo}`),u.createElement("td",{onClick:()=>{t(e._id)},className:"p-2 bg-gray-800 font-bold"},`₹${e.itemList.length&&(n=e.itemList,o=0,n.forEach((e=>{o+=e.qty*e.price})),o)}`),u.createElement("td",{onClick:()=>{t(e._id)},className:"p-2 bg-gray-800"},u.createElement("span",{className:("overdue"===e.status?"bg-red-400":"pending"===e.status?"bg-yellow-400":"bg-green-400")+" text-gray-50 rounded-md px-2 py-px"},e.status)),u.createElement("td",{onClick:()=>{t(e._id)},className:"p-2 bg-gray-800"},u.createElement("div",{className:"flex items-center"},u.createElement("span",{className:"mr-6"},w(e.invoiceDate).format("MMM D, YYYY")),u.createElement(C,null),u.createElement("span",{className:"mx-3"},w(e.paymentDue).format("MMM D, YYYY")))),u.createElement("td",{className:"p-2 rounded-r-lg bg-gray-800"},u.createElement("div",{className:"flex justify-start items-center"},u.createElement(I,{onClick:()=>l(!0),className:"mr-5 hover:text-yellow-400 transition-colors duration-100",size:20}),u.createElement(A,{className:"hover:text-red-400 transition-colors duration-100",size:20,onClick:()=>a(e._id)}))),r&&u.createElement(me,s({},{setInvoiceModal:l,edit:!0})));var n,o},ue=({setInvoiceView:e,currentInvoice:t})=>{const[a,r]=d.exports.useState(0),l=u.useRef(null);d.exports.useEffect((()=>{r(n())}),[t]);const n=()=>{let e=0;return t.itemList&&t.itemList.forEach((t=>{console.log(e),e+=parseInt(t.qty)*parseInt(t.price)})),e};return u.createElement(u.Fragment,null,u.createElement("div",{className:"overlay fixed w-screen h-screen opacity-50 bg-black z-10 left-0 top-0"}),u.createElement("div",{ref:l,className:"invoice-view-modal fixed bg-gray-800 text-gray-400 rounded h-5/6 w-96 z-20 inset-0 m-auto py-2 px-3"},u.createElement("div",{className:"header"},u.createElement("p",{className:"invoice-no font-bold text-2xl"},"#",t.invoiceNo),u.createElement(x,{id:"close-icon",onClick:()=>e(""),className:"absolute right-3 top-2 cursor-pointer",size:32})),u.createElement("div",{className:"invoice-dates mt-2 grid",style:{gridTemplateColumns:"30% 70%"}},u.createElement("div",{className:"issued-on flex flex-col"},u.createElement("span",{className:"text-sm"},"Issued on:"),u.createElement("span",{className:"font-bold"},w(t.invoiceDate).format("MMM D,YYYY"))),u.createElement("div",{className:"due-on flex flex-col"},u.createElement("span",{className:"text-sm"},"Due on:"),u.createElement("span",{className:"font-bold"},w(t.paymentDue).format("MMM D,YYYY")))),u.createElement("div",{className:"invoice-to mt-5 capitalize"},u.createElement("p",{className:"text-sm"},"Invoice to:"),u.createElement("p",{className:"font-bold mt-0.5"},t.clientName),u.createElement("div",{className:"address"},u.createElement("p",null,t.toAddress),u.createElement("p",null,`${t.toCity}, ${t.toCountry}, ${t.toZip}`))),u.createElement("div",{className:"items border border-gray-600 rounded p-1 my-3"},u.createElement("div",{className:"grid font-bold text-sm mb-1",style:{gridTemplateColumns:"50% 10% 20% 20%"}},u.createElement("p",null,"Item"),u.createElement("p",null,"Qty"),u.createElement("p",null,"Price"),u.createElement("p",null,"Total")),t.itemList&&t.itemList.map((e=>u.createElement("div",{className:"grid",style:{gridTemplateColumns:"50% 10% 20% 20%"}},u.createElement("p",{className:"capitalize"},e.name),u.createElement("p",null,e.qty),u.createElement("p",null,"₹",e.price),u.createElement("p",null,"₹",parseInt(e.qty)*parseInt(e.price)))))),u.createElement("div",{className:"grid px-1",style:{gridTemplateColumns:"80% 20%"}},u.createElement("div",{className:"additional-notes"},u.createElement("p",{className:"text-sm"},"Additional Notes:"),u.createElement("p",null,t.productDescription)),u.createElement("p",{className:"font-bold text-lg"},"₹",a)),u.createElement("div",{id:"footer",className:"footer absolute bottom-0 left-0 w-full h-auto flex justify-between items-center p-4"},u.createElement("a",{onClick:()=>{T(l.current,{useCORS:!0,scale:"2",ignoreElements:e=>{if("footer"==e.id||"close-icon"==e.id)return!0}}).then((e=>{const t=e.toDataURL("image/png"),a=new k;a.addImage(t,"JPEG",3,5),a.save("invoice.pdf")}))},className:"text-blue-800 font-bold flex items-center cursor-pointer"},u.createElement(S,{className:"mr-2"}),"DOWNLOAD INVOICE"),u.createElement("button",{onClick:()=>e(""),className:"bg-gray-700 hover:bg-gray-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-5 py-1 rounded text-lg"},"Close"))))};var ge=g((e=>{const{currentInvoice:t,invoices:a,invoiceCount:r}=e.invoice;return{invoices:a,invoiceCount:r,currentInvoice:t}}),(e=>({getInvoice:t=>e((e=>async t=>{try{const a=await se.get("/"+e),r=await a.data.invoice;await t({type:"GET_CURRENT_INVOICE",payload:r})}catch(a){t({type:"ACTION_FAILURE",payload:a.response.data.error})}})(t)),deleteInvoice:t=>e((e=>async t=>{try{await se.delete("/"+e)}catch(a){t({type:"ACTION_FAILURE",payload:a.response.data.error})}})(t))})))((({invoices:e,invoiceCount:t,pageNo:a,setPageNo:r,getAllInvoices:l,getInvoice:n,deleteInvoice:o,currentInvoice:c})=>{const[i,m]=d.exports.useState(null);d.exports.useEffect((async()=>{await l({pageNo:a,itemsCount:3})}),[a]),d.exports.useEffect((()=>{i&&n(i)}),[i]);const g=async e=>{await o(e),l({pageNo:1,itemsCount:3})};return u.createElement("div",{className:"col-span-12 w-full"},u.createElement("div",{className:"overflow-auto lg:overflow-visible flex flex-col justify-between",style:{minHeight:300}},u.createElement("table",{className:"table text-gray-400 border-separate space-y-6 text-sm w-full",style:{borderSpacing:"0 10px"}},u.createElement("thead",{className:" text-gray-500 select-none"},u.createElement("tr",null,u.createElement("th",{className:"p-2 rounded-l-lg bg-gray-800"},"Recipient"),u.createElement("th",{className:"p-2 text-left bg-gray-800"},"Invoice No."),u.createElement("th",{className:"p-2 text-left bg-gray-800"},"Amount"),u.createElement("th",{className:"p-2 text-left bg-gray-800"},"Status"),u.createElement("th",{className:"p-2 text-left bg-gray-800"},"Date"),u.createElement("th",{className:"p-2 rounded-r-lg text-left bg-gray-800"},"Actions"))),u.createElement("tbody",null,e.length?e.map(((e,t)=>u.createElement(de,s({key:t},{invoice:e,setInvoiceView:m,deleteItem:g})))):u.createElement("td",{className:"w-full h-12 bg-gray-800 text-center font-bold rounded-lg",colspan:6},"No data found"))),u.createElement("div",{className:"pagination flex justify-end"},u.createElement("ul",{className:"flex pl-0 divide-x divide-gray-900 list-none rounded"},u.createElement("button",{onClick:()=>{r(a-1)},disabled:a<=1,className:"block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none ml-0 rounded-l-lg hover:bg-gray-900 disabled:bg-gray-900 disabled:text-gray-400 disabled:cursor-default transition-colors duration-100"},"Previous"),u.createElement("button",{onClick:()=>{r(a+1)},disabled:a>=t/3,className:"block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none rounded-r-lg hover:bg-gray-900 disabled:bg-gray-900 disabled:text-gray-400 disabled:cursor-default transition-colors duration-100"},"Next")))),i&&c&&u.createElement(ue,{setInvoiceView:m,currentInvoice:c}))}));const pe=({innerText:e,cardType:t})=>{const{number:a}=z({from:{number:0},number:parseInt(e),delay:100,config:U.mollases});return e?u.createElement("p",{className:"text-lg mb-2",style:{color:"#00C49A"}},"revenue"===t&&u.createElement("span",null,"₹"),u.createElement(R.span,null,a.to((e=>e.toFixed(0)))),"loyalty"===t&&u.createElement("span",null,"%")):u.createElement("p",{className:"text-lg mb-2",style:{color:"#00C49A"}},"No data")},ye=({statInvoices:e,chartData:t})=>{const[a,r]=d.exports.useState({}),[l,n]=d.exports.useState([{Month:"Jan",Revenue:"200"},{Month:"Feb",Revenue:"500"},{Month:"Mar",Revenue:"300"},{Month:"Apr",Revenue:"400"},{Month:"May",Revenue:"500"}]);d.exports.useEffect((()=>{o(),s()}),[]);const o=()=>{let t={revenue:0,clients:0,loyalty:0,invoices:0};if(e){let a=0,r=0;e.forEach((e=>{"paid"===e.status?(a++,e.itemList&&e.itemList.forEach((e=>{t.revenue+=e.qty*e.price}))):"overdue"===e.status&&r++})),t.revenue=t.revenue.toFixed(2),t.loyalty=(a/(a+r)*100).toFixed(2),t.clients=[...new Set(e.map((e=>e.clientEmail)))].length,t.invoices=e.length}r(t)},s=async()=>{let e=t.map((e=>{let t=0;return e.data.forEach((e=>{e.qty.forEach(((a,r,l)=>{t+=l[r]*e.price[r]}))})),{Month:e._id.month-1,Revenue:t}})),a=new Array(12).fill(null);e.forEach((e=>{a[e.Month]||(a[e.Month]=e.Revenue)})),a=a.map(((e,t)=>null===e?{Month:w().month(t).format("MMM"),Revenue:0}:{Month:w().month(t).format("MMM"),Revenue:e})),n(a)};return u.createElement(u.Fragment,null,u.createElement("p",{className:"absolute text-white left-52 top-2 text-md font-bold text-gray-300"},"Monthly income"),u.createElement(j,{width:"100%",height:"100%"},u.createElement(D,{data:l},u.createElement("defs",null,u.createElement("linearGradient",{id:"colorEarning",x1:"0",y1:"0",x2:"0",y2:"1"},u.createElement("stop",{offset:"5%",stopColor:"#00C49A",stopOpacity:.8}),u.createElement("stop",{offset:"95%",stopColor:"#00C49A",stopOpacity:0}))),u.createElement(_,{type:"monotone",dataKey:"Revenue",stroke:"#00C49A",fillOpacity:1,fill:"url(#colorEarning)",dot:{fill:"#fff"}}),u.createElement(M,{dataKey:"Month",stroke:"rgba(156, 163, 175)",style:{fontSize:15}}),u.createElement(L,{style:{fontSize:15},stroke:"rgba(156, 163, 175)"}),u.createElement(O,null))),u.createElement("div",{className:"p-2 w-full text-center text-gray-400 grid grid-cols-2 gap-2 grid-rows-2"},u.createElement("div",{className:"detail-card rounded-xl shadow-xl flex flex-col justify-center items-center"},u.createElement("p",{className:"font-bold text-2xl"},"Total revenue"),u.createElement(pe,{innerText:a.revenue,cardType:"revenue"})),u.createElement("div",{className:"detail-card rounded-xl shadow-xl flex flex-col justify-center items-center"},u.createElement("p",{className:"font-bold text-2xl"},"Clients"),u.createElement("p",{className:"text-lg mb-2",style:{color:"#00C49A"}},u.createElement(pe,{innerText:a.clients,cardType:"clients"}))),u.createElement("div",{className:"detail-card rounded-xl shadow-xl flex flex-col justify-center items-center"},u.createElement("p",{className:"font-bold text-2xl"},"Loyalty"),u.createElement("p",{className:"text-lg",style:{color:"#00C49A"}},u.createElement(pe,{innerText:a.loyalty,cardType:"loyalty"}))),u.createElement("div",{className:"detail-card rounded-xl shadow-xl flex flex-col justify-center items-center"},u.createElement("p",{className:"font-bold text-2xl"},"Invoices"),u.createElement("p",{className:"text-lg",style:{color:"#00C49A"}},u.createElement(pe,{innerText:a.invoices,cardType:"invoices"})))))},fe=()=>u.createElement(u.Fragment,null,u.createElement("p",{className:"pl-4 pt-2 text-md font-bold text-gray-300"},"Send Again"),u.createElement("div",{className:"client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100"},u.createElement("div",{className:"img w-8 h-8 rounded-xl overflow-hidden mr-3"},u.createElement(N,{email:"raymaxrokzz@gmail.com"})),u.createElement("div",null,u.createElement("p",{className:"font-bold capitalize"},"test test"),u.createElement("p",null,"test@gmail.com"))),u.createElement("div",{className:"client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100"},u.createElement("div",{className:"img w-8 h-8 rounded-xl overflow-hidden mr-3"},u.createElement(N,{email:"raymaxrokzz@gmail.com"})),u.createElement("div",null,u.createElement("p",{className:"font-bold capitalize"},"test test"),u.createElement("p",null,"test@gmail.com"))),u.createElement("div",{className:"client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100"},u.createElement("div",{className:"img w-8 h-8 rounded-xl overflow-hidden mr-3"},u.createElement(N,{email:"raymaxrokzz@gmail.com"})),u.createElement("div",null,u.createElement("p",{className:"font-bold capitalize"},"test test"),u.createElement("p",null,"test@gmail.com"))));const be=({options:e,label:t})=>u.createElement(u.Fragment,null,u.createElement("button",{class:"w-full text-left flex items-center outline-none focus:outline-none"},u.createElement("span",{class:"pr-1 flex-1"},t),u.createElement("span",{class:"mr-auto"},u.createElement("svg",{class:"fill-current h-4 w-4\n            transition duration-150 ease-in-out",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.createElement("ul",{class:"bg-gray-800 border-2 border-gray-600 rounded absolute top-0 left-0 \n  transition duration-150 ease-in-out origin-top-left\n  min-w-32\n  "},e.map((e=>u.createElement("li",{class:"rounded-sm px-3 py-1 hover:bg-gray-700"},e))))),Ee=({children:e})=>u.createElement("li",{class:"rounded-sm px-3 py-1 hover:bg-gray-700"},e),xe=()=>u.createElement("div",{class:"group inline-block"},u.createElement("button",{class:"outline-none focus:outline-none text-white px-3 py-1 h-full bg-gray-800 rounded-sm flex items-center min-w-32"},u.createElement("span",{class:"pr-1 font-semibold flex-1"},"Filters"),u.createElement("span",null,u.createElement("svg",{class:"fill-current h-4 w-4 transform group-hover:-rotate-180\n        transition duration-150 ease-in-out",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.createElement("ul",{class:"bg-gray-800 border-2 border-gray-600 text-white select-none rounded transform scale-0 group-hover:scale-100 absolute \n  transition duration-150 ease-in-out origin-top min-w-32"},u.createElement(Ee,null,u.createElement(be,{options:["This year","This month","Last 7 days"],label:"Date Added"})),u.createElement(Ee,null,u.createElement(be,{options:["Overdue","Pending","Paid"],label:"Status"}))));var ve=g((e=>({statInvoices:e.invoice.statInvoices,chartData:e.invoice.chartData})),(e=>({logout:()=>e((async()=>{await ae.get("/logout")})),getStats:()=>e((async e=>{try{const t=await se.get("/stats"),a=await t.data.statInvoices,r=await t.data.chartData;e({type:"GET_STATS",payload:a}),e({type:"GET_CHART_DATA",payload:r})}catch(t){e({type:"ACTION_FAILURE",payload:t.response.data.error})}})),getAllInvoices:t=>e((e=>async t=>{try{const a=await se.get("/list",{params:e}),r=await a.data.invoices,l=await a.data.count;await t({type:"GET_ALL_INVOICES",payload:r}),t({type:"GET_INVOICE_COUNT",payload:l})}catch(a){t({type:"ACTION_FAILURE",payload:a.response.data.error})}})(t))})))(m(le((({logout:e,history:t,getStats:a,getAllInvoices:r,statInvoices:l,chartData:n})=>{const[o,c]=d.exports.useState(1),[i,m]=d.exports.useState(!1);d.exports.useEffect((()=>{a()}),[]);return u.createElement("div",{className:"overflow-hidden"},u.createElement("div",{className:"w-full h-screen flex flex-col items-center bg-gray-700"},u.createElement("div",{className:"header w-full h-12 m-2 grid gap-x-3",style:{gridTemplateColumns:"4rem auto 3.5rem"}},u.createElement("div",{className:"logo bg-gray-900 w-12 rounded-full ml-2 text-center leading-normal text-3xl text-white select-none font-bold"},"I"),u.createElement("div",{className:"heading text-gray-300"},u.createElement("p",{className:"font-bold text-3xl leading-normal"},"Invoicer")),u.createElement("button",{onClick:async()=>{await e(),t.push("/login")},className:"logout bg-gray-800 hover:bg-gray-900 w-12 rounded-xl flex justify-center items-center"},u.createElement(P,{className:"text-white text-3xl text-center"}))),u.createElement("div",{className:"search-bar w-full h-10 px-2 grid gap-x-3",style:{gridTemplateColumns:"3rem 8rem auto"}},u.createElement("button",{onClick:()=>m(!0),className:"bg-gray-800 px-2 rounded flex justify-center items-center text-white text-2xl hover:bg-gray-900 transition-colors duration-100"},u.createElement(F,null)),u.createElement(xe,null),u.createElement("div",{className:"px-2 flex justify-between rounded bg-gray-300 w-full"},u.createElement("input",{className:"flex-grow outline-none text-gray-600 bg-gray-300",type:"text",placeholder:"Search Invoice..."}),u.createElement(q,{className:"mt-1 text-2xl text-gray-500 hover:text-gray-800 transition-colors duration-100 cursor-pointer"}))),i&&u.createElement(me,{pageNo:o,getAllInvoices:r,getStats:a,setInvoiceModal:m}),u.createElement("div",{className:"main-container w-full h-full p-2 grid grid-cols-4 gap-2"},u.createElement("div",{className:"card col-span-4"},u.createElement(ge,{pageNo:o,setPageNo:c,getAllInvoices:r})),u.createElement("div",{className:"card bg-gray-800 rounded col-span-3 pt-8 flex relative"},u.createElement(ye,s({},{statInvoices:l,chartData:n}))),u.createElement("div",{className:"card bg-gray-800 rounded text-gray-300"},u.createElement(fe,null)))))}))));const he=()=>u.createElement(G,null,u.createElement(Y,{exact:!0,path:"/signup",component:ne}),u.createElement(Y,{exact:!0,path:"/login",component:oe}),u.createElement(Y,{exact:!0,path:"/",component:ve}));function Ne(){return u.createElement("div",{className:"Root"},u.createElement(he,null))}const we={user:"",errors:{}},Ce={invoices:[],invoiceCount:null,currentInvoice:{},statInvoices:[],chartData:[],error:""},Ie=Z(V({key:"root",storage:J},H({user:(e=we,t)=>{switch(t.type){case"AUTH_SUCCESS":return c(s({},e),{user:t.payload});case"AUTH_FAILURE":return c(s({},e),{errors:t.payload});default:return e}},invoice:(e=Ce,t)=>{switch(t.type){case"GET_CURRENT_INVOICE":return c(s({},e),{currentInvoice:t.payload});case"GET_ALL_INVOICES":return c(s({},e),{invoices:t.payload});case"GET_INVOICE_COUNT":return c(s({},e),{invoiceCount:t.payload});case"GET_STATS":return c(s({},e),{statInvoices:t.payload});case"GET_CHART_DATA":return c(s({},e),{chartData:t.payload});case"ACTION_FAILURE":return c(s({},e),{error:t.payload});default:return e}}})),$(K,Q)),Ae=B(Ie);W.render(u.createElement(X,{store:Ie},u.createElement(u.StrictMode,null,u.createElement(ee,null,u.createElement(te,{loading:null,persistor:Ae},u.createElement(Ne,null))))),document.getElementById("root"));
