{

    const obj = {
        name: "영훈",
    }

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; //string
    const text:Name = "11"

    type Gender = Animal["gender"]; // 'male' | 'female'

    type Keys = keyof Animal; //'name' | "age' | "gender"

    const key: Keys = 'gender' //3가지만 가능

    type Person = {
        name: string,
        gender: Animal['gender'];
    }

    const person:Person = {
        name: "영훈",
        gender: "female"
    }

}