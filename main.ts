console.log("hello world~");

function recurGUGU(dan,depth){
    if(depth===1) {
        return dan*depth;
    }
    const result = dan+recurGUGU(dan,depth-1)
    console.log(`${dan} * ${depth} = ${result}`);
    return result;
}

recurGUGU(9,9);
