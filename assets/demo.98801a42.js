var e=Object.defineProperty,o=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(o,a,l)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l;import{c as n,T as d}from"./mobile.b8559ba3.js";import{a as s,A as t,x as h,y as u,r as b,o as m,c as x,f as r,t as i,s as k,j as p}from"./vendor.cc24f590.js";import"./index.176c141b.js";const{createDemo:V}=n("checkbox");var f=V({setup(e,n){const h=s({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1});return((e,n)=>{for(var d in n||(n={}))o.call(n,d)&&c(e,d,n[d]);if(a)for(var d of a(n))l.call(n,d)&&c(e,d,n[d]);return e})({changeBox1:(e,o)=>{console.log(e,o)},changeBox2:(e,o)=>{console.log(e,o)},changeBox3:(e,o)=>{d.text(`您${e?"选中":"取消"}了${o}`)}},t(h))}});const g=k();h("data-v-b9922e74");const v={class:"demo-list"},_=r("h4",null,"基础用法",-1),w={class:"show-demo"},j=r("span",null,"复选框",-1),y={class:"show-demo"},U=p("复选框"),B=r("h4",null,"禁用状态",-1),C={class:"show-demo"},O=p("未选时禁用状态"),P=p("选中时禁用状态"),z=r("h4",null,"自定义尺寸",-1),I={class:"show-demo"},$=p("自定义尺寸25"),A=p("自定义尺寸10"),D=r("h4",null,"自定义图标",-1),E={class:"show-demo"},S=p("自定义图标"),T=r("h4",null,"点击触发change事件",-1),q={class:"show-demo"},F=p("change复选框");u();const G=g(((e,o,a,l,c,n)=>{const d=b("nut-checkbox");return m(),x("div",v,[_,r("div",w,[r(d,{modelValue:e.checkbox1,"onUpdate:modelValue":o[1]||(o[1]=o=>e.checkbox1=o),label:"复选框",onChange:e.changeBox1},{default:g((()=>[j])),_:1},8,["modelValue","onChange"]),r("span",null,i(e.checkbox1),1)]),r("div",y,[r(d,{modelValue:e.checkbox2,"onUpdate:modelValue":o[2]||(o[2]=o=>e.checkbox2=o),"text-position":"left",onChange:e.changeBox2},{default:g((()=>[U])),_:1},8,["modelValue","onChange"]),r("span",null,i(e.checkbox2),1)]),B,r("div",C,[r(d,{modelValue:e.checkbox3,"onUpdate:modelValue":o[3]||(o[3]=o=>e.checkbox3=o),disabled:""},{default:g((()=>[O])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox4,"onUpdate:modelValue":o[4]||(o[4]=o=>e.checkbox4=o),disabled:""},{default:g((()=>[P])),_:1},8,["modelValue"])]),z,r("div",I,[r(d,{modelValue:e.checkbox5,"onUpdate:modelValue":o[5]||(o[5]=o=>e.checkbox5=o),"icon-size":"25"},{default:g((()=>[$])),_:1},8,["modelValue"]),r(d,{modelValue:e.checkbox6,"onUpdate:modelValue":o[6]||(o[6]=o=>e.checkbox6=o),"icon-size":"10"},{default:g((()=>[A])),_:1},8,["modelValue"])]),D,r("div",E,[r(d,{modelValue:e.checkbox7,"onUpdate:modelValue":o[7]||(o[7]=o=>e.checkbox7=o),"icon-name":"checklist","icon-active-name":"checklist"},{default:g((()=>[S])),_:1},8,["modelValue"])]),T,r("div",q,[r(d,{modelValue:e.checkbox8,"onUpdate:modelValue":o[8]||(o[8]=o=>e.checkbox8=o),onChange:e.changeBox3},{default:g((()=>[F])),_:1},8,["modelValue","onChange"])])])}));f.render=G,f.__scopeId="data-v-b9922e74";export default f;