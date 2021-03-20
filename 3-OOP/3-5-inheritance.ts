{
    type CoffeeCup = {
        shots: number;
        hasMilk : boolean;
    }
    type Waffle = {
        sauce: string;
        hasSyrup : boolean;
    }

    interface CoffeMaker{
        makeCoffee(shots:number) : CoffeeCup;
    }
    interface CommercialCoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
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
    class CoffeeMakerMachine implements CoffeMaker,CommercialCoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; //class level로 중복 생 성안됨(메모리 절약). 
        private coffeeBeans:number = 0; // instance (object) level
        //인스턴스할때 항상 호출되는 함수
        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }
        
        static makeMachine(coffeeBeans : number) : CoffeeMakerMachine{
            return new CoffeeMakerMachine(coffeeBeans);
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
        private extract(shots:number): CoffeeCup{
            console.log(`따르는중 ${shots} 샷...`)
            return{
                shots:shots,
                hasMilk: false,
            }
        }
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



    class AmatuerUser{
        constructor(private machine:CoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    class ProBarista{
        constructor(private machine:CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker:CoffeeMakerMachine = CoffeeMakerMachine.makeMachine(33);
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(3);
    //커피메이커와 메이커머신은 동일하지만 커피메이커라는 인터페이스에는 존재하지않는다. 
    //얼마만큼의 행동을 약속하고 보장하고 허용할건지 결정할 수 있다.
    const maker1 : CommercialCoffeeMaker = CoffeeMakerMachine.makeMachine(33);
    // maker1.fillCoffeeBeans(32);
    // maker1.makeCoffee(3);
    // maker1.clean();
    const amateur = new AmatuerUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();

}
