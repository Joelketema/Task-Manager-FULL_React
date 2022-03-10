import Task from './Task'
import {useEffect} from 'react'
import '../Styles/taskStyle.css'

const Tasks = ({tasks,setTasks, modalRef,editRef,saved,setSaved}) => {
    console.log(tasks);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.className === "fas fa-gear setting" || e.target.className === "fas fa-gear setting active") {
                if (e.target.id === e.target.closest('.taskData').id) {
    
                e.target.classList.toggle("active")
                e.target.nextElementSibling.classList.toggle("active")
            }
        }            
    })
        
    },[])


  
    return (
        <div className="tasks">
            {
                
                saved.map(t => (
                    <Task tasks={tasks} editRef={editRef} modalRef={modalRef} setTasks={setTasks} text={t.Name} book={"fas fa-bookmark"} key={t.Name} edit={"fas fa-pencil"} trash={"fas fa-trash"} flag={t.Priority} status={t.status}/>
                ))
            }
            
        </div>
    )
}

export default Tasks;