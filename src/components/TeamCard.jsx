import Bowl from "./Bowl";
import "../css/teamcard.css";

export default function TeamCard({ team, addPoint, removePoint }) {
  return (
    <div className="team-card">
      <h2>{team.name}</h2>
      <Bowl score={team.score} />
      <p>{team.score} chips</p>
      <div className="buttons">
        <button onClick={() => removePoint(team.id)}>-</button>
        <button onClick={() => addPoint(team.id)}>+</button>
      </div>
    </div>
  );
}
