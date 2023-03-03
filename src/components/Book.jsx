import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../components/redux/books/bookSlice';



function Book({ item,item_id }) {
  const Dispatch = useDispatch();
  const Booksremove = async() =>{
    await Dispatch(deleteBook(item_id)).then((res)=>{
      console.log(res)
      Dispatch(fetchBooks())
    })
  }
  return (
    <div className="Book">
      <h3>{ item.author }</h3>
      <h3>{ item.title }</h3>
      <button type="button" onClick={() => Booksremove()}>Remove</button>
    </div>
  );
}
Book.propTypes = {
  remove: PropTypes.func,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  remove: () => {},
  item: {},
};
export default Book;
