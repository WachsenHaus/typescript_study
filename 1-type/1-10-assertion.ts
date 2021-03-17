{
    /*
    * type assertions 💩
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
    numbers!.push(2); //느낌표 붙이면 무조건 널이 아니야 정의를한다.
    //너무 장담을 해버리면 app죽을수있음 💩

}
