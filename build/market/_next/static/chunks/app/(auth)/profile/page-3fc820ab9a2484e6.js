(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{8043:function(e,s,a){Promise.resolve().then(a.bind(a,8659))},8659:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(7437),l=a(9004),n=a(2173),c=a(2265),o=a(171),r=function(e){let{image:s,name:a,isBuy:r,cardId:i,rewardClaim:d,onList:x}=e,[m,u]=(0,c.useState)("0"),h=async()=>{document.getElementById("sell-card-modal-".concat(i)).close();try{await window.solana.connect();let e=window.solana.publicKey.toBase58(),s=o.Am.loading("Listing your nft...");await n.Z.post("".concat(l.Z.API_ENDPOINT,"/market/list"),{wallet:e,rewardClaim:d,amount:Number(m)}),o.Am.dismiss(s),o.Am.success("Your nft listed successfully!")}catch(e){o.Am.error("Failed to list your nft to marketplace!")}x()};return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"card card-compact w-full bg-white  shadow border text-xs max-h-[300px]",children:[(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:s,alt:"Shoes"})}),(0,t.jsxs)("div",{className:"px-2 text-start mt-3",children:[(0,t.jsx)("h2",{className:"",children:a}),(0,t.jsxs)("div",{className:"flex justify-between items-center mt-5 pb-2 ",children:[(0,t.jsxs)("div",{className:"flex flex-col text-start gap-y-1",children:[(0,t.jsx)("p",{children:"Floor"}),(0,t.jsx)("p",{children:"0,001 Matic"})]}),(0,t.jsx)("button",{className:"px-5 py-2 rounded-xl border",onClick:()=>document.getElementById("sell-card-modal-".concat(i)).showModal(),children:r?"Buy":"List on market"}),(0,t.jsx)("dialog",{id:"sell-card-modal-".concat(i),className:"modal modal-bottom sm:modal-middle ",children:(0,t.jsxs)("div",{className:"modal-box bg-white",children:[(0,t.jsx)("h3",{className:"font-bold text-lg",children:"Sell your Letter to Marketplace"}),(0,t.jsx)("p",{className:"py-4",children:"Please input your pricing for your Letter"}),(0,t.jsx)("div",{style:{paddingTop:8,paddingBottom:8},className:"border rounded-xl p-5 flex flex-col hover:border-orange-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 b w-full  sm:text-sm focus:ring-1",children:(0,t.jsx)("div",{className:"flex  items-center",children:(0,t.jsx)("input",{className:"flex flex-1 bg-transparent outline-none py-2",placeholder:"0.00",type:"text",onChange:e=>u(e.currentTarget.value)})})}),(0,t.jsx)("div",{className:"modal-action",children:(0,t.jsxs)("div",{method:"dialog ",children:[(0,t.jsx)("button",{className:"btn btn-ghost font-light",onClick:()=>document.getElementById("sell-card-modal-".concat(i)).close(),children:"Cancel"}),(0,t.jsx)("button",{className:"btn btn-ghost font-light",onClick:h,children:"Sell"})]})})]})})]})]})]})})},i=a(1550),d=a.n(i),x=a(1396),m=a.n(x);a(8062);var u=function(e){let[s,a]=(0,c.useState)([]),[i,x]=(0,c.useState)({});(0,c.useEffect)(()=>{u()},[]);let u=async()=>{await window.solana.connect();let e=window.solana.publicKey.toBase58(),s=await n.Z.get("".concat(l.Z.API_ENDPOINT,"/wallet/").concat(e));x(s.data),a(s.data.nfts)};return(0,t.jsxs)("div",{className:"bg-white",children:[(0,t.jsx)(o.Ix,{}),(0,t.jsxs)("div",{className:"relative ",children:[(0,t.jsxs)("section",{className:"bg-slate-100 group ",children:[(0,t.jsxs)("div",{className:"relative w-full  flex justify-center items-center h-[300px]",children:[(0,t.jsx)("input",{className:"w-full h-full  opacity-0",type:"file"}),(0,t.jsx)("div",{className:"absolute h-full w-full bg-slate-300 opacity-0 duration-300 group-hover:opacity-100 flex justify-center items-center "})]}),(0,t.jsx)("div",{className:"absolute top-[42%] left-[5%] h-32 w-32 rounded-full bg-black",style:{background:"url(https://storage.googleapis.com/opensea-static/opensea-profile/27.png) no-repeat center center / cover",border:"6px solid rgba(255,255,255,1)",boxShadow:"rgba(0, 0, 0, 0.08) 0px 4px 16px"}})]}),(0,t.jsx)("div",{className:"w-[90%] container mx-auto relative py-20  gap-5  ",children:(0,t.jsxs)("div",{className:"flex justify-between w-full",children:[(0,t.jsxs)("div",{className:"flex flex-col text-3xl gap-2 font-normal w-[60%]",children:[(0,t.jsx)("h1",{children:"Unname"}),(0,t.jsx)("div",{className:"flex gap-x-5 text-xs flex-col md:flex-row ",children:(0,t.jsx)("p",{className:"truncate w-[50%] md:w-[20%]",children:i.walletAddress})})]}),(0,t.jsx)("div",{className:"flex  items-center ",children:(0,t.jsx)(m(),{href:"/swap",className:"border rounded-xl p-3",children:(0,t.jsxs)("button",{className:"flex items-center gap-x-2 ",children:[(0,t.jsx)(d(),{className:"text-lg",name:"swap-horizontal"}),"Swap Token"]})})})]})})]}),(0,t.jsx)("div",{className:"container mx-auto",style:{paddingTop:24,paddingBottom:24},children:(0,t.jsx)("h1",{style:{fontSize:21,fontWeight:600},children:"Your NFTs"})}),(0,t.jsx)("div",{className:"container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-5 grow",children:s.map((e,s)=>{if("pending"==e.status)return(0,t.jsx)(r,{image:e.reward.banner,name:e.reward.name,cardId:"card-id-".concat(s),rewardClaim:e.id,onList:u},"nft-card-".concat(s))})}),(0,t.jsx)("div",{className:"flex container mx-auto flex-wrap-reverse"})]})}},9004:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});class t{}t.DEV=!0,t.TOKEN_RATE=1e3,t.API_ENDPOINT="http://localhost",t.NETWORK="https://api.devnet.solana.com"}},function(e){e.O(0,[153,713,396,971,938,744],function(){return e(e.s=8043)}),_N_E=e.O()}]);