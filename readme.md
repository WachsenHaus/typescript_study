#노션
https://www.notion.so/bi9choi/TypeScript-Template-ba97abf3901e44bb9f612ae07c7ee313

# 타입스크립트

### 타입 스크립트 설치
* npm install -g typescript 

### 타입스크립트 버전확인
* tsc -v

### 변환(트랜스파일링 -> 노드JS 실행)하지 않고 바로 실행할수 있게 도와주는툴
* npm install -g ts-node
* ts-node 파일이름.ts
### 워치모드 (파일 바뀌면 자동으로 변경진행함)
* tsc main.ts -w

# OOP의 4가지 원칙 (클래스만 쓴다고 OOP가 아니다)
* 캡슐화  
  * 연관 되어 있는 데이터를 하나로 묶는것.
  * 어떤 데이터를 숨길것인지.
* 추상화
  * 필요한 함수만 노출해서 심플하게 만드는 것.
* 상속성
  * 부모객체로부터 필드,메소드들을 전달 받는 것.
  * 상속받은 객체에서 생성자를 수정할경우 super로 원래 부모객체가 필요로하는 정보를 전달인자로 넘겨줘야한다.
* 다형성
  * 상속받은 객체에서 요청에 맞게 수정할 수 있다.

### interface
행동규약을 만드는 것  

### constructor 전달인자
* 전달인자에 public readonly를 넣는것은 압축된 표현이다.
* public readonly serial:string;
* this.serial = serial; 이거와 같음.
