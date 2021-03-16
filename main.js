console.log("hello world~");

function recurGUGU(dan,depth){
    if(depth===1) {
        return dan*depth;
    }
    const a = 2+recurGUGU(dan,depth-1)
    console.log(`${dan} * ${depth} = a`);
    return a;
}

//2*1 = 2
//2*2 = 4
//2*3 = 6
//2*4
//2*5
//2*6
//2*7
//2*8
//2*9
recurGUGU(2,9);
