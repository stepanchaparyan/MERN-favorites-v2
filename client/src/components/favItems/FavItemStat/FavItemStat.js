import React, { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, Title, DataContainer, Category, Name, Count } from './FavItemStatStyled';
import localization from './localization';

const FavItemStat = () => {
  const { favItems } = useContext(FavItemContext);
  const { formatMessage } = useIntl();

  const categories = favItems => {
    // get all categories
    const categories = favItems.map(favItem => favItem.category);
    // remove dublicates categories and return new array
    return categories.filter((category, index) => categories.indexOf(category) === index).sort();
  };

  const countByCategory = category => {
    return favItems.filter(favItem => favItem.category === category).length;
  };

  const [open, setOpen] = useState(false);
  const onClickHandler = () => setOpen(!open);

  return (
    <Container>
      <Title onClick={onClickHandler}>{formatMessage(localization.countByCategory)}</Title>
      <DataContainer>
        {open &&
          favItems &&
          categories(favItems).map((category, i) => {
            return (
              <Category key={i}>
                <Name>{category}</Name>
                <Count>{countByCategory(category)}</Count>
              </Category>
            );
          })}
      </DataContainer>
    </Container>
  );
};

export default FavItemStat;
