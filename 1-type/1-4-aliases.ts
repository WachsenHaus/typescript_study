{
    /*
    * Type Aliases
    */
/*
타입을 정할수가있다
예를들어 Text라는 타입은 스트링으로 구성되어있다.
이렇게 원하는 타입을 정의하는것을 타입 엘리어스라고한다.
*/
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        // animal: 'dog'
// student타입에는 animal이 없으므로 설정불가능
    }

    /*
    * String Literal Types
    */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';

    //값 자체를 타입으로 정의할 수 있다.
    type JSON = 'json';
    const json: JSON = 'json'
    type Boal = true;
    const isCat : Boal = true;
}
