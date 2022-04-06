import{r as $,o as r,c as l,a as e,b as g,w as k,d as y,t as h,n as x,F as S,e as w,p as P,f as A,g as L,h as v,i as q,j as E,u as m,k as F,v as H,l as O,m as V,q as B,s as T,x as D,y as M,z as U,A as z}from"./vendor.40f856ac.js";const R=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};R();var W="/assets/logo.e36df632.svg";var f=(o,a)=>{const i=o.__vccOpts||o;for(const[n,t]of a)i[n]=t;return i};const K={name:"App"},G={class:"navbar navbar-dark bg-primary navbar-expand-md"},J={class:"container-fluid"},Q=e("img",{src:W,alt:"",height:"40",class:"d-inline-block align-text-center"},null,-1),X=y(" Pokedex "),Y=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),Z={class:"collapse navbar-collapse",id:"navbarNav"},ee={class:"navbar-nav"},oe={class:"nav-item"},te=y("Home"),se={class:"nav-item"},ae=y("About"),ne=e("footer",{class:"py-3 bg-primary"},[e("div",{class:"container text-center text-light"},[e("span",{class:""},"\xA9 2022 Pokedex")])],-1);function re(o,a,i,n,t,s){const c=$("router-link"),b=$("router-view");return r(),l("div",null,[e("nav",G,[e("div",J,[g(c,{class:"navbar-brand",to:"/"},{default:k(()=>[Q,X]),_:1}),Y,e("div",Z,[e("ul",ee,[e("li",oe,[g(c,{class:"nav-link",to:"/"},{default:k(()=>[te]),_:1})]),e("li",se,[g(c,{class:"nav-link",to:"/about"},{default:k(()=>[ae]),_:1})])])])])]),g(b),ne])}var ce=f(K,[["render",re]]);const le={class:"card card-pokemon"},ie=["src","alt"],de={props:["name","url","urlImgSvg"],setup(o){return(a,i)=>(r(),l("div",le,[e("h2",null,h(o.name.charAt(0).toUpperCase()+o.name.substr(1)),1),e("img",{src:o.urlImgSvg+o.url.split("/")[6]+".svg",alt:o.name},null,8,ie)]))}};var ue=f(de,[["__scopeId","data-v-c91a002e"]]),pe="/assets/egg.5c390640.svg";const p=o=>(P("data-v-34bca792"),o=o(),A(),o),_e={class:"d-flex justify-content-center"},me=["src"],he=p(()=>e("hr",null,null,-1)),ve={class:"row descricao-card"},ge={class:"col-md-6"},fe=p(()=>e("h5",null,"Tipo",-1)),be=p(()=>e("h5",null,"Altura",-1)),ke=p(()=>e("h5",null,"Peso",-1)),ye={class:"col-md-6"},$e=p(()=>e("h5",null,"Habilidades",-1)),xe={key:1,class:"card card-pokemon-principal shadow p-3 my-3 text-center"},Se=p(()=>e("h1",null,"???????",-1)),we=p(()=>e("img",{src:pe,alt:"Pokemon-pincipal"},null,-1)),Pe=p(()=>e("hr",null,null,-1)),Ae=[Se,we,Pe],Ce={props:["pokemonSelected","loading"],setup(o){return(a,i)=>(r(),l("section",_e,[o.pokemonSelected?(r(),l("div",{key:0,class:x(["card card-pokemon-principal shadow p-3 my-3 text-center",o.loading?"animate__animated animate__flip":""])},[e("h1",null,h(o.pokemonSelected.name.charAt(0).toUpperCase()+o.pokemonSelected.name.substr(1)),1),e("img",{class:x(o.loading?"":"animate__animated animate__tada"),src:o.pokemonSelected.sprites.other.dream_world.front_default,alt:"Pokemon-pincipal"},null,10,me),he,e("div",ve,[e("div",ge,[fe,e("p",null,h(o.pokemonSelected.types[0].type.name),1),be,e("p",null,h(o.pokemonSelected.height),1),ke,e("p",null,h(o.pokemonSelected.weight),1)]),e("div",ye,[$e,(r(!0),l(S,null,w(o.pokemonSelected.abilities,n=>(r(),l("p",{key:n.id},h(n.ability.name),1))),128))])])],2)):(r(),l("div",xe,Ae))]))}};var Ie=f(Ce,[["__scopeId","data-v-34bca792"]]);const C=o=>(P("data-v-28b14398"),o=o(),A(),o),Ne={class:"container"},je={class:"row contudo-tela-pokemons"},Le={class:"col-12 col-md-6"},qe={class:"col-12 col-md-6"},Ee={class:"card shadow mt-3 px-3"},Fe=C(()=>e("hr",null,null,-1)),He={key:0,class:"spinner-border text-primary text-center mx-auto",role:"status"},Oe=C(()=>e("span",{class:"visually-hidden"},"Loading...",-1)),Ve=[Oe],Be={class:"row listagem-pokemons"},Te={setup(o){let a=L(v()),i="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",n=v(null),t=v(""),s=v(!0),c=v(!0);const b=q(()=>a.value&&t.value?a.value.filter(d=>d.name.toLowerCase().includes(t.value.toLowerCase())):a.value);async function N(){await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=648").then(d=>d.json()).then(d=>{a.value=d.results}).catch(d=>{console.log(d)}).finally(()=>{s.value=!1})}function j(d){c.value=!0,fetch(d.url).then(u=>u.json()).then(u=>{n.value=u}).catch(u=>{console.log(u)}).finally(()=>{c.value=!1})}return E(()=>{N()}),(d,u)=>(r(),l("div",Ne,[e("div",je,[e("div",Le,[g(Ie,{pokemonSelected:m(n),loading:m(c)},null,8,["pokemonSelected","loading"])]),e("div",qe,[e("div",Ee,[F(e("input",{class:"form-control form-control-sm mt-3",type:"text",placeholder:"Pesquisar...","aria-label":".form-control-sm example","onUpdate:modelValue":u[0]||(u[0]=_=>O(t)?t.value=_:t=_)},null,512),[[H,m(t)]]),Fe,m(s)?(r(),l("div",He,Ve)):V("",!0),e("div",Be,[(r(!0),l(S,null,w(m(b),_=>(r(),B(ue,{key:_.name,onClick:Qe=>j(_),name:_.name,url:_.url,urlImgSvg:m(i)},null,8,["onClick","name","url","urlImgSvg"]))),128))])])])])]))}};var De=f(Te,[["__scopeId","data-v-28b14398"]]);const Me={},Ue={class:"container"},ze=T('<div class="card my-md-3 p-3 text-muted"><h1 class="">Sobre</h1><hr><h2>Objetivo</h2><p>Aqui ir\xE1 uma descri\xE7\xE3o sobre o projeto, obrogado por acompanhar e bons estudos!!!</p><p>Aqui ir\xE1 uma descri\xE7\xE3o sobre o projeto, obrogado por acompanhar e bons estudos!!!</p><p>Aqui ir\xE1 uma descri\xE7\xE3o sobre o projeto, obrogado por acompanhar e bons estudos!!!</p><hr><h2>D\xFAvidas</h2><p>Em caso de d\xFAvidas pode entrar em contato comigo atrav\xE9s das m\xEDdias sociais.</p><p>Em caso de d\xFAvidas pode entrar em contato comigo atrav\xE9s das m\xEDdias sociais.</p><p>Em caso de d\xFAvidas pode entrar em contato comigo atrav\xE9s das m\xEDdias sociais.</p></div>',1),Re=[ze];function We(o,a,i,n,t,s){return r(),l("div",Ue,Re)}var Ke=f(Me,[["render",We]]);const Ge=D(),Je=M({history:Ge,strict:!0,routes:[{path:"/",component:De},{path:"/about",component:Ke}]});U("registerSW.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(o){console.error("Error during service worker registration:",o)}});const I=z(ce);I.use(Je);I.mount("#app");
