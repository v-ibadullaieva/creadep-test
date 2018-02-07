const API_URL = `${process.env.REACT_APP_API_URL}/api/books`;

export const fetchBooks = () => fetch(`${API_URL}`).then(res => res.json());
