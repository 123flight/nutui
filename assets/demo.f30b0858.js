import{c as t}from"./mobile.aff19510.js";import{r as l,o as e,c as s,f as i,i as c}from"./vendor.80bf15c7.js";import"./index.77feaf28.js";const{createDemo:n}=t("cell");var o=n({props:{},setup:()=>({testClick:t=>{alert(t)}})});const d={class:"demo"},r=i("h2",null,"基本用法",-1),a=i("h2",null,"直接使用插槽(slot)",-1),u=i("div",null,"自定义内容",-1),f=i("h2",null,"链接",-1),m=i("h2",null,"展示图标",-1),p=i("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);o.render=function(t,n,o,h,k,j){const v=l("nut-cell");return e(),s("div",d,[r,i(v,{title:"我是标题",desc:"描述文字"}),i(v,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),i(v,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),a,i(v,{title:"我是标题",desc:"描述文字"},{default:c((()=>[u])),_:1}),f,i(v,{title:"链接","is-link":""}),i(v,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),i(v,{title:"路由跳转 ’/‘ ",to:"/"}),m,i(v,{title:"姓名",icon:"my",desc:"张三"}),p,i(v,{"desc-text-align":"left",desc:"张三"})])};export default o;
