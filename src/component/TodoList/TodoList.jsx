import { useState } from 'react'
import './TodoList.scss'

function TodoList() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [showEdit, setShowEdit] = useState(-1)
  const [updatedText, setUpdatedText] = useState('')

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert('Press enter an item.')
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    }

    // Add new item to items array
    setItems((oldList) => [...oldList, item])

    // Reset newItem back to original state
    setNewItem('')
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id)
    setItems(newArray)
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id)

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
    }

    deleteItem(id)

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem])
    setUpdatedText('')
    setShowEdit(-1)
  }

  // Main part of app
  return (
    <div className="todolist">
      <h2>Simple to-do-list</h2>
      <div className="todolist-container">
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button className="button" onClick={() => addItem()}>
          Add
        </button>

        <ul>
          {items.map((item) => {
            return (
              <div>
                <li key={item.id} onClick={() => setShowEdit(item.id)}>
                  {item.value}
                  <button className="button" onClick={() => deleteItem(item.id)}>
                    ❌
                  </button>
                </li>

                {showEdit == item.id && (
                  <div>
                    <input
                      type="text"
                      value={updatedText}
                      onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <button className="button" onClick={() => editItem(item.id, updatedText)}>
                      Update
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
