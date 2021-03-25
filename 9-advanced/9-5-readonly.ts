{
    type ToDo = {
        title: string;
        description: string;
    };

    //타입스크립트 유틸리티로 존재한다. 
    
    function display(todo:Readonly<ToDo>) {
        todo.title = 'jaja';
    }

}