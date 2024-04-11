# Vue Built-in Components

## 목차
1. [component](#component)
2. [transition](#transition)
3. [transition-group](#transition-group)
4. [keep-alive](#keep-alive)

---

Vue는 개발자들이 쉽게 사용할 수 있는 여러 내장 컴포넌트를 제공합니다. 이러한 내장 컴포넌트들은 Vue 애플리케이션을 개발할 때 편리하게 사용될 수 있습니다.

[Vue 공식 홈페이지 Built-in Components 링크](https://vuejs.org/api/built-in-components.html)

## component

`component` 컴포넌트는 동적으로 컴포넌트를 렌더링하는 데 사용됩니다. 컴포넌트 이름이나 동적 컴포넌트 객체를 바인딩하여 사용할 수 있습니다.

```html
<component :is="currentComponent"></component>
```

## transition

`transition` 컴포넌트는 요소가 추가되거나 제거될 때 CSS 트랜지션 효과를 추가하는 데 사용됩니다. 추가되거나 제거되는 요소를 감싸서 사용합니다.

```html
<transition name="fade">
  <div v-if="isVisible">요소가 나타납니다.</div>
</transition>
```

## transition-group

`transition-group` 컴포넌트는 리스트의 각 항목이 추가되거나 제거될 때 CSS 트랜지션 효과를 추가하는 데 사용됩니다. 주로 리스트를 렌더링할 때 사용됩니다.

```html
<transition-group name="fade">
  <div v-for="item in items" :key="item.id">{{ item.text }}</div>
</transition-group>
```

## keep-alive

`keep-alive` 컴포넌트는 동적으로 생성된 컴포넌트의 상태를 유지하고, 컴포넌트를 캐시하여 다시 렌더링할 때 다시 생성하지 않습니다.

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

이것으로 Vue의 주요 내장 컴포넌트에 대한 설명이었습니다. 이러한 내장 컴포넌트들은 Vue 애플리케이션을 개발하는 데 유용하게 사용될 수 있습니다.