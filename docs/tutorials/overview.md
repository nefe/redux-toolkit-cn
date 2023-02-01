---
id: tutorials-overview
slug: overview
title: Tutorials Overview
sidebar_label: Tutorials Overview
hide_title: true
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

&nbsp;

# 概述

**[Redux核心文档](https://cn.redux.js.org)是您学习Redux的主要教程**，包括如何协同使用Redux Toolkit和React-Redux。

:::tip

为了避免Redux核心文档和Redux Toolkit文档之间的重复导致的赘述，我们专注于使Redux核心文档的教程变得全面，并指向它们，而不是在Redux Tookit文档中扩展篇幅。

:::

请看这些链接的教程，学习如何有效地使用Redux Toolkit。

## Redux Toolkit 快速入门

[**Redux Toolkit快速入门教程**](./quick-start.mdx) 简要介绍了如何在React应用加入和使用Redux Toolkit。

**如果您只想以最快的方式运行基本示例，请阅读快速入门教程。**

喔!对了，我们还有个[**TypeScript快速入门教程**](./typescript.md)，简要介绍怎么通过Typescript来开发Redux Toolkit和React-Redux。

## Redux 基础教程: 具有实际功能的小型应用案例

[**Redux基础教程**](https://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts)教给您"如何以正确的方式使用Redux"，它使用Redux Toolkit作为编写Redux逻辑的标准方法。

这个教程展示了如何构建一个现实生活中有一些实际功能的示例应用程序，同时教授Redux的概念。

**如果你以前从未使用过Redux，只是想知道 "我如何使用它来构建有用的东西？"，请从Redux深入浅出开始。**

## Redux深入浅出: 从头开始

[**Redux深入浅出**](https://cn.redux.js.org/tutorials/fundamentals/part-1-overview)通过展示如何手工编写Redux代码以及为什么存在标准使用模式，来教授"Redux从上而下是怎么工作的"。接着它会告诉你怎么用Redux Toolkit来简化这些Redux使用模式。

由于Redux Toolkit是一个围绕Redux核心的抽象层，了解RTK的API到底为你做了什么，是很有帮助的。**如果您想了解Redux是如何真正工作的，以及为什么RTK是最推荐的方法，请阅读Redux基础教程。**

## Redux网络课程--Learn Modern Redux

Redux维护人员马克·埃里克森（Mark Erikson）出现在“Learn with Jason ”节目中，解释了我们今天推荐使用Redux的方法。该节目包括一个实时编码的示例应用，展示了如何使用Redux Toolkit和React Redux挂钩以及Typescript，还有新的RTK Query的数据获取API。

请参阅["学习现代Redux"节目说明页面](https://www.learnwithjason.dev/let-s-learn-modern-redux)，以获取文字记录和示例应用程序源代码的链接。
<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## 使用Redux Toolkit

RTK[**使用指南**](../usage/usage-guide.md)解释了RTK的每个API的标准使用模式。[API](../api/configureStore.mdx)页面描述了每个API函数，并有额外的用法示例。

[Redux 基础教程](https://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts)还展示了在构建应用程序时如何使用每个API。

## 从Vanilla Redux迁移到Redux Toolkit

如果你已经了解Redux，只是想知道如何将现有的应用程序迁移到使用Redux Toolkit，那么在Redux基础教程中的[**"带有Redux Toolkit的现代Redux"页面**](https://cn.redux.js.org/tutorials/fundamentals/part-8-modern-redux)展示了RTK的API如何简化Redux使用模式以及如何处理这种迁移。

## 将Redux Toolkit与TypeScript一起使用

[**和TypeScript一起用**](../usage/usage-with-typescript.md)上的RTK文档页面展示了使用TypeScript和React设置Redux Toolkit的基本例子，每个RTK API还有特定的TS案例。

此外，[Create React App的Redux+TS模板](https://github.com/reduxjs/cra-template-redux-typescript)随RTK一起提供，RTK已配置为使用这些TS模式，并作为一个很好的示例，说明这应该如何工作。

## 过时的Redux Toolkit教程

我们曾在Redux Toolkit文档中直有过"基础/中级/高级"教程。它们很有帮助，但我们已经将其删除，改用Redux核心文档中的"基础教程"和"深入浅出"教程。

如果你想浏览旧教程，你可以去我们仓库的历史记录中看到这部分内容:

[Redux Toolkit仓库地址: 过时的"基础/中级/高级"教程文件](https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials)
