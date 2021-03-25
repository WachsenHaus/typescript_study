{type Video = {
    title : string;
    author : string;
    descrition : string;
};
// type VideoOptional  = {
//     title?:string;
//     author?:string;
//     descrition?: string;
// }
// type VideoReadOnly = {
// readonly title?:string;
// readonly author?:string;
// readonly descrition?: string;
// }

type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
}
type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in;
    //title : stirng 이렇게 되는것이다.
    //타입에서 []는 for in과 동일하다.
}


type Animal = {
    name: string;
    age: number;
}

const animal: Optional<Animal> = {
    name: "dog",
}

const video:ReadOnly<Video>= {
    title: " 안녕",
    author: "영훈"
}

type VideoOptional= Optional<Video>;
const videoOp: VideoOptional = {
    title: 'hi',
};

type Nullable<T> ={
    [P in keyof T] : T[P] | null;
}

const obj2:Nullable<Video> = {
    title: null,
    author: null,
    descrition: null
}


}