import{c as t}from"./mobile.c4a15242.js";import{r as e,o as l,c as s,f as c}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:i}=t("cell");var n=i({props:{},setup:()=>({testClick:t=>{alert(t)}})});const o={class:"demo"},d=c("h2",null,"基本用法",-1),r=c("h2",null,"链接",-1),a=c("h2",null,"展示图标",-1),u=c("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);n.render=function(t,i,n,m,p,f){const h=e("nut-cell");return l(),s("div",o,[d,c(h,{title:"我是标题",desc:"描述文字"}),c(h,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),c(h,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),r,c(h,{title:"链接","is-link":""}),c(h,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),c(h,{title:"路由跳转 ’/‘ ",to:"/"}),a,c(h,{title:"姓名",icon:"my",desc:"张三"}),u,c(h,{"desc-text-align":"left",desc:"张三"})])};export default n;
