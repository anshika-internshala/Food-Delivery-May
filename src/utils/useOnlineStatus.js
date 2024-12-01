import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    return () => {
      window.removeEventListener("online", function () {
        console.log("Online Event Listener Removed");
      });

      window.removeEventListener("offline", function () {
        console.log("Offline Event Listener Removed");
      });
    };
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
