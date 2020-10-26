import React, { useState, useEffect, useCallback } from "react";
import { getPersonsStats } from "./api/api";
import { Stats } from "./api/types";

function App() {
  // Local state of component
  // Keeps the component state between renders
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Stats>();

  // Callbacks
  // Memoizes the loadData callback between renders
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const stats = await getPersonsStats();
      setData(stats);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  // Effects
  // Calls loadData when this component renders
  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Prints out the data in json, formatted to 2 space indent */}
      <pre>{JSON.stringify(data, null, 2) ?? 'No data'}</pre>
    </div>
  );
}

export default App;
