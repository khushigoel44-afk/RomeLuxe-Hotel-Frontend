import React from 'react';
import { Search, MapPin, Star, ArrowUpDown, ChevronDown } from 'lucide-react';

export default function Hero({ 
  searchQuery, setSearchQuery, 
  selectedLocation, setSelectedLocation, 
  minRating, setMinRating,
  sortBy, setSortBy,
  locations = []
}) {

  // Helper to translate sort value to human readable premium labels
  const getSortLabel = (val) => {
    switch (val) {
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'rating-desc': return 'Top Rated';
      default: return 'Featured';
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Blurred background layer of luxury resort at dusk with feathered radial gradient mask */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-72 sm:h-80 -z-10 rounded-[2.5rem] overflow-hidden blur-[2px] opacity-35 border border-indigo-100/20 shadow-inner">
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(circle, rgba(250,249,246,0) 0%, rgba(250,249,246,0.6) 65%, rgba(250,249,246,1) 100%)'
          }}
        />
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80" 
          alt="Luxury Resort dusk view" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Title & Tagline */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50/80 backdrop-blur-xs px-3.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/10 mb-5 animate-fade-in shadow-xs">
          ✨ Premium Hotel Collection
        </span>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-[1.1]">
          Discover Your <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 bg-clip-text text-transparent font-black block sm:inline">Next Stay</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-medium leading-relaxed">
          Explore our handpicked selection of top-rated hotels, cozy retreats, and luxury resorts at the best guaranteed prices.
        </p>

        {/* Search & Filter Container (Polished control panel with glassmorphism) */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl md:rounded-full bg-white/75 backdrop-blur-xl border border-white/50 p-2 md:p-2.5 shadow-2xl shadow-gray-200/50">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4 items-center">
            
            {/* Search Input */}
            <div className="relative flex items-center px-4 py-2.5 rounded-xl md:rounded-full bg-white/50 border border-transparent focus-within:border-indigo-100/50 focus-within:bg-white transition-all duration-200 md:border-r md:border-gray-100 md:rounded-none">
              <Search className="text-indigo-500 stroke-[2.5] mr-3 flex-shrink-0" size={18} />
              <div className="flex-1 text-left">
                <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Search Hotels</label>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where to?" 
                  className="w-full text-xs font-bold text-gray-700 placeholder-gray-400 bg-transparent outline-none mt-0.5"
                />
              </div>
            </div>

            {/* Location Select */}
            <div className="relative flex items-center px-4 py-2.5 rounded-xl md:rounded-full bg-white/50 border border-transparent focus-within:border-indigo-100/50 focus-within:bg-white transition-all duration-200 md:border-r md:border-gray-100 md:rounded-none">
              <MapPin className="text-rose-500 stroke-[2.5] mr-3 flex-shrink-0" size={18} />
              <div className="flex-1 text-left relative">
                <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Location</label>
                <div className="flex items-center justify-between mt-0.5 cursor-pointer">
                  <select 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full text-xs font-bold text-gray-700 bg-transparent outline-none cursor-pointer appearance-none pr-4"
                  >
                    <option value="">All Locations</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="text-gray-400 absolute right-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Min Rating Select */}
            <div className="relative flex items-center px-4 py-2.5 rounded-xl md:rounded-full bg-white/50 border border-transparent focus-within:border-indigo-100/50 focus-within:bg-white transition-all duration-200 md:border-r md:border-gray-100 md:rounded-none">
              <Star className="text-amber-500 fill-amber-400 stroke-[2.5] mr-3 flex-shrink-0" size={18} />
              <div className="flex-1 text-left relative">
                <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Rating</label>
                <div className="flex items-center justify-between mt-0.5 cursor-pointer">
                  <select 
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                    className="w-full text-xs font-bold text-gray-700 bg-transparent outline-none cursor-pointer appearance-none pr-4"
                  >
                    <option value="0">Any Rating</option>
                    <option value="4.5">4.5+ Excellent</option>
                    <option value="4.0">4.0+ Very Good</option>
                    <option value="3.5">3.5+ Good</option>
                  </select>
                  <ChevronDown size={12} className="text-gray-400 absolute right-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sort Order (Rich Indigo Gradient Button with Select overlay) */}
            <div className="relative flex items-center justify-between px-5 py-2.5 rounded-xl md:rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-100/50 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3">
                <ArrowUpDown className="text-indigo-200 stroke-[2.5] flex-shrink-0" size={16} />
                <div className="text-left">
                  <label className="block text-[8px] font-bold text-indigo-200 uppercase tracking-wider">Sort Listings</label>
                  <span className="block text-xs font-bold text-white mt-0.5">{getSortLabel(sortBy)}</span>
                </div>
              </div>
              <ChevronDown size={14} className="text-indigo-200" />
              
              {/* Native select overlaid invisibly to capture clicks */}
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer [&>option]:text-gray-800"
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
    </section>
  );
}
