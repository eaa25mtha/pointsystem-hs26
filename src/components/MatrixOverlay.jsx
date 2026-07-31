import "../css/homepage.css";
import Matrix from "../assets/matrix.png";

export default function MatrixOverlay({ onClose }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <img
          className="matrix-img"
          src={Matrix}
          alt="tabel over hold og næste post"
        />

        <button onClick={onClose}>Luk</button>
      </div>
    </div>
  );
}
