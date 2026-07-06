import React from 'react';
import { Search, MapPin, Calendar, Users, Star, ArrowUpDown } from 'lucide-react';

export default function Hero({ 
  searchQuery, setSearchQuery, 
  selectedLocation, setSelectedLocation, 
  minRating, setMinRating,
  sortBy, setSortBy,
  locations = []
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-24">
      {/* Background blobs for premium design */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      <div className="absolute top-10 right-1/4 -z-10 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title & Tagline */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/10 mb-4 animate-fade-in">
          ✨ Premium Hotel Collection
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Discover Your <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Next Stay</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our handpicked selection of top-rated hotels, cozy retreats, and luxury resorts at the best guaranteed prices.
        </p>

        {/* Search & Filter Container */}
        <div className="mt-10 mx-auto max-w-5xl rounded-3xl border border-gray-100 bg-white p-4 shadow-xl shadow-gray-100/70">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-2">
            
            {/* Search Input */}
            <div className="relative flex items-center px-3 py-2 rounded-2xl bg-gray-50 border border-transparent focus-within:border-indigo-100 focus-within:bg-white transition-all duration-200">
              <Search className="text-gray-400 mr-2 flex-shrink-0" size={18} />
              <div className="flex-1 text-left">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Search Hotels</label>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you going?" 
                  className="w-full text-sm font-semibold text-gray-800 placeholder-gray-400 bg-transparent outline-none mt-0.5"
                />
              </div>
            </div>

            {/* Location Select */}
            <div className="relative flex items-center px-3 py-2 rounded-2xl bg-gray-50 border border-transparent focus-within:border-indigo-100 focus-within:bg-white transition-all duration-200">
              <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={18} />
              <div className="flex-1 text-left">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none mt-0.5 cursor-pointer appearance-none"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Min Rating Select */}
            <div className="relative flex items-center px-3 py-2 rounded-2xl bg-gray-50 border border-transparent focus-within:border-indigo-100 focus-within:bg-white transition-all duration-200">
              <Star className="text-amber-500 mr-2 flex-shrink-0" size={18} />
              <div className="flex-1 text-left">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Minimum Rating</label>
                <select 
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none mt-0.5 cursor-pointer"
                >
                  <option value="0">Any Rating</option>
                  <option value="4.5">4.5+ Excellent</option>
                  <option value="4.0">4.0+ Very Good</option>
                  <option value="3.5">3.5+ Good</option>
                </select>
              </div>
            </div>

            {/* Sort Order */}
            <div className="relative flex items-center px-3 py-2 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all duration-200">
              <ArrowUpDown className="text-indigo-200 mr-2 flex-shrink-0" size={18} />
              <div className="flex-1 text-left">
                <label className="block text-[10px] font-bold text-indigo-200 uppercase tracking-wider">Sort Listings</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full text-sm font-semibold bg-transparent outline-none mt-0.5 cursor-pointer text-white [&>option]:text-gray-800"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Top Rated</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
