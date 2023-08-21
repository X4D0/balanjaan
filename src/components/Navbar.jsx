export default function Navbar() {
  return (
    <>
      <div className="container margin-top">
        <nav className="border split-nav">
          <div className="nav-brand">
            <h3>
              <a href="#">Balanjaan</a>
            </h3>
          </div>
          <div className="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1" />
            <label htmlFor="collapsible1">
              {/* This is for the hamburger */}
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </label>
            <div className="collapsible-body">
              <ul className="inline">
                <li>
                  <a href="#">
                    <label htmlFor="modal-1">How to?</label>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Modal />
    </>
  );
}

function Modal() {
  return (
    <>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-1">
            X
          </label>
          <h4 className="modal-title">How to Use</h4>
          <ol>
            <li>Enter quantity of your Items</li>
            <li>Enter your Item</li>
            <li>Click Add</li>
          </ol>
          <p>
            If you`ve put the item into your shopping cart, you can ✔️ the item.
            And if you mistaken the entry, just 🗑️ it :D
          </p>
          <label className="paper-btn" htmlFor="modal-1">
            Nice!
          </label>
        </div>
      </div>
    </>
  );
}
