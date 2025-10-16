// import { createContext, useState } from 'react';
import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {  // state
  count: 0,
//   books: [],
//   book: null, 
//   showDetail: false,  
//   showReviewForm: false
};
  
function reducer(state, action) { 
  switch(action.type) {
    // case 'filter':
    // case 'showBook':
    //   return {...state, ...action.payload}
    // case 'addReview':
    // case 'showReviewForm':
    //   return {...state, showReviewForm: action.payload}
    // default:
    //   return initialState

	  case 'increment':
	    return { ...state, count: state.count + 1 };
	  case 'decrement':
	    return { ...state, count: state.count - 1 };
	  default:
	    return state;
  }
}

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
  // const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(bookReducer, initState)

  return (
	  <AppContext.Provider 
		  value={{ 
		    // count, setCount 
		    state, dispatch
		  }}
	  >
		  {children}
	  </AppContext.Provider>
  );
};