import {
  LOAD_Books,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_Books,
  UPDATE_FILTERS,
  FILTER_Books,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_Books) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {...state,all_books:[...action.payload],filtered_books:[...action.payload],filters:{...state.filters,max_price:maxPrice,price:maxPrice}}
  }
  if (action.type === SET_GRIDVIEW) {
  return {...state,grid_view:true}
  }
  
  if (action.type === SET_LISTVIEW) {
    return {...state,grid_view:false}
  }

  if (action.type === UPDATE_SORT) {
    return {...state,sort:action.payload}
  }

  if (action.type === SORT_Books) {
    const { sort, filtered_books } = state;
    let tempBooks = [...filtered_books];
    if (sort === 'price-lowest') {
      tempBooks = tempBooks.sort((a, b) =>a.price-b.price)
    }
    if (sort === 'price-highest') {
      tempBooks = tempBooks.sort((a, b) =>b.price-a.price)
    }
    if (sort === 'name-a') {
      tempBooks = tempBooks.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempBooks = tempBooks.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {...state,filtered_books:tempBooks}
  }

  if (action.type === UPDATE_FILTERS) {
    const {name,value} = action.payload
    return {...state,filters:{...state.filters,[name]:value}}
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_books } = state
    const {text,category,company,price,shipping} = state.filters
    let tempBooks = [...all_books];
    if (text) {
      tempBooks = tempBooks.filter((book) => {
        return book.name.toLowerCase().startsWith(text)
      })
    }
    if (category !== 'all') {
      tempBooks = tempBooks.filter(book => book.category === category)
    }
    if (company !== 'all') {
      tempBooks = tempBooks.filter(book => book.company === company)
    }

    tempBooks = tempBooks.filter((book) => book.price <= price)

    if (shipping) {
      tempBooks = tempBooks.filter((book) => book.shipping === true)
    }

    return {...state,filtered_books:tempBooks}
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state, filters: {
      ...state.filters,
      text: '',
      company: 'all',
      category: 'all',
      price: state.filters.max_price,
      shipping:false,
    }}
  }


  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
