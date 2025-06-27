import React from 'react';

export const UrlList = ({ urls }: { urls: string[] }) => (
  <ul className="list-disc pl-6">
    {urls.map((url, index) => (
      <li key={index}>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </li>
    ))}
  </ul>
);
