import React, { useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import FavItemCard from '../FavItemCard/FavItemCard';
import FavItemForm from '../FavItemForm/FavItemForm';
import { Container, CardContainer, Button, LoadingMessage } from './FavItemsListStyled';
import localization from './localization';

const FavItemsList = () => {
  const context = useContext(FavItemContext);
  const {
    loading,
    toggle_Form,
    toggleForm,
    clearEdit,
    favItems,
    getFavItems,
    filterFavItems,
    searchFavItem,
    searchFilterFavItems
  } = context;
  const { formatMessage } = useIntl();

  useEffect(() => {
    getFavItems();
  }, []);

  const toggleFormStatus = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };

  return (
    <Container>
      {loading ? (
        <LoadingMessage>{formatMessage(localization.loadingFavItems)}</LoadingMessage>
      ) : (
        <Button onClick={toggleFormStatus}>{formatMessage(localization.addNewItem)}</Button>
      )}
      {!filterFavItems && !searchFavItem ? (
        <CardContainer myOpacity={toggleForm}>
          {favItems.map(favItem => (
            <FavItemCard key={favItem._id} favItem={favItem} />
          ))}
        </CardContainer>
      ) : searchFilterFavItems ? (
        <CardContainer>
          {searchFilterFavItems.map(favItem => (
            <FavItemCard key={favItem._id} favItem={favItem} />
          ))}
        </CardContainer>
      ) : (
        <>
          <CardContainer>
            {searchFavItem &&
              searchFavItem.map(favItem => <FavItemCard favItem={favItem} key={favItem._id} />)}
          </CardContainer>
          <CardContainer>
            {filterFavItems &&
              filterFavItems.map(favItem => <FavItemCard favItem={favItem} key={favItem._id} />)}
          </CardContainer>
        </>
      )}

      {toggleForm && <FavItemForm />}
    </Container>
  );
};
export default FavItemsList;
