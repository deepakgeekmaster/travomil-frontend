"use client";
import { useEffect, useState } from 'react';

const SessionPage = ({ onDataFetched }) => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('https://travomile-backend.vercel.app/api/session', {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSessionData(data.sessionData);
        onDataFetched(data.sessionData); // Pass data to parent
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [onDataFetched]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Session Data</h1>
      <pre>{JSON.stringify(sessionData, null, 2)}</pre>
    </div>
  );
};

export default SessionPage;
