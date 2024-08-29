export async function getFilterData() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetchData(url);
    
    
    const { results } = response;
  
    const statuses = [...new Set(results.map(character => character.status))];
    const species = [...new Set(results.map(character => character.species))];
    const types = [...new Set(results.map(character => character.type).filter(type => type))];
    const genders = [...new Set(results.map(character => character.gender))];
    const origins = [...new Set(results.map(character => character.origin.name))];
    const locations = [...new Set(results.map(character => character.location.name))];
  
    return { statuses, species, types, genders, origins, locations };
  }
  