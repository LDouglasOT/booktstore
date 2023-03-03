import React from 'react';
import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from './redux/books/bookSlice';

function Book({ item, itemId }) {
  const Dispatch = useDispatch();
  const Booksremove = async () => {
    await Dispatch(deleteBook(itemId)).then((res) => {
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
  itemId: PropTypes.number,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  item: {},
  item_id: number,
};
export default Book;
