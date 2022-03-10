import { useState } from "react"

const Button = ({buttonRef,tasks,setTasks, text, cName,status,setStatus}) => {



  console.log(status)

  const statusHandler = (e) => {
    
    if (e.target.id === "completed") {
      setStatus("completed")
    }
    if (e.target.id === "all") {
      setStatus("all")
    }
    if (e.target.id === "Queue") {
      setStatus("Queue")
    }

  }
  
  document.addEventListener('click', (e) => {
 
      if(e.target.id==="all" || e.target.id ==="completed" || e.target.id==="Queue")
      {
        e.target.classList.add("active")
    }
    
    setTimeout(() => {
      e.target.classList.remove("active")
    },200)
})
//     function createRipple(e)
//     {
   
//     if(this.getElementsByClassName('ripple').length > 0)
//       {
//         this.removeChild(this.childNodes[1]);
//       }
 
//     var circle = document.createElement('div');
//     this.appendChild(circle);
  
//     var d = Math.max(this.clientWidth, this.clientHeight);
//     circle.style.width = circle.style.height = d + 'px';
  
//     circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
//     circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
//     circle.classList.add('ripple');
// }
  

  return (
      <button id={cName} ref={buttonRef} onClick={statusHandler} className="btn">{text}<span><i id="icon"></i></span> </button>  
    )
}

export default Button;