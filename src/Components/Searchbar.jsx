import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Search for hotels or locations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-80 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
