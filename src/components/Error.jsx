import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <>
      <h1 className="font-extrabold">Error Component</h1>
      <h2 className="font-extrabold">Page not found</h2>
      <h1 className="font-extrabold">Status: {err.status}</h1>
      <h1 className="font-extrabold">{err.data}</h1>
    </>
  );
}

export default Error;
