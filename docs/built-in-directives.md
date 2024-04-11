# Vue Built-in Directives

## 목차
1. [v-if](#v-if)
2. [v-else](#v-else)
3. [v-else-if](#v-else-if)
4. [v-for](#v-for)
5. [v-on](#v-on)
6. [v-bind](#v-bind)
7. [v-model](#v-model)
8. [v-show](#v-show)
9. [v-text](#v-text)
10. [v-html](#v-html)

---

Vue는 템플릿에서 사용할 수 있는 다양한 내장 디렉티브를 제공합니다. 이 디렉티브들은 HTML 요소에 특별한 동작을 부여하거나 데이터를 렌더링할 때 사용됩니다.

[Vue 공식 홈페이지 Built-in Directives 링크](https://vuejs.org/api/built-in-directives.html#built-in-directives)

## v-if

`v-if` 디렉티브는 조건부로 요소를 렌더링하는 데 사용됩니다.

```html
<div v-if="isVisible">
  <!-- 이 요소는 isVisible이 참일 때만 렌더링됩니다. -->
</div>
```

## v-else

`v-else` 디렉티브는 `v-if`와 함께 사용되어 이전 조건이 거짓인 경우에만 요소를 렌더링합니다.

```html
<div v-if="isVisible">
  <!-- 이 요소는 isVisible이 참일 때 렌더링됩니다. -->
</div>
<div v-else>
  <!-- 이 요소는 isVisible이 거짓일 때 렌더링됩니다. -->
</div>
```

## v-else-if

`v-else-if` 디렉티브는 여러 조건을 순차적으로 확인하고 이전 조건이 거짓이고 현재 조건이 참인 경우에만 요소를 렌더링합니다.

```html
<div v-if="type === 'A'">
  <!-- 이 요소는 type이 'A'일 때 렌더링됩니다. -->
</div>
<div v-else-if="type === 'B'">
  <!-- 이 요소는 type이 'B'일 때 렌더링됩니다. -->
</div>
<div v-else>
  <!-- 이 요소는 위의 모든 조건이 거짓일 때 렌더링됩니다. -->
</div>
```

## v-for

`v-for` 디렉티브는 배열이나 객체를 반복하여 요소를 렌더링하는 데 사용됩니다.

```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

## v-on

`v-on` 디렉티브는 이벤트를 감지하고 메서드를 호출하는 데 사용됩니다.

```html
<button v-on:click="handleClick">클릭</button>
```

## v-bind

`v-bind` 디렉티브는 HTML 속성을 동적으로 바인딩하는 데 사용됩니다.

```html
<img v-bind:src="imageSrc">
```

## v-model

`v-model` 디렉티브는 양방향 데이터 바인딩을 제공하여 폼 입력 요소와 데이터를 동기화하는 데 사용됩니다.

```html
<input v-model="message" type="text">
```

## v-show

`v-show` 디렉티브는 조건부로 요소를 표시하거나 숨기는 데 사용됩니다. `v-if`와 달리 DOM에 요소를 계속 유지합니다.

```html
<div v-show="isVisible">
  <!-- 이 요소는 isVisible이 참일 때 보여집니다. -->
</div>
```

## v-text

`v-text` 디렉티브는 요소의 텍스트 콘텐츠를 업데이트하는 데 사용됩니다. `{{ }}` 보다 빠르게 렌더링되어 초기 렌더링 플래시를 방지할 수 있습니다.

```html
<span v-text="message"></span>
```

## v-html

`v-html` 디렉티브는 요소의 HTML 콘텐츠를 업데이트하는 데 사용됩니다. 주의해야 할 보안 문제가 있으므로 신뢰할 수 있는 콘텐츠에만 사용해야 합니다.

```html
<div v-html="rawHtml"></div>
```