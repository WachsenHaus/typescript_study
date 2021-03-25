class NetworkClient{
    tryConnect() : void {
        throw new Error("no network!");
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
            //show dialog to user
            console.log("서버가 죽어서요.. 기다려주세요 -ㅅ- ㅋ")
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();