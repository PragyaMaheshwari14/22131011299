import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recordClick } from '../services/analyticsService';
import { getUrl } from '../services/storageService';

export default function RedirectHandler() {
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    if (!code) return;

    const longUrl = getUrl(code); // fetch from localStorage
    if (longUrl) {
      recordClick(code);
      window.location.href = longUrl;
    }
  }, [code]);

  return <div>Redirecting...</div>;
}
