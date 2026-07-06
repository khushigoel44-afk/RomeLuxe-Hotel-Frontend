import React from 'react';

export default function Loader() {
  // Render a grid of 8 skeleton cards for high-fidelity loading state representation
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div 
          key={index}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs p-3 flex flex-col h-full animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="aspect-[4/3] w-full rounded-xl bg-gray-200" />
          
          {/* Body Content */}
          <div className="mt-4 flex-1 space-y-3 px-1">
            {/* Rating and Location skeleton line */}
            <div className="flex items-center justify-between">
              <div className="h-4 w-2/5 rounded bg-gray-200" />
              <div className="h-4 w-1/5 rounded bg-gray-200" />
            </div>

            {/* Hotel Name skeleton */}
            <div className="h-6 w-4/5 rounded bg-gray-200" />

            {/* Description skeleton lines */}
            <div className="space-y-1.5 pt-1">
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-5/6 rounded bg-gray-200" />
            </div>

            {/* Pricing & Button Area */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
              <div>
                <div className="h-3 w-12 rounded bg-gray-200 mb-1" />
                <div className="h-5 w-20 rounded bg-gray-200" />
              </div>
              <div className="h-9 w-24 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
