import{c as t,f as n,t as e,C as d,o}from"./vendor.2e1680f4.js";const i={class:"markdown-body"},r=n("h1",null,"Infiniteloading组件",-1),s=n("h3",null,"介绍",-1),a=n("p",null,"列表滚动到底部自动加载更多数据。",-1),l=n("h3",null,"安装",-1),c=n("pre",null,[n("code",{class:"language-javascript"},"  import { createApp } from 'vue';\n  import { InfiniteLoading } from '@nutui/nutui';\n\n  const app = createApp();\n  app.use(InfiniteLoading);\n")],-1),u=n("h2",null,"代码演示",-1),h=n("h3",null,"基础用法",-1),f={class:"language-html"},m=n("pre",null,[n("code",{class:"language-javascript"},"setup() {\n    const hasMore = ref(true);\n    const data = reactive({\n      defultList: []\n    });\n    const loadMore = done => {  \n      setTimeout(() => {\n        const curLen = data.defultList.length;\n        for (let i = curLen; i < curLen + 10; i++) {\n          data.defultList.push(`${i}`);\n        }\n        if (data.defultList.length > 30) hasMore.value = false;\n        done()\n      }, 500);\n    };\n    const init = () => {\n      for (let i = 0; i < 10; i++) {\n        data.defultList.push(`${i}`);\n      }\n    }\n    onMounted(() => {\n      init()\n    });\n    return { loadMore, hasMore, ...toRefs(data) };\n}\n")],-1),p=n("h3",null,"下拉刷新",-1),g={class:"language-html"},L=n("pre",null,[n("code",{class:"language-javascript"},"setup() {\n    const refreshHasMore = ref(true);\n    const data = reactive({\n      refreshList: []\n    });\n    const refreshLoadMore = done => {\n      setTimeout(() => {\n        const curLen = data.refreshList.length;\n        for (let i = curLen; i < curLen + 10; i++) {\n          data.refreshList.push(\n            `${i}`\n          );\n        }\n        if (data.refreshList.length > 30) refreshHasMore.value = false;\n        done()\n      }, 500);\n    };\n\n    const refresh = (done) => {\n      setTimeout(()=>{\n        Toast.success('刷新成功');\n        done()\n      },1000)\n    }\n    const init = () => {\n      for (let i = 0; i < 10; i++) {\n        data.refreshList.push(`${i}`);\n      }\n    }\n    onMounted(() => {\n      init()\n    });\n    return { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };\n}\n")],-1),M=n("h3",null,"自定义加载文案",-1),v={class:"language-html"},b=d('<pre><code class="language-javascript">setup() {\n    const customHasMore = ref(true);\n    const data = reactive({\n      customList: [&#39;&#39;]\n    });\n    const customLoadMore = done =&gt; {\n      setTimeout(() =&gt; {\n        const curLen = data.customList.length;\n        for (let i = curLen; i &lt; curLen + 10; i++) {\n          data.customList.push(`${i}`);\n        }\n        if (data.customList.length &gt; 30) customHasMore.value = false;\n        done()\n      }, 500);\n    };\n    const init = () =&gt; {\n      for (let i = 0; i &lt; 10; i++) {\n        data.customList.push(`${i}`);\n      }\n    }\n    onMounted(() =&gt; {\n      init()\n    });\n    return { customHasMore, customLoadMore,...toRefs(data) };\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>has-more</td><td>是否还有更多数据</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>threshold</td><td>距离底部多远加载</td><td>Number</td><td><code>200</code></td></tr><tr><td>use-window</td><td>将滚动侦听器添加到 window 否则侦听组件的父节点</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>use-capture</td><td>是否使用捕获模式 true 捕获 false 冒泡</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>container-id</td><td>在 useWindow 属性为 false 的时候，自定义设置节点ID</td><td>String</td><td><code>&#39;&#39;</code></td></tr><tr><td>load-more-txt</td><td>“没有更多数”据展示文案</td><td>String</td><td><code>&#39;哎呀，这里是底部了啦&#39;</code></td></tr><tr><td>is-open-refresh</td><td>是否开启下拉刷新</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>pull-icon</td><td>下拉刷新<a href="#/icon">图标名称</a></td><td>String</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40/"></td></tr><tr><td>pull-txt</td><td>下拉刷新提示文案</td><td>String</td><td><code>松手刷新</code></td></tr><tr><td>load-icon</td><td>上拉加载<a href="#/icon">图标名称</a></td><td>Boolean</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40"></td></tr><tr><td>load-txt</td><td>上拉加载提示文案</td><td>String</td><td><code>加载中...</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load-more</td><td>继续加载的回调函数</td><td>done 函数，用于关闭加载中状态</td></tr><tr><td>scroll-change</td><td>实时监听滚动高度</td><td>滚动高度</td></tr><tr><td>refresh</td><td>下拉刷新事件回调</td><td>done 函数，用于关闭加载中状态</td></tr></tbody></table>',6),w={expose:[],setup:d=>(d,w)=>(o(),t("div",i,[r,s,a,l,c,u,h,n("pre",null,[n("code",f,'<ul class="infiniteUl" id="scroll">\n    <nut-infiniteloading\n        containerId = \'scroll\'\n        :use-window=\'false\'\n        :has-more="hasMore"\n        @load-more="loadMore"\n    >\n        <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">'+e(d.item)+"</li>\n    </nut-infiniteloading>\n</ul>\n",1)]),m,p,n("pre",null,[n("code",g,'<ul class="infiniteUl" id="refreshScroll">\n  <nut-infiniteloading\n    pull-icon="JD"\n    container-id="refreshScroll"\n    :use-window="false"\n    :is-open-refresh="true"\n    :has-more="refreshHasMore"\n    @load-more="refreshLoadMore"\n    @refresh="refresh"\n  >\n    <li\n      class="infiniteLi"\n      v-for="(item, index) in refreshList"\n      :key="index"\n      >'+e(d.item)+"</li\n    >\n  </nut-infiniteloading>\n</ul>\n",1)]),L,M,n("pre",null,[n("code",v,'<ul class="infiniteUl" id="customScroll">\n    <nut-infiniteloading\n        container-id = \'customScroll\'\n        :use-window=\'false\'\n        :has-more="customHasMore"\n        @load-more="customLoadMore"\n    >\n        <li class="infiniteLi" v-for="(item, index) in customList" :key="index">'+e(d.item)+'</li>\n        <template v-slot:loading>\n            <div class="loading">\n                <span>加载中...</span>\n            </div>\n        </template>\n        <template v-slot:unloadMore>\n            <div class="unload-more">没有数据啦 ~~</div>\n        </template>\n    </nut-infiniteloading>\n</ul>\n',1)]),b]))};export default w;
