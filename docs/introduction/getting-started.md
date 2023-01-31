---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
hide_title: true
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

&nbsp;

# 快速入门Redux Toolkit

## 目的
**Redux Toolkit**包旨在成为编写Redux逻辑的标准方式。它最初是为了帮助解决[Redux](https://redux.js.org)的三个常见的问题。

- "配置Redux store实在是太复杂啦"
- "我得添加很多其他的包才能开始用Redux做些有用的事情"
- "Redux的样板代码太多了"

我们无法解决每一个问题，但本着[`create-react-app`](https://github.com/facebook/create-react-app)的精神，我们可以尝试提供一些工具来抽象出设置过程，处理最常见的用例，同时也包括一些有用的工具，让用户简化应用程序代码。

Redux Toolkit还包括一个强大的数据获取和缓存功能，我们称之为["RTK Query"](#rtk-query)。它作为一组单独的入口点包含在软件包中。它是可选的，但可以消除自己手写数据获取逻辑的必要。

**这些工具对所有的Redux用户都应该是有益的**。无论你是正在创建第一个项目的新手还是想要简化现有应用的老手, **Redux Toolkit** 都能让你的Redux代码变得更好！

## 安装

### 通过Create React App

使用React和Redux开始一个新应用程序的推荐方法是使用[官方Redux+JS模板](https://github.com/reduxjs/cra-template-redux)或[Reux+TS模板](https://github.com/reduxjs/cra-template-redux-typescript)[Create React App](https://github.com/facebook/create-react-app)，它利用了**[Reux Toolkit](https://redux-toolkit.js.org/)**以及React Redux与React组件的整合。

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

### 现有应用程序

Redux工具包作为NPM上的一个包，可与模块打包器或在Node应用程序中使用：
<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reduxjs/toolkit
```

如果需要React绑定:

```bash
npm install react-redux
```

  </TabItem>
  <TabItem value="yarn" label="yarn" default>

```bash
yarn add @reduxjs/toolkit
```

如果需要React绑定:

```bash
yarn add react-redux
```

  </TabItem>
</Tabs>

它也可以作为定义`window.RTK`全局变量的预编译UMD包使用。UMD包可以直接作为[`<script>` tag](https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js)标签来使用。
## 包含了什么？

Redux Toolkit包含了这些API:

- [`configureStore()`](../api/configureStore.mdx): 通过封装`createStore`，以提供简化的配置选项和良好的默认值。它可以自动组合你的slice reducers，添加你提供的任何Redux中间件，默认包含了`redux-thunk`，并支持Redux DevTools扩展。 
- [`createReducer()`](../api/createReducer.mdx): 允许你为reducer函数提供一个action type的查询表，而不是写switch语句。此外，它自动使用[`immer`库](https://github.com/immerjs/immer)，让你用正常的可变代码编写更简单的不可变更新，如`state.todos[3].completed = true`。
- [`createAction()`](../api/createAction.mdx): 为给定的action type字符串生成一个cation创建器函数。该函数本身已经定义了`toString()`，所以它可以用来代替type常量。
- [`createSlice()`](../api/createSlice.mdx): 接受一个reducer函数对象、一个slice名称和一个初始state值，并自动生成一个带有相应action创建者和action type的slice reducer。
- [`createAsyncThunk`](../api/createAsyncThunk.mdx): 接受一个action type字符串和一个返回promise的函数，并生成一个thunk，根据该promise分派`pending/fulfilled/rejected`的action type值。
- [`createEntityAdapter`](../api/createEntityAdapter.mdx): 生成一组可重用的reducers和selectors，以管理store中的规范化数据
- [Reselect](https://github.com/reduxjs/reselect)中的[`createSelector` 工具](../api/createSelector.mdx)，为了方便使用而重新导出
## RTK Query
[**RTK Query**](.../rtk-query/overview.md)是作为`@reduxjs/toolkit`包内的一个可选的插件提供的。它的目的是解决数据获取和缓存的用例，提供一个紧凑但强大的工具集，为你的应用程序定义一个API接口层。旨在简化网络应用中加载数据的常见情况，使你无需自己手写数据获取和缓存逻辑。

RTK Query是建立在Redux Tookit核心之上实现的，内部使用[Redux](https://redux.js.org/)作为其架构。尽管使用RTK Query不需要Redux和RTK的知识，但你应该探索它们提供的所有额外的全局store管理功能，以及安装[Redux DevTools浏览器扩展](https://github.com/reduxjs/redux-devtools)，它与RTK Query完美配合，可以遍历和回放你的请求和缓存行为的时间线。

RTK Query包含在Redux Toolkit核心软件包的安装中。它可以通过下面两个入口点中的任何一个获得：

```ts no-transpile
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

### RTK Query又包含了什么？

RTK Query包含这些API:

- [`createApi()`](../rtk-query/api/createApi.mdx): RTK Query的核心功能。它允许你定义一组端点，描述如何从一系列的端点中获取数据，包括配置如何获取和转换这些数据。在大多数情况下，你应该在每个应用中使用一次，以 "每个基本URL一个API slice"作为经验法则。
- [`fetchBaseQuery()`](../rtk-query/api/fetchBaseQuery.mdx): 一个围绕[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)的小型封装器，旨在简化请求。旨在作为推荐的`baseQuery`，供大多数用户在`createApi`中使用。
- [`<ApiProvider />`](../rtk-query/api/ApiProvider.mdx): **如果你还没有任何Redux store**，你可以将它作为`Provider`。
- [`setupListeners()`](../rtk-query/api/setupListeners.mdx): 一个用于启用 `refetchOnMount`和`refetchOnReconnect`行为的工具。

有关RTK查询是什么、它解决了什么问题以及如何使用它的详细信息，请参阅[**RTK Query Overview**](../rtk-query/overview.md)。

## 学习Redux

我们有各种资源可以帮助你学习Redux。

### Redux基本知识

[**Redux基础教程**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)是一个"自顶向下"的教程，教你"如何以正确的方式使用Redux"，以及使用我们推荐的最新API和最佳实践。我们建议从那里开始。

### Redux Fundamentals Tutorial

[**Redux深入浅出**](https://redux.js.org/tutorials/fundamentals/part-1-overview)是一个“自底向上”的教程，它从基本原理出发，在没有任何抽象的情况下教授“Redux如何工作”，以及为什么存在标准的Redux使用模式。

### Redux网络课程--Learn Modern Redux

Redux维护人员马克·埃里克森（Mark Erikson）出现在“Learn with Jason ”节目中，解释了我们今天推荐使用Redux的方法。该节目包括一个实时编码的示例应用，展示了如何使用Redux Toolkit和React Redux挂钩以及Typescript，还有新的RTK Query的数据获取API。

请参阅["学习现代Redux "节目说明页面](https://www.learnwithjason.dev/let-s-learn-modern-redux)，以获取文字记录和示例应用程序源的链接。

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## 帮助和讨论

**[Reactiflux Discord社区](http://www.reactiflux.com)**中的**[#redux频道](https://discord.gg/0ZcbPKXt5bZ6au5t)**是我们学习和使用Redux相关问题的官方资源。Reactiflux是一个闲逛、提问和学习的好地方--来加入我们吧!

你也可以在[Stack Overflow](https://stackoverflow.com)中给自己的问题带上**[#redux tag](https://stackoverflow.com/questions/tagged/redux)**标签来提问。
