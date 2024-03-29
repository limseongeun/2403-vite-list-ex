# vuex

## 목차

1. [Vuex란?](#Vuex란?)
2. [Vuex의 주요 개념](#Vuex의-주요-개념)
3. [Vuex의 장점](#Vuex의-장점)
4. [Vuex의 사용 예시](#Vuex의-사용-예시-(Vue3-기준))
5. [Vuex 헬퍼 함수](#Vuex-헬퍼-함수)

## Vuex란?

Vuex는 Vue.js 애플리케이션에 대한 상태 관리 패턴 및 라이브러리입니다. Vue.js는 컴포넌트 간의 데이터 흐름을 관리하기 위한 간단하면서도 강력한 시스템을 제공하지만, 대규모 애플리케이션에서는 상태 관리에 대한 필요성이 점점 커집니다. Vuex는 이러한 복잡한 애플리케이션의 상태 관리를 보다 효율적으로 처리하기 위해 개발되었습니다.

## Vuex의 주요 개념

### 1. State(상태)

Vuex의 중심에는 애플리케이션의 상태를 담는 객체가 있습니다. 이 객체는 컴포넌트 간에 공유되어야 하는 중요한 데이터를 포함하고 있습니다. vue 인스턴스 옵션에서의 data의 역할과 비슷합니다.

### 2. Mutation(변이)

상태를 변경하기 위한 유일한 방법은 뮤테이션(mutations)을 통해 이루어집니다. 뮤테이션은 상태를 변경하는 순수한 함수로, 예측 가능한 방식으로 상태를 변경할 수 있도록 합니다. vue 인스턴스 옵션에서의 methods(동기)의 역할과 비슷합니다. mutations명(state, payload){동기로직...}형태로 정의하고 컴포넌트 내에서 this.$store.commit('메서드명', 인자값)으로 호출하고 동기 로직만 정의 권장합니다.

### 3. Action(액션)

액션은 뮤테이션과 유사하지만, 비동기적인 작업을 수행할 수 있습니다. 주로 비동기 작업이 필요한 경우에 사용되며, 외부 API 호출이나 복잡한 비동기 로직을 처리하는 데 유용합니다. vue 인스턴스 옵션에서의 methods(비동기)의 역할과 비슷합니다. actions명(context){비동기 로직...} 형태로 정의하고 컴포넌트 내에서 this.$store.dispatch('메서드명')으로 호출하여 사용합니다.

### 4. Getters(게터)

게터는 상태 저장소의 상태를 기반으로 계산된 속성을 제공합니다. 컴포넌트에서 특정 상태를 가져와서 변형하거나 계산할 때 사용됩니다.  vue 인스턴스 옵션에서의 computed의 역할과 비슷합니다.

### 5. Module(모듈)

Vuex 애플리케이션이 커지면 상태 관리를 위한 단일 파일이 너무 복잡해질 수 있습니다. 모듈을 사용하면 상태 관리를 여러 모듈로 나눌 수 있으며, 각 모듈은 자체의 상태, 뮤테이션, 액션 및 게터를 가질 수 있습니다.

## Vuex의 장점

- **중앙 집중식 상태 관리**: 상태가 단일 객체로 중앙 집중식으로 관리되므로 애플리케이션의 데이터 흐름이 예측 가능하고 유지 보수가 쉽습니다.
- **컴포넌트 간 통신 간소화**: 상태 저장소를 통해 컴포넌트 간에 데이터를 전달하고 통신할 수 있으므로 props 및 이벤트 버스보다 더 명시적이고 간단한 방법으로 통신할 수 있습니다.
- **시간 여행 디버깅**: 상태 변이를 추적하고 디버깅하기 위해 Vuex의 개발자 도구를 사용할 수 있으며, 이를 통해 애플리케이션의 상태를 시간 경과에 따라 디버깅할 수 있습니다.

## Vuex의 사용 예시 (Vue3 기준)

```javascript
// store.js
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
```

위의 코드에서는 Vuex 스토어를 생성하고, 상태, 뮤테이션, 액션 및 게터를 정의합니다. 그리고 이 스토어를 Vue 애플리케이션에 적용하여 사용할 수 있습니다.

### vue 컴포넌트 적용

```html
// App.vue

<template>
  <p>{{ this.$store.state.count }}</p>
  <button type="button" @click="addNumber">버튼</button>
  <button type="button" @click="addNumberDelay">시간차버튼</button>
</template>

<script>

export default {
  methods: {
    addNumber() {
      this.$store.commit('increment'); // mutations는 commit으로 호출 가능
    },
    addNumberDelay() {
      this.$store.dispatch('incrementAsync');// actions는 dispatch로 호출 가능
    },
  }
}
</script>

```

## Vuex 헬퍼 함수

Vuex는 헬퍼 함수를 제공하여 상태, 뮤테이션, 액션, 게터에 쉽게 접근할 수 있도록 합니다. 이를 통해 코드를 더 간결하고 가독성 있게 작성할 수 있습니다. 주요 헬퍼 함수는 다음과 같습니다.

### 1. mapState

`mapState` 헬퍼 함수는 컴포넌트의 계산된 속성(computed property)에 상태를 매핑하는 데 사용됩니다. 이 함수를 사용하면 상태를 직접 참조하지 않고도 컴포넌트에서 상태를 간단하게 사용할 수 있습니다.

```html
// App.vue

<template>
  <p>{{ this.count }}</p> <!-- $store.state를 안 쓰고 호출 가능 -->
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count'])
  }
}
</script>
```

### 2. mapMutations

`mapMutations` 헬퍼 함수는 컴포넌트의 메서드(methods)에 뮤테이션을 매핑하는 데 사용됩니다. 이 함수를 사용하면 컴포넌트에서 뮤테이션을 호출할 때 더 간결한 구문을 사용할 수 있습니다.

```javascript
// Example
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['increment']),

    addNumber() {
      this.increment(); // $store.commit(~) 보다 간결하게 가능
    },
  }
}
```

### 3. mapActions

`mapActions` 헬퍼 함수는 컴포넌트의 메서드(methods)에 액션을 매핑하는 데 사용됩니다. 이 함수를 사용하면 컴포넌트에서 액션을 호출할 때 더 간결한 구문을 사용할 수 있습니다.

```javascript
// Example
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['incrementAsync']),

    addNumberDelay() {
      this.incrementAsync(); // $store.dispatch(~) 보다 간결하게 가능
    },
  }
}
```

### 4. mapGetters

`mapGetters` 헬퍼 함수는 컴포넌트의 계산된 속성(computed property)에 게터를 매핑하는 데 사용됩니다. 이 함수를 사용하면 컴포넌트에서 게터를 호출할 때 더 간결한 구문을 사용할 수 있습니다.

```html
// App.vue

<template>
  <p>{{ this.doubleCount }}</p> <!-- $store.state를 안 쓰고 호출 가능 -->
</template>

<script>
// Example
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doubleCount'])
  }
}
</script>
```

이러한 헬퍼 함수를 사용하면 Vuex 상태 관리를 더 효율적으로 수행할 수 있으며, 코드를 더 간결하고 읽기 쉽게 만들 수 있습니다.