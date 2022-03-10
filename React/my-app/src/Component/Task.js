
const Task = ({ text, book, edit, trash, flag, tasks, setTasks,modalRef,editRef,status }) => {
    
    const settings = (e) => {
        if (e.target.className === "fas fa-trash") {
            // console.log(e.target.closest('.task'))
          
            // const lost =JSON.parse(localStorage.getItem('tasks'))
            const save = JSON.parse(localStorage.getItem('tasks')).filter(a => {
                return (a.Name !== e.target.id)
            })
            localStorage.setItem("tasks", JSON.stringify(save))
                e.target.closest('.task').remove()
        }
        
        else if (e.target.className === "fas fa-bookmark") {
            e.target.closest('.taskData').style.backgroundColor = "grey"

            const save = JSON.parse(localStorage.getItem('tasks'))

                save.forEach(a => {
                    if (e.target.id === a.Name) {
                    if(a.status === "completed") a.status ="none"
                    else a.status = "completed"
                }
                })
            
            setTasks(save)
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }

        else if (e.target.className === "fas fa-pencil")
        {
            modalRef.current.classList.add("active")
            }
    }
    return (
        <div className="task">
            <h3 className={`taskData ${flag} ${status}`} id={text}>{text}
                <span>
                    <i className={`fas fa-gear setting`} id={text}title={"Settings"}></i>
                    <div className="settings" id={text}>
                        <i className={book} onClick={settings} title={"Mark as Done"}id={text}></i>
                        <i className={edit} onClick={settings} ref={editRef} title={"Edit Task"} id={text}></i>
                        <i className={trash} onClick={settings} title={"Delete"} id={text}></i>
                    </div>

                </span>
            </h3>
        </div>
    )
}

export default Task;