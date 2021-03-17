{
    /*
    * TYpe inference
    */
    //선언함과 동시에 문자열을 할당했기 때문에 문자열로 타입을 정해준다.(생략가능하다는 말)
    let text = "hello";
    text = "hi";

    function print(message:string){
        console.log(message);
    }

    print("hello");

    function add(x:number, y:number) : number{
        return x+y;
    }

    const result = add(1,2);
}
