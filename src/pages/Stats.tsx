import React from 'react';
import { UrlStatsTable } from '../components/UrlStatsTable';

export default function Stats() {
  const stats = [
    { url: 'https://sho.rt/abc123', clicks: 10 },
    { url: 'https://sho.rt/xyz789', clicks: 5 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">URL Statistics</h2>
      <UrlStatsTable stats={stats} />
    </div>
  );
}
