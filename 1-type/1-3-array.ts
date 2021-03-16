{
    //Aray

    const fruits: string[]= ["🍅","🍓","🍆"];

    const test: number[] = [1,23,4];
    const scores: Array<number> = [1,3,4];

    function printArray(fruits: readonly number[]){
        console.log(fruits);
    }   
    printArray(test);

    //튜플을 권장하진않는다. 고정된사이즈에서 서로다른 타입의 데이터를 담을수있다.
    //Tuple -> inerface, type alias, class로 대체 추천
    let student:[string,number];
    student = ["name",123];
    student[0]
    student[1];
    const [name,age] = student;
}
