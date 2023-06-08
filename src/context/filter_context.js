import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_Books,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_Books,
  UPDATE_FILTERS,
  FILTER_Books,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../actions";
import { useBooksContext } from "./books_context";

const initialState = {
  filtered_books: [],
  all_books: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping:false,
  }
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { books } = useBooksContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  dispatch({type:LOAD_Books,payload:books})
},[books])

  useEffect(() => {
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type:SORT_Books})
  },[books,state.sort,state.filters])
  
  const setGridView = () => {
    dispatch({type:SET_LISTVIEW})
  }

  const setListView = () => {
    dispatch({type:SET_GRIDVIEW})
  }

  const updateSort = (e) => {
    //const name = e.target.name
    const value = e.target.value
    //console.log(name,value)
    dispatch({type:UPDATE_SORT,payload:value})
  }
  
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
   dispatch({type:UPDATE_FILTERS,payload:{name,value}})
  }
  
  const clearFilters = (e) => {
  dispatch({type:CLEAR_FILTERS})
  }

  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,updateSort,updateFilters,clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
