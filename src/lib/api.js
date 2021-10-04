import config from "../config";

const retrieveSearch = async (query) => {
  const results = await fetch(`${config.api.search}?q=${query}&_limit=${config.api.limit}`);
  return results.json();
}

const patchStarred = async (id) => {
  const response = await fetch(`${config.api.search}/${id}`, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({starred: true})
  })

  return response.json();
}

const API = {
  search: (query) => retrieveSearch(query),
  patch: (id) => patchStarred(id)
}

export default API;

