
import '../Styles/modalStyle.css'
import { useRef,useState } from 'react'

const Modal = ({ tasks, setTasks, modalRef,editRef }) => {
    const inputRef = useRef(null)
    const errorRef = useRef(null)

    const [i,seti]= useState("")
    const close = () => {
        modalRef.current.classList.remove("active")
        errorRef.current.innerHTML = ""
    }

    const record = (e) => {
        seti(e.target.value)
    }

    const replace = () => {
       
        if (inputRef.current.value === "")
        {
            errorRef.current.style.color="red"
            errorRef.current.innerHTML= "*Please Provide Proper Input!"
        }
        
        else {
            const save = JSON.parse(localStorage.getItem('tasks'))

            save.forEach(a => {
            if (editRef.current.id === a.Name) {
                a.Name = inputRef.current.value
            }
            })
            setTasks(save)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            
            errorRef.current.style.color="green"
            errorRef.current.innerHTML = "Task Successfully Replaced"
            setTimeout(() => {
                modalRef.current.classList.remove("active");
                errorRef.current.innerHTML=""
            }, 300);
        }
        seti("")
    }
    return (
        <div className="popUp"ref={modalRef}>
        <div className="modal">
            <div className="modalTop">
                    <input type="text" value={i} onChange={record}ref={inputRef} className="newInput" placeholder="Enter New Task" />
                <i className="fas fa-close" id="smallClose" onClick={close}></i>
                </div>
                <div className="err" ref={errorRef}></div>
                <button onClick={replace}>Replace Task</button>
            </div>
            
            <div className="overlay"></div>
        </div>
    )
}

export default Modal;