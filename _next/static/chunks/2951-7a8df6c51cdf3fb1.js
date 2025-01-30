!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="70094800-7e1e-4678-a782-9943b3eb0a61",e._sentryDebugIdIdentifier="sentry-dbid-70094800-7e1e-4678-a782-9943b3eb0a61")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2951],{29575:function(e,t,a){a.d(t,{i:function(){return u}});var r=a(57437),i=a(83657),n=a(4360),s=a(47749),o=a(42586),l=a(2265),d=a(10187),c=a(33458);let u=e=>{let{altLogo:t}=e,a=(0,o.useTranslations)(),[u,m]=(0,l.useState)(c.db.status),[p,h]=(0,l.useState)(c.db.migrationState),[g,x]=(0,l.useState)(!1);return(0,l.useEffect)(()=>c.db.onStatusChange(m),[]),(0,l.useEffect)(()=>c.db.onMigrationStateChange(h),[]),(0,l.useEffect)(()=>{let e=setTimeout(()=>x(!0),3e3);return()=>clearTimeout(e)},[]),(0,r.jsx)(d.default,{altLogo:t,children:g&&(0,r.jsxs)(i.K,{alignItems:"center",gap:4,children:[(0,r.jsx)(n.x,{children:(()=>{switch(u){case"loading":return a("chatLoading.loading");case"blocked":return a("chatLoading.refresh");default:return}})()}),p.running&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.x,{children:a("chatLoading.migration",{version:p.version})}),(0,r.jsx)(s.E,{value:p.progress,colorScheme:"primary",borderRadius:"full",width:"100%"})]})]})})}},2951:function(e,t,a){a.r(t),a.d(t,{default:function(){return eZ}});var r,i,n=a(57437),s=a(78796),o=a(42586),l=a(2265),d=a(23838),c=a(25774),u=a(74468);let m=async e=>{let{userId:t,toast:a,translate:r,selectedConversationId:i,veniceShareKey:n,veniceShareNonce:s,conversationContext:o}=e,{fetchConversations:l,saveMessage:d,saveConversations:c,setSelectedConversationFromId:m,loadSharedEncryptedConversation:p}=o;try{let e=await p(i,n,s);if(!e)return;let a={...e.conversation,folderId:null,ownerId:t,updatedAtUnixTimestamp:Date.now()};for(let t of(await c([a]),e.messages))await d({conversationId:a.id,message:t,rerenderMessages:!1});await m(a.id),await l(t),window.history.pushState({},"","/chat/".concat(a.id)),(0,u.Qe)({name:"importedEncryptedConversation",data:{}})}catch(e){a({title:r("encryptedConversation.loadError.title"),description:r("encryptedConversation.loadError.description"),status:"warning",duration:9e3,isClosable:!0,position:"top-right"})}};var p=a(86827),h=a(22048),g=a(29827),x=a(59128),f=a.n(x),v=a(30166),b=a(87281),y=a(80022),I=a(29575),w=a(31384),S=a(83657),j=a(28082),C=a(4360),k=a(13701),T=a(13449),z=a(45168),E=a(13823),M=a(18254);let D=(0,l.memo)(e=>{let{onHandleNewConversation:t}=e,a=(0,o.useTranslations)(),{state:{loading:r}}=(0,E.IO)();return(0,n.jsx)(p.M,{width:"full",height:"100%",flexDir:"column",gap:2,alignItems:"center",backgroundSize:"cover",backgroundPosition:"center center",bgImage:"url(/images/circle-bg.svg)",children:(0,n.jsxs)(S.K,{alignItems:"center",px:4,children:[(0,n.jsx)(j.Vp,{colorScheme:"teal",children:a("newChat")}),(0,n.jsx)(C.x,{fontWeight:"semibold",textAlign:"center",children:a("chatCenter.headline")}),(0,n.jsxs)(S.K,{mt:4,spacing:4,children:[(0,n.jsx)(k.z,{isDisabled:r,justifyContent:"space-between",height:"auto",gap:4,p:4,rightIcon:(0,n.jsx)(w.m,{ml:"auto"}),backdropFilter:"blur(20px)",width:"full",whiteSpace:"normal",colorScheme:"primary",onClick:()=>t(M.i.Text),children:(0,n.jsxs)(T.k,{alignItems:"center",gap:4,justifyContent:"flex-start",children:[(0,n.jsx)(p.M,{boxSize:"40px",fontSize:"2xl",children:(0,n.jsx)(z.YsT,{})}),(0,n.jsxs)(S.K,{alignItems:"flex-start",textAlign:"left",children:[(0,n.jsx)(C.x,{fontSize:"md",fontWeight:"semibold",children:a("chatCenter.text.title")}),(0,n.jsx)(C.x,{fontSize:"sm",color:"text.primary.muted",children:a("chatCenter.text.description")})]})]})}),(0,n.jsx)(k.z,{isDisabled:r,justifyContent:"space-between",height:"auto",gap:4,p:4,rightIcon:(0,n.jsx)(w.m,{ml:"auto"}),backdropFilter:"blur(20px)",width:"full",whiteSpace:"normal",colorScheme:"primary",onClick:()=>t(M.i.Image),children:(0,n.jsxs)(T.k,{alignItems:"center",gap:4,children:[(0,n.jsx)(p.M,{boxSize:"40px",fontSize:"2xl",children:(0,n.jsx)(z.msJ,{})}),(0,n.jsxs)(S.K,{alignItems:"flex-start",textAlign:"left",children:[(0,n.jsx)(C.x,{fontSize:"md",fontWeight:"semibold",children:a("chatCenter.image.title")}),(0,n.jsx)(C.x,{fontSize:"sm",color:"text.primary.muted",children:a("chatCenter.image.description")})]})]})}),(0,n.jsx)(k.z,{isDisabled:r,justifyContent:"space-between",height:"auto",gap:4,p:4,rightIcon:(0,n.jsx)(w.m,{ml:"auto"}),backdropFilter:"blur(20px)",width:"full",whiteSpace:"normal",colorScheme:"primary",onClick:()=>t(M.i.Code),children:(0,n.jsxs)(T.k,{alignItems:"center",gap:4,justifyContent:"flex-start",children:[(0,n.jsx)(p.M,{boxSize:"40px",fontSize:"2xl",children:(0,n.jsx)(z.ssl,{})}),(0,n.jsxs)(S.K,{alignItems:"flex-start",textAlign:"left",children:[(0,n.jsx)(C.x,{fontSize:"md",fontWeight:"semibold",children:a("chatCenter.code.title")}),(0,n.jsx)(C.x,{fontSize:"sm",color:"text.primary.muted",children:a("chatCenter.code.description")})]})]})})]})]})})});D.displayName="ChatCenter";var P=a(57274),R=a(77254),F=a(25730),L=a(65373),N=a(12125),U=a(68193),O=a(32191),_=a(22053),A=a(59745),B=a(14735),q=a(7276),H=a(61273),Y=a(910),K=a(37354),Q=a(16595),W=a(7847),J=a(26262),V=a(72760),Z=a(14508);let G=e=>{let{file:t,isLoading:a,onRemove:r}=e,i=(0,l.useCallback)(()=>{r(t)},[t,r]),s=(0,l.useMemo)(()=>(0,Z.J)(t),[t]);return(0,n.jsxs)(K.Z,{position:"relative",maxWidth:"250px",bg:"background.input.base",borderWidth:1,borderColor:"border.input",boxShadow:"var(--ring-offset-shadow,0 0 #0000),var(--ring-shadow,0 0 #0000),var(--shadow)",children:[(0,n.jsx)(F.h,{colorScheme:"primary",isRound:!0,boxSize:6,minWidth:"auto",onClick:i,icon:(0,n.jsx)(z.lhV,{}),"aria-label":"remove file",position:"absolute",right:"-5%",top:"-5%",zIndex:2}),"Image"===s?(0,n.jsx)(Q.E,{width:"80px",height:"80px",src:URL.createObjectURL(t),alt:"file preview",borderRadius:"lg"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.M,{children:(0,n.jsx)(j.Vp,{mt:4,children:s})}),(0,n.jsx)(W.e,{fontSize:"xs",maxWidth:"100%",textOverflow:"ellipsis",overflow:"hidden",children:(0,n.jsxs)(J.g,{spacing:1,align:"stretch",children:[(0,n.jsx)(C.x,{children:t.name}),a&&(0,n.jsxs)(C.x,{size:"sm",children:[(0,n.jsx)(V.$,{size:"xs",mr:2})," Uploading..."]})]})})]})]})};var X=a(49062),$=a(22122),ee=a(41528),et=a(38236),ea=a(43159),er=a(68342),ei=a(34590),en=a(80280),es=a(51138),eo=a(47887),el=a(3490),ed=a(48728),ec=a(18977),eu=a(8554),em=a(11593),ep=a(93369),eh=a(59625),eg=a(4391);let ex=(0,eh.Ue)()((0,eg.n)((e,t)=>({tempHistory:[],addToTempHistory:t=>{e(e=>{e.tempHistory.unshift(t)})}})));var ef=a(81613),ev=a(56134);let eb={base:"calc(env(safe-area-inset-bottom))",lg:4},ey={base:"md",md:"lg"},eI={flex:1},ew={base:"32px",md:"52px"},eS={borderColor:"border.hover"},ej={borderColor:"border.pressed"},eC={borderColor:"border.pressed",boxShadow:"none"},ek={base:"blur(10px)",md:"none"},eT={base:"var(--background-transparent)",md:"transparent"},ez=(0,n.jsx)(H.JuG,{}),eE=(0,n.jsx)(R.H,{}),eM=(0,n.jsx)(z.DcN,{}),eD={boxShadow:"0 0 0 5px #000"},eP={boxShadow:"0 0 0 5px var(--primary)"},eR=(0,l.memo)(e=>{let{onSend:t,textareaRef:a,isLoading:r,position:i,inputGroupProps:d,flexProps:m,conversationType:h,onMessageTypeChange:g,conversationId:x,characterId:f,onStop:v}=e,b=(0,o.useTranslations)(),{onOpen:y}=(0,ee.R)("upgrade"),{state:{messageIsStreaming:I}}=(0,E.IO)(),{data:w}=(0,em.hE)(null!=x?x:""),S=(0,c.Sz)(ea.St,e=>e.issuePoints),j=null!=f?f:null==w?void 0:w.characterId,{data:C}=(0,eu.sF)(null!=j?j:""),D=(0,ep.F)(e=>e.settings.imageModel),P=(0,ep.F)(e=>e.settings.textModel),R=(0,ep.F)(e=>e.settings.codeModel),H=(0,ep.F)(e=>e.settings.enterBehavior),K=(0,ep.F)(e=>{var t;return null===(t=e.settings.textSettings)||void 0===t?void 0:t.webEnabled}),Q=P?(0,es.Ho)(P):void 0,W=(0,ep.F)(e=>e.saveTextSettings),J=(0,c.Sz)(ea.St,e=>e.isProUser),V=(0,c.Sz)(ea.St,e=>e.isVeniceStaff),{files:Z,setFiles:eh,fileText:eg,fileName:eR,fileTokens:eF,isFileLoading:eL,fileType:eN,resetFileState:eU,handleImageFileUpload:eO,handleTextFileUpload:e_}=(0,c.Sz)(et.H,e=>e),eA=h===M.i.Image,eB=(0,s.p)(),[eq,eH]=(0,l.useState)(1),eY=(0,l.useRef)(void 0),[eK,eQ]=(0,l.useState)(),[eW,eJ]=(0,l.useState)(!1),eV=(0,ep.F)(e=>e.settings.inputHistoryNavigation),[eZ,eG]=(0,l.useState)(0),{addToTempHistory:eX,tempHistory:e$}=ex(),[e0,e1]=(0,l.useState)(""),e4=[e0,...e$],e2=(0,l.useMemo)(()=>{if(!h)return;let{modelId:e}=(0,er.v)({conversationType:h,textModel:P,imageModel:D,codeModel:R});return(0,es.Ho)(e)},[h,D,P,R]),e8=(0,l.useMemo)(()=>({status:"error",duration:1e4,isClosable:!0,position:"top-right"}),[]),{enhancePrompt:e3}=(0,ei.e)(),e5=(0,l.useCallback)(async()=>{if(eA&&void 0!==eK){(0,u.Qe)({name:"enhancedImagePrompt",data:{}}),eJ(!0);try{let e=await e3(eK);if(!e.body)return;let t="";await (0,ed.z)(e.body,e=>{"content"===e.kind&&(t+=e.content,eQ(t))})}catch(e){}eJ(!1)}},[eK,e3,eA]),e7=(0,l.useCallback)(()=>{W({webEnabled:!K})},[K,W]),e6=(0,l.useCallback)(e=>{if(e.length>0){let t="";for(let a of e)t+="".concat(a.file.name,":\n").concat(a.errors.map(e=>e.code===B.jK.FileTooLarge.toString()?b("chatInput.fileUpload.errors.fileSize",{fileSize:(a.file.size/1e6).toFixed(2)}):e.message).join("\n"),"\n"),(0,ec.x)(a.errors);eB({...e8,title:b("chatInput.fileUpload.errors.title"),description:t})}},[eB,e8,b]),e9=(0,l.useCallback)(async e=>{if(!e2)return alert(b("chatInput.guards.noModelError"));let t=e[0];if("image/png"===t.type||"image/jpeg"===t.type){if(V){await eO(t);return}eB({title:b("chatInput.fileUpload.errors.genericError.title"),description:b("chatInput.fileUpload.errors.genericError.description"),...e8});return}await e_(t)},[e2,b,e_,V,eB,e8,eO]);(0,l.useEffect)(()=>{if((null==e2?void 0:e2.type)!==eo.BY.Text)return;let e=eF+((null==eK?void 0:eK.length)||0)/el.U_,t=(0,es.Pd)(e2);e2&&e>t&&(eB({title:b("chatInput.fileUpload.errors.exceedsContext.title"),description:b("chatInput.fileUpload.errors.exceedsContext.description",{excessiveContextSize:new Intl.NumberFormat().format(Number((e/t).toFixed(1)))}),...e8}),eU())},[eF]);let te=!!V||h!==M.i.Image,{getRootProps:tt,getInputProps:ta,open:tr,isFocused:ti,isDragAccept:tn,acceptedFiles:ts}=(0,q.uI)({maxFiles:1,maxSize:10485760,noClick:!0,noKeyboard:!0,disabled:!te,onDropAccepted:e=>{e9(e)},validator:e=>{if(!V)return null;let t=e.type,a=el.KL.includes(t);return h===M.i.Text&&a?{code:B.jK.FileInvalidType,message:b("chatInput.fileUpload.errors.invalidImageToTextChat")}:null},onDropRejected:e6,...h===M.i.Image&&V?{accept:{"image/*":[".png",".gif",".jpeg",".jpg"]}}:{}}),{formRef:to,onKeyDown:tl}=(0,en.h)(),td=(0,l.useCallback)(e=>{let t=e.target.value;eQ(t),e1(t),eG(0)},[]),tc=(0,l.useCallback)(()=>{v()},[v]),tu=(0,l.useCallback)(e=>{let a;if(e.preventDefault(),e.stopPropagation(),I)return;if(!e2)return alert(b("chatInput.guards.noModelError"));if(!eK)return alert(b("chatInput.guards.noMessageError"));if(eL)return alert(b("chatInput.guards.fileUploading"));let r=e2;h===M.i.Text&&C&&(a=C.id,r=es.bN);let i=[];eg&&"Image"!==eN&&(i.push({role:"user",content:decodeURIComponent(encodeURIComponent(eg)),modelId:r.id,modelType:r.type,isFile:!0,fileName:eR,fileType:eN,characterId:a}),S(ef.mR.DOC_INFERENCE)),i.push({role:"user",content:eK,modelId:r.id,modelType:r.type,characterId:a,...e2.type===eo.BY.Image&&{imagePath:eg}}),eU(),t({newMessages:i}),eX(eK),eG(0),e1(""),eQ("")},[eX,I,e2,b,eK,eL,h,C,eg,eU,t,eR,eN,S]);(0,l.useEffect)(()=>{let e=document.body;if(window.visualViewport){let t=window.visualViewport,a=window.innerHeight,r=()=>{e&&(e.style.setProperty("--chat-scroll-offset","".concat(t.height,"px")),e.style.setProperty("--chat-screen-height","".concat(a,"px")))};return t.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}}},[]);let tm=(0,l.useCallback)(e=>{void 0===eY.current&&(eY.current=e),eH(e)},[]),tp=(0,l.useMemo)(()=>({base:eq>48?"2xl":"lg",md:"xl"}),[eq]),th=(0,l.useMemo)(()=>({...ti?eD:{},...tn?eP:{}}),[ti,tn]),tg=(0,l.useCallback)(e=>{let t=[...Z];t.splice(ts.indexOf(e),1),eh(t)},[ts,Z,eh]),tx=(0,l.useMemo)(()=>0===Z.length?null:(0,n.jsx)(T.k,{px:4,gap:2,pt:4,children:Z.map(e=>(0,n.jsx)(G,{file:e,isLoading:eL,onRemove:tg},e.name))}),[eL,Z,tg]),tf=(0,l.useMemo)(()=>eA?eW?(0,n.jsx)(F.h,{colorScheme:"primary","aria-label":"submit",icon:(0,n.jsx)(L.D,{size:"16px",isIndeterminate:!0,color:"text.base",trackColor:"border.base",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),size:"sm",isDisabled:!0,mr:2}):(0,n.jsx)($.u,{label:b("chatInput.enhanceImage"),children:(0,n.jsx)(F.h,{colorScheme:"primary","aria-label":"submit",icon:eM,size:"sm",isLoading:r,isDisabled:!eK||eW,onClick:e5,mr:2})}):null,[eK,e5,eW,eA,r,b]),tv=(0,l.useMemo)(()=>(0,n.jsx)(n.Fragment,{children:r?(0,n.jsxs)(p.M,{position:"relative",children:[(0,n.jsx)(L.D,{size:"32px",isIndeterminate:!0,color:"text.base",trackColor:"border.base",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),(0,n.jsx)(F.h,{variant:"ghost",isRound:!0,onClick:tc,"aria-label":"stop",icon:ez})]}):(0,n.jsxs)(p.M,{position:"relative",children:[eA&&tf,(0,n.jsx)(F.h,{colorScheme:"primary","aria-label":"submit",icon:eE,size:"sm",isLoading:r,isDisabled:!eK,type:"submit","data-testid":"chatInputSubmitButton"})]})}),[eK,tc,tf,eA,r]),tb=(0,l.useMemo)(()=>{switch(h){case M.i.Image:if(Z.length>0)return b("chatInput.placeholder.inpainting");return b("chatInput.placeholder.image");case M.i.Text:return b("chatInput.placeholder.text");case M.i.Code:return b("chatInput.placeholder.code");default:return""}},[h,Z.length,b]);return(0,n.jsxs)(A.E.div,{layoutId:"chat-input",layoutDependency:i,style:{width:"100%",position:null!=i?i:"static",left:0,right:0,bottom:0,zIndex:9},children:[!J&&(0,n.jsx)(T.k,{mx:"auto",maxWidth:"48rem",alignItems:"center",gap:1,px:4,pb:2,pt:12,justifyContent:"center",bg:"var(--footer-gradient)",display:{base:"flex",md:"none"},children:(0,n.jsx)(k.z,{variant:"link",py:2,color:"text.link",leftIcon:(0,n.jsx)(z.c_x,{color:"var(--primary)"}),onClick:()=>y(),children:b("upgradeToPro")})}),(0,n.jsx)(T.k,{width:"full",px:{base:2,md:0},pb:eb,bg:eT,backdropFilter:ek,children:(0,n.jsx)(T.k,{mx:"auto",width:"full",maxWidth:"48rem",children:(0,n.jsxs)(T.k,{width:"full",mx:"auto",flexDir:"column",gap:0,position:"relative",borderRadius:tp,boxShadow:"var(--ring-offset-shadow,0 0 #0000),var(--ring-shadow,0 0 #0000),var(--shadow)",transitionProperty:"common",transitionDuration:"normal",bg:"background.input.base",...tt({style:th}),children:[tx,(0,n.jsx)("input",{...ta()}),(0,n.jsx)(T.k,{width:"full",gap:4,alignItems:"flex-end",zIndex:4,...m,children:(0,n.jsxs)("form",{ref:to,onSubmit:tu,style:eI,children:[(0,n.jsxs)(N.B,{size:ey,alignItems:"center",transitionProperty:"common",transitionDuration:"normal",bg:"transparent",...d,children:[te&&(0,n.jsx)(U.Z,{pl:1,height:"100%",alignItems:"flex-end",py:3,children:(0,n.jsx)(F.h,{variant:"ghost",icon:(0,n.jsx)(z.eTK,{}),"aria-label":"Upload PDF or Text File",onClick:tr,size:"sm",disabled:I})}),(0,n.jsx)(O.g,{variant:"filled",borderWidth:0,placeholder:C?b("chatInput.placeholder.character",{character:C.name}):tb,resize:"none",maxHeight:"250px",pl:te?12:4,pr:16,py:4,fontSize:"md",tabIndex:0,bg:"transparent",as:Y.Z,minHeight:ew,onHeightChange:tm,minRows:1,onKeyDown:e=>{if(eV&&("ArrowUp"===e.key||"ArrowDown"===e.key)){let t=e.currentTarget,a=t.selectionStart;requestAnimationFrame(()=>{let r=t.selectionStart;(r===a||0===r)&&("ArrowUp"===e.key&&eZ<e4.length-1&&(eQ(e4[eZ+1]),eG(eZ+1),requestAnimationFrame(()=>{var e;t.scrollHeight>(null!==(e=eY.current)&&void 0!==e?e:0)&&(t.setSelectionRange(0,0),t.focus())})),"ArrowDown"===e.key&&eZ>0&&(eQ(e4[eZ-1]),eG(eZ-1)))})}H===ev.m.Submit&&tl(e)},onChange:td,value:eK,ref:a,isDisabled:r,_hover:eS,_active:ej,_focus:eC,required:!0,autoFocus:!0,"data-testid":"chatTextInput"}),j&&(0,n.jsx)(U.x,{alignItems:"flex-end",height:"100%",py:3,pr:{base:3,md:0},children:tv})]}),!j&&(0,n.jsxs)(T.k,{px:3,py:3,justifyContent:"space-between",alignItems:"center",children:[(0,n.jsxs)(T.k,{gap:2,alignItems:"center",children:[(0,n.jsx)(X.q,{isDisabled:I,value:h,onChange:g}),h===M.i.Text&&(null==Q?void 0:Q.webEnabled)&&(0,n.jsx)($.u,{label:b("textSettings.advancedSettings.web.title"),shouldWrapChildren:!0,children:(0,n.jsx)(F.h,{_active:{color:"text.link"},"aria-label":b("textSettings.advancedSettings.web.title"),color:"text.subtle",fontSize:"xl",icon:(0,n.jsx)(z.FQi,{}),isActive:K,onClick:e7})})]}),(0,n.jsxs)(T.k,{gap:4,alignItems:"center",children:[(0,n.jsx)(_.xu,{display:{base:"none",md:"flex"},children:!J&&(0,n.jsx)(k.z,{variant:"link",color:"text.link",leftIcon:(0,n.jsx)(z.c_x,{color:"var(--primary)"}),onClick:()=>y(),children:b("upgradeToPro")})}),tv]})]})]})})]})})})]})});eR.displayName="ChatInput";var eF=a(64214),eL=a(51868),eN=a(14478),eU=a(79482);(r=i||(i={})).MODEL_NOT_FOUND="modelNotFound",r.PRO_ONLY_MODEL="proOnlyModel",r.MODEL_OFFLINE="modelOffline",r.CAPACITY_LIMIT="capacityLimit",r.USER_PROMPT_TOO_LONG="userPromptTooLong",r.USER_CANCELLED="userCancelled";let eO=()=>{let e=(0,o.useTranslations)(),{setStreamingMessage:t,saveMessage:a}=(0,eF.uu)(),r=(0,ep.F)(e=>e.resetModels),n=(0,c.Sz)(ea.St,e=>e.isProUser),s=(0,c.Sz)(ea.St,e=>e.userType);return{handleServerError:(0,l.useCallback)(async s=>{let o,{activeConversation:l,requestId:d,jsonResponse:c,model:m,messageId:p}=s;(0,ec.x)({requestId:d,messageId:p,activeConversation:l,jsonResponse:c,model:m});let h=null==c?void 0:c.error;(0,ec.x)("JSONERROR",h),o=function(t,a,i){let{friendly_name:n,type:s}=i;switch(t){case"modelNotFound":return r(),e("server.chat.error.modelNotFound");case"proOnlyModel":return a?e("server.chat.error.proOnlyModel.signedIn"):e("server.chat.error.proOnlyModel.default");case"modelOffline":return e("server.chat.error.modelOffline");case"capacityLimit":return e("server.chat.error.capacityLimit");case"userPromptTooLong":return a?e("server.chat.error.promptTooLong.proUser"):e("server.chat.error.promptTooLong.freeUser");case"userCancelled":if(s===eo.BY.Image)return e("server.chat.error.userCancelled.image");if(s===eo.BY.Text)return e("server.chat.error.userCancelled.text");return e("server.chat.error.userCancelled.default");default:return e("server.chat.error.defaultError",{modelName:n})}}(Object.values(i).includes(h)?h:"",n,m),t(void 0),await a({conversationId:l.id,message:{role:"venice",content:o,id:p,modelId:m.id,isErrored:!0,requestId:d},rerenderMessages:!0}),(0,u.Qe)({name:"experiencedInferenceError",data:{conversationType:m.type,modelId:m.id,error:null==c?void 0:c.error,errorMessage:o}})},[n,r,a,t,e]),handleRateLimit:(0,l.useCallback)(async(e,r,i,n)=>{t(void 0),await a({conversationId:e.id,message:{accountType:s,role:"venice",content:"",id:i,modelId:e.modelId,isRateLimited:!0,rateLimitType:n,requestId:r},rerenderMessages:!0}),(0,u.Qe)({name:"experiencedRateLimit",data:{conversationType:e.type,modelId:e.modelId,requestId:r,rateLimitType:n}})},[a,t,s])}},e_=(e,t,a)=>{let r=e.headers.get("x-ratelimitremaining"),i=e.headers.get("x-ratelimitresets");switch(t.type){case eo.BY.Image:a({field:"imageRequestsRemaining",value:r}),i&&a({field:"imageRequestsResetAt",value:new Date(Number(i))});break;case eo.BY.Text:a({field:"chatRequestsRemaining",value:r}),i&&a({field:"chatRequestsResetAt",value:new Date(Number(i))})}};var eA=a(96490),eB=a(718),eq=a(63649),eH=a(3809);let eY=()=>{let e=(0,g.NL)(),{handleServerError:t,handleRateLimit:a}=eO(),{getMessagesByConversationId:r}=(0,eB.c)(),{getUserSystemPrompts:i}=(0,eF.uu)(),{updateConversation:n,saveMessage:s,setMessagesLastUpdatedAt:d,setSelectedConversation:u,setStreamingMessage:m,getActiveSystemPromptLength:p}=(0,eF.uu)(),{dispatch:x}=(0,E.IO)(),v=(0,o.useTranslations)(),b=(0,c.Sz)(ea.St,e=>e.id),y=(0,l.useRef)(null),[I,w]=(0,l.useState)(!1),S=(0,l.useCallback)(()=>{y.current&&(y.current.abort(),y.current=null,w(!1),x({field:"loading",value:!1}))},[x]),j=(0,l.useCallback)(async e=>{await n(e),u(f()(e))},[n,u]),C=(0,l.useCallback)(async(e,t)=>{if(e.hasDefaultName){let{content:a}=t[t.length-1],r=a.length>30?a.substring(0,30)+"...":a;e.name=r,e.hasDefaultName=!1}return e.updatedAtUnixTimestamp=Date.now(),await j(e),e},[j]),k=(0,l.useCallback)(async e=>{let{conversation:t,newMessages:a,model:r}=e;await Promise.all(a.map(async e=>await s({conversationId:t.id,message:{...e,modelType:r.type,exceedsTokenLimit:r.type===eo.BY.Text&&e.content.length>(0,es.Pd)(r)*el.U_},rerenderMessages:!1})))},[s]),T=(0,l.useCallback)(async(e,t,a)=>{let r=await p(b),i=(0,es.Pd)(a)*el.U_;return!t.some(e=>e.content.length+r>i)||(await s({conversationId:e.id,message:{role:"venice",content:v("validation.promptTooLong"),id:(0,eU.LJ)(),modelId:a.id,isErrored:!0},rerenderMessages:!0}),d(Date.now()),!1)},[p,s,d,v,b]),z=(0,l.useCallback)(async(e,t)=>{var a;let r=(0,eU.LJ)(),i=null!==(a=ep.F.getState().settings.textSettings)&&void 0!==a?a:eH.Bj,n=ep.F.getState().settings.imageSettings,o={conversationId:e.id,message:{id:r,role:"venice",content:el.P8,modelId:t.id,modelType:t.type,conversationId:e.id,characterId:null==i?void 0:i.characterId,...t.type===eo.BY.Image?{imageSettings:n}:{}},rerenderMessages:!1};return await s(o),d(Date.now()),r},[s,d]),M=(0,l.useCallback)(async(t,a,r,i,n,s)=>{let o;if(null===t.body)return;let l=t.headers.get("x-venice-gpu-provider")||"unknown";x({field:"loading",value:!1});let d=[],c=!1,u="";await (0,ed.z)(t.body,t=>{var m;switch(t.kind){case"meta":t.augmented&&(c=!0,d.push(...t.references));break;case"content":u+=t.content;break;default:throw Error("Invalid response chunk encountered!")}let p=null!==(m=ep.F.getState().settings.textSettings)&&void 0!==m?m:eH.Bj,h={id:a,conversationId:r.id,content:u,executionTime:s,modelId:i.id,modelType:i.type,characterId:null==p?void 0:p.characterId,role:"assistant",updatedAtUnixTimestamp:Date.now(),requestId:n.requestId,isStopped:!1,gpuProvider:l,queriedInternet:c,streamingStatus:o,references:d};e.setQueryData(eq.S.messageIds(r.id),e=>null==e?void 0:e.map(e=>e.id===a?{...e,updatedAtUnixTimestamp:Date.now()}:e)),e.setQueryData(eq.S.message(a),h)},()=>(null==y?void 0:y.current)===null)},[x,e]),D=(0,l.useCallback)(async(t,a,r,i,n,s)=>{m(void 0);let o=t.headers.get("x-venice-gpu-provider")||"unknown",l="true"===t.headers.get("x-venice-is-blurred"),d="true"===t.headers.get("x-venice-is-content-violation"),c=await t.arrayBuffer(),u=ep.F.getState().settings.imageSettings,p={id:a,content:n.prompt,contentBinary:c,executionTime:s,modelId:i.id,modelType:i.type,role:"assistant",requestId:n.requestId,imageSettings:u,gpuProvider:o,isBlurred:l,isContentViolation:d,seed:n.seed,...n.imagePath?{imagePath:n.imagePath}:{}};e.setQueryData(eq.S.messageIds(r.id),e=>null==e?void 0:e.map(e=>e.id===a?{...e,updatedAtUnixTimestamp:Date.now()}:e)),e.setQueryData(eq.S.message(a),p)},[e,m]),P=(0,l.useCallback)(async(e,r,i,n,s,o)=>{if(null!==e.body){if(400===e.status&&e.body){await t({requestId:s.requestId,activeConversation:i,messageId:r,jsonResponse:await e.json(),model:n});return}if(503===e.status){await t({requestId:s.requestId,activeConversation:i,model:n,messageId:r,jsonResponse:{error:"capacityLimit"}});return}if(429===e.status){let t=e.headers.get("X-RateLimitType");await a(i,s.requestId,r,t);return}if(!e.ok||!e.body){await t({requestId:s.requestId,activeConversation:i,model:n,messageId:r});return}switch(e_(e,n,x),n.type){case eo.BY.Image:await D(e,r,i,n,s,o);break;case eo.BY.Text:await M(e,r,i,n,s,o);break;default:throw Error("Invalid conversation type")}}},[x,t,a,D,M]);return{prepareConversation:C,saveMessages:k,validatePromptLength:T,handleOptimisticUI:z,buildApiBody:(0,l.useCallback)(async(e,t,a,n)=>{let s=(0,eU.LJ)(),o=ep.F.getState().settings.imageSettings;switch(e.type){case eo.BY.Image:let l=(null==o?void 0:o.isCustomSeed)&&!isNaN(Number(o.customSeed))?Number(o.customSeed):Math.floor(1e8*Math.random());return{modelId:e.id,requestId:s,prompt:a.content,seed:l,...a.imagePath?{imagePath:a.imagePath}:{},...o};case eo.BY.Text:var d,c,u,m;let p=await r(null!==(d=null==t?void 0:t.id)&&void 0!==d?d:"");"object"==typeof n&&n.context&&n.context.forEach(a=>{if(!p.some(e=>e.fileName===a.fileName)){let r={id:a.fileName,conversationId:t.id,modelId:e.id,modelType:e.type,isFile:!0,fileName:a.fileName,role:"user",content:"The following information is provided as background context for this character. It is not always relevant. Only refer to it if it's relevant to the discussion: ".concat(a.text)};p.push(r)}});let{temperature:g,topP:x,webEnabled:f}=null!==(c=ep.F.getState().settings.textSettings)&&void 0!==c?c:eH.Bj,v=[],y=g,I=x,w=f,S=(await i(b)).filter(e=>e.active).map(e=>e.prompt);if("object"==typeof n&&(null==n?void 0:n.instructions)){v=n.overrideSystemPrompts?[]:S;let e=(n.useCustomSystemPrompt&&n.customSystemPrompt?n.customSystemPrompt:eA.Gm.characterTemplate).replace("%%CHARACTER_INSTRUCTIONS%%",n.instructions);v.push(e)}else v=S;"object"==typeof n&&(y=el.Js,I=el.jv,(null==n?void 0:null===(u=n.textSettings)||void 0===u?void 0:u.advancedSettings.active)&&(y=n.textSettings.advancedSettings.temperature,I=n.textSettings.advancedSettings.topP)),"object"==typeof n&&(w=null!==(m=null==n?void 0:n.webEnabled)&&void 0!==m&&m);let j=v.join(". ")||"";return{requestId:s,modelId:e.id,prompt:(0,eN.e)(p),systemPrompt:j,conversationType:t.type,temperature:null!=y?y:el.Ar,webEnabled:w,topP:null!=I?I:el.Ht,..."object"==typeof n?{characterId:n.id,isCharacter:!0}:{isCharacter:!1}};default:h.uT("Invalid conversation type",{extra:{model:e}})}},[r,i,b]),fetchApi:(0,l.useCallback)(async e=>{let{type:t,modelPostBody:a,clientProcessingTime:r}=e;return y.current=new AbortController,await (0,eL.Q)({type:t,modelPostBody:a,clientProcessingTime:r,abortSignal:y.current.signal})},[]),processResponse:P,stop:S,isGenerating:I}};var eK=a(6192);let eQ=()=>window.navigator.maxTouchPoints>0,eW=(0,v.default)(()=>Promise.all([a.e(6018),a.e(1477),a.e(5878),a.e(98),a.e(7083),a.e(2967),a.e(1296),a.e(9166),a.e(8252),a.e(9954),a.e(4330)]).then(a.bind(a,14330)).then(e=>e.ChatMessages),{loadableGenerated:{webpack:()=>[14330]},ssr:!1}),eJ={pb:0},eV=(0,l.memo)(e=>{var t;let{characterId:a,demoPrompt:r}=e,i=(0,l.useRef)(!1),s=(0,l.useRef)(null),o=(0,g.NL)(),{handleServerError:m}=eO(),{buildApiBody:x,fetchApi:v,processResponse:w,prepareConversation:S,saveMessages:j,handleOptimisticUI:C,validatePromptLength:k,stop:T}=eY(),z=(0,c.Sz)(ea.St,e=>e.isLoaded),R=(0,c.Sz)(ea.St,e=>e.isSignedIn),F=(0,c.Sz)(ea.St,e=>e.id),L=(0,c.Sz)(ea.St,e=>e.refetchUserProfile),{data:N}=(0,eu.PE)(F),U=(0,l.useMemo)(()=>N?[...N,...eK.I]:eK.I,[N]),[O,_]=(0,l.useState)(!1),[A,B]=(0,l.useState)(null!==(t=d.Z.getItem("introPrompt"))&&void 0!==t&&t),{createNewConversation:q,deleteMessage:H,lookupMessagesByConversationId:Y,selectedConversation:K,setMessagesLastUpdatedAt:Q,setSelectedConversation:W,updateConversation:J,saveMessage:V}=(0,eF.uu)(),[Z,G]=(0,l.useState)(M.i.Text),X=(0,l.useMemo)(()=>{var e;return K?null!==(e=K.type)&&void 0!==e?e:M.i.Text:Z},[K,Z]),$=(0,l.useMemo)(()=>K,[K]),{codeModel:ee,imageModel:et,textModel:ei}=(0,ep.F)(e=>e.settings),{state:{messageIsStreaming:en,chatReady:el,folders:ed},dispatch:ec,handleCreateFolder:em}=(0,E.IO)();(0,l.useEffect)(()=>{!s.current||en||eQ()||s.current.focus()},[en]);let eh=(0,l.useCallback)(async e=>{await J(e),W(f()(e))},[J,W]),eg=(0,l.useCallback)(async e=>{let t,{newMessages:r,conversation:i}=e,n=Date.now();if(K)t=i||K;else{let e="";if(a){let t=ed.find(e=>e.characterId===a);e=t?t.id:(await em("Character Chat","chat",a)).id}t=await q(null!=X?X:M.i.Text,a,e),ec({field:"loading",value:!0}),W(t),window.history.pushState({},"","/chat/".concat(t.id)),(0,u.Qe)({name:"createdNewChat",data:{}}),ec({field:"loading",value:!1})}if(!t||!t.type)return;let s=r[r.length-1],l=null!=a?a:t.characterId,d=l&&(null==U?void 0:U.find(e=>e.id===l)),c=s.modelId;d&&X===M.i.Text&&d.textSettings.model.active&&d.textSettings.model.id&&(c=d.textSettings.model.id);let p=c&&(0,es.Ho)(c);if(!p)throw Error("Could not find model");let g=await S(t,r);if(await eh(g),await j({conversation:g,newMessages:r,model:p}),p.type===eo.BY.Text&&!await k(t,r,p))return;let f=await C(g,p);Q(Date.now()),ec({field:"loading",value:!0}),ec({field:"messageIsStreaming",value:!0}),ec({field:"abortInference",value:!1}),(R||!O)&&(_(!0),(0,u.Qe)({name:"executedInference",data:{conversationType:t.type,hasFile:r.some(e=>e.isFile),model:p}}));let b=await x(p,g,s,d);if(b)try{let e=await v({type:p.type,modelPostBody:b,clientProcessingTime:Date.now()-n});if(!e)return;let t=Date.now()-n;await w(e,f,g,p,b,t)}catch(e){if("AbortError"===e.name){let e=o.getQueryData(eq.S.message(f));e&&await V({conversationId:t.id,message:{...e,isStopped:!0},rerenderMessages:!1})}else{h.Tb(e),await m({requestId:b.requestId,activeConversation:t,model:p,messageId:f});return}}finally{let e=o.getQueryData(eq.S.message(f));e&&await V({conversationId:t.id,message:e,rerenderMessages:!1}),ec({field:"loading",value:!1}),ec({field:"messageIsStreaming",value:!1}),ec({field:"abortInference",value:!1}),L()}},[K,a,U,X,S,eh,j,C,Q,ec,R,O,x,q,W,ed,em,k,v,w,m,o,L,V]),ex=async()=>{if(!K)return;let e=await Y(null==K?void 0:K.id),t=e.pop(),a=e.filter(e=>"user"===e.role).pop();if(!a)return;let r=t&&((null==t?void 0:t.modelType)===eo.BY.Text||(null==t?void 0:t.isErrored));r&&await H({id:null==t?void 0:t.id,rerenderMessages:!1}),a&&r&&await H({id:null==a?void 0:a.id,rerenderMessages:!1});let i=a.modelType||K.type;if(!i)return;let{modelId:n}=(0,er.v)({conversationType:i,codeModel:ee,textModel:ei,imageModel:et});await eg({newMessages:[{role:"user",content:a.content,modelType:a.modelType,modelId:n,...(null==a?void 0:a.imagePath)&&{imagePath:a.imagePath}}]})},ef=(0,l.useCallback)(async e=>{var t;if(K){let t;switch(e){case M.i.Image:t=et||es.HX.id;break;case M.i.Text:t=ei||es.bO.id;break;case M.i.Code:t=ee||es.au.id;break;default:throw Error("Invalid conversation type")}K.type=e,K.modelId=t,G(e),await eh(K)}else G(e);null===(t=s.current)||void 0===t||t.focus()},[K,eh,et,ei,ee]),ev=(0,l.useCallback)(async e=>{await ef(e),d.Z.setItem("introPrompt",!0),B(!0)},[ef]);(0,l.useEffect)(()=>{let e=async()=>{if(!r)return;let e=JSON.parse(r);await ef(e.type);let t=(0,es.Ho)((0,er.v)({conversationType:e.type,codeModel:ee,textModel:ei,imageModel:et}).modelId),a={modelId:t.id,modelType:t.type,role:"user",content:e.value};await eg({newMessages:[a]})};el&&z&&(i.current=!0,e())},[el,z,r]),(0,l.useEffect)(()=>{var e;K||null===(e=s.current)||void 0===e||e.focus()},[K]);let eb=(0,l.useMemo)(()=>{let e=a||(null==K?void 0:K.characterId);if(!e)return;let t=null==U?void 0:U.find(t=>t.id===e);return null==t?void 0:t.photo},[U,a,null==K?void 0:K.characterId]);return z&&el?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(y.ChatMainContent,{_before:{content:'""',left:0,top:0,width:"100%",height:"100%",position:"absolute",backgroundImage:eb,backgroundSize:"cover",backgroundPosition:"center center",opacity:.05},children:[(0,n.jsx)(P.C,{conversationType:X,characterId:a,textAreaRef:s,onMessageTypeChange:ef}),A||K||a?(0,n.jsxs)(p.M,{width:"full",height:"100%",flexDir:"column",gap:2,alignItems:"center",backgroundSize:"cover",backgroundPosition:"center center",bgImage:K?"none":"url(/images/circle-bg.svg)",children:[K&&(0,n.jsx)(eW,{handleChatSubmit:eg,handleRegenerate:ex,conversationId:null==$?void 0:$.id}),a&&!K&&(0,n.jsx)(b.n,{characterId:a}),(0,n.jsx)(eR,{onSend:eg,textareaRef:s,isLoading:en,flexProps:eJ,onMessageTypeChange:ef,selectedConversation:$,conversationType:X,position:K?"absolute":"static",conversationId:null==$?void 0:$.id,characterId:a,onStop:T})]}):(0,n.jsx)(D,{onHandleNewConversation:ev})]},null==K?void 0:K.id)}):(0,n.jsx)(I.i,{})});function eZ(e){let{selectedConversationId:t,characterId:a}=e,r=(0,c.Sz)(ea.St,e=>e.id),i=(0,c.Sz)(ea.St,e=>e.isLoaded),u=(0,c.Sz)(ea.St,e=>e.isSignedIn),p=(0,s.p)(),h=(0,o.useTranslations)(),g=(0,eF.uu)(),[x,f]=(0,l.useState)(),{setSelectedConversation:v,setSelectedConversationFromId:b,clearSelectedConversation:y}=(0,eF.uu)();(0,l.useEffect)(()=>{var e;let t=new URLSearchParams(null===(e=window.location.hash)||void 0===e?void 0:e.substring(1)).get("demoPrompt");f(d.Z.getItem("demoPrompt")||t)},[]);let w=(0,l.useCallback)(()=>{let e=localStorage.getItem("redirect_url");u&&e&&(localStorage.removeItem("redirect_url"),window.location.href=e)},[u]);return((0,l.useEffect)(()=>{let e=async()=>{if(t){var e;let a=new URLSearchParams(null===(e=window.location.hash)||void 0===e?void 0:e.substring(1)),i=a.get("veniceShareKey"),n=a.get("veniceShareNonce");i?await m({userId:r,toast:p,translate:h,selectedConversationId:t,veniceShareKey:i,veniceShareNonce:n,conversationContext:g}):await b(t)}else a?v(void 0):y()};i&&(w(),e())},[i]),i)?(0,n.jsx)(eV,{characterId:a,demoPrompt:x}):(0,n.jsx)(I.i,{altLogo:!0})}eV.displayName="Chat"},10187:function(e,t,a){a.d(t,{default:function(){return s}});var r=a(57437),i=a(86827),n=a(74386);function s(e){let{altLogo:t,children:a}=e;return(0,r.jsxs)(i.M,{width:"100vw",height:"100dvh",flexDir:"column",gap:4,children:[(0,r.jsx)(n.K,{boxSize:"150px",color:t?"text.link":"text.base"}),a]})}}}]);