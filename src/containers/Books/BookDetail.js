import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/bookActions';
import { withRouter } from 'react-router';

const BookDetail = ({ history }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const bookDetails = useSelector(state => state.bookDetails);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  const { book, loading } = bookDetails;

  const [category, setCategory] = useState(book && book.category);
  const [title, setTitle] = useState(book && book.title);
  const [author, setAuthor] = useState(book && book.author);

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateBook(id, data));
    history.push('/books');
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        {' '}
        <div className='container'>
          {book ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select value={category} onChange={e => setCategory(e.target.value)} className='custom-select'>
                      <option defaultValue='programming'>programming</option>
                      <option value='religion'>Religion</option>
                      <option value='life'>life</option>
                      <option value='culture'>culture</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Author name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Book title'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create Book
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

BookDetail.propTypes = {
  history: PropTypes.object,
};

export default withRouter(BookDetail);
