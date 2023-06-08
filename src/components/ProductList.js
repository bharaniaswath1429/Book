import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_books: books, grid_view } = useFilterContext();
  if (books.length < 1) {
    return <h5 style={{ textTransform: 'none' }}>
      No books matched your search...
    </h5>
  }
  if (grid_view === false) {
    return <ListView books={books}></ListView>
  }
  return <GridView books={books}>book list</GridView>
}

export default ProductList
