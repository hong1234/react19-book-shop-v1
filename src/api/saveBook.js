import axios from 'axios';

const addBookUrl = 'http://localhost:8000/api/books';

export async function saveBook(book) {
  const options = {
    headers: { 
      'Content-Type': 'application/json' 
    },
    auth: {
      username: 'admin',
      password: 'admin'
    }
  };

  const res = await axios.post(`${addBookUrl}`, book, options);
  return res.data;
}





