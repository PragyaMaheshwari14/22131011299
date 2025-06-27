import React, { useState } from 'react';
import { UrlForm } from '../components/UrlForm';
import { UrlList } from '../components/UrlList';
import { generateCode } from '../utils/helpers';
import { saveUrl } from '../services/storageService';

export default function Home() {
  const [urls, setUrls] = useState<string[]>([]);

  const handleShorten = (originalUrl: string) => {
    const code = generateCode();

    // 🔁 FIX: Use actual domain dynamically
    const shortened = `${window.location.origin}/${code}`;

    // Save code -> originalUrl
    saveUrl(code, originalUrl);

    setUrls((prev) => [...prev, shortened]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">URL Shortener</h1>
      <UrlForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
}
