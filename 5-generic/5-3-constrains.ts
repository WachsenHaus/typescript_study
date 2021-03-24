{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay(){
            console.log("풀타임!")
        }
        workFullTime(){
            
        }
    }

    class PartTimeEmployee implements Employee{
        pay(){
            console.log("part time!!")
        }
        workPartTime(){

        }
    }

    function pay<T extends Employee>(employee: T):T{
        employee.pay();
        return employee;
    }

    //세부적인 타입을 이자로 받아서 정말 추상적이 타입으로 다시 리턴하는 함수는 똥이다! 
    function payBad(employee: Employee): Employee{
        employee.pay();
        return employee;
    }

    const ellie = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    ellie.workFullTime();
    bob.workPartTime();

    const ellieAfterPay = pay(ellie);
    const bobAfterPay = pay(bob);
    


    
}