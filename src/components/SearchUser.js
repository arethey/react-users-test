import React from "react";

const SearchUser = ({ searchField, handleSearch }) => {
  return (
    <div>
      <label
        htmlFor="searchUser"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="searchUser"
          className="peer h-12 p-3 w-full border-2 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
          placeholder="Search Members"
          value={searchField}
          onChange={handleSearch}
        />
        <label
          htmlFor="password"
          className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:left-3 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm"
        >
          Search Members
        </label>
      </div>
    </div>
  );
};

export default SearchUser;
