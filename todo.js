let tasks = [];

let req = prompt("Enter your request : ");


while(true){
    if(req == "Quit"){
        console.log("Quitting the To-Do app");
        break;
    }

    if(req == "List"){
        if(tasks.length == 0){
            alert("List is empty!");
        }
        else{
            console.log("Displaying the items of the To-Do List");
            for(let i = 0; i < tasks.length; i++){
                console.log(i+1, tasks[i]);
            }
        } console.log("---------------------");
    } else if(req == "Add"){
        let newTask = prompt("Enter the new task : "); 
        tasks.push(newTask);
        console.log("Task successfully added");
        console.log("---------------------");
    } else if(req == "Delete"){
        let idx = prompt("Enter the task index : "); 
        tasks.splice(idx-1, 1);
        console.log("Task successfully deleted");
        console.log("---------------------");
    } else {
        console.log("Wrong Request");
    }    
    req = prompt("Enter your request : ");
}
