# Firebase에 사이트 배포하기
로컬에서 작업한 소스를 서버에 배포하여 실제 웹서비스를 구축하는 내용으로, 서버는 무료로 사용할 수 있는 Firebase 서비스를 이용합니다.

## 1. Firebase Site 로그인
* [사이트 이동](https://firebase.google.com/)

<img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" class="devsite-site-logo" alt="Firebase">

* 시작하기 클릭

![image](https://user-images.githubusercontent.com/13953651/141054911-3c41a689-0a58-4743-998d-daa8d055b7ee.png)

* 구글 계정으로 로그인 후 프로젝트 추가

![image](https://user-images.githubusercontent.com/13953651/141055721-5feb6e69-9b01-4c6f-9174-684aecd27d98.png)

## 2. 프로젝트 시작하기
* 프로젝트 이름 지정

![image](https://user-images.githubusercontent.com/13953651/141063044-45c8214c-bee3-469d-bed5-5ace31ac2a90.png)

* 약관 동의

![image](https://user-images.githubusercontent.com/13953651/141056230-10fa2f85-f251-41f0-9e44-36abfc946aaf.png)

* 구글 애널리틱스 계정 선택

![image](https://user-images.githubusercontent.com/13953651/141056876-dc0a0310-59ee-4339-9dfe-7fc92925fa64.png)

* 프로젝트 생성!!

![image](https://user-images.githubusercontent.com/13953651/141060611-383da706-fd82-47c3-9863-a5c1149859c6.png)


## 3. Hosting 개설
실제 웹사이트 확인을 하기 위한 호스팅 도메인 설정

* Hosting 메뉴 클릭

![image](https://user-images.githubusercontent.com/13953651/141060812-cabc1ebd-3b46-4427-b268-926545fac213.png)

* 안내에 따라 프로젝트 커맨드 창에 입력

![image](https://user-images.githubusercontent.com/13953651/141060962-565f0c93-6554-4226-a766-6d9458cbbfb9.png)


```
npm install -g firebase-tools
firebase --version
firebase login // non-interactive 에러 날 경우 firebase login --interactive로 명령
firebase init
```

![image](https://user-images.githubusercontent.com/13953651/141061538-4db8cd25-e90e-40c1-bd97-98449c06b6c8.png)

```
firebase deploy
```

![image](https://user-images.githubusercontent.com/13953651/141061674-bb5988b3-d48d-4352-ae41-1df7bc09b686.png)


* 생성된 호스팅 주소에서 실제 웹 사이트 확인

![image](https://user-images.githubusercontent.com/13953651/141061852-3570079b-9566-4a94-8440-b5a400ef4e41.png)

![image](https://user-images.githubusercontent.com/13953651/141061890-b3305f21-0615-4c9f-acb5-1ced8c45e645.png)


## 4. yarn build
프로젝트 커맨드 창에서 작업한 소스 빌드

```
yarn build
```

## 5. 다시 firebase deploy 후 호스팅 사이트에서 배포 된 것 확인

```
firebase deploy
```

![image](https://user-images.githubusercontent.com/13953651/141062496-4b75b97b-a309-42e6-bb4c-9701aa40be28.png)


## Tip. 빌드 후 배포 한 번에 하기
Task Explorer를 활용하여 yarn build 와 firebase deploy 를 한 번에 하는 방법으로, package.json 에 아래와 같이 추가

```
...
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  // 이 부분 추가!!
  "firebase:deploy": "vue-cli-service build && firebase deploy"
},
...
```
![image](https://user-images.githubusercontent.com/13953651/141060279-35b455a0-5020-4f8e-a5ac-9f051c55e5be.png)