import { useRef, useState } from "react";

export default function Player() {
  const playeNameRef = useRef();
  const [playerName, setplayerName] = useState(null);

  function handleClick() {
    setplayerName(playeNameRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playeNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
