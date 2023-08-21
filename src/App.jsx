import { useState } from "react";
import Nav from "./components/navbar";
import Forms from "./components/Form";
import Groceries from "./components/Groceries";
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  /*
   * TODO: SESSION STORAGE
   */
  function getData(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored || stored === "undefined") {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  const [items, setItems] = useState(getData("grocery", []));
  // const checkItem = items.some((element) => true); // Check if there are items or not

  useEffect(() => {
    sessionStorage.setItem("grocery", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]); // Create an Array and push old and new items
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // Get all item except item with X id
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    ); // Iterate items and find item with id, if found create new object of items with 'checked' value is the opposite of current value. The rest let it be
  }

  return (
    <>
      <Nav />
      <div className="container paper">
        <Forms onAddItem={handleAddItem} />
        {Object.keys(items).length > 0 ? (
          <Groceries
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ) : (
          <div className="row flex-center">
            <h1>Write your groceries here :D</h1>
          </div>
        )}
        <DarkMode />
      </div>
      <Footer />
    </>
  );
}
