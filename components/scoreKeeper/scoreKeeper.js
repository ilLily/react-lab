export default function ScoreKeeper({ values, clickHandler }) {
  console.log(values);
  console.log(clickHandler);
  return (
    <li>
      Player{values.p}:{' '}
      <span style={{ fontWeight: 'bold' }}>{values.score}</span>
      <button
        onClick={() => {
          clickHandler(values.id);
        }}
      >
        +1
      </button>
    </li>
  );
}
