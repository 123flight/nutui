var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{c as r}from"./mobile.a68f22f3.js";import{a as c,s as n,z as p,A as g,r as m,o as f,c as u,f as b,F as d,h,t as y,y as v}from"./vendor.2e1680f4.js";import"./index.6aaff52e.js";const{createDemo:j}=r("swiper");var _=j({props:{},setup(){const e=c({page:2,page2:0,page3:0,page4:0,current:1,list:["https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/128047/5/6706/178631/5f068cefE53bff564/4dd870d8932daecf.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg"]});return r=((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))l.call(a,t)&&o(e,t,a[t]);return e})({},n(e)),a(r,t({change:a=>{e.current=a+1}}));var r}});const w=v();p("data-v-79734bac");const x={class:"demo"},O=b("h2",null,"基本用法",-1),E={class:"demo-box"},P=b("h2",null,"自定义大小",-1),k={class:"demo-box"},C=b("h2",null,"自定义指示器",-1),D={class:"demo-box"},I={class:"page"},z=b("h2",null,"垂直方向",-1),A={class:"demo-box"};g();const F=w(((e,a,t,s,i,l)=>{const o=m("nut-swiper-item"),r=m("nut-swiper");return f(),u("div",x,[O,b("view",E,[b(r,{"init-page":e.page,"pagination-visible":!0,"pagination-color":"#426543"},{default:w((()=>[(f(!0),u(d,null,h(e.list,(e=>(f(),u(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),P,b("view",k,[b(r,{"init-page":e.page2,loop:!1,width:"300"},{default:w((()=>[(f(!0),u(d,null,h(e.list,(e=>(f(),u(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),C,b("view",D,[b(r,{"init-page":e.page3,loop:!0,onChange:e.change},{page:w((()=>[b("div",I,y(e.current)+"/4 ",1)])),default:w((()=>[(f(!0),u(d,null,h(e.list,(e=>(f(),u(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page","onChange"])]),z,b("view",A,[b(r,{"init-page":e.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:w((()=>[(f(!0),u(d,null,h(e.list,(e=>(f(),u(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])])])}));_.render=F,_.__scopeId="data-v-79734bac";export default _;
