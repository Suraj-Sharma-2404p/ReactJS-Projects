import React, { useState,useEffect } from "react";
import "./style.css";

// to get data from local storage
const fromLocalStorage = () =>{
    let list = localStorage.getItem('list')
    if (list){
        return JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }
}


// definition of hooks
const Onlinebookstore = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(fromLocalStorage());

//   Add book name
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
//   delete book name
const deleteItem =(id) =>{
    const updatedList = items.filter((elem, ind) =>{
        return ind != id
    })
    setItems(updatedList)
}

// Remove all book name
const removeAll = () => {
    setItems([])
}

// using local storage
useEffect(() => {
    localStorage.setItem('list',JSON.stringify(items))
  
}, [items])


  return (
    <>
      <div className="mainContainer">
        <div className="childContainer">
          <figure>
            <img src="image/library logo.jpg" alt="" width="120px" />
            <figcaption>Add your books here!</figcaption>
          </figure>
          <h3>Online BookStore</h3>
        </div>
        <div className="addItems">
          <input
            type="text"
            placeholder="enter book name to add"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i class="fa fa-plus" title="add new book" onClick={addItem}></i>
        </div>
        <div className="showItems">
          {items.map((elem, ind) => {
            return (
              <>
                <div className="eachItem" key = {ind}>
                  <span>{elem}</span>
                  <i class="fa fa-trash-alt" title="delete item" onClick= {() => deleteItem(ind) }></i>
                </div>
              </>
            );
          })}
        </div>
        <div className="button">
          <button title="Clear List"onClick={removeAll}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default Onlinebookstore;
