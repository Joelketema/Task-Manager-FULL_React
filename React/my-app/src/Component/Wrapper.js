import Top from './Top'
import Bottom from './Bottom'
import { useState,useEffect } from 'react'

const Wrapper = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const [saved, setSaved]= useState([])
    const [status, setStatus] = useState("")
    
    useEffect(() => {
        console.log('USe')
        if (status === "completed") {
            setSaved(tasks.filter(f => {
                return (f.status==="completed")
            }))
            console.log(tasks)
            console.log(saved)
        }
        else if (status === "Queue") {
            setSaved(tasks.filter(f =>
            {
                return f.status !== "completed"
            }))
        }
        else if (status === "all") setSaved(tasks)
   
    },[status])
    
    useEffect(() => {
        setSaved(tasks)
    },[tasks])

    return (
        <div className="wrapper">
            <Top tasks={tasks} setTasks={setTasks}/>
            <Bottom tasks={tasks} setTasks={setTasks} saved={saved} setSaved={setSaved} status={status} setStatus={setStatus}/>
        </div>
    )
}

export default Wrapper;