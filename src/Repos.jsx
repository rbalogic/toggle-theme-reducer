import { useEffect, useState } from "react";

const REPO_EVENTS_URL =
  "https://api.github.com/repos/rbalogic/toggle-theme-reducer/events";

const Repos = () => {
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchLatestEvent = async () => {
      const response = await fetch(REPO_EVENTS_URL);
      const events = await response.json();
      setLatestEvent(events?.[0] ?? null);
    };
    fetchLatestEvent();
  }, []);

  return (
    <div>
      <h1>Latest Repo Activity</h1>
      {latestEvent && (
        <div>
          <p>
            <strong>Event:</strong> {latestEvent.type}
          </p>
          <p>
            <strong>Actor:</strong> {latestEvent.actor?.login ?? "Unknown"}
          </p>
          <p>
            <strong>When:</strong>{" "}
            {new Date(latestEvent.created_at).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Repos;
