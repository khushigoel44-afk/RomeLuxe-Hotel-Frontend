import React from 'react';
import { Compass, User, Globe, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand/Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition-transform group-hover:rotate-12 duration-300">
            <Compass size={22} className="animate-spin-slow" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Roam<span className="text-indigo-600">Luxe</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 pb-1 pt-0.5 transition-colors">
            Discover
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Hotels
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Trips
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Inspirations
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <Globe size={14} />
            <span>USD</span>
          </button>
          
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 pr-3 shadow-xs hover:shadow-md transition-all duration-200">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <User size={16} />
            </div>
            <span className="text-xs font-semibold text-gray-700 hidden sm:inline">Sign In</span>
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
