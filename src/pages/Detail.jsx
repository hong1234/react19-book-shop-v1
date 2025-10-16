import { useContext } from 'react'
import { AppContext } from "../AppContext";

// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams, useOutletContext } from 'react-router-dom';

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getBook } from '../api/getBook';
// import { getBooks } from '../api/getBooks';

// const bookUrl = 'http://localhost:8000/api/books/';

const Detail = () => {

  const { state, dispatch } = useContext(AppContext);
  const {bookId} = useParams();

  const { isLoading, data: book } = useQuery({
    queryKey: ['book', bookId],
    queryFn: () => getBook(bookId)
  });

  // const { isLoading, data: book } = useQuery({
  //   queryKey: ['books', bookId], 
  //   queryFn: getBooks
  // });

  // ------------
  // const [book, setBook]     = useState();  // null  default
  
  // const getBook = async () => {
  //   const options = {
  //     headers: { 
  //       // 'Content-Type': 'application/json' 
  //       'Accept':'application/json'
  //     },
  //     auth: {
  //       username: 'admin',
  //       password: 'admin'
  //     }
  //   };
  //   try {
  //     const res = await axios.get(`${bookUrl}${bookId}`, options)
  //     setBook(res.data);
  //   } catch (error) {
  //     // throw(error);
  //     console.log(error) 
  //   }
  // }

  // useEffect(() => {
  //   getBook(); 
  // }, [bookId]);
  // ----------------

  console.log('detail rendering ..')
  return (
    (book == null) 
    ? 
    null 
    :
    <div>
      <div className="card text-white bg-success mb-3">
        <div className="card-header">Detail</div>
        <div className="card-body">
          <p className="card-title fw-bold">{book.title}</p>
          <p className="card-text">{book.content}</p>
          <button onClick={() => dispatch({type:'add', payload:{id: book.id, title: book.title}})}>add to cart</button>
        </div>
      </div>
    </div>
  )

}

export default Detail;