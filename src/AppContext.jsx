import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initState = {  // state
  books: [],
  count: 0
  // book: null, 
  // showDetail: false,  
  // showReviewForm: false
};

function bookReducer(state, action) { 
  switch(action.type) {
	  case 'add':
      const newBook = {
        id: uuidv4(), 
        dbid: action.payload.id, 
        title: action.payload.title
      }
      const newBooks = [...state.books, newBook]
      return {...state, books: newBooks, count: state.count + 1}

    case 'delete':
      const filteredBookState = state.books.filter( book => book.id !== action.payload.id)
      return {...state, books: filteredBookState, count: state.count - 1}

	  default:
	    return initState;
  }
}

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initState)

  return (
	  <AppContext.Provider 
		  value={{  
		    state, dispatch
		  }}
	  >
		  {children}
	  </AppContext.Provider>
  );
};