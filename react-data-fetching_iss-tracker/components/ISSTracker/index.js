import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {

  const { data, error, isLoading, isValidating } = useSWR(
    `https://api.wheretheiss.at/v1/satellites/25544`, {refreshInterval: 5000});

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
