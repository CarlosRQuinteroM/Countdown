import React from "react";

function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <button>Start challenge</button>
      <p className="">time Runnig ... timer inactive</p>
    </section>
  );
}

export default TimerChallenge;
