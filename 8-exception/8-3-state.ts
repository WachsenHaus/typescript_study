{class TimeoutError extends Error{}
class OfflineError extends Error{}

type SuccessState = {
    result : "success"
}
type NetworkErrorState = {
    result : "fail",
    reason : "offline" | "down" | "timeout";
}

type ResultState = SuccessState |NetworkErrorState ;

class NetworkClient{
    tryConnect() : ResultState {
        
        return {
            result : "fail",
            reason : "offline"
        }
    }
}

class UserService{
    constructor(private client: NetworkClient){}

    login(){
            this.client.tryConnect();
    }
}

class App {
    //캐치는 처리하기 좋은 우아한곳에서 잡아주는것이 좋다. 괜히 깊숙히 들어가서 캐치하지말자
    //해결도 못하는 캐치는 무의미하다.
    constructor(private userService: UserService){

    }
    run(){
        try{
            this.userService.login();
        }catch(error){
            //에러의 타입이 any타입이다.!
            //show dialog to user
            console.log("서버가 죽어서요.. 기다려주세요 -ㅅ- ㅋ")
            if(error instanceof OfflineError){
                // 
            }
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

}