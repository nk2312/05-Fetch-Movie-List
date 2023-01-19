import { useRef, useState } from "react";

const TaskForm = (props) => {

  const taskInput = useRef("");
  const [msg,setMsg]=useState(false);
  
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredValue = taskInput.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  else{
    setMsg(true);
  }
    taskInput.current.value='';
  };

  const inputHandler=(e)=>{
    if(e.target.value!==''){
      setMsg(false);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={taskInput} onChange={inputHandler} />
      <button>Add Item</button>
      {msg && <p>Please add something ...</p>}
    </form>
  );
};

export default TaskForm;
