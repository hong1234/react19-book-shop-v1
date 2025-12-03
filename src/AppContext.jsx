import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const cartState = {
  // state
  books: [],
  count: 0,
};

function bookReducer(state, action) {
  switch (action.type) {
    case "add":
      const newBook = {
        id: uuidv4(),
        dbid: action.payload.id,
        title: action.payload.title,
      };
      const newBooks = [...state.books, newBook];
      return { ...state, books: newBooks, count: state.count + 1 };

    case "delete":
      const filteredBookState = state.books.filter(
        (book) => book.id !== action.payload.id
      );
      return { ...state, books: filteredBookState, count: state.count - 1 };

    default:
      return cartState;
  }
}

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, cartState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
