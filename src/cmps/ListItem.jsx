import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ListItem(props) {
  const { task, onDelete, onChange} = props;
  return (
    <li className="row border p-1 justify-content-between mx-2">
      <div className="col-1 my-auto">
        <div className="pretty p-default"> 
          <input type="checkbox" checked={task.completed} onChange={onChange}/>
          <div className="state p-primary-o">
            <label>{task.text}</label>
          </div>
        </div>
      </div>
      <button onClick={onDelete} className="btn btn-primary col-1 w-auto h-auto ">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
}
