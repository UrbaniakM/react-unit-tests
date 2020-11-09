import * as React from "react";

export const useLoginApi = (url) => {
  const [responseStatus, setResponseStatus] = React.useState(null);

  const makeApiCall = React.useCallback(async () => {
    const response = await fetch(url);

    setResponseStatus(response.status);
  }, [url]);

  return {
    responseStatus,
    makeApiCall
  }
}
  
