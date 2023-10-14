"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[5721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),h=s(n),p=i,d=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return n?l.createElement(d,a(a({ref:t},g),{},{components:n})):l.createElement(d,a({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[h]="string"==typeof e?e:i,a[1]=r;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const o={},a=void 0,r={unversionedId:"globals/Action-Wheel/Action",id:"globals/Action-Wheel/Action",title:"Action",description:"This page is a WIP!",source:"@site/docs/globals/Action-Wheel/Action.md",sourceDirName:"globals/Action-Wheel",slug:"/globals/Action-Wheel/Action",permalink:"/globals/Action-Wheel/Action",draft:!1,editUrl:"https://github.com/figuramc/wiki/tree/main/docs/globals/Action-Wheel/Action.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Action Wheel",permalink:"/globals/Action-Wheel/"},next:{title:"Page",permalink:"/globals/Action-Wheel/Page"}},c={},s=[{value:"Action Events",id:"action-events",level:2},{value:"<code>setOnLeftClick()</code>",id:"setOnLeftClick",level:3},{value:"<code>setOnRightClick(fn)</code>",id:"setOnRightClick",level:3},{value:"<code>setOnToggle(fn)</code>",id:"setOnToggle",level:3},{value:"<code>setOnUnToggle(fn)</code>",id:"setOnUnToggle",level:3},{value:"<code>setOnScroll(fn)</code>",id:"setOnScroll",level:3}],g={toc:s},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is a WIP!"),(0,i.kt)("h2",{id:"action-events"},"Action Events"),(0,i.kt)("p",null,'Technically they are "callbacks" and not "events" as you can only assign a single function, but eh.\nIt\'s common practice to pass pings to these functions since interacting with the action_wheel is not sync\'d between clients. Checkout the ',(0,i.kt)("a",{parentName:"p",href:"#setOnToggle"},(0,i.kt)("inlineCode",{parentName:"a"},"setOnToggle"))," function to see an example."),(0,i.kt)("h3",{id:"setOnLeftClick"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOnLeftClick()")),(0,i.kt)("p",null,"Sets the function that is executed when the left mouse button is clicked\nThe function have one argument\nThe first argument is this action itself"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local myPage = action_wheel:new_page()\nmyPage:newAction()\n// highlight-start\n    :setOnLeftClick(function()\n        print('I left clicked this button!')\n    end)\n// highlight-end\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"setOnRightClick"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOnRightClick(fn)")),(0,i.kt)("p",null,"Sets the function that is executed when the right mouse button is clicked\nThe function have one argument\nThe first argument is this action itself"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local myPage = action_wheel:new_page()\nmyPage:newAction()\n// highlight-start\n    :setOnRightClick(function()\n        print('I right clicked this button!')\n    end)\n// highlight-end\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"setOnToggle"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOnToggle(fn)")),(0,i.kt)("p",null,"When the Action is assigned a function to the ",(0,i.kt)("code",null,"toggle")," field, it becomes a Toggle Action. Figura passes the Toggle Action's internal ",(0,i.kt)("code",null,"state")," variable as the first parameter, and the Action itself as the second."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function pings.setVisible(state)\n    models:setVisible(state)\nend\n\nlocal myPage = action_wheel:newPage()\nmyPage:newAction()\n    :title("disabled")\n    :toggleTitle("enabled")\n    :item("red_wool")\n    :toggleItem("green_wool")\n    // highlight-next-line\n    :setOnToggle(pings.setVisible)\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"setOnUnToggle"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOnUnToggle(fn)")),(0,i.kt)("p",null,"Unlike Toggle which gets executed when the Action is toggled on or off, UnToggle only gets executed when the Action is toggled off. Figura passes the Toggle Action's internal ",(0,i.kt)("code",null,"state")," variable as the first parameter (which is always false due to the nature of UnToggle), and the Action itself as the second."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local myPage = action_wheel:new_page()\nmyPage:newAction()\n// highlight-start\n    :setOnUnToggle(function(bool)\n        print('This is always false: ' .. bool)\n    end)\n// highlight-end\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"setOnScroll"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOnScroll(fn)")),(0,i.kt)("p",null,"This will execute when the mouse wheel scrolls while hovering over the Action. The first parameter is the direction the mouse scrolled (1 for scroll up, -1 for scroll down. Can be more than 1 for non-standard mouse wheels). The second paremeter is the Action itself"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local myPage = action_wheel:new_page()\nmyPage:newAction()\n// highlight-start\n    :setOnScroll(function(dir)\n        print("Scrolled in this direction: " .. dir)\n    end)\n// highlight-end\n')))}u.isMDXComponent=!0}}]);