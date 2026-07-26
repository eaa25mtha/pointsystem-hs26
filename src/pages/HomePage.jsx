import { useEffect, useState /*useRef*/ } from "react";
import "../css/homepage.css";
//import bell from "../assets/sounds/bell.mp3";

export default function HomePage() {
  const START_TIME = 300;

  const [time, setTime] = useState(START_TIME);
  const [running, setRunning] = useState(false);

  //const audioRef = useRef(new Audio(bell));

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRunning(false);
          //audioRef.current.play();
          return 0;
        }

        return prev - 1; //nedtælling, kør koden hvert sekund så der trækkes 1 fra hele tiden
      });
    }, 1000);

    return () => clearInterval(timer);
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
    </main>
  );
}
