"use client"
import { getAllCharacters } from '@/services/characters-service';
import { useEffect, useState } from 'react';


const FilterDataViewer = () => {
  const [filterData, setFilterData] = useState({
    status: [],
    species: [],
    type: [],
    gender: [],
    origin: [],
    location: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters();
        const filters = {
          status: [],
          species: [],
          type: [],
          gender: [],
          origin: [],
          location: []
        };

        data.results.forEach((character) => {
          if (!filters.status.includes(character.status)) {
            filters.status.push(character.status);
          }
          if (!filters.species.includes(character.species)) {
            filters.species.push(character.species);
          }
          if (character.type && !filters.type.includes(character.type)) {
            filters.type.push(character.type);
          }
          if (!filters.gender.includes(character.gender)) {
            filters.gender.push(character.gender);
          }
          if (!filters.origin.includes(character.origin.name)) {
            filters.origin.push(character.origin.name);
          }
          if (!filters.location.includes(character.location.name)) {
            filters.location.push(character.location.name);
          }
        });

        setFilterData(filters);
      } catch (error) {
        console.error('Error fetching filter data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Filter Data:</h3>
      <pre>{JSON.stringify(filterData, null, 2)}</pre>
    </div>
  );
};

export default FilterDataViewer;
