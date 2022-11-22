---
id: immer-reducers
title: 使用 Immer 编写 Reducers
sidebar_label: 使用 Immer 编写 Reducers
hide_title: true
---

&nbsp;

# 使用 Immer 编写 Reducers

Redux Toolkit 的 [`createReducer`](../api/createReducer.mdx) 和 [`createSlice`](../api/createSlice.mdx) 在内部自动使用 [Immer](https://immerjs.github.io/immer/) ，让你的使用"变异"语法编写更简单的不可变更新逻辑。这有助于简化大多数 reducer 的实现。

因为 Immer 本身就是一个抽象层，所以了解 Redux Toolkit 为什么使用 Immer 以及如何正确使用它很重要

## 不变性 and Redux

### 不变性基础知识

“可变”意味着“可变”。如果某物是“不可变的”，它就永远无法改变。

默认情况下，JavaScript 对象和数组都是可变的。如果我创建一个对象，我可以更改其字段的内容。如果我创建一个数组，我也可以更改内容：

```js
const obj = { a: 1, b: 2 }
// 外面还是一样的东西，只是内容变了
obj.b = 3

const arr = ['a', 'b']
// 同样的，我们可以改变这个数组的内容
arr.push('c')
arr[1] = 'd'
```

这称为 _改变_ 对象或数组。还是内存中的同一个对象或者数组引用，但是现在对象里面的内容变了。

****
**为了不可变地更新值，您的代码必须 _复制_ 现有对象/数组，然后修改副本。**.

我们可以使用 JavaScript 的数组/对象解构操作返回数组新副本而不是改变原始数组的数组方法来手动完成此操作：

```js
const obj = {
  a: {
    // 为了安全地更新 obj.a.c，我们必须复制每一块
    c: 3,
  },
  b: 2,
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
}

const arr = ['a', 'b']
// 创建 arr 的新副本，并在末尾附加“c”
const arr2 = arr.concat('c')

// 或者，我们可以复制原始数组：
const arr3 = arr.slice()
// 并改变副本：
arr3.push('c')
```

:::想了解更多信息

有关不变性如何在 JavaScript 中工作的更多信息

- [JavaScript 中引用的可视化指南](https://daveceddia.com/javascript-references/)
- [React 和 Redux 的不变性：完整指南](https://daveceddia.com/react-redux-immutability-guide/)

:::

### reducers和不可变更新

Redux 的主要规则之一是**我们的 reducer _永远_ 不允许改变原始/当前状态值！**


:::warning

```js
// ❌ 非法的 - 默认情况下，这会改变状态！
state.value = 123
```

:::

你不能在 Redux 中改变状态有几个原因：

1. 它会导致错误，例如 UI 无法正确更新以显示最新值
2. 这使得理解状态更新的原因和方式变得更加困难
3. 这使得编写测试变得更加困难
4. 它打破了正确使用“时间旅行调试”的能力
5. 它违背了 Redux 的预期精神和使用模式

因此，如果我们不能更改原始状态，我们如何返回更新后的状态?

:::tip

**Reducers 只能 _复制_ 原始值，然后它们可以改变副本。**


```js
// ✅ 这是安全的，因为我们做了一个副本
return {
  ...state,
  value: 123,
}
```

:::

我们已经看到我们可以通过使用 JavaScript 的数组/对象解构和其他返回原始值副本的函数来手动编写不可变更新。

当数据嵌套时，这会变得更难。**不可变更新的一个关键规则是您必须为需要更新的 _每一层_ 嵌套制作一个副本。**

一个典型的例子可能是这样的：

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue,
        },
      },
    },
  }
}
```

但是，如果您认为“以这种方式手动编写不可变更新看起来很难记住并正确执行”……是的，您是对的！ :)

手动编写不可变的更新逻辑_很_困难，**不小心改变 reducer 中的状态是 Redux 用户最常犯的错误。**

## 使用 Immer 进行不可变更新

[Immer](https://immerjs.github.io/immer/) 是一个库，它简化了编写不可变更新逻辑的过程。

Immer 提供了一个名为 `produce` 的函数，它接受两个参数：您的原始`state`和一个回调函数。 回调函数被赋予该状态的“草稿”版本，并且在回调内部，编写改变草稿值的代码是安全的。 Immer 跟踪所有改变草稿值的尝试，然后使用不可变的等价物重播这些突变，以创建安全的、不可变的更新结果：

```js
import produce from 'immer'

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
]

const nextState = produce(baseState, (draftState) => {
  // “改变”草案数组
  draftState.push({ todo: 'Tweet about it' })
  // “改变”嵌套状态
  draftState[1].done = true
})

console.log(baseState === nextState)
// false - 数组被复制
console.log(baseState[0] === nextState[0])
// true - 第一项没有改变，所以相同的参考
console.log(baseState[1] === nextState[1])
// false - 第二项已复制并更新
```

### Redux Toolkit and Immer

Redux Toolkit 的 [`createReducer` API](../api/createReducer.mdx) 在内部自动使用 Immer。因此，在传递给 `createReducer` 的任何 case reducer 函数中“改变”状态已经是安全的：

```js
const todosReducer = createReducer([], (builder) => {
  builder.addCase('todos/todoAdded', (state, action) => {
    // 通过调用 push() 来“改变”数组
    state.push(action.payload)
  })
})
```

In turn, `createSlice` uses `createReducer` inside, so it's also safe to "mutate" state there as well:
反过来，`createSlice` 在内部使用 `createReducer`，因此在那里“改变”状态也是安全的：

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload)
    },
  },
})
```

如果 case reducer 函数是在 `createSlice/createReducer` 调用之外定义的，这甚至适用。例如，您可以有一个可重用的 case reducer 函数，它期望“改变”它的状态，并根据需要包含它


```js
const addItemToArray = (state, action) => {
  state.push(action.payload)
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded: addItemToArray,
  },
})
```

这是有效的，因为“变异”逻辑在执行时在内部包装在 Immer 的 produce 方法中。

:::caution


请记住，**“变异”逻辑 _仅有_ 在包裹在 Immer 内部时才能正常工作!**否则，该代码将真正改变数据。

:::

## Immer 使用模式

在 Redux Toolkit 中使用 Immer 时，有几个有用的模式需要了解和注意。

### 变异和返回状态

Immer 的工作方式是跟踪改变现有起草状态值的尝试，方法是分配给嵌套字段或调用改变值的函数。 这意味着**`state`必须是 JS 对象或数组，以便 Immer 看到尝试的更改。** （你仍然可以让切片的状态是原始值，如字符串或布尔值，但由于原始值永远不会发生变化，你所能做的就是返回一个新值。）

在任何给定的 case reducer 中，**Immer 希望你要么 _改变_ 现有state，要么自己构造一个新的`state`并返回它，但_不能_两个在同一个函数中**。例如，这两个都是 Immer 的有效reducer：

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      // “改变”现有状态，不需要返回值
      state.push(action.payload)
    },
    todoDeleted(state, action.payload) {
      //不可变地构造一个新的结果数组并返回它
      return state.filter(todo => todo.id !== action.payload)
    }
  }
})
```

然而，可以使用不可变更新来完成部分工作，然后通过“改变”保存结果。这方面的一个例子可能是过滤嵌套数组：

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos: [], status: 'idle'}
  reducers: {
    todoDeleted(state, action.payload) {
      // 构造一个新数组
      const newTodos = state.todos.filter(todo => todo.id !== action.payload)
      // 新数组赋值现有state.todos
      state.todos = newTodos
    }
  }
})
```

请注意，在带有**隐式返回值的箭头函数中改变状态会破坏此规则并导致错误！** 这是因为语句和函数调用可能会返回一个值，而 Immer 会同时看到尝试的突变和新的返回值，但不知道使用哪个作为结果。 一些潜在的解决方案是使用 `void` 关键字来跳过返回值，或者使用花括号为箭头函数提供一个主体并且没有返回值：

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // ❌ ERROR: 改变状态，但也返回新的数组大小！
    brokenReducer: (state, action) => state.push(action.payload),
    // ✅ SAFE: `void` 关键字阻止返回值
    fixedReducer1: (state, action) => void state.push(action.payload),
    // ✅ SAFE: 花括号使它成为一个函数体并且没有返回
    fixedReducer2: (state, action) => {
      state.push(action.payload)
    },
  },
})
```

虽然编写嵌套的不可变更新逻辑很困难，但有时执行对象解构操作以一次更新多个字段比分配单个字段更简单

```js
function objectCaseReducer1(state, action) {
  const { a, b, c, d } = action.payload
  return {
    ...state,
    a,
    b,
    c,
    d,
  }
}

function objectCaseReducer2(state, action) {
  const { a, b, c, d } = action.payload
  // This works, but we keep having to repeat `state.x =`
  state.a = a
  state.b = b
  state.c = c
  state.d = d
}
```
作为替代方案，您可以使用 `Object.assign` 一次改变多个字段，因为 `Object.assign` 总是改变它给定的第一个对象

```js
function objectCaseReducer3(state, action) {
  const { a, b, c, d } = action.payload
  Object.assign(state, { a, b, c, d })
}
```

### 重置和替换State

有时您可能想要替换整个现有`state`，因为您已经加载了一些新数据，或者您想要将`state`重置回其初始值。

:::warning

**一个常见的错误是尝试直接分配 `state = someValue` 。 这行不通！** 这只会将本地`state`变量指向不同的引用。 这既不是改变内存中现有的`state`对象/数组，也不是返回一个全新的值，所以 Immer 没有做任何实际的改变。

:::

相反，要替换现有`state`，您应该直接返回新值：

```js
const initialState = []
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    brokenTodosLoadedReducer(state, action) {
      // ❌ ERROR:实际上并没有改变或返回任何新的东西！
      state = action.payload
    },
    fixedTodosLoadedReducer(state, action) {
      // ✅ CORRECT: 返回一个新值替换旧值
      return action.payload
    },
    correctResetTodosReducer(state, action) {
      // ✅ CORRECT: 返回一个新值替换旧值
      return initialState
    },
  },
})
```

###  State的调试和检查草稿状态


人们通常希望从 reducer 中记录正在进行的状态，以查看它在更新时的样子，例如 `console.log(state)`。不幸的是，浏览器以一种难以阅读或理解的格式显示记录的 Proxy 实例：

![Logged proxy draft](/img/usage/immer-reducers/logged-proxy.png)

为了解决这个问题，Immer 包含一个[`current`](https://immerjs.github.io/immer/current)函数，用于提取包装数据的副本，RTK 重新导出`current`。如果你需要记录或检查正在进行的工作`state`，你可以在你的reducer中使用它


```js
import { current } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoToggled(state, action) {
      // ❌ ERROR: logs the Proxy-wrapped data
      console.log(state)
      // ✅ CORRECT: logs a plain JS copy of the current data
      console.log(current(state))
    },
  },
})
```

正确的输出应该是这样的：

![Logged current value](/img/usage/immer-reducers/logged-current-state.png)

Immer 还提供了 [`original` 和 `isDraft` 函数](https://immerjs.github.io/immer/original)，它们可以在不应用任何更新的情况下检索原始数据，并检查给定值是否是 Proxy-wrapped 草稿。从 RTK 1.5.1 开始，这两者也从 RTK 重新导出。

###  更新嵌套数据

Immer 大大简化了嵌套数据的更新。嵌套对象和数组也被包裹在 Proxies 中并起草，并且将嵌套值拉出到其自己的变量中然后对其进行变异是安全的。

然后，这仍然只适用于对象和数组。如果我们将一个原始值提取到它自己的变量中并尝试更新它，Immer 没有任何东西可以包装并且无法跟踪任何更新：

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    brokenTodoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        // ❌ ERROR: Immer 无法跟踪原始值的更新！
        let { completed } = todo
        completed = !completed
      }
    },
    fixedTodoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        // ✅ CORRECT: 这个对象仍然包裹在代理中，所以我们可以“改变”它
        todo.completed = !todo.completed
      }
    },
  },
})
```

这里有一个问题。 [Immer 不会包装新插入`state`的对象](https://immerjs.github.io/immer/pitfalls#data-not-originating-from-the-state-will-never-be-drafted)。大多数时候这无关紧要，但有时您可能想要插入一个值然后对其进行进一步更新。

Related to this, RTK's [`createEntityAdapter` update functions](../api/createEntityAdapter.mdx#crud-functions) can either be used as standalone reducers, or "mutating" update functions. These functions determine whether to "mutate" or return a new value by checking to see if the state they're given is wrapped in a draft or not. If you are calling these functions yourself inside of a case reducer, be sure you know whether you're passing them a draft value or a plain value.

与此相关，RTK 的 [`createEntityAdapter` 更新函数](../api/createEntityAdapter.mdx#crud-functions)既可以用作独立的reducer，也可以用作“改变”更新函数。 这些函数通过检查给定的状态是否包含在草稿中来确定是“改变”还是返回新值。 如果您在 case reducer 中自己调用这些函数，请确保您知道传递给它们的是草稿值还是普通值

最后，值得注意的是，**Immer 不会自动为您创建嵌套对象或数组——您必须自己创建它们**。 例如，假设我们有一个包含嵌套数组的查找表，我们想要将一个项目插入到其中一个数组中。 如果我们在不检查该数组是否存在的情况下无条件地尝试插入，则当数组不存在时逻辑将崩溃。 相反，您需要先确保数组存在：

```js
const itemsSlice = createSlice({
  name: 'items',
  initialState: { a: [], b: [] },
  reducers: {
    brokenNestedItemAdded(state, action) {
      const { id, item } = action.payload
      // ❌ ERROR:  如果 `id` 不存在数组，将会崩溃
      state[id].push(item)
    },
    fixedNestedItemAdded(state, action) {
      const { id, item } = action.payload
      // ✅ CORRECT: 确保嵌套数组总是首先存在
      if (!state[id]) {
        state[id] = []
      }

      state[id].push(item)
    },
  },
})
```

### ESlint 检测State的变化

许多 ESLint 配置包括 https://eslint.org/docs/rules/no-param-reassign 规则，该规则也可能警告嵌套字段的改变。 这可能会导致规则警告 Immer 驱动的reducer中的state改变，这没有帮助。

要解决此问题，您可以告诉 ESLint 规则忽略对名为 `state` 的参数的更改：

```js
{
  'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }]
}
```

## 为什么内置 Immer


随着时间的推移，我们收到了许多请求，要求将 Immer 设为 RTK 的 `createSlice` 和 `createReducer API` 的可选部分，而不是严格要求的部分。


我们的答案始终如一：**RTK _需要_ Immer，这一点不会改变。** 

值得一提的是，为什么我们认为 Immer 是 RTK 的关键部分，以及为什么我们不会将其设为可选

### Immer的好处

Immer 有两个主要优点。 首先，**Immer 极大地简化了不可变的更新逻辑。** [适当的不可变更新非常冗长](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns#updating-nested-objects)。 那些冗长的操作很难从整体上阅读，也混淆了更新语句的实际意图。 Immer 消除了所有嵌套的展开和数组切片。 不仅代码更短、更易于阅读，而且实际更新应该发生的内容也更加清晰。

其次，[正确编写不可变更新很难](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)，而且很容易出错（比如忘记复制一组对象传播中的嵌套级别，复制顶级数组而不是数组中要更新的项目， 或者忘记` array.sort() `改变数组）。 [这就是为什么意外改变一直是 Redux 错误的最常见原因的部分原因](https://redux.js.org/faq/react-redux#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)。**Immer 有效地 _消除_ 了意外改变**。 不仅没有更多可能被误写的传播操作，而且 Immer 还会自动冻结状态。 如果您不小心发生改变，即使在 reducer 之外，也会引发错误。 **消除 Redux 错误的第一大原因是一个 _巨大_ 的改进。**

此外，RTK 查询还使用 Immer 的补丁功能来启用[优化更新和手动缓存更新](../rtk-query/usage/manual-cache-updates.mdx)


### 权衡和担忧

与任何工具一样，使用 Immer 确实需要权衡取舍，并且用户对使用它表示了很多担忧。

Immer 确实增加了整个应用程序包的大小。 大约 8K min，3.3K min+gz 参考：[Immer 文档](https://immerjs.github.io/immer/installation)，[Bundle.js.org 分析](https://bundle.js.org/?q=immer&treeshake=[{default+as+produce+}]) 。 但是，该库包大小开始通过缩减应用程序中的 reducer 逻辑量来收回成本。 此外，更可读的代码和消除突变错误的好处是值得的。

Immer 还增加了一些运行时性能开销。 但是，[根据 Immer“性能”文档页面，开销在实践中没有意义](https://immerjs.github.io/immer/performance/)。 此外，无论如何，[reducer 几乎从来都不是 Redux 应用程序中的性能瓶颈](https://github.com/reduxjs/redux-toolkit/issues/242#issuecomment-583296008)。 相反，更新 UI 的成本要重要得多。

因此，虽然使用 Immer 并非“免费”，但捆绑和性能成本足够小，值得

使用 Immer 最现实的痛点是浏览器调试器以一种令人困惑的方式显示代理，这使得在调试时很难检查状态变量。 这当然是一个烦恼。 但是，这实际上并不影响运行时行为，我们已经在[本页中记录了使用 `current` 创建数据的可查看纯 JS 版本](#debugging-and-inspecting-drafted-state)。 （鉴于越来越广泛地使用代理作为库的一部分，如 Mobx 和 Vue 3，这也不是 Immer 独有的。）

另一个问题是教育和理解。 Redux 一直要求 reducer 的不变性，因此看到“变化”的代码可能会令人困惑。 新的 Redux 用户肯定有可能在示例代码中看到这些“改变”，假设 Redux 的使用是正常的，然后尝试在 `createSlice` 之外做同样的事情。 这确实会导致真正的突变和错误，因为它超出了 Immer 包装更新的能力。

我们通过在整个文档中反复[强调不变性](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#immutability)的重要性来解决这个问题，包括多个突出显示的部分，[强调“突变”只有在 Immer 内部的“魔法”下才能正常工作](https://redux.js.org/tutorials/essentials/part-2-app-structure#reducers-and-immutable-updates)，并添加了您现在正在阅读的这个特定文档页面。

### 架构和意图

Immer 不是可选的还有两个原因。

一是RTK的架构。 `createSlice`和`createReducer`是直接导入Immer实现的。 没有简单的方法来创建其中任何一个具有假设的 `immer: false` 选项的版本。 您不能进行可选导入，我们需要在应用程序初始加载期间立即同步使用 Immer。


此外，RTK 目前在导入时立即调用 [Immer 的 enableES5 插件](https://immerjs.github.io/immer/installation#pick-your-immer-version)，以确保 Immer 在没有 ES6 Proxy 支持的环境（例如 IE11 和较旧的 React Native 版本）中正常工作。 这是必要的，因为 Immer 在 6.0 版左右将 ES5 行为拆分成一个插件，但是放弃 ES5 支持对于 RTK 来说是一个重大的破坏性变化，并且会破坏我们的用户。 因为RTK本身是从入口调用`enableES5`，所以总是拉入Immer。

最后：**Immer 默认内置于 RTK 中，因为我们相信它是我们用户的最佳选择！** 我们希望我们的用户使用 Immer，并将其视为 RTK 的关键不可协商的组成部分。 更简单的 reducer 代码和防止意外突变等巨大好处远远超过相对较小的问题。
## 更多信息

有关 Immer 的 API、边缘情况和行为的更多详细信息，请参阅 [Immer 文档](https://immerjs.github.io/immer/)。

有关为什么需要 Immer 的历史讨论，请参阅以下问题：

- [RTK #5: Why Immer inside a starter kit?](https://github.com/reduxjs/redux-toolkit/issues/5)
- [RTK #183: Consider adding an option to remove Immer](https://github.com/reduxjs/redux-toolkit/issues/183)
- [RTK #242: make `immer` optional for `createReducer`](https://github.com/reduxjs/redux-toolkit/issues/242)
