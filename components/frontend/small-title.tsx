import React from 'react';

export default function SmallTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm">
      <span className="mr-2">🎯</span>
      {title}
    </div>
  );
}
