import React from "react";

function TaskList(props) {
  const task = props.tasks.map((task, index)=>(
    <li key={index}>{task}</li>
  ));
  return (
    <div>
      <h2>{props.tittle}</h2>
      <ul>
        {task}
      </ul>
    </div>
  )
}

export default TaskList;