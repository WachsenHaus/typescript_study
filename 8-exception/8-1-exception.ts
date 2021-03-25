// {
//     //java : exception
//     // javascript : error


//     const array = new Array(10000000000000000);



    function readFile(fileName: string) : string{
        if(fileName === "not Exist! 똥이다!"){
            throw new Error(`파일이 존재하지 않아! ${fileName}`)
        }

        return fileName;
    }

    function closeFile(fileName: string){
        //
    }

    const fileName = 'not Exist! 똥이다!';

    //에러가 나는곳만 try catch를 하는것이 좋다.
    try{
        console.log(readFile("A"));
    }catch(error){
        console.log('catched!!');
    }finally{
        //캐치안에서 어떠한 일이 생길지 모르기 때문에 finally에 넣는것이 좋다.
        closeFile(fileName);
        console.log("힝구")
    }
