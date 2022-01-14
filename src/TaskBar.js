import React from "react";
import "./Taskbar.css";
import Date from "./Date";
import { useState } from "react";
import { useEffect } from "react";
export default function TaskBar(props) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function handleFormSubmit(e) {
    if (data.title !== "" || data.discrpt !== "") {
      setTodos([
        ...todos,
        {
          data,
          id: todos.length===0?1:todos[todos.length-1].id+1,
        },
      ]);
      props.onClick();
      window.location.reload(false);
    }
  }
  const [data, changedata] = useState({
    nam: props.nam,
    description: props.description,
    title: props.title,
    discript: props.discript,
  });
  const inputevent = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    changedata((prevalue) => {
      return {
        ...prevalue,
        [name]: val,
      };
    });
  };
  function handleDeleteClick(idd) {
    console.log(idd);
    const filtered=(todos.filter(ts=>{
      return ts.id !== idd
    }
    ));
   
  
   window.location.reload(false);
  props.onClick();
  setTodos(filtered);
  }
  function handleEditInputChange(idd) {
    const updatedItem =todos.map(ts => {
      return ts.id === idd ? {data,id:idd} :ts;
    });
    setTodos(updatedItem);
    props.onClick();
   window.location.reload(false);
  }
  const purpose = () => {
    if(props.task==="edit")
    {
      return (
        <>
          <div className="text-center">
            <label>
            <button
              type="button"
              className="btn btn-primary w-50 "
              onClick={()=>handleDeleteClick(props.id)}
            >
              Delete
            </button>
            </label>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-50 "
              onClick={()=>handleEditInputChange(props.id)}
            >
              Edit
            </button>
          </div>
        </>
      );
    }
    else
    {
      return (
        <>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-50 "
              onClick={handleFormSubmit}
            >
              {props.task}
            </button>
          </div>
        </>

      );
    }
    }

  return (
    <>
      <div className="card" Style="width: 25rem ,border:none">
        <div className="card-body color">
          <div className="form-group">
            <h5 className="card-title  ">{data.nam}</h5>
            <br />
            <label>
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={data.title}
                onChange={inputevent}
                name="title"
              ></input>
            </label>
            <label>
              <input
                className="form-control form-control-lg "
                size="50"
                type="text"
                placeholder="Description"
                value={data.discript}
                name="discript"
                onChange={inputevent}
              ></input>
            </label>
            <label>
              <h6>{data.description}</h6>
            </label>
            <label>
              <Date />
            </label>
            <label>{purpose()}</label>
          </div>
        </div>
      </div>
    </>
  );
}
