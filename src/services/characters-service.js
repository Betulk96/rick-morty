const API_BASE_URL = "https://rickandmortyapi.com/api";


export async function fetchData(url) {
  const response = await fetch(url);
 
  return await response.json();
}


export async function getAllCharacters(page = 1) {
  const url = `${API_BASE_URL}/character?page=${page}`;
  return fetchData(url);
}

export async function filterCharacters(filters = {}) {
    const { name, status, species, type, gender, page = 1 } = filters;
  
    
    const queryParams = new URLSearchParams();
  
    if (name) queryParams.append('name', name);
    if (status) queryParams.append('status', status);
    if (species) queryParams.append('species', species);
    if (type) queryParams.append('type', type);
    if (gender) queryParams.append('gender', gender);    
    
    queryParams.append('page', page);
  
    const url = `${API_BASE_URL}/character/?${queryParams.toString()}`;
    return fetchData(url);
  }


export async function getCharacterById(id) {
  const url = `${API_BASE_URL}/character/${id}`;
  return fetchData(url);
}


export async function getAllEpisodes(page = 1) {
  const url = `${API_BASE_URL}/episode?page=${page}`;
  return fetchData(url);
}


export async function getEpisodeById(id) {
  const url = `${API_BASE_URL}/episode/${id}`;
  return fetchData(url);
}



