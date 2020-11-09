import * as React from "react";
import { useLoginApi } from "../hooks/useLoginApi";

export const UserLogin = ({ url }) => {
  const { responseStatus, makeApiCall } = useLoginApi(url);

  return (
    <div>
      Click on the button to log in to <span>{url}</span>
      <button onClick={makeApiCall}>Log me in</button>
      {responseStatus && <div>Response status is <span>{responseStatus}</span></div>}
    </div>
  )
}
