import Item from "./Item";

export default function Groceries({ items, onDeleteItem, onToggleItem }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Number of Item</th>
          <th>Item</th>
          <th>Check</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </tbody>
    </table>
  );
}
