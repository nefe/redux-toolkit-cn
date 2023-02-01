import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    content: (
      <p>
        包括简化常见使用情况的应用程序，例如
        <strong>store设置，创建reducers，不可变更新逻辑</strong>，
        等等
      </p>
    ),
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 909.83 1100">
        <g>
          <path d="M886.9 557.45a78.28 78.28 0 00-63.4-22.52 80.17 80.17 0 00-88-97.47 82.63 82.63 0 001.84-17.46 82 82 0 00-73.86-81.55l139-139A81.94 81.94 0 10686.63 83.5L412.05 358.08c-18.64 18.64-41.11 31.55-65 37.35-17.91 4.35-36 4.4-50.55.28-14.38-22.37-27.88-40.68-30.8-44.6-29.61-40.41-56.89-81.54-88.7-130.88-32.71-50.66-74.06-72.44-113.46-59.73C53 163.89 43 170.07 32.92 179.38 15.06 195.91-1.28 214.46.08 238.15c1 18.15 11.48 34.43 27.29 59.07 9 13.95 20.09 31.32 31.94 53 7.11 13.05 12.46 26.58 18.13 40.91 2.24 5.68 4.57 11.55 7 17.43 7.36 17.61 16.71 40.94 23.81 65.21 11.72 40 5.36 78.49-1.36 119.2-4.85 29.33-9.86 59.66-8 91.42 2.37 40.18 13.66 80.92 33.55 121.08 18.75 37.87 44.15 73 75.49 104.3 57.84 57.84 129 95.64 200.5 106.42a269.83 269.83 0 0040.28 3.1 225.74 225.74 0 0059.29-7.66c32.34-8.77 60.2-24.68 82.8-47.28L820.22 735l66.67-66.67a78.5 78.5 0 00.01-110.88zm-106.08-75.92a50.32 50.32 0 010 71.1l-4.79 4.8-66.67 66.67-4.81 4.81a50.28 50.28 0 11-71.11-71.1l38.16-38.16 38.15-38.15a50.33 50.33 0 0171.07.03zM655.39 368a51.94 51.94 0 0136.73 88.67l-41.77 41.77-38.15 38.18-3.6 3.61a51.94 51.94 0 01-73.46-73.46l35.35-35.36 48.18-48.18A51.61 51.61 0 01655.39 368zm-85.76 575.19c-37.56 37.55-93.2 53-156.68 43.39-65.17-9.84-130.43-44.63-183.77-98q-8-8-15.37-16.27a170.76 170.76 0 0046.47 6.6 151.64 151.64 0 0025.42-2.11c38.61-6.55 69.21-28.22 88.49-62.66A12.48 12.48 0 10352.4 802c-15.68 28-39.53 44.92-70.88 50.24-36.89 6.26-75.64-5.26-99.85-21.42a350.45 350.45 0 01-22.31-38.59c-18.09-36.54-28.35-73.4-30.49-109.54-1.68-28.41 2.85-55.78 7.63-84.76 7-42.24 14.2-85.91.57-132.51-7.52-25.69-17.27-50-24.93-68.36-2.34-5.6-4.61-11.34-6.8-16.89-5.75-14.54-11.7-29.57-19.69-44.24-12.36-22.66-23.82-40.53-33-54.89-12.77-19.91-22-34.3-22.59-44.58-.36-6.35 2.12-15.47 23.26-35 6.79-6.29 13.15-10.33 19.43-12.35 36.16-11.67 67.32 29.3 79 47.45 32.15 49.81 59.73 91.39 89.81 132.41l.07.09c15.41 20.7 56.86 80.6 63.42 108.77a15 15 0 1029.22-6.8c-2.78-11.94-9.63-26.93-18-42.24a144.06 144.06 0 0037.87-4.15c29.22-7.09 56.58-22.75 79.12-45.29l274.58-274.63a51.94 51.94 0 0173.46 73.46L597.45 362l-83.54 83.53a81.91 81.91 0 0075.44 138 80.23 80.23 0 0097.47 88.1A78.28 78.28 0 00709.34 735a78 78 0 0046.11 22.36zm296.06-296.06l-31.32 31.31L799 713.81a48.47 48.47 0 01-68.46 0 48.47 48.47 0 010-68.46l66.71-66.71a48.42 48.42 0 0168.44 68.5z"></path>
          <path d="M273 168.1a15 15 0 1021.27-21.1l-75-75.78a15 15 0 00-21.32 21.11zM330.86 122.33A15 15 0 00345.48 134a15.31 15.31 0 003.33-.37 15 15 0 0011.31-17.95l-23.58-104a15 15 0 10-29.25 6.63zM413.46 133.22a15 15 0 0019.09-9.22l35-100.73a15 15 0 00-28.34-9.86l-35 100.73a15 15 0 009.25 19.08zM468.54 167.07a15 15 0 0021.09 2.26l83-66.94A15 15 0 10553.82 79l-83.02 67a15 15 0 00-2.26 21.07z"></path>
        </g>
      </svg>
    ),
    imageAlign: 'top',
    title: '简单',
  },
  {
    content: (
      <p>
        提供<strong>良好的store默认设置，能够开箱即用</strong>
        ，并且还内置了<strong>最常用的Redux插件</strong>。
      </p>
    ),
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 91">
        <path d="M69.203 90.954c1.16 0 2.104-.943 2.104-2.105V66.335c5.709-6.025 8.842-13.879 8.842-22.215 0-2.088-.211-4.174-.604-6.207l-.004-.014c-.01-.061-.014-.123-.025-.182a2.06 2.06 0 00-.221-.594c-.002-.004-.002-.01-.002-.012-1.111-2.002-2.689-3.166-2.865-3.293a2.1 2.1 0 00-2.922.475c-.68.938-.473 2.25.459 2.938.006.004.387.309.824.797-2.381 2.465-9.92 8.479-26.879 8.479-15.66 0-24.072-6.082-26.939-8.662.342-.32.676-.57.844-.68a2.105 2.105 0 00-2.275-3.541c-.219.143-2.182 1.443-3.215 3.404l-.012.02-.004.008c-.006.01-.004.02-.008.029a2.095 2.095 0 00-.188.52 32.727 32.727 0 00-.656 6.516c0 .281.006.561.014.834l-9.473 16.41c-.375.652-.375 1.455 0 2.105s1.072 1.051 1.822 1.051h4.916v9.836c0 5.658 4.602 10.262 10.262 10.262h10.799v4.23a2.106 2.106 0 004.209 0v-4.23h5.137a2.105 2.105 0 000-4.209H22.998a6.061 6.061 0 01-6.055-6.053v-11.94a2.103 2.103 0 00-2.104-2.104h-3.373l7.949-13.771a2.09 2.09 0 00.279-1.104s-.01-2.525.027-3.125c4.336 3.369 13.301 8.402 28.188 8.402 15.385 0 23.857-4.617 27.994-7.988.025.463.035.928.035 1.393 0 7.451-2.885 14.457-8.117 19.752l-4.777 3.215a2.1 2.1 0 00-.572 2.918 2.1 2.1 0 002.92.575l1.707-1.148V88.85a2.104 2.104 0 002.104 2.104z"></path>
        <path d="M21.506 28.792c0 4.555 3.375 8.344 8.006 9.293 1.773 3.059 5.15 4.988 8.939 4.988 4.018 0 7.406-2.156 9.459-5.012 2.051 2.855 5.441 5.012 9.455 5.012 3.791 0 7.168-1.93 8.939-4.988 4.633-.947 8.008-4.738 8.01-9.293 0-4.66-3.588-8.545-8.314-9.381-.957-4.342-5.072-7.619-9.992-7.619-3.301 0-6.232 1.482-8.098 3.768-1.867-2.285-4.799-3.768-8.1-3.768-4.92.006-9.035 3.279-9.994 7.619-4.722.838-8.31 4.721-8.31 9.381zm34.502-12.791c3.305 0 5.996 2.398 5.996 5.344 0 1.525-.74 2.982-2.029 4.002a2.104 2.104 0 002.603 3.303c1.654-1.303 2.803-3.039 3.32-4.957 2.438.682 4.207 2.709 4.207 5.1-.002 2.752-2.314 5.037-5.381 5.318a8.98 8.98 0 01-.617.027 2.102 2.102 0 00-2.104 2.104c0 .195.025.387.076.568-1.119 1.268-2.854 2.055-4.715 2.055-3.004 0-5.568-2.045-6.711-4.363.705-.496 1.518-1.109 2.195-1.719.943.055 1.592.244 2.404.904a2.097 2.097 0 002.959-.306 2.101 2.101 0 00-.305-2.959 8.077 8.077 0 00-2.404-1.375 48.546 48.546 0 001.434-2.967 2.104 2.104 0 10-3.857-1.682c-.615 1.414-1.881 3.986-2.656 4.883a5.531 5.531 0 01-.41.398v-8.334c.001-2.946 2.688-5.344 5.995-5.344zm-26.09 7.691c.518 1.92 1.668 3.658 3.324 4.959a2.1 2.1 0 002.953-.354 2.1 2.1 0 00-.354-2.953c-1.287-1.016-2.027-2.475-2.027-4 0-2.943 2.691-5.342 5.998-5.344 3.305 0 5.992 2.398 5.992 5.344v8.336a5.277 5.277 0 01-.408-.398c-.773-.895-2.043-3.471-2.66-4.885a2.106 2.106 0 00-3.859 1.685c.107.244.693 1.559 1.438 2.961a8.023 8.023 0 00-2.404 1.379 2.104 2.104 0 102.658 3.261c.807-.658 1.455-.848 2.402-.902a23.035 23.035 0 002.193 1.719c-1.143 2.32-3.707 4.363-6.713 4.363-1.859 0-3.592-.785-4.713-2.055a2.105 2.105 0 00-2.027-2.672c-.209 0-.414-.014-.617-.027-3.066-.281-5.379-2.566-5.379-5.318 0-2.39 1.769-4.417 4.203-5.099zM49.449 6.368v-4.02a2.103 2.103 0 10-4.209.001v4.02a2.106 2.106 0 004.209-.001zM61.707 11.397c.805 0 1.574-.465 1.924-1.25l1.633-3.672a2.104 2.104 0 10-3.845-1.709l-1.631 3.67a2.103 2.103 0 001.919 2.961zM75.059 19.366l2.984-2.697a2.102 2.102 0 00.152-2.971 2.108 2.108 0 00-2.973-.152l-2.984 2.697a2.106 2.106 0 001.411 3.666 2.1 2.1 0 001.41-.543zM81.756 32.429l3.822-1.25a2.105 2.105 0 001.348-2.652 2.109 2.109 0 00-2.656-1.348l-3.822 1.246a2.104 2.104 0 00.654 4.105c.216 0 .437-.031.654-.101zM14.514 29.294l-3.834-1.207a2.105 2.105 0 10-1.266 4.014l3.832 1.209a2.103 2.103 0 002.641-1.377 2.106 2.106 0 00-1.373-2.639zM19.385 14.249c-.873-.77-2.203-.686-2.973.184s-.688 2.197.184 2.969l3.012 2.664c.4.354.896.527 1.395.527a2.1 2.1 0 001.576-.709 2.108 2.108 0 00-.182-2.973l-3.012-2.662zM32.717 11.776a2.102 2.102 0 001.912-2.98L32.957 5.14a2.105 2.105 0 00-3.828 1.75l1.674 3.658a2.1 2.1 0 001.914 1.228z"></path>
      </svg>
    ),
    imageAlign: 'top',
    title: '智能',
  },
  {
    content: (
      <p>
        从Immer和Autodux等库中获得灵感，让您能够编写
        <strong>“可变”的不可变更新逻辑</strong>，甚至
        <strong>自动创建state的所有slice</strong>。
      </p>
    ),
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          style={{
            WebkitTextIndent: '0',
            textIndent: '0',
            WebkitTextTransform: 'none',
            textTransform: 'none',
            blockProgression: 'tb',
          }}
          d="M53.533 6.597c2.042 2.05 3.013 5.112 3.55 8.343.536 3.23.562 6.64 0 9.467a2.028 2.028 0 01-.966 1.343l-1.9 1.125c-.091 2.268-.183 4.979-1.307 6.593-.658.914-1.707 1.412-2.647 1.531-.94.119-1.83-.042-2.677-.344a7.946 7.946 0 01-3.145-2.062c-2.365 1.102-4.484 1.457-7.255 1.344v2.406c3.414 4.348 6.774 9.622 8.936 16.216 5.034-4.604 10.001-7.54 16.004-7.562 8.495.01 15.049 3.541 19.367 8.28C85.816 58.023 88 63.902 88 68.994c0 5.62-.511 10.328-3.051 14.435-2.54 4.107-6.941 7.324-14.105 10.405-.311.136-.658.19-.996.156-14.14-2.055-28.393-2.891-42.625-4-4.605-.07-8.17-1.817-8.936-5.717l-.934-6.655c-6.805-10.63-5.876-20.344-3.954-31.246 2.186-10.62 3.737-19.463 6.289-28.87.515-2.999 2.451-4.297 5.137-5.5 8.604-3.364 18.538-5.92 27.307-5.998.542-.04 1.06.254 1.4.593zm-2.398 3.5c-8.865.513-16.85 2.108-24.69 5.561-1.925.674-2.47 1.316-2.896 2.875-2.353 9.427-4.696 20.033-6.227 28.558-1.378 6.876-1.403 14.71.124 20.997.143-2.863.945-5.706 3.799-8.093-.527 10.113-.446 13.848.903 23.372.603 1.91 2.434 2.643 5.23 2.624 14.19.634 28.232 2.3 42.314 3.968 6.494-2.847 9.994-5.551 11.894-8.623 1.04-1.681 1.639-3.577 1.993-5.78-3.414-.412-6.983-.95-8.19-2.594-9.657 5.227-22.04 6-26.247.03 15.444 4.844 31.809-2.505 32.818-12.06a21.662 21.662 0 00-3.394-4.968c-3.648-4.003-9.04-6.967-16.471-6.967-6.954-.051-10.942 4.564-14.696 7.748 1.422 10.833-1.594 16.348-8.22 18.248 9.027-12.705 2.617-26.423-5.542-36.745-.28-.351-.436-.8-.436-1.25v-3.78c-.975-.577-1.73-1.204-2.273-2.156-.478-.837-.632-1.684-.685-2.594-2.58-.185-4.962-1.018-5.013-3.468 8.967 4 7.97-4 8.967-4 .997 0 .437 4.081.997 5.031.243.688.752 1.297 1.338 1.969-1.226-.304-2.102-.814-2.273.281.022 1.04.479 1.674 1.433 1.718 1.636-.01 3.002-.061 4.483-.28-.01-5.851-.145-8.01-1.992-11.718 2.759 0 3.807 4.302 3.954 11.249 1.025-.496 2.025-1.14 3.02-1.719-.006-5.71-.082-7.944-.996-12.53 2.498 4.18 2.89 7.07 2.958 11.374l2.989-1.75c-.2-5.369-1.087-8.232-1.962-12.623 3.056 3.833 3.76 7.666 3.892 11.499l1.183-.688c.307-2.103.349-4.744-.062-7.217-.396-2.382-1.201-4.343-2.024-5.5zM50.108 29.28l-2.024 1.156c.505.389 1.012.49 1.619.594-.033.004.286-.781.405-1.75zm33.626 37.057c-1.787 2.138-4.041 4.003-6.538 5.562 1.334.4 3.202.623 6.756.312.1-2.058.115-3.992-.218-5.874z"
          overflow="visible"
        ></path>
      </svg>
    ),
    imageAlign: 'top',
    title: '强大',
  },
  {
    content: (
      <p>
        让你专注于你的应用程序需要的核心逻辑，所以你可以
        <strong>用更少的代码做更多的事</strong>!
      </p>
    ),
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M37.434 25.406H92.54A2.464 2.464 0 0095 22.947a2.463 2.463 0 00-2.46-2.46H37.434a2.463 2.463 0 00-2.459 2.46 2.462 2.462 0 002.459 2.459zM11.18 28.335c.748 1.036 1.853 1.631 3.031 1.631l.127-.002c1.226-.044 2.331-.719 3.03-1.853l10.027-16.233a2.465 2.465 0 00-2.093-3.752c-.86 0-1.644.437-2.094 1.168L14.12 24.003l-4.666-6.46c-.764-1.059-2.369-1.323-3.433-.555a2.444 2.444 0 00-.989 1.602 2.44 2.44 0 00.434 1.832l5.714 7.913zM92.54 51.441H37.434a2.462 2.462 0 00-2.459 2.459 2.463 2.463 0 002.459 2.461H92.54A2.465 2.465 0 0095 53.9a2.463 2.463 0 00-2.46-2.459zM26.593 39.449a2.458 2.458 0 00-3.385.8L14.12 54.957l-4.666-6.46c-.764-1.06-2.369-1.323-3.433-.555a2.444 2.444 0 00-.989 1.602 2.44 2.44 0 00.434 1.832l5.715 7.913c.748 1.036 1.852 1.631 3.03 1.631l.126-.002c1.228-.044 2.332-.719 3.032-1.854l10.026-16.231a2.463 2.463 0 00-.802-3.384zM92.54 82.396H37.434a2.462 2.462 0 00-2.459 2.459 2.463 2.463 0 002.459 2.461H92.54A2.465 2.465 0 0095 84.855a2.463 2.463 0 00-2.46-2.459zM26.593 70.402a2.466 2.466 0 00-1.291-.367c-.86 0-1.644.438-2.094 1.168L14.12 85.911l-4.666-6.46c-.765-1.061-2.371-1.321-3.433-.555a2.442 2.442 0 00-.989 1.604 2.438 2.438 0 00.434 1.83l5.715 7.913c.748 1.036 1.852 1.631 3.03 1.631l.127-.002c1.226-.044 2.331-.72 3.03-1.851l10.027-16.234a2.464 2.464 0 00-.802-3.385z"></path>
      </svg>
    ),
    imageAlign: 'top',
    title: '高效',
  },
]

const otherLibraries = [
  {
    content: '一个可预测的JavaScript应用程序的状态容器',
    title: 'Redux',
    link: 'https://redux.js.org',
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-icon="external-link-square-alt"
        data-prefix="fas"
        viewBox="0 0 448 512"
      >
        <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
      </svg>
    ),
  },
  {
    content: '官方的 React 对 Redux 绑定库',
    title: 'React-Redux',
    link: 'https://react-redux.js.org',
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-icon="external-link-square-alt"
        data-prefix="fas"
        viewBox="0 0 448 512"
      >
        <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
      </svg>
    ),
  },
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className={styles.title}>
            <img
              src="img/redux_white.svg"
              alt="Redux logo"
              width="100"
              height="100"
            />
            <h1 className={`${styles.projectTitle} hero__title`}>
              {siteConfig.title}
            </h1>
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('introduction/getting-started')}
            >
              入门RTK
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className={classnames('container', styles.featureBlock)}>
              <div className="row">
                {features.map(({ image, title, content }, idx) => (
                  <div key={idx} className={classnames('col', styles.feature)}>
                    {image && (
                      <div className={`text--center ${styles.blockImage}`}>
                        {image}
                      </div>
                    )}
                    <h2 className={`text--center ${styles.featureTitle}`}>
                      {title}
                    </h2>
                    <div className={styles.featureContent}>{content}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {otherLibraries && otherLibraries.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className={`text--center ${styles.secondTitle}`}>
                    Redux团队的其他库
                  </h2>
                </div>
              </div>
              <div className="row">
                {otherLibraries.map(({ image, title, content, link }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--6', styles.feature)}
                  >
                    <h2 className="text--center">
                      <a href={link} className={styles.featureAnchor}>
                        {title}
                        {image}
                      </a>
                    </h2>
                    <p className="text--center">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
