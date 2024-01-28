import { useState } from "react";

export default function Player() {
  const [playerName, setplayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handlechange(event) {
    setSubmitted(false)
    setplayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={handlechange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
