{
//JavaScript
/*
* Primitive : number, string, boolean, bigint, symbol,null,undefined,
* Object : function, array.......


*/

    //number
    const num:number = 1;

    //string
    const str:string = "안녕";

    //boolean
    const boal:boolean = false;

    //undefined 
    let name: undefined; //💩 똥이다!
    let age: number | undefined;
    age = 1;
    age = undefined;

    function find() : number | undefined {
        return undefined;
    }
    //null
    let person : null;
    let person2: string | null;

    //unknown 💩 똥이다!
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 똥이다!
    let anything: any = 0;
    anything = 'hello';

    //void 기본값은 보이드임.
    function print():void{
        console.log("hello");
        return 
    }

    let unusable: void = undefined; //💩

    //never 리턴할값이없다.
    function throwError(message: string):never{
        //무한반복을실행
        while(true){}

        //message -> server (log)
        //에러를 던지던다
        throw new Error(message);
    }

    //object
    let obj: object; //💩똥이다! 오브젝트도 정확한 타입을 선언하는게 좋음
    function acceptSomeObject(obj:object){

    }

    acceptSomeObject({name:'영훈'});
    acceptSomeObject({animal:'멍멍이'});

}
