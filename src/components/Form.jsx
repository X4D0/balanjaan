import { useState } from "react";

export default function Forms({ onAddItem }) {
  const id = Date.now(); // To generate ID of an item
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // So it didn't messed up with the url

    if (!name) return;

    const newItem = { item: name, quantity: amount, checked: false, id: id };
    onAddItem(newItem);

    setName("");
    setAmount("");
  }

  return (
    <form className="row flex-center" onSubmit={handleSubmit}>
      <div className="col col-4">
        <div className="form-group">
          <label htmlFor="quantity">How Many?</label>
          <input
            className="input-block"
            type="number"
            placeholder="ex: 1000"
            id="quantity"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="col col-4">
        <div className="form-group">
          <label htmlFor="item">What Item?</label>
          <input
            className="input-block"
            type="text"
            placeholder="ex: Tusuk Sate"
            id="item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <button>Add Item</button>
    </form>
  );
}
