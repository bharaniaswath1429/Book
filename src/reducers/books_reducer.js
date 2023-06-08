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

const Books_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_Books_BEGIN) {
    return { ...state, books_loading: true };
  }
  if (action.type === GET_Books_SUCCESS) {
    const featured_books = action.payload.filter(
      (books) => books.featured === true
    )
    return {
      ...state, books_loading: false, books: action.payload, featured_books
    };
  }
  if (action.type === GET_Books_ERROR) {
    return { ...state, books_loading: false,books_error:true };
  }
  if (action.type === GET_SINGLE_Book_BEGIN) {
    return { ...state, single_book_loading: true,single_book_error:false };
  }
  if (action.type === GET_SINGLE_Book_SUCCESS) {
    return { ...state, single_book_loading: false,single_book:action.payload };
  }
  if (action.type === GET_SINGLE_Book_ERROR) {
    return { ...state, single_book_loading: false,single_book_error:true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default Books_reducer;
