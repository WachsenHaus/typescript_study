#노션
https://www.notion.so/bi9choi/TypeScript-Template-ba97abf3901e44bb9f612ae07c7ee313

# 타입스크립트 공부 참고 사이트

<https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard>

# 타입스크립트

### 타입 스크립트 설치

- npm install -g typescript

### 타입스크립트 버전확인

- tsc -v

### 변환(트랜스파일링 -> 노드JS 실행)하지 않고 바로 실행할수 있게 도와주는툴

- npm install -g ts-node
- ts-node 파일이름.ts

### 워치모드 (파일 바뀌면 자동으로 변경진행함)

- tsc main.ts -w

# OOP의 4가지 원칙 (클래스만 쓴다고 OOP가 아니다)

- 캡슐화
  - 연관 되어 있는 데이터를 하나로 묶는것.
  - 어떤 데이터를 숨길것인지.
- 추상화
  - 필요한 함수만 노출해서 심플하게 만드는 것.
- 상속성
  - 부모객체로부터 필드,메소드들을 전달 받는 것.
  - 상속받은 객체에서 생성자를 수정할경우 super로 원래 부모객체가 필요로하는 정보를 전달인자로 넘겨줘야한다.
  - 상속(extends)는 한개 밖에 안된다. <-> 인터페이스가 더 중요하다는 것.
  - 이러한 상속의 문제 때문에 composition을 사용하는 것이 더 좋다.
- 다형성
  - 상속받은 객체에서 요청에 맞게 수정할 수 있다.

### interface

행동규약을 만드는 것

### Favor COMPOSITION over inheritance

상속보다 컴포지션을 사용하자 -> 레고처럼 조립해 나가는 것을 말한다.

- DI 의존성주입을 활용하자.
- 코드의 재사용성을 매우매우 높여준다.
- 단점은 커플링이 타이트하게 되어져있다.
- 클래스와 클래스들 간에 관계를 묶는 것은 좋지 않다.

### constructor 전달인자

- 전달인자에 public readonly를 넣는것은 압축된 표현이다.
- public readonly serial:string;
- this.serial = serial; 이거와 같음.

### Abstract

- 자식 클래스에서 변해야 하는 기능이면 abstract접두어를 붙이고 구현은 자식클래스에서 진행한다.
- 상속을 받기 때문에 protected 접두어를 맨 앞에 붙인다.

### 상속된 타입 변수

타입 변수는 기존에 사용하고 있는 타입을 상속할 수도 있다. 이 점을 이용하면 입력 받을 변수의 타입을 제한할 수 있다. 또한 에디터가 해당 타입의 메소드나 프로퍼티를 예측할 수 있으므로 자동 완성이 된다.

이것과 여러 개의 타입 변수를 사용해 응용하면 아래와 같은 코드를 짤 수 있다.

```
function getFirst<T extends Stack<U>, U>(container: T): U {
  const item = container.pop();
  container.push(item);
  return item;
}
```

### 타입과 인터페이스의 차이

- 인터페이스는 어떤것의 규격 사항이다. 이 정해진 인터페이스를 통해서 서로 상호관계를 한다.
- 데이터를 담을 목적이라면 타입으로 하는것이 더 좋다.

### 모듈이란

- 한 파일안에 있는 코드
- 모듈별로 코드가 분리된다.

- tsc --init
- 타입스크리브 설정을 output한다. 해당 설정에 맞게 컴파일을 하게 된다.

### TS config

- outDir : 빌드시 나올 폴더를 설정할 수 있다/
- rootDir : ts를 만들 폴더를 강제로 정할 수 있다. 모든 ts파일들은 rootdir안에있어야한다.
- exclude : 빌드 안되게 막는것
- include : 특정 ts만 빌드되게 하는것.
- incremental : 수정된 내용만 컴파일하게된다. true로 하면 빨라진다. 예전에 컴파일한 정보를 디스크에 저장한다.
- target : 컴파일된 버전을 설정할 수 있다. 버전이 낮다고 좋은게 아니다. 필요한
- module : 모듈정보를 어떻게 할건지 정할수있다. 브라우저만 ecma, node라면 commonjs
- lib : 사용할 라이브를 서낵할 수 있다. 보통은 선택하지 않는다.
- allowjs : 프로젝트에 섞어쓸수있는지 체크한다.
- checkjs : JS에서 뭔가 잘못되면 경고를 표시한다. JS,TS섞인다면 두가지 모두 true를 쓰자
- jsx : 리액트에 관련된 것을 사용할 수 있는지 결정한다.
- declaration : 내가 만든 코드를 라이브러리 처럼 사용할거 아니면 설정하지않는다.
- sourceMap : true로 설정하면 .map이 파일이 생성된다.
- outfile : 하나의 파일로 만들 때 사용한다.
- compositie : increamental과 관련된것.
- removeComments : 코멘트를 모두 지운다.
- noEmit : 에러체크만 하고 JS코드로 변환하지 않는다.
- strict : 그냥 ture쓰자.
