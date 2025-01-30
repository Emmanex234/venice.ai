!function(){try{var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new r.Error).stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3646c045-ce88-425d-9e45-af14fa6c45fe",r._sentryDebugIdIdentifier="sentry-dbid-3646c045-ce88-425d-9e45-af14fa6c45fe")}catch(r){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4553],{58528:function(r,e,o){"use strict";o.d(e,{A:function(){return f},r:function(){return b}});var a=o(76780),t=o(83360),n=o(24329),d=o(83707);let i={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},l={opacity:.6},c={border:0,borderBottom:"1px solid",borderColor:"inherit",marginY:2},s={transitionProperty:"common",transitionDuration:"normal"},u=(0,d.k0)({fontSize:"lg"}),f={sm:"480px",md:"768px",lg:"992px",xl:"1280px","2xl":"1440px","3xl":"2200px"},b=(0,a.B1)({breakpoints:f,styles:{global:{html:{overscrollBehavior:"none",height:"100dvh"},body:{backgroundColor:"background.surface.base",touchAction:"auto",overscrollBehavior:"none",height:"100%",color:"text.base"}}},config:{initialColorMode:"dark",useSystemColorMode:!1},colors:{darkNeutral:{950:"#101214",900:"#161A1D",800:"#1D2125",750:"#22272B",700:"#282E33",650:"#2C333A",600:"#38414A",550:"#454F59",500:"#596773",450:"#738496",400:"#8C9BAB",300:"#9FADBC",200:"#B6C2CF",100:"#C7D1DB",50:"#C7D1DB"},darkNeutralAlpha:{950:"rgba(255,255,255, 0.80)",900:"rgba(255,255,255,0.26)",800:"rgba(255,255,255,0.04)",700:"rgba(255,255,255,0.08)",600:"rgba(255,255,255,0.1)",500:"rgba(255,255,255,0.16)",400:"rgba(255,255,255,0.2)",300:"rgba(255,255,255,0.28)",200:"rgba(255,255,255,0.5)"},lightNeutralAlpha:{900:"rgba(0,0,0,1)",800:"rgba(0,0,0,0.9)",700:"rgba(0,0,0,0.8)",600:"rgba(0,0,0,0.7)",500:"rgba(0,0,0,0.6)",400:"rgba(0,0,0,0.5)",300:"rgba(0,0,0,0.4)",200:"rgba(0,0,0,0.3)",100:"rgba(0,0,0,0.08)",50:"rgba(0,0,0,.05)"}},semanticTokens:{colors:{background:{surface:{base:{default:"var(--background-dark)"},baseTransparent:{default:"var(--background-transparent)"},alpha:{default:"rgba(255, 255, 255, .8)",_dark:"rgba(16, 17, 20, 0.8)"},hover:{default:"gray.100",_dark:"darkNeutral.800"},pressed:{default:"gray.200",_dark:"darkNeutral.700"},muted:{default:"white",_dark:"var(--muted)"},raised:{base:{default:"var(--card)"},hover:{default:"var(--card)"},pressed:{default:"var(--card)"},accent:{default:"white",_dark:"darkNeutralAlpha.800"},alpha:{default:"var(--muted)"}},overlay:{base:{default:"var(--background)",_dark:"var(--overlay)"},raised:{base:{default:"var(--background-dark)",_dark:"var(--background-transparent)"}}}},button:{primary:{base:{default:"var(--primary)"},hover:{default:"var(--primary-hover)"},pressed:{default:"var(--primary)"}},secondary:{base:{default:"var(--secondary)"},hover:{default:"var(--secondary-hover)"},pressed:{default:"var(--secondary)"}},group:{track:{default:"lightNeutralAlpha.100",_dark:"lightNeutralAlpha.200"},button:{base:{default:"white",_dark:"darkNeutralAlpha.700"}}}},input:{base:{default:"var(--input)"},hover:{default:"var(--input)"},pressed:{default:"var(--input)"}},success:{default:"green.50",_dark:"rgba(92, 223, 189, 0.20)"},error:{default:"red.50",_dark:"rgba(254, 178, 178, 0.2)"}},border:{base:{default:"var(--border)"},subtle:{default:"var(--border-subtle)"},bold:{default:"gray.300",_dark:"darkNeutralAlpha.600"},hover:{default:"gray.200",_dark:"whiteAlpha.300"},pressed:{default:"gray.300",_dark:"whiteAlpha.400"},focused:{default:"blue.500",_dark:"blue.200"},error:{default:"red.500",_dark:"red.300"},info:{default:"blue.500",_dark:"blue.200"},warning:{default:"orange.500",_dark:"orange.200"},success:{default:"green.500",_dark:"green.200"},input:{default:"var(--border)"},overlay:{default:"var(--overlay-border)"}},text:{base:{default:"var(--foreground)"},link:{default:"var(--primary)"},subtle:{default:"var(--muted-foreground)"},subtlest:{default:"lightNeutralAlpha.300",_dark:"darkNeutralAlpha.300"},info:{default:"blue.500",_dark:"blue.200"},success:{default:"green.500",_dark:"green.200"},error:{default:"red.500",_dark:"red.300"},warning:{default:"orange.500",_dark:"orange.200"},accent:{default:"var(--primary)"},secondary:{base:{default:"var(--secondary-foreground)"},muted:{default:"var(--secondary-foreground-muted)"}},primary:{base:{default:"var(--primary-foreground)"},muted:{default:"var(--primary-foreground-muted)"}}},blanket:{default:"#10121499",_dark:"darkNeutralAlpha.950"}}},components:{Button:{baseStyle:{borderRadius:"lg",fontWeight:"normal",_focusVisible:{boxShadow:"outline-inset"}},sizes:{xs:{fontSize:"xs",py:4},"sm-multiline":{svg:{width:"1rem",height:"1rem"},whiteSpace:"normal",h:"auto",minH:"10",py:"2",px:"4"},md:{svg:{width:"1.25rem",height:"1.25rem"}},lg:r=>{let{variant:e}=r;return{svg:{width:"1.5rem",height:"1.5rem"},fontSize:"md",px:"nav-link"===e?4:6}},"lg-multiline":r=>{let{variant:e}=r;return{svg:{width:"1.5rem",height:"1.5rem"},fontSize:"nav-link"===e?"md":"lg",px:"nav-link"===e?4:6,whiteSpace:"normal",h:"auto",minH:"12",py:"3"}}},variants:{highlight:()=>({color:"text.subtle",px:0,py:0,minWidth:"auto",_hover:{color:"text.base"}}),solid:r=>{let{colorScheme:e}=r;return"brand"===e?{bg:"background.button.brand.base",color:"text.subtle",_hover:{bg:"background.button.brand.hover",textDecoration:"none",color:"text.base",_disabled:{bg:"background.button.brand.base"}},_active:{bg:"background.button.brand.pressed"},_checked:{bg:"background.button.brand.pressed"}}:"primary"===e?{bg:"background.button.primary.base",color:"text.primary.base",_hover:{bg:"background.button.primary.hover",textDecoration:"none",_disabled:{bg:"background.button.primary.base"}},_active:{bg:"background.button.primary.pressed"},_checked:{bg:"background.button.primary.pressed"}}:"secondary"===e?{bg:"background.button.secondary.base",color:"text.secondary.base",_hover:{bg:"background.button.secondary.hover",textDecoration:"none",_disabled:{bg:"background.button.secondary.base"}},_active:{bg:"background.button.secondary.pressed"},_checked:{bg:"background.button.secondary.pressed"}}:"neutral"===e?{bg:"white",color:"black",hover:{bg:"whiteAlpha.700"}}:{bg:"".concat(e,".500"),color:"white",_hover:{bg:(0,t.x)("".concat(e,".600"),"".concat(e,".300"))(r),_disabled:{bg:"".concat(e,".500")}},_active:{bg:(0,t.x)("".concat(e,".700"),"".concat(e,".400"))(r)}}},ghost:r=>{let{colorScheme:e,theme:o}=r,a=(0,n.DZ)("".concat(e,".200"),.12)(o),d=(0,n.DZ)("".concat(e,".200"),.25)(o);return"brand"===e?{color:"text.subtle",_hover:{bg:"background.button.secondary.base",color:"text.base"},_active:{bg:"background.button.secondary.pressed",color:(0,t.x)("gray.800","white")(r)},_checked:{bg:"background.button.secondary.pressed",color:"text.base"}}:"primary"===e?{color:"text.subtle",_hover:{color:(0,t.x)("inherit","white")(r),bg:"background.button.primary.base"},_active:{bg:"background.button.primary.hover",color:"text.primary.base"},_checked:{bg:"background.button.primary.pressed",color:"text.base"}}:"secondary"===e?{color:"text.subtle",_hover:{color:"text.base",bg:"background.button.secondary.base"},_active:{bg:"background.button.secondary.pressed",color:"text.secondary.base"},_checked:{bg:"background.button.secondary.base",color:"text.base"}}:{color:(0,t.x)("".concat(e,".500"),"".concat(e,".200"))(r),_hover:{bg:(0,t.x)("".concat(e,".50"),a)(r),color:(0,t.x)("".concat(e,".500"),"".concat(e,".200"))(r)},_active:{bg:(0,t.x)("".concat(e,".200"),d)(r),color:(0,t.x)("white","".concat(e,".200"))(r)},_checked:{bg:(0,t.x)("".concat(e,".200"),"gray.700")(r),color:(0,t.x)("white","".concat(e,".200"))(r)}}},input:r=>{let{colorScheme:e}=r,o=(0,t.x)("gray.200","gray.750")(r);return{border:"1px solid",bg:(0,t.x)("gray.50","gray.850")(r),borderColor:o,transition:"color fill border-color 0.5s ease-in-out",color:"text.subtle",_active:{borderColor:"".concat(e,".500"),color:(0,t.x)("black","white")(r),svg:{fill:"".concat(e,".500")}},_hover:{borderColor:(0,t.x)("gray.300","gray.700")(r)}}},outline:r=>{let{colorScheme:e}=r;return{border:"1px solid",bg:(0,t.x)("gray.50","gray.850")(r),borderColor:"border.base",transition:"color fill border-color 0.5s ease-in-out",color:"text.base",_active:{borderColor:"".concat(e,".500"),color:(0,t.x)("black","white")(r),svg:{fill:"".concat(e,".500")}},_hover:{borderColor:"var(--border-hover)"}}},link:r=>{let{colorScheme:e}=r;return"primary"===e?{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},color:"var(--primary)",_active:{color:"var(--primary)"},_checked:{color:"var(--primary)"}}:{color:(0,t.x)("".concat(e,".500"),"".concat(e,".200"))(r),_active:{color:(0,t.x)("".concat(e,".700"),"".concat(e,".500"))(r)},_checked:{color:(0,t.x)("".concat(e,".700"),"".concat(e,".500"))(r)}}},tab:r=>{let{colorScheme:e}=r;return{py:4,px:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",fontWeight:"medium",borderBottomWidth:"2px",marginBottom:{base:0,md:"-1px"},borderColor:"transparent",borderRadius:0,color:"text.subtle",_hover:{borderColor:"border.bold"},_active:{borderColor:"text.link",color:"text.base"},_checked:{color:(0,t.x)("".concat(e,".700"),"".concat(e,".500"))(r)}}},"read-only":{px:0,bg:"none",minWidth:"auto",pointerEvents:"none"},"nav-link":r=>{let{colorScheme:e,theme:o}=r,a=(0,n.DZ)("".concat(e,".200"),.12)(o),d=(0,n.DZ)("".concat(e,".200"),.25)(o);return"gray"===e?{color:"text.subtle",height:"48px",_hover:{color:(0,t.x)("inherit","whiteAlpha.800")(r),bg:(0,t.x)("gray.100","gray.750")(r)},_active:{bg:(0,t.x)("gray.200","gray.700")(r),color:(0,t.x)("gray.800","white")(r),svg:{color:(0,t.x)("blue.500","blue.200")(r)},_checked:{bg:(0,t.x)("gray.200","gray.700")(r)}}}:{color:(0,t.x)("".concat(e,".500"),"".concat(e,".200"))(r),height:"48px",_hover:{bg:(0,t.x)("".concat(e,".50"),a)(r),color:(0,t.x)("".concat(e,".500"),"".concat(e,".200"))(r)},_active:{bg:(0,t.x)("".concat(e,".200"),d)(r),color:(0,t.x)("white","".concat(e,".200"))(r)},_checked:{bg:(0,t.x)("".concat(e,".200"),"gray.700")(r),color:(0,t.x)("white","".concat(e,".200"))(r)}}}},defaultProps:{variant:"solid",size:"sm",colorScheme:"secondary"}},Card:{parts:["container"],baseStyle:{},sizes:{md:{container:{borderRadius:"xl"}}},variants:{elevated:{container:{background:"background.surface.muted"}}},defaultProps:{}},Drawer:{parts:["dialogContainer","dialog","body","header","footer"],baseStyle:{dialog:{bg:"background.surface.overlay.base",borderRadius:{base:"none",lg:"xl"},borderWidth:{base:0,lg:2},borderColor:"border.overlay",margin:{base:0,lg:2}},body:{paddingBottom:"env(safe-area-inset-bottom)"},footer:{paddingBottom:{base:"env(safe-area-inset-bottom)",md:4}}},sizes:{},variants:{},defaultProps:{}},Menu:{parts:["item","command","list","button","groupTitle","divider","icon"],baseStyle:r=>({button:s,list:{bg:"background.surface.overlay.base",boxShadow:(0,t.x)("lg","dark-lg")(r),borderColor:"border.bold",color:"inherit",minW:"3xs",py:"1",borderRadius:"xl",borderWidth:"1px",zIndex:44,display:"flex",flexDirection:"column"},item:{width:"auto",minHeight:"40px",fontWeight:"semibold",transitionProperty:"background.surface.base",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",color:"text.subtle",bg:"transparent",fontSize:"sm",borderRadius:"lg",marginX:1,_hover:{bg:"background.secondary.hover",color:"text.base"},_focus:{bg:(0,t.x)("gray.100","whiteAlpha.100")(r)},_active:{bg:(0,t.x)("gray.200","whiteAlpha.200")(r)},_expanded:{bg:(0,t.x)("gray.100","whiteAlpha.100")(r)},_disabled:{opacity:.4,cursor:"not-allowed"}},groupTitle:i,command:l,divider:c,icon:u})},Modal:{parts:["dialog","footer","closeButton","header","overlay","body"],baseStyle:()=>({dialog:{bg:"background.surface.overlay.base",borderRadius:"xl",borderColor:"border.base",borderWidth:{base:0,md:1}},closeButton:{borderRadius:"100%"}}),sizes:{full:{closeButton:{top:"calc(0.5rem + env(safe-area-inset-top))"},header:{paddingTop:"calc(1rem + env(safe-area-inset-top))"},footer:{paddingBottom:"calc(1rem + env(safe-area-inset-bottom))"}}},variants:{fluid:{dialog:{maxWidth:"100%",width:"auto"}},"header-nav":()=>({dialog:{maxWidth:"100%",width:"auto"},header:{borderBottom:"1px solid",bg:"background.surface.raised.accent",borderColor:"border.base",borderTopRadius:"2xl",fontSize:"md"}}),"fluid-footer":r=>({dialog:{maxWidth:"100%",width:"auto"},footer:{borderTopWidth:1,borderColor:(0,t.x)("gray.100","gray.750")(r)}})},defaultProps:{}},Input:{parts:["field"],baseStyle:{field:{_placeholder:{color:"text.subtle"},transitionProperty:{base:"none",md:"common"},boxShadow:"var(--ring-offset-shadow,0 0 #0000),var(--ring-shadow,0 0 #0000),var(--shadow)"}},sizes:{sm:{field:{borderRadius:"md"}}},variants:{filled:{field:{background:"background.input.base",borderColor:"border.input",borderWidth:1,_hover:{background:"background.input.hover"},_focus:{background:"background.input.pressed"}}},outline:{field:{backgroundColor:"background.surface.base",borderColor:"var(--border-hover)"}}},defaultProps:{}},Select:{parts:["field","icon"],baseStyle:{field:{borderRadius:"lg",fontWeight:"medium"}},sizes:{},variants:{ghost:{field:{background:"transparent",color:"text.subtle",_hover:{background:"background.input.hover",color:"text.base"},_focus:{background:"background.input.pressed"}},icon:{color:"text.subtle",_hover:{color:"text.base"}}},filled:{field:{background:"background.button.secondary.base",_hover:{background:"background.button.secondary.hover"},_focus:{background:"background.button.secondary.pressed"}}}},defaultProps:{}},Switch:{parts:["container","track","thumb"],baseStyle:()=>({thumb:{backgroundColor:"text.subtle",_checked:{backgroundColor:"text.primary.base"}},track:{background:"var(--secondary)",borderWidth:2,borderColor:"border.base",_checked:{background:"background.button.primary.base"}}}),sizes:{},variants:{},defaultProps:{}},Tag:{baseStyle:{},sizes:{},variants:{solid:r=>{let{colorScheme:e}=r;return"primary"===e?{container:{backgroundColor:"var(--primary)",color:"var(--primary-foreground)"}}:"gray"===e?{container:{backgroundColor:"var(--secondary)",color:"var(--secondary-foreground)"}}:void 0},subtle:r=>{let{colorScheme:e}=r;if("brand"===e)return{container:{backgroundColor:"background.button.secondary.base",color:"text.base"}}},outline:r=>{let{colorScheme:e}=r;if("brand"===e)return{container:{backgroundColor:"background.button.secondary.base",color:"text.base"}}}},defaultProps:{colorScheme:"brand",variant:"subtle"}},Tabs:{parts:["tab","tablist"],baseStyle:{},sizes:{},variants:{line:{tablist:{borderBottomColor:"border.subtle",borderBottomWidth:1,gap:6},tab:{color:"text.subtle",fontSize:"sm",fontWeight:"medium",mb:0,pt:0,px:1,pb:4,_active:{backgroundColor:"transparent"},_hover:{color:"text.base",borderColor:"border.base"},_selected:{borderColor:"text.link",color:"text.base",_hover:{borderColor:"text.link",color:"text.base"}}}},pill:{tablist:{backgroundColor:"background.button.secondary.base",borderRadius:"lg",padding:1},tab:{color:"text.subtle",borderRadius:"lg",_selected:{backgroundColor:"background.button.secondary.hover",color:"text.base"},_hover:{backgroundColor:"background.button.secondary.hover",color:"text.base"}}}},defaultProps:{}},Textarea:{baseStyle:{field:{_placeholder:{color:"text.subtle"},transitionProperty:{base:"none",md:"common"},boxShadow:"var(--ring-offset-shadow,0 0 #0000),var(--ring-shadow,0 0 #0000),var(--shadow)"}},sizes:{},variants:{filled:{background:"background.input.base",borderColor:"border.input",borderWidth:1,_hover:{background:"background.input.hover"},_focus:{background:"background.input.pressed"}},outline:{background:"background.surface.base",borderColor:"border.input"}},defaultProps:{}},Progress:{parts:["label, filledTrack, track"],baseStyle:r=>{let{colorScheme:e,isIndeterminate:o,hasStripe:a}=r;if("primary"===e)return{filledTrack:{...o?{bgImage:"linear-gradient(\n        to right,\n        transparent 0%,\n        var(--primary) 50%,\n        transparent 100%\n      )"}:{bgColor:"var(--primary)",bgImage:a?"linear-gradient(\n        45deg, \n        rgba(0, 0, 0, 0.1) 25%, \n        transparent 25%, \n        transparent 50%, \n        rgba(0, 0, 0, 0.1) 50%, \n        rgba(0, 0, 0, 0.1) 75%, \n        transparent 75%, \n        transparent\n      )":""}}}},sizes:{},variants:{},defaultProps:{}}},sizes:{container:{md:"42rem"}}})},44321:function(r,e,o){"use strict";o.d(e,{h:function(){return N}});var a=o(57437),t=o(98368),n=o(11843),d=o(28082),i=o(13449),l=o(4360),c=o(68686),s=o(86333),u=o(77951),f=o(46402),b=o(22053),g=o(43753),h=o(5095),p=o(42586),m=o(2265),v=o(45168),x=o(25774),w=o(22122);let y={variant:"subtle",size:"sm",textTransform:"uppercase",fontSize:"9px",fontWeight:"bold",letterSpacing:"wider",minHeight:"auto",lineHeight:"0.75rem",px:1,py:.5,sx:{fontSmooth:"always",textRendering:"geometricPrecision"}},k=r=>{let{option:e}=r,o=(0,p.useTranslations)(),t=[];return(e.default&&t.push((0,m.createElement)(d.Vp,{...y,key:"newTag",variant:"solid",colorScheme:"gray"},o("modelSelector.tags.default"))),e.showBetaTag&&t.push((0,a.jsx)(d.Vp,{colorScheme:"yellow",...y,children:o("modelSelector.tags.beta")},"betaTag")),e.proOnly&&t.push((0,a.jsx)(d.Vp,{colorScheme:"blue",...y,children:o("modelSelector.tags.proOnly")},"proOnlyTag")),e.staffOnly&&t.push((0,a.jsx)(d.Vp,{colorScheme:"blue",...y,children:"Staff only"},"staffOnlyTag")),e.retired&&t.push((0,a.jsx)(d.Vp,{variant:"solid",size:"sm",colorScheme:"blue",...y,children:(0,a.jsx)(w.u,{label:o("modelSelector.tooltip.retired"),shouldWrapChildren:!0,openDelay:400,children:o("modelSelector.tags.retired")},"retiredTooltipTag")},"retiredTag")),e.showRetiringSoonTag&&t.push((0,a.jsx)(d.Vp,{colorScheme:"yellow",...y,children:(0,a.jsx)(w.u,{label:o("modelSelector.tooltip.retiringSoon"),shouldWrapChildren:!0,openDelay:400,children:o("modelSelector.tags.retiringSoon")},"retiringSoonTooltipTag")},"retiringSoon")),e.offline&&t.push((0,a.jsx)(d.Vp,{colorScheme:"red",size:"sm",...y,children:o("modelSelector.tags.offline")},"offlineTag")),0===t.length)?null:(0,a.jsx)(i.k,{gap:2,flexShrink:0,children:t})};var R=o(32230);let _=r=>{let{model:e}=r;return(0,a.jsx)(R.q,{size:"md",name:null==e?void 0:e.friendly_name,borderRadius:"xl"})};var S=o(58055),C=o(51138);let j=r=>{if(r<1e3)return 10*Math.round(r/10);let e=Math.pow(10,Math.floor(Math.log10(r))-1);return Math.ceil(r/e)*e},D=r=>{let{value:e}=r;if(void 0===e)return null;let o=j(e),t=new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short",maximumFractionDigits:0}).format(o);return(0,a.jsx)("span",{children:t})},T=r=>{let{option:e}=r,o=(0,p.useTranslations)(),t=[];return(e.maxContextLength&&t.push((0,a.jsx)(w.u,{label:o("modelSelector.tooltip.contextWindow"),shouldWrapChildren:!0,openDelay:400,children:(0,a.jsx)(D,{value:(0,C.Pd)(e)})},"contextWindow")),e.showUncensoredTag&&t.push((0,a.jsx)(l.x,{children:o("modelSelector.tags.uncensored")},"uncesored")),e.showFastestTag&&t.push((0,a.jsx)(l.x,{children:o("modelSelector.tags.fastest")},"fastest")),e.showBestForCodeTag&&t.push((0,a.jsx)(l.x,{children:o("modelSelector.tags.bestForCode")},"codeTag")),e.showMostIntelligentTag&&t.push((0,a.jsx)(w.u,{label:o("modelSelector.tooltip.intelligent"),shouldWrapChildren:!0,openDelay:400,children:o("modelSelector.tags.intelligent")},"intelligentTag")),e.webEnabled&&t.push((0,a.jsx)(w.u,{label:o("modelSelector.tooltip.web"),shouldWrapChildren:!0,openDelay:400,children:o("modelSelector.tags.web")},"webEnabledTag")),0===t.length)?null:(0,a.jsx)(S.U,{gap:1,divider:(0,a.jsx)(l.x,{children:"•"}),fontSize:"xs",color:"text.subtle",children:t})};var z=o(87179),W=o(41528),P=o(13823),A=o(43159),B=o(93369);let I=(0,a.jsx)(v.mc,{size:"18px",color:"var(--primary)"}),N=(0,m.memo)((0,t.forwardRef)((r,e)=>{let{options:o,value:t,onChange:w,isDisabled:y,placement:R="bottom-end",listHeader:S,listFooter:C,conversationType:j,onClose:D,autoReset:N=!0,menuListProps:M,...O}=r,F=(0,p.useTranslations)(),E=(0,B.F)(r=>r.resetModels),H=(0,x.Sz)(A.St,r=>r.isProUser),{onOpen:V}=(0,W.R)("upgrade"),q=(0,m.useCallback)(r=>{let[,e]=r.split(":"),a=o.find(r=>r.id===e);if((null==a?void 0:a.proOnly)&&!H){V();return}w(r)},[H,w,V,o]),{state:{messageIsStreaming:U}}=(0,P.IO)(),K=(0,m.useMemo)(()=>o.map(r=>(0,a.jsxs)(n.i,{width:"full",m:0,pr:3,pl:4,py:3,gap:6,position:"relative","data-id":"".concat(j,"-").concat(r.id),value:"".concat(j,":").concat(r.id),icon:I,_hover:{bg:"background.button.secondary.base"},opacity:r.proOnly&&!H||r.offline||r.retired?.5:1,isDisabled:r.retired||r.offline,flexDir:"row-reverse",alignItems:"center",sx:{".chakra-menu__icon-wrapper":{marginRight:0}},children:[r.showNewTag&&(0,a.jsx)(d.Vp,{variant:"solid",bg:"background.surface.overlay.base",fontSize:"9px",minHeight:"auto",borderWidth:1,color:"var(--primary)",borderColor:"whiteAlpha.200",py:.5,px:1,position:"absolute",fontWeight:"bold",top:2,boxShadow:"sm",textTransform:"uppercase",left:9,zIndex:6,children:F("modelSelector.tags.new")}),(0,a.jsxs)(i.k,{alignItems:"center",gap:3,children:[(0,a.jsx)(_,{model:r}),(0,a.jsxs)(i.k,{justifyContent:"space-between",alignItems:"flex-start",flexDir:"column",flexWrap:"wrap",children:[(0,a.jsxs)(i.k,{alignItems:"center",gap:2,justifyContent:"space-between",children:[(0,a.jsxs)(i.k,{alignItems:"center",gap:1,children:[(0,a.jsx)(l.x,{fontSize:"sm",color:"text.base",fontWeight:"medium",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:{base:"110px",md:"150px"},children:r.friendly_name}),(0,a.jsx)(c.r,{href:r.huggingFaceUrl,isExternal:!0,children:(0,a.jsx)(v.Qoz,{})})]}),(0,a.jsx)(k,{option:r,isProUser:H})]}),r.use_case&&(0,a.jsx)(i.k,{alignItems:"center",gap:1,children:(0,a.jsx)(l.x,{fontSize:"xs",color:"text.subtle",fontWeight:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:{base:"110px",md:"150px"},children:r.use_case})}),(0,a.jsx)(T,{option:r,isProUser:H})]})]})]},"".concat(j,":").concat(r.id))),[j,H,o,F]);return(0,m.useEffect)(()=>{if(!N||!t)return;let[,r]=t.split(":");o.find(e=>e.id===r)||E()},[N,o,E,t]),(0,a.jsxs)(s.v,{autoSelect:!1,placement:R,isLazy:!0,onClose:D,children:[(0,a.jsx)(u.j,{isDisabled:U||y,ref:e,...O}),(0,a.jsxs)(f.q,{overflow:"hidden",width:"full",py:0,...M,children:[S,(0,a.jsx)(i.k,{flexDir:"column",minHeight:"385px",maxHeight:"385px",overflowY:"auto",children:(0,a.jsx)(h.M,{mode:"wait",initial:!1,children:(0,a.jsx)(z.K,{children:(0,a.jsx)(b.xu,{p:2,children:(0,a.jsx)(g._,{value:t,onChange:q,"data-testid":"modelSelector",children:K})})},j)})}),C]})]})}));N.displayName="ModelMenu"},22122:function(r,e,o){"use strict";o.d(e,{u:function(){return n}});var a=o(57437),t=o(60187);let n=r=>(0,a.jsx)(t.u,{bg:"black",color:"white",fontSize:"14px",fontWeight:"medium",letterSpacing:"0.0125em",px:4,py:2,borderRadius:"lg",hasArrow:!0,...r})},86537:function(r,e,o){"use strict";o.d(e,{ej:function(){return i},fK:function(){return d},y6:function(){return c},zR:function(){return l}});var a=o(57437),t=o(13449),n=o(76405);o(2265);let d=r=>{let{children:e,flexProps:o,...d}=r;return(0,a.jsx)(t.k,{flexDir:"column",position:"relative",pt:"env(safe-area-inset-top, 1rem)",...o,children:(0,a.jsx)(n.M,{alignItems:"center",gridTemplateColumns:"1fr auto 1fr",fontWeight:"bold",py:4,px:2,minHeight:"72px",...d,children:e})})},i=r=>{let{children:e}=r;return(0,a.jsx)(t.k,{gridColumn:1,alignItems:"center",children:e})},l=r=>{let{children:e}=r;return(0,a.jsx)(t.k,{gridColumn:2,alignItems:"center",justifyContent:"center",gap:2,children:e})},c=r=>{let{children:e}=r;return(0,a.jsx)(t.k,{gridColumn:3,justifyContent:"flex-end",alignItems:"center",children:e})};d.Left=i,d.Middle=l,d.Right=c},87179:function(r,e,o){"use strict";o.d(e,{K:function(){return l}});var a=o(57437),t=o(59745);let n={duration:.2,ease:[.43,.13,.23,.96]},d={initial:{opacity:0,x:20,transition:n},animate:{opacity:1,x:0,transition:n},exit:{opacity:0,x:-20,transition:n}},i={type:"tween",ease:"anticipate",duration:.05},l=r=>{let{children:e,...o}=r;return(0,a.jsx)(t.E.div,{initial:"initial",animate:"animate",exit:"exit",variants:d,transition:i,...o,children:e})}},41528:function(r,e,o){"use strict";o.d(e,{R:function(){return i},T:function(){return d}});var a=o(57437),t=o(2265);let n=(0,t.createContext)(void 0),d=r=>{let{children:e}=r,[o,d]=(0,t.useState)({}),i=(0,t.useCallback)((r,e)=>{d(o=>({...o,[r]:{isOpen:!0,data:e}}))},[]),l=(0,t.useCallback)(r=>{d(e=>({...e,[r]:{isOpen:!1,data:void 0}}))},[]),c=(0,t.useCallback)(r=>o[r],[o]);return(0,a.jsx)(n.Provider,{value:{openDialog:i,closeDialog:l,getDialogState:c},children:e})},i=r=>{let e=(0,t.useContext)(n);if(void 0===e)throw Error("useDialog must be used within a DialogProvider");let{openDialog:o,closeDialog:a,getDialogState:d}=e,i=d(r);return{isOpen:(null==i?void 0:i.isOpen)||!1,data:null==i?void 0:i.data,onOpen:e=>o(r,e),onClose:()=>a(r)}}},98368:function(r,e,o){"use strict";o.d(e,{forwardRef:function(){return F.forwardRef}});var a=o(7596);o.o(a,"forwardRef")&&o.d(e,{forwardRef:function(){return a.forwardRef}});var t=o(21875);o.o(t,"forwardRef")&&o.d(e,{forwardRef:function(){return t.forwardRef}});var n=o(25469);o.o(n,"forwardRef")&&o.d(e,{forwardRef:function(){return n.forwardRef}});var d=o(29965);o.o(d,"forwardRef")&&o.d(e,{forwardRef:function(){return d.forwardRef}});var i=o(1558);o.o(i,"forwardRef")&&o.d(e,{forwardRef:function(){return i.forwardRef}});var l=o(82529);o.o(l,"forwardRef")&&o.d(e,{forwardRef:function(){return l.forwardRef}});var c=o(67632);o.o(c,"forwardRef")&&o.d(e,{forwardRef:function(){return c.forwardRef}});var s=o(66306);o.o(s,"forwardRef")&&o.d(e,{forwardRef:function(){return s.forwardRef}});var u=o(16100);o.o(u,"forwardRef")&&o.d(e,{forwardRef:function(){return u.forwardRef}});var f=o(33710);o.o(f,"forwardRef")&&o.d(e,{forwardRef:function(){return f.forwardRef}});var b=o(21331);o.o(b,"forwardRef")&&o.d(e,{forwardRef:function(){return b.forwardRef}});var g=o(422);o.o(g,"forwardRef")&&o.d(e,{forwardRef:function(){return g.forwardRef}});var h=o(99716);o.o(h,"forwardRef")&&o.d(e,{forwardRef:function(){return h.forwardRef}});var p=o(3459);o.o(p,"forwardRef")&&o.d(e,{forwardRef:function(){return p.forwardRef}});var m=o(70285);o.o(m,"forwardRef")&&o.d(e,{forwardRef:function(){return m.forwardRef}});var v=o(42059);o.o(v,"forwardRef")&&o.d(e,{forwardRef:function(){return v.forwardRef}});var x=o(96268);o.o(x,"forwardRef")&&o.d(e,{forwardRef:function(){return x.forwardRef}});var w=o(13933);o.o(w,"forwardRef")&&o.d(e,{forwardRef:function(){return w.forwardRef}});var y=o(82729);o.o(y,"forwardRef")&&o.d(e,{forwardRef:function(){return y.forwardRef}});var k=o(86897);o.o(k,"forwardRef")&&o.d(e,{forwardRef:function(){return k.forwardRef}});var R=o(85527);o.o(R,"forwardRef")&&o.d(e,{forwardRef:function(){return R.forwardRef}});var _=o(69898);o.o(_,"forwardRef")&&o.d(e,{forwardRef:function(){return _.forwardRef}});var S=o(49378);o.o(S,"forwardRef")&&o.d(e,{forwardRef:function(){return S.forwardRef}});var C=o(77420);o.o(C,"forwardRef")&&o.d(e,{forwardRef:function(){return C.forwardRef}});var j=o(32453);o.o(j,"forwardRef")&&o.d(e,{forwardRef:function(){return j.forwardRef}});var D=o(26994);o.o(D,"forwardRef")&&o.d(e,{forwardRef:function(){return D.forwardRef}});var T=o(86043);o.o(T,"forwardRef")&&o.d(e,{forwardRef:function(){return T.forwardRef}});var z=o(29661);o.o(z,"forwardRef")&&o.d(e,{forwardRef:function(){return z.forwardRef}});var W=o(14956);o.o(W,"forwardRef")&&o.d(e,{forwardRef:function(){return W.forwardRef}});var P=o(88728);o.o(P,"forwardRef")&&o.d(e,{forwardRef:function(){return P.forwardRef}});var A=o(5262);o.o(A,"forwardRef")&&o.d(e,{forwardRef:function(){return A.forwardRef}});var B=o(91664);o.o(B,"forwardRef")&&o.d(e,{forwardRef:function(){return B.forwardRef}});var I=o(64873);o.o(I,"forwardRef")&&o.d(e,{forwardRef:function(){return I.forwardRef}});var N=o(49726);o.o(N,"forwardRef")&&o.d(e,{forwardRef:function(){return N.forwardRef}});var M=o(55488);o.o(M,"forwardRef")&&o.d(e,{forwardRef:function(){return M.forwardRef}});var O=o(86123);o.o(O,"forwardRef")&&o.d(e,{forwardRef:function(){return O.forwardRef}});var F=o(10005)},7596:function(){},21875:function(){},25469:function(){},29965:function(){},1558:function(){},82529:function(){},67632:function(){},66306:function(){},16100:function(){},33710:function(){},21331:function(){},422:function(){},99716:function(){},3459:function(){},70285:function(){},42059:function(){},96268:function(){},13933:function(){},82729:function(){},86897:function(){},85527:function(){},69898:function(){},49378:function(){},77420:function(){},32453:function(){},26994:function(){},86043:function(){},29661:function(){},14956:function(){},88728:function(){},5262:function(){},91664:function(){},64873:function(){},49726:function(){},55488:function(){},86123:function(){},10005:function(r,e,o){"use strict";o.d(e,{forwardRef:function(){return a.G}});var a=o(68973)},82129:function(r,e,o){"use strict";o.d(e,{QB:function(){return l},sv:function(){return s},y$:function(){return c}});var a=o(71632),t=o(29827),n=o(21770),d=o(63649),i=o(33458);let l=r=>(0,a.a)({queryKey:d.S.systemPrompts(r),queryFn:()=>i.db.userSystemPrompts.where("ownerId").equals(r).sortBy("friendlyName"),refetchOnMount:!1}),c=()=>{let r=(0,t.NL)();return(0,n.D)({mutationFn:r=>i.db.userSystemPrompts.put(r),onSuccess:async(e,o)=>{await r.invalidateQueries({queryKey:d.S.systemPrompts(o.ownerId)})}})},s=()=>{let r=(0,t.NL)();return(0,n.D)({mutationFn:r=>i.db.userSystemPrompts.delete(r),onMutate:async r=>({systemPrompt:await i.db.userSystemPrompts.get(r)}),onSuccess:async(e,o,a)=>{a.systemPrompt&&await r.invalidateQueries({queryKey:d.S.systemPrompts(a.systemPrompt.ownerId)})}})}}}]);