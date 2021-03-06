/**
 * Let's make a game ๐น
 */
{
type Position = {
    x: number;
    y: number;
}

const position:Position ={
    x:0,
    y:0
}
type Mode = "up" | "down" | "left" | "right" ;
function move(mode:Mode){
    switch(mode)
    {
        case "up":
            position.y++;
            break;
        case "down":
            position.y--;
            break;
        case "left":
            position.x--;
            break;
        case "right":
            position.x++;
            break;
        default:
            //switch๋ฌธ ์์์ ์ ๋ฌ๋  ์ ์๋ ๋ชจ๋  unionํ์๋ณ๋ก ์ฒ๋ฆฌ๋ฅผ ํด์ผ๋๋๋ฐ. ์ด๋ฌํ ์ค์ ๋ฐฉ์ง๋ฅผ ์ํ ํธ๋ฆญ์.
            const invalid: never = mode;
            throw Error(`move์๋ฌ!${invalid}`)
    }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

}
