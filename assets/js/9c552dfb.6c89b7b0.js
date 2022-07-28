"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9473:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"why-use-react-redux",title:"Why Use React Redux?",hide_title:!0,sidebar_label:"Why Use React Redux?",description:"Introduction > Why Use React Redux: benefits of using React Redux in a React app"},d=void 0,u={unversionedId:"introduction/why-use-react-redux",id:"introduction/why-use-react-redux",isDocsHomePage:!1,title:"Why Use React Redux?",description:"Introduction > Why Use React Redux: benefits of using React Redux in a React app",source:"@site/../docs/introduction/why-use-react-redux.md",sourceDirName:"introduction",slug:"/introduction/why-use-react-redux",permalink:"/react-redux-in-chinese/introduction/why-use-react-redux",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/introduction/why-use-react-redux.md",tags:[],version:"current",lastUpdatedAt:1659003295,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"why-use-react-redux",title:"Why Use React Redux?",hide_title:!0,sidebar_label:"Why Use React Redux?",description:"Introduction > Why Use React Redux: benefits of using React Redux in a React app"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-redux-in-chinese/introduction/getting-started"},next:{title:"Quick Start",permalink:"/react-redux-in-chinese/tutorials/quick-start"}},l=[{value:"Integrating Redux with a UI",id:"integrating-redux-with-a-ui",children:[],level:2},{value:"Reasons to Use React Redux",id:"reasons-to-use-react-redux",children:[{value:"It is the Official Redux UI Bindings for React",id:"it-is-the-official-redux-ui-bindings-for-react",children:[],level:3},{value:"It Implements Performance Optimizations For You",id:"it-implements-performance-optimizations-for-you",children:[],level:3},{value:"Community Support",id:"community-support",children:[],level:3}],level:2},{value:"Links and References",id:"links-and-references",children:[{value:"Understanding React Redux",id:"understanding-react-redux",children:[],level:3},{value:"Community Resources",id:"community-resources",children:[],level:3}],level:2}],c={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"why-use-react-redux"},"Why Use React Redux?"),(0,i.kt)("p",null,"Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other."),(0,i.kt)("p",null,'If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"React Redux is the official Redux UI binding library for React"),". If you are using Redux and React together, you should also use React Redux to bind these two libraries."),(0,i.kt)("p",null,'To understand why you should use React Redux, it may help to understand what a "UI binding library" does.'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have questions about whether you should use Redux in general, please see these articles for discussion of when and why you might want to use Redux, and how it's intended to be used:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/introduction/motivation"},"Redux docs: Motivation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/general#when-should-i-use-redux"},"Redux docs: FAQ - When should I use Redux?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"},"Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent"))))),(0,i.kt)("h2",{id:"integrating-redux-with-a-ui"},"Integrating Redux with a UI"),(0,i.kt)("p",null,"Using Redux with ",(0,i.kt)("em",{parentName:"p"},"any")," UI layer requires ",(0,i.kt)("a",{parentName:"p",href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/4"},"the same consistent set of steps"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Redux store"),(0,i.kt)("li",{parentName:"ol"},"Subscribe to updates"),(0,i.kt)("li",{parentName:"ol"},"Inside the subscription callback:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Get the current store state"),(0,i.kt)("li",{parentName:"ol"},"Extract the data needed by this piece of UI"),(0,i.kt)("li",{parentName:"ol"},"Update the UI with the data"))),(0,i.kt)("li",{parentName:"ol"},"If necessary, render the UI with initial state"),(0,i.kt)("li",{parentName:"ol"},"Respond to UI inputs by dispatching Redux actions")),(0,i.kt)("p",null,"While it is possible to write this logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic."),(0,i.kt)("p",null,"The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. ",(0,i.kt)("strong",{parentName:"p"},"A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For a deeper look at how React Redux works internally and how it handles the store interaction for you, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/"},"Idiomatic Redux: The History and Implementation of React Redux")),"."))),(0,i.kt)("h2",{id:"reasons-to-use-react-redux"},"Reasons to Use React Redux"),(0,i.kt)("h3",{id:"it-is-the-official-redux-ui-bindings-for-react"},"It is the Official Redux UI Bindings for React"),(0,i.kt)("p",null,"While Redux can be used with any UI layer, it was originally designed and intended for use with React. There are ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/ecosystem#library-integration-and-bindings"},"UI binding layers for many other frameworks"),", but React Redux is maintained directly by the Redux team."),(0,i.kt)("p",null,"As the official Redux binding for React, React Redux is kept up-to-date with any API changes from either library, to ensure that your React components behave as expected. Its intended usage adopts the design principles of React - writing declarative components."),(0,i.kt)("h3",{id:"it-implements-performance-optimizations-for-you"},"It Implements Performance Optimizations For You"),(0,i.kt)("p",null,"React is generally fast, but by default any updates to a component will cause React to re-render all of the components inside that part of the component tree. This does require work, and if the data for a given component hasn't changed, then re-rendering is likely some wasted effort because the requested UI output would be the same."),(0,i.kt)("p",null,"If performance is a concern, the best way to improve performance is to skip unnecessary re-renders, so that components only re-render when their data has actually changed. ",(0,i.kt)("strong",{parentName:"p"},"React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.")),(0,i.kt)("p",null,"In addition, by connecting multiple components in your React component tree, you can ensure that each connected component only extracts the specific pieces of data from the store state that are needed by that component. This means that your own component will need to re-render less often, because most of the time those specific pieces of data haven't changed."),(0,i.kt)("h3",{id:"community-support"},"Community Support"),(0,i.kt)("p",null,"As the official binding library for React and Redux, React Redux has a large community of users. This makes it easier to ask for help, learn about best practices, use libraries that build on top of React Redux, and reuse your knowledge across different applications."),(0,i.kt)("h2",{id:"links-and-references"},"Links and References"),(0,i.kt)("h3",{id:"understanding-react-redux"},"Understanding React Redux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/"},"Idiomatic Redux: The History and Implementation of React Redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e"},(0,i.kt)("inlineCode",{parentName:"a"},"connect.js")," Explained")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/"},"Redux Fundamentals workshop slides"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html"},"UI Layer Integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html"},"Using React Redux"))))),(0,i.kt)("h3",{id:"community-resources"},"Community Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discord channel: ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/0ZcbPKXt5bZ6au5t"},"#redux on Reactiflux")," (",(0,i.kt)("a",{parentName:"li",href:"https://reactiflux.com"},"Reactiflux invite link"),")"),(0,i.kt)("li",{parentName:"ul"},"Stack Overflow topics: ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/redux"},"Redux"),", ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/redux"},"React Redux")),(0,i.kt)("li",{parentName:"ul"},"Reddit: ",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/"},"/r/reactjs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reduxjs/"},"/r/reduxjs")),(0,i.kt)("li",{parentName:"ul"},"GitHub issues (bug reports and feature requests): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues"},"https://github.com/reduxjs/react-redux/issues")),(0,i.kt)("li",{parentName:"ul"},"Tutorials, articles, and further resources: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links"},"React/Redux Links"))))}p.isMDXComponent=!0}}]);