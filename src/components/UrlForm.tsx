import React, { useState } from 'react';

export const UrlForm = ({ onSubmit }: { onSubmit: (url: string) => void }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL"
        required
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Shorten</button>
    </form>
  );
};
