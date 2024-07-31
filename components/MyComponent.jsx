import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Enter Name");
    const [age, setAge] = useState(0);
    const [isStudent,setIsStudent]=useState(false);

    const updateName = () => {
        setName("Bro Code")
    }

    const updateAge = () => {
        setAge(age + 2)
    }

    const updateStudentStatus=()=>{
        setIsStudent(!isStudent);
    }

    return (
        <div className="my-component">
            <p>
                Name:{name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>
            <p>
                Age:{age}
            </p>
            <button onClick={updateAge}>
                Inc Age By 2
            </button>
            <p>
                Is he/she Student? :{isStudent ? "Yes" : "No"}
            </p>
            <button onClick={updateStudentStatus}>
                Change Student Status
            </button>
        </div>
    );

}

export default MyComponent