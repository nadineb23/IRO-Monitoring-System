// SearchBar.js
// This file would be imported by another JS file in a typical React setup.
// For your current setup with @babel/standalone directly in HTML,
// you would typically still copy-paste this function into your main <script> tag.

import React from 'react'; // Essential for any React component

function SearchBar({ darkMode }) {
    return (
        <div className="mb-8 mt-4 ml-16 flex items-center">
            <input
                type="text"
                placeholder="Search documents..."
                className={`
                    w-full max-w-lg p-3 pl-4 rounded-full shadow-md
                    ${darkMode
                        ? 'bg-gray-800 text-gray-200 border border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                        : 'bg-white text-gray-700 border border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }
                    focus:outline-none focus:ring-1
                `}
            />
            <i className="fas fa-search -ml-8 text-gray-400"></i>
        </div>
    );
}

export default SearchBar; // This makes the component available for import