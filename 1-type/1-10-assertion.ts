{
    /*
    * type assertions π©
    */
    function jsStrFunc() :any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log(result.length);

    const wrong : any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); //λλν λΆμ΄λ©΄ λ¬΄μ‘°κ±΄ λμ΄ μλμΌ μ μλ₯Όνλ€.
    //λλ¬΄ μ₯λ΄μ ν΄λ²λ¦¬λ©΄ appμ£½μμμμ π©

}
