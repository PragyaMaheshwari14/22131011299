import React from 'react';

export const ErrorAlert = ({ message }: { message: string }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
    <strong>Error:</strong> {message}
  </div>
);
