import React from 'react';
import HotelCard from './HotelCard';
import Loader from './Loader';
import { AlertCircle, RotateCcw, Building2 } from 'lucide-react';

export default function HotelList({ 
  hotels, 
  loading, 
  error, 
  searchQuery, 
  selectedLocation, 
  minRating, 
  sortBy,
  onResetFilters 
}) {
  
  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-48 rounded bg-gray-200 animate-pulse" />
        </div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-4 ring-1 ring-rose-200">
          <AlertCircle size={28} />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Failed to Load Hotels</h2>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
          We encountered an issue fetching the latest hotel options from our server. Please check your network connection or try again.
        </p>
        <div className="mt-4 text-xs font-mono text-rose-500 bg-rose-50/50 p-2 rounded-lg inline-block border border-rose-100">
          Error: {error}
        </div>
        <div className="mt-6">
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>Reload Page</span>
          </button>
        </div>
      </div>
    );
  }

  // Apply filters on client-side
  let filtered = hotels.filter((hotel) => {
    // 1. Search Query filter (matches name, location, or description)
    const matchesSearch = searchQuery 
      ? (hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
         (hotel.description && hotel.description.toLowerCase().includes(searchQuery.toLowerCase())))
      : true;

    // 2. Location filter
    const matchesLocation = selectedLocation 
      ? hotel.location.toLowerCase() === selectedLocation.toLowerCase()
      : true;

    // 3. Min Rating filter
    const matchesRating = minRating 
      ? hotel.rating >= parseFloat(minRating) 
      : true;

    return matchesSearch && matchesLocation && matchesRating;
  });

  // Apply sorting
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortBy === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* List Header/Metadata */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Building2 size={20} className="text-indigo-600" />
            <span>Available Stays</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Showing {filtered.length} of {hotels.length} hotels matches.
          </p>
        </div>
        
        {/* Reset button if filters are active */}
        {(searchQuery || selectedLocation || parseFloat(minRating) > 0) && (
          <button 
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Grid List */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-dashed border-gray-200 py-16 text-center max-w-xl mx-auto my-6 px-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-400 mb-3">
            <Building2 size={24} />
          </div>
          <h3 className="text-sm font-bold text-gray-900">No hotels match your filters</h3>
          <p className="mt-1 text-xs text-gray-500 max-w-xs mx-auto">
            Try adjusting your search criteria, removing filters, or searching for another location.
          </p>
          <div className="mt-4">
            <button 
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <span>Reset Search Criteria</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
