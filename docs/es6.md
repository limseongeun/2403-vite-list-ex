# ES6(ECMAScript 2015)

## 목차

1. [ES6(ECMAScript 2015)란?](#ES6(ECMAScript-2015)란?)
2. [변수 선언 (let, const)](#변수-선언-let-const)
3. [템플릿 문자열 (Template Strings)](#템플릿-문자열-template-strings)
4. [화살표 함수 (Arrow Functions)](#화살표-함수-arrow-functions)
5. [객체 분해 할당 (Object Destructuring)](#객체-분해-할당-object-destructuring)
6. [배열 분해 할당 (Array Destructuring)](#배열-분해-할당-array-destructuring)
7. [향상된 객체 리터럴 (Enhanced Object Literals)](#향상된-객체-리터럴-enhanced-object-literals)
8. [모듈 (Modules)](#모듈-modules)
9. [클래스 (Classes)](#클래스-classes)

## ES6(ECMAScript 2015)란?
ES6는 ECMAScript 2015라고도 불리며, JavaScript의 표준버전 중 하나입니다. ES6는 JavaScript를 보다 강력하고 효율적으로 만들어주는 많은 기능을 포함하고 있습니다. 이를 간단한 예제와 함께 살펴보겠습니다.

## 변수 선언 (let, const)

- `let`: **블록 범위** 지역 변수를 선언합니다. *변수의 값이 바뀔 수 있습니다.*
- `const`: **블록 범위** 상수를 선언합니다. *변수의 값이 변경되지 않습니다.*

```javascript
// ES6 이전
var name = 'John';
var age = 30;

// ES6
let name = 'John';
const age = 30;
```

## 템플릿 문자열 (Template Strings)

- 템플릿 리터럴을 사용하여 문자열을 보간할 수 있습니다. **`${}`**를 사용하여 변수나 표현식을 삽입할 수 있습니다.

```javascript
// ES6 이전
var greeting = 'Hello, ' + name + '!';

// ES6
let greeting = `Hello, ${name}!`;
```

## 화살표 함수 (Arrow Functions)

- 함수 표현식을 간결하게 작성할 수 있는 문법입니다.
- 기존의 함수 표현식에서는 **'function'** 키워드를 사용하여 함수를 정의했습니다. 하지만 화살표 함수에서는 **'=>'**를 사용하여 함수를 간단히 정의할 수 있습니다.
- 화살표 함수는 다음과 같은 장점이 있습니다:

    - 코드가 간결하고 읽기 쉽습니다.
    - **'this'**의 바인딩이 기존의 함수 표현식보다 직관적입니다.
    - 항상 **익명 함수**로 사용됩니다.

```javascript
// ES6 이전
function add(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => a + b;
```

화살표 함수는 단일 표현식의 경우 중괄호 **'{}'**와 **'return'** 키워드를 생략할 수 있습니다. 위 예제에서는 두 수를 더하는 단일 표현식이므로 중괄호와  **'return'**을 생략했습니다.

### * 화살표 함수와 JavaScript의 this 차이점

JavaScript에서의 **'this'**는 함수가 호출될 때 실행 컨텍스트에 따라 동적으로 결정됩니다. 반면에 화살표 함수는 Lexical Scope를 사용하여 **'this'**를 바인딩합니다. 이로 인해 두 가지 유형의 함수 간에 **'this'**의 동작이 다르게 됩니다.

- 기존 함수 표현식

기존 함수 표현식에서의 **'this'**는 호출 시점에 따라 동적으로 바인딩됩니다.

```javascript
const person = {
  name: 'Alice',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

person.sayHello(); // 출력: Hello, Alice
```

- 화살표 함수

화살표 함수에서의 **'this'**는 선언된 위치에 따라 Lexical Scope를 사용하여 바인딩됩니다.

```javascript
const person = {
  name: 'Bob',
  sayHello: () => {
    console.log('Hello, ' + this.name);
  }
};

person.sayHello(); // 출력: Hello, undefined
```

화살표 함수 내부에서의 **'this'**는 함수를 선언한 시점의 **'this'**와 같습니다. 즉, 위 예제에서는 화살표 함수가 선언된 위치가 전역 범위이므로 **'this'**는 전역 객체(여기서는 window)를 참조하게 됩니다. 따라서 화살표 함수 내부에서 **'this.name'**은 **undefined**가 됩니다.
화살표 함수는 메서드로 사용할 때나 프로토타입 메서드, 콜백 함수에서는 사용하지 않는 것이 좋습니다.

## 객체 분해 할당 (Object Destructuring)

- 객체에서 속성을 추출하여 변수에 할당할 수 있습니다. 아래 예시와 같이 객체의 속성을 각각 다른 변수에 할당할 수 있습니다.

```javascript
// ES6 이전
var person = { name: 'John', age: 30 };
var name = person.name;
var age = person.age;

// ES6
const person = { name: 'John', age: 30 };
const { name, age } = person;
```

## 배열 분해 할당 (Array Destructuring)

- 배열에서 요소를 추출하여 변수에 할당할 수 있습니다. 아래 예시와 같이 배열의 각 요소를 다른 변수에 할당할 수 있습니다.

```javascript
// ES6 이전
var numbers = [1, 2, 3];
var a = numbers[0];
var b = numbers[1];

// ES6
const numbers = [1, 2, 3];
const [a, b] = numbers;
```

## 향상된 객체 리터럴 (Enhanced Object Literals)

- 객체 리터럴을 보다 간결하게 작성할 수 있는 문법입니다. *속성 이름과 값이 동일한 경우, 속성 이름만 작성할 수 있습니다.*

```javascript
// ES6
const name = 'John';
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hello, ${this.name}!`;
  }
};
```

## 모듈 (Modules)

- 모듈은 코드를 분리하고 재사용할 수 있도록 하는 기능입니다. 다른 파일에서 변수, 함수, 클래스 등을 **export하여 다른 파일에서 import하여 사용**할 수 있습니다.

```javascript
// ES6 이전
// 파일1
var myModule = {};

// 파일2
var myModule = require('./myModule');

// ES6
// 파일1
export const myModule = {};

// 파일2
import { myModule } from './myModule';
```

## 클래스 (Classes)

- 클래스를 사용하여 객체를 생성할 수 있습니다. 클래스는 생성자 및 메서드를 포함할 수 있습니다.

```javascript
// ES6 이전
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```