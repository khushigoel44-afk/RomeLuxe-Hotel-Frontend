import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HotelList from './components/HotelList';
import { useFetchHotels } from './hooks/useFetchHotels';

export default function App() {
  const { hotels, loading, error } = useFetchHotels();

  // Search & Filter state variables
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minRating, setMinRating] = useState('0');
  const [sortBy, setSortBy] = useState('featured');

  // Dynamically compute unique locations from the API hotels data list
  const uniqueLocations = React.useMemo(() => {
    if (!hotels || hotels.length === 0) return [];
    return Array.from(new Set(hotels.map((h) => h.location)))
      .filter(Boolean)
      .sort();
  }, [hotels]);

  // Handler to clear search states back to default values
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setMinRating('0');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans antialiased text-gray-800">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Hero Welcome banner & filter bar */}
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        minRating={minRating}
        setMinRating={setMinRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
        locations={uniqueLocations}
      />

      {/* Main Content Listings area */}
      <div className="flex-grow">
        <HotelList 
          hotels={hotels}
          loading={loading}
          error={error}
          searchQuery={searchQuery}
          selectedLocation={selectedLocation}
          minRating={minRating}
          sortBy={sortBy}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* Modern Footer */}
      <footer className="border-t border-gray-100 bg-white py-8 text-center text-xs text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RoamLuxe Inc. All rights reserved. Built for Academic Project Review.</p>
        </div>
      </footer>
    </div>
  );
}
