import { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import "../css/pointpage.css";

const defaultTeams = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Hold ${i + 1}`,
  score: 0,
}));

export default function PointPage() {
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");

    return savedTeams ? JSON.parse(savedTeams) : defaultTeams;
  });

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

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

  // ændrer holdnavne
  function changeName(id, newName) {
    setTeams((prev) =>
      prev.map((team) => (team.id === id ? { ...team, name: newName } : team)),
    );
  }

  // nulstil holdene
  function resetTeams() {
    setTeams(defaultTeams);
  }

  return (
    <>
      <div className="point-page">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            addPoint={addPoint}
            removePoint={removePoint}
            changeName={changeName}
          />
        ))}
      </div>

      <div className="nulstil-btn-container">
        <button className="nulstil-btn" onClick={resetTeams}>
          Nulstil alle hold
        </button>
      </div>
    </>
  );
}
