import React, { useState } from 'react';
import { Compass, Globe, Menu } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ['Discover', 'Hotels', 'Trips'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand/Logo */}
        <div className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition-transform group-hover:rotate-12 duration-300">
            <Compass size={22} className="animate-spin-slow" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Roam<span className="text-indigo-600">Luxe</span>
          </span>
        </div>

        {/* Centered Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
                  isActive 
                    ? 'text-indigo-600 bg-indigo-50/80 font-semibold' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {/* Right Actions - USD element removed */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Mobile menu button */}
          <button className="md:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
