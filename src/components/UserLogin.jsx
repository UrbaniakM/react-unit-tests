import * as React from "react";

export const UserLogin = ({ url }) => {
  const [responseStatus, setResponseStatus] = React.useState(null);

  const makeApiCall = React.useCallback(async () => {
    const response = await fetch(url);

    setResponseStatus(response.status);
  }, [url]);

  return (
    <div>
      Click on the button to log in to <span>{url}</span>
      <button onClick={makeApiCall}>Log me in</button>
      {responseStatus && <div>Response status is <span>{responseStatus}</span></div>}
    </div>
  )
}
