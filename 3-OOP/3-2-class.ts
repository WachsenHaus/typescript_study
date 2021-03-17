{
    type CoffeeCup = {
        shots: number;
        hasMilk : boolean;
    }

    // public 
    // private 자바스크립트도 private가 되네
    // protected 상속을 할 때 외부에 접근을 할 수 없지만. 자식클래스에서 접근이 가능 
    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; //class level로 중복 생 성안됨(메모리 절약). 
        private coffeeBeans:number = 0; // instance (object) level
        //인스턴스할때 항상 호출되는 함수
        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans : number) : CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }
        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error("Not enough coffee beans!");
            } 
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots:shots,
                hasMilk: false,
            }
        }
        public fillCoffeeBeans(beans:number){
            if(beans<0){
                throw new Error("커피 콩의 크기는 0보다 커야 합니다.")
            }
            this.coffeeBeans += beans;
        }
    
    }
    

    const myMachine = new CoffeeMaker(21);

    const result = myMachine.makeCoffee(2);    

    console.log(myMachine);
    const maker3 = CoffeeMaker.makeMachine(33);

}
