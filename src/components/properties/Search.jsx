"use client";

import React, { useState } from 'react';
import { getByName } from '@/services/characters-service';
import { swError } from '@/helpers/swal';

const Search = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      swError("Please enter a name to search", "warning");
      return;
    }
    try {
        const results = await getByName(searchTerm);
        console.log("results", results);
      if (results.error) {
        swError("Character not found", "error");
      } else {
        onSearchResults(results.results);
      }
    } catch (error) {
      console.error("Error searching character:", error);
      swError("An error occurred. Please try again later.", "error");
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex mb-4">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default Search;
