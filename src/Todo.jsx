import { useState } from "react";

export default function Todo(){
    let[tasks ,setTasks]=useState([]);
    let[newtask,setNewTask]=useState("");

    const handleInput=(event)=>{
        setNewTask(event.target.value)
    }

    const addTask=()=>{
        if(newtask.trim() !==""){
            setTasks(t=>[...t , newtask]);
            setNewTask("")

        }
    }

    const removeTask=(index)=>{
        setTasks(t=>t.filter((_,i)=>i!==index));
    }

    const moveUPtask=(index)=>{
        if(index>0){
            let updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index-1]] =
             [updatedTask[index-1] ,updatedTask[index]]
             setTasks(updatedTask);
            }

    }

    const moveDowntask=(index)=>{
        if(index<tasks.length-1){
            let updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index+1]] =
            [updatedTask[index+1] ,updatedTask[index]];
            setTasks(updatedTask);
        }


    }

    return(
        <div className="container">
            <h1>TO DO List</h1>
            <input 
                type="text"
                placeholder="Enter Your Tasks..."
                value={newtask}
                onChange={handleInput}>
            </input>
            <button onClick={addTask} className="add-btn">Add</button>
            
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                    <span className="text">{task}</span>
                  
                    <button onClick={()=>removeTask(index) }
                     className="del-btn">
                         ❌
                    </button>
                    <button onClick={()=>moveUPtask(index)} 
                    className="move-btn">
                         👆
                    </button>
                    <button onClick={()=>moveDowntask(index)}
                     className="move-btn">
                         👇
                    </button>
                    </li>
                    
                )}
            </ol>
        </div>

    );
}