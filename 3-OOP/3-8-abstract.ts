{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean; //물음표는 있을수도있고 없을수도있다. 옵셔널이 될수있지
    }
    type Waffle = {
        sauce: string;
        hasSyrup : boolean;
    }

    interface CoffeMaker{
        makeCoffee(shots:number) : CoffeeCup;
    }
    interface ComposeCoffee{
        makeWaffle(material:Waffle):Waffle;

    }


    class ComposeCoffeeMaker implements CoffeMaker,ComposeCoffee{
        private static BEAN_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans:number = 0;
        //인스턴스할때 항상 호출되는 함수
        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }
        
        private extract(shots:number): CoffeeCup{
            console.log(`따르는중 ${shots} 샷...`)
            return{
                shots:shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots:number):CoffeeCup{
            return this.extract(shots);
        }
        makeWaffle(material:Waffle) : Waffle{
            console.log(`${material.sauce} 와플을 만드는중 🎈`)
            return {
                sauce : material.sauce,
                hasSyrup: material.hasSyrup,
            }
        }
    }

    class composeMK2 extends ComposeCoffeeMaker{
        makeCookieCoffee(){
            console.log("쿠키커피 제작테스트중.")
        }
    }
    const compose_MK2_machine = new composeMK2(32);
    compose_MK2_machine.makeCookieCoffee();
    compose_MK2_machine.makeWaffle({
        hasSyrup:false,
        sauce:"바닐라"
    });










    
    // public 
    // private 자바스크립트도 private가 되네
    // protected 상속을 할 때 외부에 접근을 할 수 없지만. 자식클래스에서 접근이 가능 
    // abstract가 붙으면 이 자체로 오브젝트를 만들 수 없다. 
    // 만들어지는 것을 목적으로 하지 않는다.
    
    abstract class CoffeeMakerMachine implements CoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; //class level로 중복 생 성안됨(메모리 절약). 
        private coffeeBeans:number = 0; // instance (object) level
        //인스턴스할때 항상 호출되는 함수
        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }
    
        private grindBeans(shots:number){
            console.log(`샷을 위해 커피가 그라인딩되고있습니다. ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMakerMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error("Not enough coffee beans!");
            } 
            this.coffeeBeans -= shots * CoffeeMakerMachine.BEANS_GRAMM_PER_SHOT;
        }
        private  preheat():void{
            console.log(`끓이는중.. 🧵`)
        }
        protected abstract extract(shots:number): CoffeeCup;

        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
        public fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error("커피 콩의 크기는 0보다 커야 합니다.")
            }
            this.coffeeBeans += beans;
        }
        public clean() {
            console.log("청소합니다.")
        }
    }


    class CaffeLatteMachine extends CoffeeMakerMachine {
        constructor(coffeeBeans:number,public readonly serialNumber:string){
            //상속받는 생성자가 필요한 정보를 슈퍼에 전달해줘야한다.
            super(coffeeBeans);
        }
        private steamMilk() : void{
            console.log("Steaming some milk... 🎈");
        }

        protected extract(shots:number): CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasMilk: true,
            }
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMakerMachine{
        protected extract(shots:number): CoffeeCup{
            return{
                shots,
                hasSugar: true,
            }
        }
    }

    //coffeemaker[]로 정하면 인터페이스에서 제공하는 기능만 동작한다.
    //커피메이커로된 인터페이스
    const machines:CoffeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]
    machines.forEach(machine => {
        console.log(`-------------------------`);
        machine.makeCoffee(1);
    })

    const latteMachine = new CaffeLatteMachine(23,"11-233-1");
    const coffee = latteMachine.makeCoffee(1);
    // console.log(coffee);
    // console.log(latteMachine.serialNumber);
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(3);
    //커피메이커와 메이커머신은 동일하지만 커피메이커라는 인터페이스에는 존재하지않는다. 
    //얼마만큼의 행동을 약속하고 보장하고 허용할건지 결정할 수 있다.


}
