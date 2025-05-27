import { useState, useEffect } from "react";

const usePolling = (url, interval = 3000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // accept: "*/*",
          },
          body: JSON.stringify({
            ssg_token: "abc",
          }),
        });
        const result = await response.json();
        setData(result);
        // console.log(response.status, await response.text()); // Debug raw response
      } catch (err) {
        setError(err.message);
        // console.error("Error fetching data:", err); // Debugging log
      }
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId); // Cleanup
  }, [url, interval]);

  return { data, error };
};

export default usePolling;
