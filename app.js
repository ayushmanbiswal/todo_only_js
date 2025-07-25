/*
    list to show all todos.
    add - to add a todo.
    delete - to delete a task.
    quit - to exit the todo.
*/

let todo = [];
let req = prompt("Please Enter Your Request:");

while(true){
    if(req == "quit"){
        console.log("Thank You");
        break;
    }
    if(req == "list"){
        console.log("------------------");
        for(let i = 0 ;i< todo.length; i++){
            console.log(todo[i]);
        }
        console.log("------------------");
    }
    else if(req == "add"){
        let task= prompt("Please enter the task you wanna add:");
        todo.push(task);
        console.log("task added.");
    }
    else if(req =="delete"){
        let idx = prompt("Please enter the target index:");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
    else{
        console.log("wrong request");
    }
    req = prompt("Please Enter Your Request:");
    
}