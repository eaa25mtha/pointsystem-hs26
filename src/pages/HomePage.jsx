import { useEffect, useState, useRef } from "react";
import "../css/homepage.css";
import MatrixOverlay from "../components/MatrixOverlay";
import bell from "../assets/sounds/bell.mp3";

export default function HomePage() {
  const START_TIME = 2; //8 min

  const [time, setTime] = useState(START_TIME);
  const [running, setRunning] = useState(false);
  const audioRef = useRef(new Audio(bell));
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1;

        if (newTime <= 0) {
          clearInterval(interval);
          setRunning(false);
          audioRef.current.play();
          setShowMatrix(true);
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <main className="nedtælling-container">
      <div className="timer">
        {minutes}:{seconds}
      </div>

      <div className="start-stop-knapperne">
        <button onClick={() => setRunning(true)}>Start</button>

        <button
          onClick={() => {
            setRunning(false);
            setTime(START_TIME);
          }}
        >
          Nulstil
        </button>
      </div>

      {showMatrix && <MatrixOverlay onClose={() => setShowMatrix(false)} />}
    </main>
  );
}
