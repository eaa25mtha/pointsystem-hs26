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

  // ændrer holdnavne
  function changeName(id, newName) {
    setTeams((prev) =>
      prev.map((team) => (team.id === id ? { ...team, name: newName } : team)),
    );
  }

  //ændrer scoren
  function changeScore(id, pointsToAdd) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id
          ? {
              ...team,
              score: Math.max(0, team.score + pointsToAdd),
            }
          : team,
      ),
    );
  }

  // nulstil holdene
  function resetTeams() {
    setTeams(defaultTeams);
  }

  //det hold der fører fremhæves
  const highestScore = Math.max(...teams.map((team) => team.score));

  return (
    <>
      <div className="point-page">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            changeName={changeName}
            changeScore={changeScore}
            isLeading={
              team.score === highestScore && highestScore > 0
            } /* der vises ikke en vinder når alle har 0 point */
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
