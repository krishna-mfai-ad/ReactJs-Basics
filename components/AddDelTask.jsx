import { useState } from "react";

function AddDelTask() {

    const [task, setTask] = useState(["Write", "Read", "Execute"])

    const handleAddTask = () => {
        var newTask = document.getElementById("taskInput").value

        document.getElementById("taskInput").value = "";

        // setTask([newTask]) This Line Reset every values in the array to single one

        setTask(t => [...t, newTask])
    }

    const handleDelTask = (index) => {
        setTask(task.filter((_, i) => i!==index))
    }
    return (
        <div>
            <h1>
                Add Delete Object in Array!
            </h1>
            <ul>
                {task.map((element, index) => {
                    return (
                        <li key={index} onClick={() => handleDelTask(index)}
                        >{element}</li>
                    )
                })}
            </ul>
            <input type="text" id="taskInput" placeholder="Enter Task" />
            <button onClick={handleAddTask} >
                Add Task
            </button>
        </div>
    );
}

export default AddDelTask