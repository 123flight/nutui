var e=Object.assign;import{c as l}from"./mobile.c4a15242.js";import{a as o,k as a,z as c,s as u,x as d,r as h,o as s,c as n,f as b,t as m,q as t,j as k}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:x}=l("checkbox");var r=x({setup(l,u){const d=o({checkbox1:!1,checkbox2:!1,checkbox3:!0,checkbox4:!0,checkbox5:!0,checkbox6:!0,checkbox7:!1,checkbox8:!0,checkbox9:!1,checkbox10:!0,checkbox11:!1,checkbox12:!0,checkbox13:!1,checkboxGroup1:["选项一"],checkboxGroup2:["选项一"],checkboxGroup3:[],checkboxGroup4:["没有动效1"],checkboxGroup5:["选项一"],checkboxGroup6:[],checkboxGroup7:[]}),h=o({result1:"",result2:"",result3:"",result4:""}),s=a(null);return e(e({changeBox1:e=>{d.checkbox1=e},checkboxChange:(e,l)=>{h.result1=e},checkboxGroupDemo:s,getChange:e=>{h.result2="选中状态选项："+e},getChange2:e=>{h.result3="选中状态选项："+e},getChange3:e=>{h.result4="选中状态选项："+e},chooseAll:e=>{s.value.toggleAll(e)}},c(d)),c(h))}});const p=t("data-v-6ced69e3");u("data-v-6ced69e3");const i={class:"demo-list"},V=b("h4",null,"基础用法",-1),g={class:"show-demo"},G=k("复选框"),C=b("p",{class:"p-word"},"组合使用 checkbox 时推荐使用 checkboxgroup 组件，见下方示例",-1),v=b("h4",null,"CheckboxGroup基本用法",-1),f={class:"show-demo"},_=b("h4",null,"禁用状态",-1),w={class:"show-demo show-demo-block"},U=k("未选时禁用状态"),z=k("已选时禁用状态"),y=b("h4",null,"CheckboxGroup整体禁用",-1),j={class:"show-demo"},A=b("h4",null,"自定义尺寸",-1),D={class:"show-demo show-demo-block"},B=k("小号1"),q=k("默认"),I=k("大号"),O=b("p",null,"size可选值：'small', 'base', 'large'",-1),E=b("h4",null,"CheckboxGroup整体尺寸",-1),F={class:"show-demo"},H=b("h4",null,"禁用动效",-1),J={class:"show-demo"},K=k("没有动效"),L=b("p",null,"animation属性值为false时，禁用自带动效",-1),M=b("h4",null,"CheckboxGroup整体禁用动效",-1),N={class:"show-demo"},P=b("h4",null,"事件",-1),Q={class:"show-demo"},R={class:"demo-box"},S=k("备选项"),T=b("h4",null,"CheckboxGroup整体事件",-1),W={class:"show-demo"},X=b("h4",null,"自定义Class",-1),Y={class:"show-demo"},Z=k('自定义Class:"my-checkbox"'),$=b("h4",null,"全选与反选",-1),ee={class:"show-demo"},le=k("全选"),oe=k("反选"),ae=k("取消"),ce=b("h4",null,"CheckboxGroup排列方向",-1),ue={class:"show-demo"};d();const de=p(((e,l,o,a,c,u)=>{const d=h("nut-checkbox"),t=h("nut-checkboxgroup"),k=h("nut-button");return s(),n("div",i,[V,b("div",g,[b(d,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),onChange:e.changeBox1},{default:p((()=>[G])),_:1},8,["modelValue","onChange"]),b("span",null,m(e.checkbox1),1)]),C,v,b("div",f,[b(t,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkboxGroup1=l)},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"})])),_:1},8,["modelValue"]),b("p",null,"选择状态："+m(e.checkboxGroup1),1)]),_,b("div",w,[b(d,{modelValue:e.checkbox2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox2=l),disabled:""},{default:p((()=>[U])),_:1},8,["modelValue"]),b(d,{modelValue:e.checkbox3,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox3=l),disabled:""},{default:p((()=>[z])),_:1},8,["modelValue"])]),y,b("div",j,[b(t,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup2=l),disabled:""},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"})])),_:1},8,["modelValue"]),b("p",null,"选择状态："+m(e.checkboxGroup2),1)]),A,b("div",D,[b(d,{modelValue:e.checkbox4,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox4=l),size:"small"},{default:p((()=>[B])),_:1},8,["modelValue"]),b(d,{modelValue:e.checkbox5,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox5=l),size:"base"},{default:p((()=>[q])),_:1},8,["modelValue"]),b(d,{modelValue:e.checkbox6,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkbox6=l),size:"large"},{default:p((()=>[I])),_:1},8,["modelValue"]),O]),E,b("div",F,[b(t,{modelValue:e.checkboxGroup3,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkboxGroup3=l),size:"small"},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"})])),_:1},8,["modelValue"])]),H,b("div",J,[b(d,{modelValue:e.checkbox7,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkbox7=l),animation:!1},{default:p((()=>[K])),_:1},8,["modelValue"]),L]),M,b("div",N,[b(t,{modelValue:e.checkboxGroup4,"onUpdate:modelValue":l[11]||(l[11]=l=>e.checkboxGroup4=l),animation:!1},{default:p((()=>[b(d,{label:"没有动效1"}),b(d,{label:"没有动效2"})])),_:1},8,["modelValue"])]),P,b("div",Q,[b("div",R,[b(d,{modelValue:e.checkbox9,"onUpdate:modelValue":l[12]||(l[12]=l=>e.checkbox9=l),label:"change事件",onChange:e.checkboxChange},{default:p((()=>[S])),_:1},8,["modelValue","onChange"]),b("span",null,m(e.result1),1)])]),T,b("div",W,[b("div",null,[b(t,{modelValue:e.checkboxGroup5,"onUpdate:modelValue":l[13]||(l[13]=l=>e.checkboxGroup5=l),onChange:e.getChange},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"})])),_:1},8,["modelValue","onChange"])]),b("span",null,m(e.result2),1)]),X,b("div",Y,[b(d,{class:"my-checkbox",modelValue:e.checkbox12,"onUpdate:modelValue":l[14]||(l[14]=l=>e.checkbox12=l)},{default:p((()=>[Z])),_:1},8,["modelValue"])]),$,b("div",ee,[b("div",null,[b(t,{ref:"checkboxGroupDemo",modelValue:e.checkboxGroup6,"onUpdate:modelValue":l[15]||(l[15]=l=>e.checkboxGroup6=l),onChange:e.getChange2},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"}),b(d,{label:"选项三"})])),_:1},8,["modelValue","onChange"])]),b("div",null,[b("span",null,m(e.result3),1)]),b(k,{size:"small",type:"primary",onClick:l[16]||(l[16]=l=>e.chooseAll(!0))},{default:p((()=>[le])),_:1}),b(k,{size:"small",type:"primary",onClick:l[17]||(l[17]=l=>e.chooseAll())},{default:p((()=>[oe])),_:1}),b(k,{size:"small",type:"primary",onClick:l[18]||(l[18]=l=>e.chooseAll(!1))},{default:p((()=>[ae])),_:1})]),ce,b("div",ue,[b("div",null,[b(t,{modelValue:e.checkboxGroup7,"onUpdate:modelValue":l[19]||(l[19]=l=>e.checkboxGroup7=l),direction:"vertical",onChange:e.getChange3},{default:p((()=>[b(d,{label:"选项一"}),b(d,{label:"选项二"}),b(d,{label:"选项三"})])),_:1},8,["modelValue","onChange"])]),b("span",null,m(e.result2),1)])])}));r.render=de,r.__scopeId="data-v-6ced69e3";export default r;
