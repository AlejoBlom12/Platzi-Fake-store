import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "Oops! An unexpected error has occurred.";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error instanceof Response) {
    errorMessage = error.statusText || "Error";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
