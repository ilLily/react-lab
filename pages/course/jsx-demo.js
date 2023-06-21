export default function Jsx() {
  const element1 = (
    <>
      <h1>Hello</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
  const element2 = (
    <>
      <h1>Hello</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );

  return <>{element2}</>;
}
