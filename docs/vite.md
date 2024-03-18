# Vite

## 목차
1. [Vite란?](#Vite란?)
2. [주요 특징](#주요-특징)
3. [사용 방법](#사용-방법)
4. [Vite 프로젝트 생성](#Vite-프로젝트-생성)

[Vite 사이트](https://vitejs.dev/)

## Vite란?

Vite(바이트)는 빠르고 간단한 개발 환경을 제공하는 도구입니다. Vue.js나 React 같은 프론트엔드 프레임워크를 개발할 때 사용됩니다. Vite는 Vue CLI나 Create React App과 같은 도구보다 훨씬 빠른 개발 속도를 제공합니다.

## 주요 특징

1. **빠른 개발 속도**: Vite는 개발 서버와 번들러 역할을 동시에 수행하여 빠른 개발 속도를 제공합니다.
   
2. **ES 모듈 형태로 파일 제공**: 모듈 번들링을 실행하는 동안 ES 모듈 형태로 파일을 제공하여 빌드 시간을 단축하고 브라우저에서 코드를 효율적으로 로드할 수 있습니다.

## 사용 방법

Vite를 사용하려면 다음과 같이 설치합니다.

```bash
npm install vite
```

그리고 프로젝트 디렉토리에서 다음 명령어를 실행하여 개발 서버를 시작할 수 있습니다.

```bash
npm run dev
```

Vite는 기본적으로 포트 3000을 사용하여 개발 서버를 시작합니다.

## Vite 프로젝트 생성

 ```bash
 npm create vite@latest
 ```

이후에는 프롬프트 창에 출력된 메시지를 따라주세요.

프로젝트의 이름이나 사용하려는 템플릿을 직접 지정할 수도 있습니다. 예를 들어, Vite + Vue 프로젝트를 만들고 싶다면 다음과 같이 입력해주세요:

```bash
# npm 7+, '--'를 반드시 붙여주세요
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue
```

*호환성 - Vite는 버전 18+ 또는 20+ 의 Node.js를 요구합니다. 다만 일부 템플릿의 경우 더 높은 버전의 Node.js를 요구할 수 있습니다.*


