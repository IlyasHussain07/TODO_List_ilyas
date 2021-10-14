import React, { useState } from 'react'
import Styles from './App.module.css'

import { TodoCompList } from './TodoCompList'
import { TodoInCompList } from './TodoInCompList'

let names = [
  {
    _id: 1589,
    name: "Learn Html",
    isCompleted: false
  },
  {
    _id: 1590,
    name: "Learn Css",
    isCompleted: false
  },
  {
    _id: 1591,
    name: "Learn Js",
    isCompleted: false
  },
  {
    _id: 1582,
    name: "Learn React",
    isCompleted: false
  },
]

function App() {

  // const [isCurrentState, setIsCurrentState] = useState([])
  const [isCurrentState, setIsCurrentState] = useState(names)

  const [isitemName, setIsItemName] = useState("");

  const handleAddItems = () => {
    setIsCurrentState([
      ...isCurrentState,
      {
        _id: new Date().getTime(),
        name: isitemName,
        isCompleted: false
      }
    ])
    setIsItemName("")
  }

  const handleChangeItems = (_itemId, _itemName) => {
    let updatedList = isCurrentState.map((item) => {
      if (item._id === _itemId) {
        item.name = _itemName;
      }
      return item;
    })
    setIsCurrentState(updatedList)
  }


  const handleCompleteItems = (_itemId) => {
    let updatedList = isCurrentState.map((item) => {
      if (item._id === _itemId) {
        item.isCompleted = true;
      }
      return item;
    })
    setIsCurrentState(updatedList)
  }

  const handleInCompleteItems = (_itemId) => {
    let updatedList = isCurrentState.map((item) => {
      if (item._id === _itemId) {
        item.isCompleted = false;
      }
      return item;
    })
    setIsCurrentState(updatedList)
  }

  const handleDeleteItems = (_itemId) => {
    let updatedList = isCurrentState.filter((item) => {
      return item._id !== _itemId
    })

    setIsCurrentState(updatedList);
  }

  return (
    <div className={Styles.App}>
      <div className={Styles.todoListMaster}>
        <div className={Styles.todoList}>
          <h1>TODO List</h1>
          <div className={Styles.inputBox}>
            <input type="text"
              placeholder="add todo items"
              value={isitemName}
              onChange={(e) => {
                setIsItemName(e.target.value)
              }
              }
            />
            <span
              onClick={handleAddItems}>Add</span>
          </div>
          <TodoInCompList
            CurrentState={isCurrentState.filter((item) => {
              return !item.isCompleted
            })}
            handleChangeItems={handleChangeItems}
            handleCompleteItems={handleCompleteItems}
            handleDeleteItems={handleDeleteItems}
          />
        </div>
        <TodoCompList
          CurrentState={isCurrentState.filter((item) => {
            return item.isCompleted
          })}
          handleInCompleteItems={handleInCompleteItems}
          handleDeleteItems={handleDeleteItems}
        />
      </div>
    </div>
  );
}

export default App;




