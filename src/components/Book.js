import React from 'react';
import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from './redux/books/bookSlice';

function Book({ item, item_id }) {
  const Dispatch = useDispatch();
  const Booksremove = async () => {
    await Dispatch(deleteBook(item_id)).then((res) => {
      console.log(res);
      Dispatch(fetchBooks());
    });
  };
  return (
    <div className="Book">
      <h3>{ item.author }</h3>
      <h3>{ item.title }</h3>
      <button type="button" onClick={() => Booksremove()}>Remove</button>
    </div>
  );
}
Book.propTypes = {
  item_id: PropTypes.number,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  item: {},
  item_id: number,
};
export default Book;
