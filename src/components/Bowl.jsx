export default function Bowl({ score }) {
  return (
    <div className="bowl">
      {Array.from({ length: score }).map((_, index) => (
        <div key={index} className="chip" />
      ))}
    </div>
  );
}
