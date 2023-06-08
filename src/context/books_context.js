import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/books_reducer";
import { Books_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_Books_BEGIN,
  GET_Books_SUCCESS,
  GET_Books_ERROR,
  GET_SINGLE_Book_BEGIN,
  GET_SINGLE_Book_SUCCESS,
  GET_SINGLE_Book_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  books_loading: false,
  books_error: false,
  books: [],
  featured_books: [],
  single_book_loading: false,
  single_book_error: false,
  single_book:{},
  
};

const BooksContext = React.createContext();

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchBooks = async (url) => {
    dispatch({ type: GET_Books_BEGIN })
    try {
      const response = await axios.get(url)
      const books = response.data
      dispatch({type: GET_Books_SUCCESS,payload:books})
    } catch (error) {
      dispatch({type:GET_Books_ERROR})
    }
  }

  const fetchSingleBook = async (url) => {
    dispatch({ type: GET_SINGLE_Book_BEGIN });
    try {
      const response = await axios.get(url);
      const singleBook = response.data
      dispatch({type:GET_SINGLE_Book_SUCCESS, payload:singleBook})
    } catch (error) {
      dispatch({type:GET_SINGLE_Book_ERROR})
    }
  }

  useEffect(() => {
    fetchBooks(url)
  },[])

  return (
    <BooksContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleBook }}>
      {children}
    </BooksContext.Provider>
  );
};
// make sure use
export const useBooksContext = () => {
  return useContext(BooksContext);
};
