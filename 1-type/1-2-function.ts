{

    // function jsAdd(num1,num2){
    //     return num1 + num2;
    // }
    // function add(num1:number, num2:number):number{
    //     return num1 + num2;
    // }

    // function jsFetchNum(id){

    //     return new Promise( (resolve,reject) => {
    //         resolve(100);
    //     })
    // }

    // function fetchNum(id:string) : Promise<number> {

    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     })
    // }

    //?를붙이면 있어도되고 없어도된다 좋네.
    function printName(firstName:string, lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }
    function printMessgae(message:string = 'default message'){
        console.log(message);
    }
    printName("영훈");
    printMessgae("흠");

    function addNumbers(...numbers: number[]):number{
        return numbers.reduce((a,b) => a+b);

    }

    //Rest Parameter
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));


}
