import { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../css/pointpage.css";

export default function PointPage() {
  const [teams, setTeams] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Hold ${i + 1}`,
      score: 0,
    })),
  );

  //tilføj point
  function addPoint(id) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, score: team.score + 1 } : team,
      ),
    );
  }

  //fjern point
  function removePoint(id) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id
          ? {
              ...team,
              score: Math.max(0, team.score - 1),
            }
          : team,
      ),
    );
  }

  return (
    <div className="point-page">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          addPoint={addPoint}
          removePoint={removePoint}
        />
      ))}
    </div>
  );
}
