import axios from 'axios';

const bookUrl = 'http://localhost:8000/api/books/';

export const getBook = async (bookId) => {
  const options = {
    headers: { 
      // 'Content-Type': 'application/json' 
      'Accept':'application/json'
    },
    auth: {
      username: 'admin',
      password: 'admin'
    }
  };

  const res = await axios.get(`${bookUrl}${bookId}`, options)
  return res.data;
}