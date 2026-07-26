import Bowl from "./Bowl";
import "../css/teamcard.css";

export default function TeamCard({ team, addPoint, removePoint, changeName }) {
  return (
    <div className="team-card">
      <input
        className="team-name"
        type="text"
        value={team.name}
        onChange={(e) => changeName(team.id, e.target.value)} //mulighed for at ændre holdnavn
      />
      <Bowl score={team.score} />
      <p>{team.score} chips</p>
      <div className="buttons">
        <button onClick={() => removePoint(team.id)}>-</button>
        <button onClick={() => addPoint(team.id)}>+</button>
      </div>
    </div>
  );
}
