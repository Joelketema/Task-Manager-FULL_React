import Button from "./Button";

import '../Styles/bottomStyle.css'
import Tasks from './Tasks'
import Modal from "./Modal";
import {useRef} from 'react'

const Bottom = ({tasks,setTasks,saved,setSaved,status,setStatus}) => {

    const modalRef = useRef(null)
    const editRef = useRef(null)
    const buttonRef = useRef(null)


    return (
        <div className="holder">
            <div className="choiceBtns">
                <Button buttonRef={buttonRef} tasks={tasks} setTasks={setTasks} text={"All Tasks"} cName={"all"} status={status} setStatus={setStatus} />
                <Button buttonRef={buttonRef} tasks={tasks} settasks={setTasks} text={"Pending Tasks"} cName={"Queue"} status={status} setStatus={setStatus}/>
                <Button buttonRef={buttonRef}  tasks={tasks} setTasks={setTasks} text={"Completed Tasks"} cName={"completed"}status={status} setStatus={setStatus}/>
            </div> 

            <Tasks editRef={editRef} modalRef={modalRef} tasks={tasks} setTasks={setTasks} saved={saved} setSaved={setSaved}/>
            <Modal editRef={editRef} modalRef={modalRef} tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default Bottom;