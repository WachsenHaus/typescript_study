{
    type ToDo = {
        title : string;
        description : string;
        label: string;
        priority : 'high' | "low";
    };
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo{
        return {...todo, ...fieldsToUpdate};
    }

    const todo:ToDo = {
        title: 'learn TypeScript',
        description: "study hard",
        label: "study",
        priority: "high",
    };
    //추가로 수정된 데이터를 반환.
    const updated = updateTodo(todo,{priority:"low", label:"dd"})
    console.log(todo);
    console.log(updated);
}