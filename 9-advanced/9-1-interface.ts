type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number,
    y: number
}

interface PositionInterface{
    z: number,
}




// object 
const obj1: PositionType = {
    x:1,
    y:1
}

const obj2: PositionInterface = {
    x:1,
    y:1,
    z:1
}


//class
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface{
    x: number;
    y: number;
    z: number; //z를 추가함.
}


//Extends
interface ZPositionInterface extends PositionInterface{
    z: number;
}

//only interfaces can be merged.
type ZPositionType = PositionType & {
    z:number;
}



//Type aliases can use computed properties
type Person ={
    name: string,
    age: number,
}

type Name = Person['name']; // string 타입이된다. 

type NumberType = number;
type Direction = 'left' | 'right';

