import{r as o,c as l,a as t,w as v,v as c,b as m,F as T,d as x,o as n,e as y,t as f}from"./index-CFviRuGS.js";const _={__name:"ListaDeTareas",setup(k){const r=o([]),e=o(""),i=()=>{r.value.push(e.value),e.value=""},p=u=>{r.value.splice(u,1)};return(u,a)=>(n(),l("div",null,[a[1]||(a[1]=t("h2",null,"Lista de Tareas",-1)),v(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),onKeyup:m(i,["enter"])},null,544),[[c,e.value]]),t("ul",null,[(n(!0),l(T,null,x(r.value,(s,d)=>(n(),l("li",{key:d},[y(f(s)+" ",1),t("button",{onClick:p},"Borrar")]))),128))])]))}};export{_ as default};
