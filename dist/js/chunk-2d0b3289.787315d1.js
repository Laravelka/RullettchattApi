(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["g"])("Настройки"),i=Object(o["g"])("Темная тема");function u(e,t,n,u,l,r){var a=Object(o["x"])("Header"),b=Object(o["x"])("ion-title"),O=Object(o["x"])("ion-toolbar"),j=Object(o["x"])("ion-header"),s=Object(o["x"])("ion-icon"),d=Object(o["x"])("ion-label"),f=Object(o["x"])("ion-toggle"),g=Object(o["x"])("ion-item"),h=Object(o["x"])("ion-card"),I=Object(o["x"])("ion-list"),m=Object(o["x"])("ion-content"),C=Object(o["x"])("ion-page");return Object(o["r"])(),Object(o["e"])(C,null,{default:Object(o["C"])((function(){return[Object(o["h"])(a,{"is-custom-back":"","is-settings":"",title:"Настройки"}),Object(o["h"])(m,{fullscreen:!0},{default:Object(o["C"])((function(){return[Object(o["h"])(j,{collapse:"condense"},{default:Object(o["C"])((function(){return[Object(o["h"])(O,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,{size:"large"},{default:Object(o["C"])((function(){return[c]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(I,null,{default:Object(o["C"])((function(){return[Object(o["h"])(h,null,{default:Object(o["C"])((function(){return[Object(o["h"])(g,{lines:"none"},{default:Object(o["C"])((function(){return[Object(o["h"])(s,{slot:"start",icon:e.moon},null,8,["icon"]),Object(o["h"])(d,null,{default:Object(o["C"])((function(){return[i]})),_:1}),Object(o["h"])(f,{modelValue:e.isDarkRef,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.isDarkRef=t}),color:"light",id:"themeToggle",onIonChange:e.onChangeTheme,slot:"end"},null,8,["modelValue","onIonChange"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var l=n("d867");function r(e,t,n,c,i,u){var l=Object(o["x"])("ion-icon"),r=Object(o["x"])("ion-button"),a=(Object(o["x"])("ion-back-button"),Object(o["x"])("ion-menu-button"),Object(o["x"])("ion-buttons")),b=Object(o["x"])("ion-title"),O=Object(o["x"])("ion-toolbar"),j=Object(o["x"])("ion-header");return Object(o["r"])(),Object(o["e"])(j,null,{default:Object(o["C"])((function(){return[Object(o["h"])(O,null,{default:Object(o["C"])((function(){return[Object(o["f"])("",!0),e.isSettings?Object(o["f"])("",!0):(Object(o["r"])(),Object(o["e"])(a,{key:1,slot:"primary"},{default:Object(o["C"])((function(){return[Object(o["h"])(r,{"router-link":"/settings"},{default:Object(o["C"])((function(){return[Object(o["h"])(l,{class:"icon-25",icon:e.settingsOutline},null,8,["icon"])]})),_:1})]})),_:1})),Object(o["h"])(b,null,{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["z"])(e.title),1)]})),_:1})]})),_:1})]})),_:1})}var a=n("ff79"),b=n("6c02"),O=Object(o["i"])({name:"Header",components:{IonIcon:l["l"],IonHeader:l["k"],IonToolbar:l["F"],IonTitle:l["C"],IonButtons:l["d"],IonButton:l["c"],IonBackButton:l["b"],IonMenuButton:l["s"]},props:{title:String,isNotBack:Boolean,isSettings:Boolean,isCustomBack:Boolean},setup:function(){var e=Object(b["i"])(),t=function(){e.back()};return{goBack:t,settings:a["E"],settingsOutline:a["F"],chevronBackOutline:a["i"]}}});O.render=r;var j=O,s=Object(o["i"])({name:"Settings",components:{Header:j,IonIcon:l["l"],IonPage:l["v"],IonList:l["p"],IonCard:l["e"],IonItem:l["n"],IonLabel:l["o"],IonTitle:l["C"],IonToggle:l["E"],IonHeader:l["k"],IonToolbar:l["F"],IonContent:l["i"]},setup:function(){var e,t=Object(o["w"])(!1),n=null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"light";t.value="dark"==n;var c=function(e){t.value=e.detail.checked,localStorage.setItem("theme",t.value?"dark":"light"),document.body.classList.toggle("dark",t.value)};return{moon:a["w"],isDarkRef:t,onChangeTheme:c}}});s.render=u;t["default"]=s}}]);
//# sourceMappingURL=chunk-2d0b3289.787315d1.js.map