import { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  function handleDark(e) {
    setDark(e.target.checked); // Dark Mode Toggle

    let indexhtml = document.getElementById("indexhtml");

    e.target.checked
      ? indexhtml.classList.add("dark")
      : indexhtml.classList.remove("dark");
  }

  return (
    <fieldset className="form-group">
      <label className="paper-switch-2">
        <input
          id="darkmode"
          name="darkmode"
          type="checkbox"
          checked={dark}
          onChange={handleDark}
        />
        <span className="paper-switch-slider round"></span>
      </label>
      <label htmlFor="darkmode" className="paper-switch-2-label">
        Dark Mode Switch
      </label>
    </fieldset>
  );
}
