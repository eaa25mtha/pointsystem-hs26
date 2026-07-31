import { useState } from "react";
import Bowl from "./Bowl";
import "../css/teamcard.css";

export default function TeamCard({ team, changeName, changeScore, isLeading }) {
  const [pointsToAdd, setPointsToAdd] = useState("");
  return (
    <div className={`team-card ${isLeading ? "leader-card" : ""}`}>
      {isLeading && <div className="leader">👑</div>}
      <input
        className="team-name"
        type="text"
        value={team.name}
        onChange={(e) => changeName(team.id, e.target.value)} //mulighed for at ændre holdnavn
      />
      <Bowl score={team.score} />
      <p className="point-font">{team.score} point</p>

      <div className="score-input">
        <input
          className="score-box"
          type="text"
          inputMode="numeric"
          placeholder=""
          value={pointsToAdd}
          onChange={(e) => setPointsToAdd(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = Number(pointsToAdd);

              if (!isNaN(value) && value !== 0) {
                changeScore(team.id, value);
                setPointsToAdd("");
              }
            }
          }}
        />
      </div>
    </div>
  );
}
