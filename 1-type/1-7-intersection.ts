{

    /*

    * Intersection Types : & and같은 기능
    */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker){
        console.log(person.name, person.employeeId, person.work());
    }

    //오브젝트를 하나로 합쳐야함.
    internWork({
        name:"영훈",
        score:1,
        employeeId:123,
        work: ()=>{},
    })
}
