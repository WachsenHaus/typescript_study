{
    //배열을 사용하지않고 stack자료구조를 구현해보자. (단일 링크드리스트로 구현)
    //node는 다음의 값을 가르킨다.
    // 이중연결리스트는 역방향도 연결하는것을 이중연결리스트로한다.
    // stack은 단일연결리스트를 수직으로 세우면 똑같다.
    // head는 마지막 값을 가르키고있다.
    // 팝을하면 head는 이전의값으로 가르키면된다.
    interface Stack<T>{
        readonly size: number;
        push(value:T):void;
        pop():T;
    }

    type StackNode<T> = {
        readonly value : T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<V> implements Stack<V>{
        private _size: number = 0;
        private head?: StackNode<V>;
        constructor(private capacity:number){

        }
        get size(){
            return this._size;
        }
        push(value: V){
            if(this.size === this.capacity){
                throw new Error("stack is full!")
            }
            const node: StackNode<V> = {
                value,next:this.head
            }
            this.head = node;
            this._size++;
        }
        pop(): V{
            if(this.head == null){
                throw new Error("Stack is empty!");
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl(32);
    stack.push("엘리1");
    stack.push(123);
    stack.push("천재!");
    while(stack.size !== 0){
        console.log(stack.pop());
    }
}