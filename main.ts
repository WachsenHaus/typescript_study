
// 재귀 구구
function recurGUGU(dan,depth){
    if(depth===1) {
        return dan*depth;
    }
    const result = dan+recurGUGU(dan,depth-1)
    console.log(`${dan} * ${depth} = ${result}`);
    return result;
}

// recurGUGU(9,9);

//글자 뒤집기

function flipString(text : string) : string{
    return text.split("").reverse().join("");
}
function flipString1(text : string) : string{
    const result = text.split("");
    const lastIndex = result.length-1;
    for(let i =0; i < (result.length-1)/2; i++){
        let temp = result[lastIndex-i];
        result[lastIndex-i] = result[i];
        result[i] = temp;
    }
    return result.join("");
}
console.log(flipString("안녕하세요"));
console.log(flipString1("안녕하세요"));
