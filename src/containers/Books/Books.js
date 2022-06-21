import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks, deleteBook } from '../../redux/actions/bookActions';
import { NoBook, Container, Context, BooksContainer, Data, Edit, Delete } from './BooksStyled';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

const Books = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookslist = useSelector(state => state.booksList);
  const { books, loading } = bookslist;

  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    // history.back();
  };

  const handlerEditBook = id => {
    history.push(`/books/${id}`);
  };

  return (
    <div>
      {/* {loading && <div>Loading ...</div>} */}
      {books ? (
        <Container>
          <Context>
            {books &&
              books.map(({ title, author, category, _id }) => {
                return (
                  <BooksContainer key={_id}>
                    <Data>{title}</Data>
                    <Data>{author}</Data>
                    <Data>{category}</Data>
                    <Delete onClick={() => handlerDeleteBook(_id)}>Delete</Delete>
                    <Edit onClick={() => handlerEditBook(_id)}>Edit</Edit>
                  </BooksContainer>
                );
              })}
          </Context>
        </Container>
      ) : (
        <NoBook>You have no any book yet</NoBook>
      )}
    </div>
  );
};

Books.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Books);
