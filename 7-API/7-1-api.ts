[1,2].map;

type Student = {
    passed: boolean;
}

const students: Student[] = [{passed:true},{passed:true},{passed:true}];

function test (item){
    return item.passed;
}
const result = students.every(test);

// console.log(result);

class Animal{

}

class Cat extends Animal{
    isCat: boolean = true;
}
class Dog extends Animal{
    isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

// 리턴할때 고양이만 리턴하는 함수야
// 애니몰을 고양이로 캐스팅을하고. iscat이 없다면
function isCat(animal: Animal):animal is Cat{
    const result = (animal as Cat).isCat !== undefined;
    console.log(result);
    return result;
}

console.log(animals.every<Cat>(isCat));


