{
    /*
 * union types : OR
    */

    // C#의 enum 냄새가 난다
    type Direction = "left" | "right" | "up" | "down";

    function move(direction : Direction) {
        console.log(direction);
    }

    move("left")

    type TileSize = 8 | 16 | 32;
    const tile:TileSize = 16;

    //function: login -> success, fail

    type SuccessState = {
        response:{
            body: string;
        };
    };
    type FailState = {
        reason : string;
    }
    type LoginState = SuccessState | FailState;
    // function login(id: string, password: string):Promise<LoginState>{
    //     // return{
    //     //     response:{
    //     //         body: 'loggied in'
    //     //     }
    //     // }
    // }

    //printLoginState(state)
    //success -> 🍕 body
    // fail -> 🥕 reason

    function printLoginState(state: LoginState){
        //in으로 사용할 수도 있지만 그렇게 추천하는 방법이 아님.
        if('response' in state){
            console.log(`🍕 ${state.response.body}`)
        }else{
            console.log(`🥕 ${state.reason}`)
        }
    }



}
