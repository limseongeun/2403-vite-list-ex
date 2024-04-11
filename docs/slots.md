# Vue Slots

## 목차

1. [개요](#개요)
2. [Slot 예제](#slot-예제)
3. [Slot이란?](#slot이란)
4. [Slot Content and Outlet](#단일-slot을-가진-컴포넌트)
5. [Slot의 기본값](#slot의-기본값)
6. [Named Slot](#Named-slot)
7. [Scoped Slot](#scoped-slot)

---

[Vue 공식 홈페이지 Slots 링크](https://vuejs.org/guide/components/slots.html#slots)

## 개요

Vue.js에서 슬롯은 컴포넌트 간의 템플릿을 교환하기 위한 특별한 메커니즘을 제공합니다. 이것은 유연한 컴포넌트 구조를 구축하고 재사용 가능한 컴포넌트를 만드는 데 유용합니다.

## Slot 예제

```html
<alert-box>
  <template v-slot:title>
    사용자 정의 제목
  </template>

  <p>이것은 메시지의 본문입니다.</p>
</alert-box>
```

## Slot이란?

슬롯은 컴포넌트의 템플릿에 다른 컴포넌트나 요소의 콘텐츠를 삽입하는 데 사용됩니다.

## 단일 Slot을 가진 컴포넌트

```html
<slot-example>
  <span>이것은 부모 슬롯입니다.</span>
</slot-example>
```

```html
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

## Slot의 기본값

```html
<app-layout>
  <template #sidebar>
    <div>
      <!-- sidebar의 기본 콘텐츠 -->
    </div>
  </template>
</app-layout>
```

```html
<template>
  <div>
    <slot name="sidebar">
      <!-- 기본 sidebar 콘텐츠 -->
    </slot>
  </div>
</template>
```

## Named Slot

```html
<base-layout>
  <template v-slot:header>
    <h1>여기는 페이지 제목입니다.</h1>
  </template>

  <p>이것은 페이지 내용입니다.</p>
</base-layout>
```

```html
<template>
  <header>
    <slot name="header"></slot>
  </header>
</template>
```

## Scoped Slot

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

```html
<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };
  }
};
</script>
```

Vue의 슬롯은 컴포넌트 간의 유연한 통신을 가능하게 하여 재사용성을 높이고 코드를 깔끔하게 유지할 수 있습니다.