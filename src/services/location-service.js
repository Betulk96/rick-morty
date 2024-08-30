const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchData(url) {
  const response = await fetch(url);

  return await response.json();
}
export async function getAllLocation(page = 1) {
  const url = `${API_BASE_URL}/location?page=${page}`;
  return fetchData(url);
}

export async function getLocationById(id) {
  const url = `${API_BASE_URL}/location/${id}`;
  return fetchData(url);
}

export async function getMultipleLocationsByIds(ids) {
  const idsString = ids.join(",");
  const url = `${API_BASE_URL}/location/${idsString}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch locations. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching multiple locations:", error);
    return null;
  }
}
