/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Mode = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(mode:Mode, x:number, y:number): number{
    switch(mode)
    {
        case "add" : 
        return x+y;
        case "divide" :
            return x/y;
        case "multiply" :
            return x*y;
        case "remainder" :
            return x%y;
        case "substract":
            return x-y;
    }
}
