(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[10],{860:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n),l=t(808),o=t(762),i=t(761),c=t(768),s=t(810),m=Object(l.a)((function(e){return{root:{"& > *":{margin:e.spacing(5),width:"100ch"}},formControl:{minWidth:200,width:"50ch"},margin:{marginleft:"240px"}}}));function d(){var e=m();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",style:{"margin-left":"240px"}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(s.a,{color:"action"},"assignment_turned_in")),r.a.createElement(i.a,{variant:"outlined",className:e.formControl},r.a.createElement(o.a,{htmlFor:"outlined-age-native-simple"},"Tipo Empresa"),r.a.createElement(c.a,{native:!0,label:"Tipo Empresa",inputProps:{name:"tp-native-simple",id:"tp-native-simple"}},r.a.createElement("option",{value:0,selected:!0},"SELECT..."),r.a.createElement("option",{value:1},"PERSONA NATURAL"),r.a.createElement("option",{value:2},"SOCIEDADES POR ACCIONES")))))}},885:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),o=(t(79),t(3),t(2)),i=t(5),c=l.forwardRef((function(e,a){var t=e.active,i=void 0!==t&&t,c=e.alternativeLabel,s=e.children,m=e.classes,d=e.className,u=e.completed,p=void 0!==u&&u,E=e.connector,f=e.disabled,v=void 0!==f&&f,h=e.expanded,g=void 0!==h&&h,b=e.index,N=e.last,x=e.orientation,y=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),w=E?l.cloneElement(E,{orientation:x,alternativeLabel:c,index:b,active:i,completed:p,disabled:v}):null,C=l.createElement("div",Object(n.a)({className:Object(o.a)(m.root,m[x],d,c&&m.alternativeLabel,p&&m.completed),ref:a},y),w&&c&&0!==b?w:null,l.Children.map(s,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(n.a)({active:i,alternativeLabel:c,completed:p,disabled:v,expanded:g,last:N,icon:b+1,orientation:x},e.props)):null})));return w&&!c&&0!==b?l.createElement(l.Fragment,null,w,C):C}));a.a=Object(i.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(c)},906:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),o=(t(3),t(2)),i=t(5),c=t(140),s=t(58),m=Object(s.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),d=Object(s.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),u=t(385),p=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),E=l.forwardRef((function(e,a){var t=e.completed,n=void 0!==t&&t,r=e.icon,i=e.active,c=void 0!==i&&i,s=e.error,E=void 0!==s&&s,f=e.classes;if("number"===typeof r||"string"===typeof r){var v=Object(o.a)(f.root,c&&f.active,E&&f.error,n&&f.completed);return E?l.createElement(d,{className:v,ref:a}):n?l.createElement(m,{className:v,ref:a}):l.createElement(u.a,{className:v,ref:a},p,l.createElement("text",{className:f.text,x:"12",y:"16",textAnchor:"middle"},r))}return r})),f=Object(i.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(E),v=l.forwardRef((function(e,a){var t=e.active,i=void 0!==t&&t,s=e.alternativeLabel,m=void 0!==s&&s,d=e.children,u=e.classes,p=e.className,E=e.completed,v=void 0!==E&&E,h=e.disabled,g=void 0!==h&&h,b=e.error,N=void 0!==b&&b,x=(e.expanded,e.icon),y=(e.last,e.optional),w=e.orientation,C=void 0===w?"horizontal":w,j=e.StepIconComponent,S=e.StepIconProps,O=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),F=j;return x&&!F&&(F=f),l.createElement("span",Object(n.a)({className:Object(o.a)(u.root,u[C],p,g&&u.disabled,m&&u.alternativeLabel,N&&u.error),ref:a},O),x||F?l.createElement("span",{className:Object(o.a)(u.iconContainer,m&&u.alternativeLabel)},l.createElement(F,Object(n.a)({completed:v,active:i,error:N,icon:x},S))):null,l.createElement("span",{className:u.labelContainer},d?l.createElement(c.a,{variant:"body2",component:"span",display:"block",className:Object(o.a)(u.label,m&&u.alternativeLabel,v&&u.completed,i&&u.active,N&&u.error)},d):null,y))}));v.muiName="StepLabel";a.a=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(v)},907:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),o=(t(3),t(2)),i=t(5),c=t(161),s=l.forwardRef((function(e,a){var t=e.active,i=e.alternativeLabel,c=void 0!==i&&i,s=e.classes,m=e.className,d=e.completed,u=e.disabled,p=(e.index,e.orientation),E=void 0===p?"horizontal":p,f=Object(r.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(n.a)({className:Object(o.a)(s.root,s[E],m,c&&s.alternativeLabel,t&&s.active,d&&s.completed,u&&s.disabled),ref:a},f),l.createElement("span",{className:Object(o.a)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[E])}))})),m=Object(i.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(s),d=l.createElement(m,null),u=l.forwardRef((function(e,a){var t=e.activeStep,i=void 0===t?0:t,s=e.alternativeLabel,m=void 0!==s&&s,u=e.children,p=e.classes,E=e.className,f=e.connector,v=void 0===f?d:f,h=e.nonLinear,g=void 0!==h&&h,b=e.orientation,N=void 0===b?"horizontal":b,x=Object(r.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),y=l.isValidElement(v)?l.cloneElement(v,{orientation:N}):null,w=l.Children.toArray(u),C=w.map((function(e,a){var t={index:a,active:!1,completed:!1,disabled:!1};return i===a?t.active=!0:!g&&i>a?t.completed=!0:!g&&i<a&&(t.disabled=!0),l.cloneElement(e,Object(n.a)({alternativeLabel:m,connector:y,last:a+1===w.length,orientation:N},t,e.props))}));return l.createElement(c.a,Object(n.a)({square:!0,elevation:0,className:Object(o.a)(p.root,p[N],E,m&&p.alternativeLabel),ref:a},x),C)}));a.a=Object(i.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(u)},952:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return M}));var n=t(21),r=t(0),l=t.n(r),o=t(808),i=t(907),c=t(885),s=t(906),m=t(140),d=t(142),u=t(810),p=t(2),E=t(818),f=t(759),v=t(762),h=t(830),g=t(761),b=t(768),N=t(814),x=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"}},margin:{margin:e.spacing(1)}}}));function y(){var e=x();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement(g.a,{className:e.formControl},l.a.createElement(v.a,{htmlFor:"tp-native-simple"},"Tipo de Documento"),l.a.createElement(b.a,{native:!0,inputProps:{name:"tpd",id:"tp-native-simple"}},l.a.createElement("option",{value:0},"Elejir..."),l.a.createElement("option",{value:1},"C.C"),l.a.createElement("option",{value:2},"T.I"),l.a.createElement("option",{value:3},"R.C"))),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"N\xfamero de Documento*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"blur_circular"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Nombres*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"person"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Apellidos*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"person_add"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Telefono"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"phone"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Correo Electronico"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"email"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(N.a,{variant:"contained",color:"secondary",startIcon:l.a.createElement(u.a,{className:"text-60"},"people_outline")},"Agregar Integrantes GAES")))}var w=t(860),C=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"}},margin:{margin:e.spacing(1)}}}));function j(){var e=C();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Nombre  Empresa*"),l.a.createElement(f.a,{id:"Nombre-Empresa",startAdornment:l.a.createElement(h.a,{position:"start"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"business"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"N\xfamero NIT*"),l.a.createElement(f.a,{id:"numero-NIT",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"sticky_note"))})))}var S=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"}},margin:{margin:e.spacing(1)}}}));function O(){var e=S();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement(g.a,{className:e.formControl},l.a.createElement(v.a,{htmlFor:"rpl-native-simple"},"Representante Legal"),l.a.createElement(b.a,{native:!0,inputProps:{name:"rpl",id:"rpl-native-simple"}},l.a.createElement("option",{value:0,selected:!0},"Elejir..."))),l.a.createElement(g.a,{className:e.formControl},l.a.createElement(v.a,{htmlFor:"pais-native-simple"},"Pais"),l.a.createElement(b.a,{native:!0,inputProps:{name:"pais",id:"pais-native-simple"}},l.a.createElement("option",{value:0,selected:!0},"Elejir..."))),l.a.createElement(g.a,{className:e.formControl},l.a.createElement(v.a,{htmlFor:"ciudad-native-simple"},"Ciudad"),l.a.createElement(b.a,{native:!0,inputProps:{name:"ciudad",id:"ciudad-native-simple"}},l.a.createElement("option",{value:0,selected:!0},"Elejir..."))),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Direccion de la Empresa*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"location_on"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Telefono*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"phone"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Correo Electronico*"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"email"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"},"Sitio Web"),l.a.createElement(f.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(h.a,{position:"start"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"language"))})))}var F=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"35ch"}},margin:{margin:e.spacing(1)},paddingtop:{padding:"16px 0 14px"}}}));function A(){var e=F();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"},"filter_tilt_shift")," Misi\xf3n de la empresa"),l.a.createElement(f.a,{id:"standard-adornment-Misi\xf3n",className:e.paddingtop,multiline:!0,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"}," remove_red_eye"),"Visi\xf3n de la empresa"),l.a.createElement(f.a,{id:"standard-adornment-Visi\xf3n",className:e.paddingtop,multiline:!0,rowsMax:4,variant:"outlined",fullWidth:!0})),l.a.createElement(g.a,{fullWidth:!0,className:e.margin},l.a.createElement(v.a,{htmlFor:"standard-adornment-amount"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"}," recent_actors")," Valores que conforman la empresa"),l.a.createElement(f.a,{id:"standard-adornment-valores",className:e.paddingtop,multiline:!0,rowsMax:4,variant:"outlined",fullWidth:!0})))}var L=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"45ch"}},margin:{margin:e.spacing(1)},paddingtop:{padding:"16px 0 7px"}}}));function W(){var e=L();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"Productos-Servicio"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"sentiment_dissatisfied"),"Que problema esta solucionando el Productos/Servicios que ofrece tu empresa"),l.a.createElement(f.a,{id:"Productos-Servicio",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"segmentos-cliente"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"wc")," Describe los segmentos de clientes que accederan a tus Productos/Servicios"),l.a.createElement(f.a,{id:"segmentos-cliente",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"propuesta-propuesta"}," ",l.a.createElement(u.a,{className:"text-30",color:"action"},"favorite"),"Piensa y describe la propuesta de valor que entrega a tu cliente"),l.a.createElement(f.a,{id:"propuesta-propuesta",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"canales-atencion"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"},"chat")," \xbfCuales son los canales de atencion que la empresa dispone para sus clientes?"),l.a.createElement(f.a,{id:"canales-atencion",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"fuentes-ingresos"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"},"monetization_on"),"\xbfCuales seran las fuentes de ingresos?"),l.a.createElement(f.a,{id:"fuentes-ingresos",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})),l.a.createElement(g.a,{fullWidth:!0,className:e.paddingtop},l.a.createElement(v.a,{htmlFor:"gastos-fijos"}," ",l.a.createElement(u.a,{className:"text-60",color:"action"},"local_atm")," \xbfCuales seran los gastos fijos que necesitaras para que la empresa y productos funciones?"),l.a.createElement(f.a,{id:"gastos-fijos",className:"mt-8 mb-16",multiline:!0,rows:3,rowsMax:4,variant:"outlined",fullWidth:!0,endAdornment:l.a.createElement(h.a,{position:"end"},"  ",l.a.createElement(u.a,{className:"text-30",color:"action"},"help_outline"))})))}var I=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"}},productImageFeaturedStar:{position:"absolute",top:0,right:0,opacity:0},productImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}}));function _(){var e=I();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement("div",{className:"MuiCardContent-root flex flex-col items-center justify-center p-32 text-center"},l.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-8"},l.a.createElement("label",{htmlFor:"button-file",className:Object(p.a)(e.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},l.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(e){var a=e.target.files[0];if(a){console.log(a);var t=new FileReader;t.readAsBinaryString(a),t.onerror=function(){console.log("error on load image")}}}}),l.a.createElement(u.a,{fontSize:"large",color:"action"},"cloud_upload")),l.a.createElement("div",{role:"button",tabIndex:0,className:Object(p.a)(e.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},l.a.createElement("img",{className:"max-w-none w-auto h-full",src:"assets/images/logos/fuse.svg",alt:"logo"})))))}var T=Object(o.a)((function(e){return{root:{width:"100%",backgroundColor:"#FFFFFF"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},floatright:{float:"right"},floatleft:{float:"left"},imgencentrar:{justifycontent:"center"}}}));function z(e){switch(e){case 0:return"alumnos-01";case 1:return"alumnos-02";case 2:return"alumnos-03";case 3:return"alumnos-04";case 4:return"alumnos-05";case 5:return"alumnos-06";case 6:return"alumnos-07";default:return"alumnos-08"}}function M(){var e=T(),a=l.a.useState(0),t=Object(n.a)(a,2),r=t[0],o=t[1],f=["Crear GAES","\xbf Que Tipo de Empesa quieres ?","\xbf Como se llamar\xe1 la Empresa ?","\xbf Cuales son los dato de contacto de la Empresa ?","\xbf Es necesario definir quien es la Empresa y hacia donde va ?","\xbf Ahora vamos a crear el modelo de negocio de la Empresa ?","\xbf solo falta el logotipo de la Empresa ?"],v=function(){o((function(e){return e-1}))};return l.a.createElement("div",{className:e.root},l.a.createElement("div",null,l.a.createElement(i.a,{activeStep:r,alternativeLabel:!0,style:{paddingBottom:"0"}},f.map((function(e){return l.a.createElement(c.a,{key:e},l.a.createElement(s.a,null,e))})))),l.a.createElement("div",{className:Object(p.a)(e.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-80 sm:h-80 bg-white"),style:{paddingTop:"0"}},l.a.createElement(d.a,{animation:"transition.slideUpIn",duration:400,delay:100},l.a.createElement(m.a,{color:"inherit",className:"text-24 sm:text-40 font-light",style:{paddingBottom:"0"}},"!BIENVENIDO\xa1")),l.a.createElement(d.a,{duration:400,delay:600},l.a.createElement(m.a,{color:"inherit",className:"mt-8 sm:mt-32 mx-auto max-w-1024"},l.a.createElement("div",{style:{width:"1024px"}},r===f.length?l.a.createElement("div",null,l.a.createElement(m.a,{className:e.instructions},"Felicidades tu empresa ya esta creada"),l.a.createElement(m.a,{color:"inherit"},l.a.createElement("div",{className:"MuiCardContent-root flex flex-col items-center justify-center p-32 text-center"},l.a.createElement("img",{className:"w-256",src:"assets/images/profile/alumnos-08.png",alt:"logo"}))),l.a.createElement(E.a,{onClick:v,variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin}," ",l.a.createElement(u.a,null,"arrow_left")," Regresar")):l.a.createElement("div",null,l.a.createElement("span",{className:"opacity-75"},l.a.createElement(m.a,{className:"text-18 sm:text-30 font-light"},function(e){switch(e){case 0:return"\xa1Vamos a Crear Grupos de aprendizaje de  Estudiantes GAES!";case 1:case 2:case 3:case 4:case 5:case 6:return"\xa1Vamos a Crear tu Empresa!";default:return"Unknown stepIndex"}}(r))),l.a.createElement(m.a,{color:"inherit"},"'",l.a.createElement("div",{className:"MuiCardContent-root flex flex-col items-center justify-center p-32 text-center"},l.a.createElement("img",{className:"w-224",src:"assets/images/profile/".concat(z(r),".png"),alt:"logo"}))),l.a.createElement("div",null,l.a.createElement(E.a,{disabled:0===r,onClick:v,size:"small",color:"primary","aria-label":"add",className:e.floatleft},l.a.createElement(u.a,null,"arrow_left")),l.a.createElement(E.a,{onClick:function(){o((function(e){return e+1}))},size:"small",color:"primary","aria-label":"add",className:e.floatright},(f.length,l.a.createElement(u.a,null,"arrow_right")))),l.a.createElement("span",{className:"opacity-75"},l.a.createElement(m.a,{className:e.instructions},function(e){switch(e){case 0:return"\xbf Ingresa los datos de cada Estudiante ?";case 1:return"\xbf Que Tipo de Empesa quieres ?";case 2:return"\xbf Como se llamar\xe1 la Empresa ?";case 3:return"\xbf Cuales son los dato de contacto de la Tonly S.A.S ?";case 4:return"\xbf Es necesario definir quien es Tonly S.A.S y hacia donde va ?";case 5:return"\xbf Ahora vamos a crear el modelo de negocio de Tonly S.A.S ?";case 6:return"\xbf solo falta el logotipo de Tonly S.A.S ?";default:return"Unknown stepIndex"}}(r))),l.a.createElement(m.a,{className:e.instructions},function(e){switch(e){case 0:return l.a.createElement(y,null);case 1:return l.a.createElement(w.a,null);case 2:return l.a.createElement(j,null);case 3:return l.a.createElement(O,null);case 4:return l.a.createElement(A,null);case 5:return l.a.createElement(W,null);case 6:return l.a.createElement(_,null);default:return"Unknown stepIndex"}}(r))))))))}}}]);