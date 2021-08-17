import React, { useState } from "react";
import "./style2.css";

const Todoapp = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState([]);
  const additem = () => {
    if (!inputdata) {
    } else {
      setItems([...items, inputdata]);
      setInputdata("");
    }
  };
  const delitem =(id) =>{
      const updatedlist = items.filter((elem,index)=>{
        return index != id
      })
      setItems(updatedlist)

  }
  const removeall = () => {
    setItems([])
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="image/todo.png" alt="" width="80px" />
          </figure>
          <figcaption>Add your to-do list here</figcaption>
        </div>
        <div className="additems">
          <input
            type="text"
            placeholder="type to add..."
            value={inputdata}
            onChange={(e) => setInputdata(e.target.value)}
          />
          <i
            class="fas fa-plus"
            title="add item"
            onClick={additem}
            cursor="pointer"
          ></i>
        </div>
        <div className="showitems">
          {items.map((elem, index) => {
            return (
              <div className="eachitem" key={index}>
                <span>{elem}</span>
                <i class="far fa-trash-alt" title="delete item" onClick={()=>delitem(index)}></i>
              </div>
            );
          })}
        </div>
        <div className="showitems">
          <button onClick = {removeall}>
            <span> Clear All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todoapp;
