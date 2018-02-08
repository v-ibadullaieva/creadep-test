const API_URL = `${process.env.REACT_APP_API_URL}/api`;

const fetchJson = async url => {
  let res = await fetch(url);
  return await res.json();
};

export const fetchBooks = () => fetchJson(`${API_URL}/books`);

export const fetchBook = id => fetchJson(`${API_URL}/books/${id}`);

export const fetchAuthors = () => fetchJson(`${API_URL}/authors`);

export const fetchAuthor = id => fetchJson(`${API_URL}/authors/${id}`);

export const fetchAuthorBooks = id =>
  fetchJson(`${API_URL}/authors/${id}/books`);
