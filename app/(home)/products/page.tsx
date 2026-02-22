export default async function ProductList() {
  const time = new Date().toDateString();

  const callError = () => {
    throw new Error("time not found");
  };
  return (
    <>
      {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("my delay");
          }, 2000);
        })
      }
      <h1>{time}</h1>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
      </ul>
      {callError()}
    </>
  );
}
