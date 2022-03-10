
import Button from "./Button";
import {useState, useRef,useEffect} from 'react'

import '../Styles/topStyle.css'

const Top = ({tasks,setTasks}) => {
    const inputRef = useRef(null) 
    const selectRef = useRef(null)
    const createRef = useRef(null)
    const errorRef = useRef(null)
    const closeRef = useRef(null)

    const[inputt, setInput] = useState("")

    useEffect(() => {
        console.log("Z")
        localStorage.setItem("tasks", JSON.stringify(tasks)) 
   },[tasks])

    const check = () => {

        setInput(inputRef.current.value)
        if (inputRef.current.value !== "")
        {
            closeRef.current.classList.add("active")
        }

        else {
            closeRef.current.classList.remove("active")
        }
    }

    const closeHandler = () => {
        closeRef.current.classList.remove("active")
        setInput('')

    }


    const createHandler = () => {
        if (inputRef.current.value === "") {
            errorRef.current.style.color = "red"
            errorRef.current.innerHTML = "*Please Provide Proper Input!"
        }
        
        else if (inputRef.current.value !== "" && selectRef.current.value === "0") {
            errorRef.current.style.color = "red"
            errorRef.current.innerHTML = "*Please Select Priority!"
        }
        
        else if (inputRef.current.value !== "" && selectRef.current.value !=="0")
        {
            errorRef.current.style.color = "green"
            errorRef.current.innerHTML = "Task Successfully Added!"
       
            
            
            setTasks(tasks=>[...tasks, {
                Name: inputRef.current.value,
                Priority: selectRef.current.value,
                status:"none"
            }])
            console.log(tasks)

             setInput('');
        }
       
    }

    return (
        <div className="holder">
            <div className="head">
                <h2>Task X</h2>
            </div>
            <div className="input">
                <div className="userInput">
                    <input type="text" name="" value={inputt} onInput={check} ref={inputRef} className="task" placeholder="Enter Task" /> <span ref={closeRef}className="close" onClick={closeHandler}> <i className="fas fa-close"></i></span>
                    <select className="sel" ref={selectRef}>
                        <option disabled selected value="0">--Select Priority--</option>
                        <option value="First">Higher Priority</option>
                        <option value="Normal">Queue Normal </option>
                    </select>
                </div>
                <div className="error" ref={errorRef}></div>
                <button className="btn" id="Create" ref={createRef} onClick={createHandler}>Add Task</button>  
            </div>

        </div>
    )
}

export default Top;