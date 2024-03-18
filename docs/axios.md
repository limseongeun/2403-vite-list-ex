# Axios를 Vue에서 사용하기

## 목차

1. [Axios란?](#axios란?)
2. [Vue 프로젝트에 Axios 설치하기](#vue-프로젝트에-axios-설치하기)
3. [Axios를 Vue 컴포넌트에서 사용하기](#axios를-vue-컴포넌트에서-사용하기)
4. [API 폴더화 구성](#API-폴더-구성)

## Axios란?

Axios는 HTTP 요청을 만들고 응답을 처리하는 JavaScript 라이브러리입니다. 주로 웹 애플리케이션에서 서버와 통신하기 위해 사용됩니다. Axios는 Promise 기반의 API를 제공하여 간단하고 강력한 HTTP 클라이언트 기능을 제공합니다.

## Vue 프로젝트에 Axios 설치하기

Vue 프로젝트에 Axios를 설치하려면 다음 명령어를 실행합니다.

```bash
npm install axios
```
또는
```bash
yarn add axios
```

## Axios를 Vue 컴포넌트에서 사용하기

Vue 컴포넌트에서 Axios를 사용하려면 먼저 Axios를 import하여 Vue 컴포넌트 내에서 사용할 수 있도록 해야 합니다.

```javascript
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      });
  }
}
```
위 코드에서는 Axios를 사용하여 외부 API에서 사용자 데이터를 가져와 Vue 컴포넌트의 데이터에 할당하는 예제를 보여줍니다.

## API 폴더화 구성

### 1. API 폴더 생성
Vue 프로젝트의 루트 디렉토리에 api 폴더를 생성합니다.

### 2. API 모듈 생성
api 폴더 내에 각각의 API 엔드포인트에 대한 모듈을 생성합니다. 예를 들어, 사용자 정보를 가져오는 API를 사용할 경우 user.js와 같은 파일을 생성합니다.

### 3. Axios 설정
각 API 모듈에서 Axios를 사용하기 위해 Axios를 import하고 설정합니다.

```javascript
// api/index.js

import axios from 'axios';

const baseURL = 'https://example.com/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000 // 요청 시간 초과 설정 (옵션)
});

export const getUsers = () => axiosInstance.get('/users');
export const getUserById = (userId) => axiosInstance.get(`/users/${userId}`);
// 기타 API 함수 정의

```

### 4. API 모듈 사용
Vue 컴포넌트에서 API 모듈을 import하여 사용합니다.

```vue
<template> ... </template>

<script>
// UserList.vue

import { getUsers } from '@/api/user';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    getUsers()
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error('사용자 데이터를 불러오는 중 에러 발생:', error);
      });
  }
}
</script>
```

이러한 방식으로 API 폴더를 구성하고 사용하면 프로젝트의 구조를 보다 체계적으로 유지할 수 있으며, API 호출과 관련된 로직을 분리하여 관리할 수 있습니다.