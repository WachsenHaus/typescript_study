{
    //Aray

    const fruits: string[]= ["π","π","π"];

    const test: number[] = [1,23,4];
    const scores: Array<number> = [1,3,4];

    function printArray(fruits: readonly number[]){
        console.log(fruits);
    }   
    printArray(test);

    //ννμ κΆμ₯νμ§μλλ€. κ³ μ λμ¬μ΄μ¦μμ μλ‘λ€λ₯Έ νμμ λ°μ΄ν°λ₯Ό λ΄μμμλ€.
    //Tuple -> inerface, type alias, classλ‘ λμ²΄ μΆμ²
    let student:[string,number];
    student = ["name",123];
    student[0]
    student[1];
    const [name,age] = student;
}
