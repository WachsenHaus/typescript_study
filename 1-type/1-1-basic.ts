{
//JavaScript
/*
* Primitive : number, string, boolean, bigint, symbol,null,undefined,
* Object : function, array.......


*/

    //number
    const num:number = 1;

    //string
    const str:string = "μλ";

    //boolean
    const boal:boolean = false;

    //undefined 
    let name: undefined; //π© λ₯μ΄λ€!
    let age: number | undefined;
    age = 1;
    age = undefined;

    function find() : number | undefined {
        return undefined;
    }
    //null
    let person : null;
    let person2: string | null;

    //unknown π© λ₯μ΄λ€!
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any π© λ₯μ΄λ€!
    let anything: any = 0;
    anything = 'hello';

    //void κΈ°λ³Έκ°μ λ³΄μ΄λμ.
    function print():void{
        console.log("hello");
        return 
    }

    let unusable: void = undefined; //π©

    //never λ¦¬ν΄ν κ°μ΄μλ€.
    function throwError(message: string):never{
        //λ¬΄νλ°λ³΅μμ€ν
        while(true){}

        //message -> server (log)
        //μλ¬λ₯Ό λμ§λλ€
        throw new Error(message);
    }

    //object
    let obj: object; //π©λ₯μ΄λ€! μ€λΈμ νΈλ μ νν νμμ μ μΈνλκ² μ’μ
    function acceptSomeObject(obj:object){

    }

    acceptSomeObject({name:'μν'});
    acceptSomeObject({animal:'λ©λ©μ΄'});

}
