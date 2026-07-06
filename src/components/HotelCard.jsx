import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';

export default function HotelCard({ hotel }) {
  const { name, location, price, thumbnail, rating, description } = hotel;

  // Format price helper
  const formattedPrice = parseFloat(price).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Thumbnail Area with overlay elements */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={thumbnail || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600'} 
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Favorite overlay button */}
        <button className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 backdrop-blur-xs text-gray-700 hover:bg-white hover:text-red-500 transition-colors shadow-xs">
          <Heart size={16} />
        </button>

        {/* Floating rating badge */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-lg bg-indigo-600/90 backdrop-blur-xs px-2 py-1 text-xs font-bold text-white shadow-xs">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className="mt-3 flex-1 flex flex-col justify-between px-1">
        <div>
          {/* Location & Star count representation */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1 font-medium">
              <MapPin size={13} className="text-gray-400" />
              {location}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  className={i < Math.round(rating) ? "fill-amber-500 text-amber-500" : "text-gray-200"}
                />
              ))}
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="mt-2 text-base font-bold leading-tight text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>

          {/* Description summary */}
          <p className="mt-1.5 text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {description || 'No description available for this premium lodging property.'}
          </p>
        </div>

        {/* Bottom actions: Pricing and CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-3">
          <div className="text-left">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wide">Price / Night</span>
            <span className="text-lg font-extrabold text-indigo-600">${formattedPrice}</span>
          </div>
          
          <button className="rounded-xl bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-600 hover:text-white active:scale-95 transition-all duration-200 cursor-pointer shadow-xs">
            Book Now
          </button>
        </div>

      </div>
    </article>
  );
}
