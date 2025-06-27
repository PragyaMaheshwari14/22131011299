import React from 'react';

export const UrlStatsTable = ({ stats }: { stats: { url: string; clicks: number }[] }) => (
  <table className="w-full mt-4 border">
    <thead>
      <tr>
        <th className="border p-2">URL</th>
        <th className="border p-2">Clicks</th>
      </tr>
    </thead>
    <tbody>
      {stats.map((stat, idx) => (
        <tr key={idx}>
          <td className="border p-2">{stat.url}</td>
          <td className="border p-2">{stat.clicks}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
