# Vue Router

## 목차
1. [Vue Router란?](#Vue-Router란?)
2. [설치 방법](#설치-방법)
3. [기본 사용 방법](#기본-사용-방법)
4. [Vue3에서의 사용 방법](#Vue3에서의-사용-방법)
5. [폴더별 구성](#폴더별-구성)
6. [Vue Router 옵션 (Vue3 기준)](#Vue-Router-옵션-(Vue3-기준))
7. [Vue Router Guard (Vue3 기준)](#Vue-Router-Guard-(Vue3-기준))

[Vue Router 사이트](https://v3.router.vuejs.org/)

## Vue Router란?
Vue.js에서 라우팅을 다루는 Vue Router는 단일 페이지 애플리케이션(SPA)을 만들 때 매우 유용한 도구입니다. Vue Router를 사용하면 여러 페이지 간의 이동이 매우 쉬워지며, URL을 기반으로 컴포넌트를 동적으로 렌더링할 수 있습니다.

## 설치 방법
Vue Router를 설치하려면 다음 명령어를 사용합니다.

```bash
npm install vue-router
```

## 기본 사용 방법

### 1. Vue 애플리케이션 설정
Vue 애플리케이션에 Vue Router를 추가합니다.

```javascript
// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

### 2. 라우팅 컴포넌트 생성
라우팅에 사용할 컴포넌트를 생성합니다.

```vue
<!-- Home.vue -->

<template>
  <div>
    <h1>홈 페이지</h1>
    <p>이것은 홈 페이지입니다.</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```
```vue
<!-- About.vue -->

<template>
  <div>
    <h1>소개 페이지</h1>
    <p>이것은 소개 페이지입니다.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
```

### 3. 라우팅 사용
이제 애플리케이션에서 라우터를 사용할 수 있습니다.

```vue
<!-- App.vue -->

<template>
  <div id="app">
    <router-link to="/">홈</router-link>
    <router-link to="/about">소개</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

위의 예제에서는 홈 페이지와 소개 페이지 간의 라우팅을 설정하고, 이동하기 위해 <router-link>를 사용했습니다. <router-view>는 현재 화면에 표시되어야 할 컴포넌트를 표시하는 데 사용됩니다.

## Vue3에서의 사용 방법
Vue 3에서도 라우터를 생성하고 설정하는 방법은 이전과 유사합니다. 다만, 일부 변경된 부분이 있을 수 있습니다.

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

createApp(App).use(router).mount('#app')
```

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

## 폴더별 구성
Vue Router를 폴더별로 구성하는 것은 프로젝트를 보다 체계적으로 관리하고 유지보수하기 쉽게 만들어줍니다. 주로 각각의 기능이나 모듈에 따라 라우터 파일을 분리하여 구성합니다.

```javascript
// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = new VueRouter({
  routes
});

export default router;
```

예를 들어, 다음과 같은 구조를 사용할 수 있습니다:

```bash
src/
│
├── router/
│   ├── index.js          # 라우터 설정 파일
│   ├── routes/           # 각 기능별 라우터 파일들을 담은 폴더
│   │   ├── home.js       # 홈 페이지 라우터
│   │   ├── about.js      # 소개 페이지 라우터
│   │   └── ...           # 기타 페이지 라우터 파일
│   └── guards/           # 라우터 가드 파일들을 담은 폴더
│       ├── auth.js       # 인증 관련 라우터 가드
│       └── ...           # 기타 라우터 가드 파일
│
└── views/
    ├── Home.vue          # 홈 페이지 컴포넌트
    ├── About.vue         # 소개 페이지 컴포넌트
    └── ...               # 기타 페이지 컴포넌트들

```

이렇게 폴더를 구성하면 관련 있는 파일들을 함께 그룹화하여 관리할 수 있습니다. 예를 들어, routes 폴더에는 각 페이지별로 라우터 파일을 분리하여 유지보수를 용이하게 할 수 있습니다.

## Vue Router 옵션 (Vue3 기준)

- **routes**: 라우터 경로와 해당 컴포넌트를 정의하는 배열입니다.
```javascript
// router/index.js

import { createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  routes
});

export default router;
```
- **history**: 라우팅 모드를 설정합니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(), // HTML5 history 모드 사용
  routes
});

export default router;

```
- **base**: 애플리케이션의 기본 URL을 설정합니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  base: '/app/', // 기본 URL을 '/app/'로 설정
  routes
});

export default router;

```
- **scrollBehavior**: 라우팅으로 인해 화면이 스크롤될 때 동작을 정의합니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
```
- **fallback**: 지원하지 않는 브라우저에서 HTML5 history 모드를 사용할 때의 대체 옵션을 설정합니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  fallback: true, // HTML5 history 모드의 대체 옵션 설정
  routes
});

export default router;
```

## Vue Router Guard (Vue3 기준)
다양한 라우터 가드를 사용하여 네비게이션을 제어할 수 있습니다. 주요 라우터 가드는 다음과 같습니다:

- **beforeEach**: 네비게이션 전에 실행되는 전역 가드입니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import { isLoggedIn } from '../utils/auth'; // 인증 상태 확인 유틸리티

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next('/login'); // 인증이 필요한 페이지에 접근하려면 로그인 페이지로 리다이렉션
  } else {
    next(); // 그 외에는 계속 진행
  }
});

export default router;
```
- **beforeEnter**: 개별 라우트로의 네비게이션 전에 실행되는 라우터 가드입니다.
```javascript
// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      // 특정 조건을 확인하여 네비게이션을 허용 또는 거부
      if (isLoggedIn()) {
        next(); // 허용
      } else {
        next('/login'); // 거부하고 로그인 페이지로 리다이렉션
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```
- **afterEach**: 네비게이션 완료 후 실행되는 전역 가드입니다.
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to, from) => {
  // 네비게이션 완료 후 로깅 또는 분석 작업 수행
  console.log(`Navigated from ${from.path} to ${to.path}`);
});

export default router;
```