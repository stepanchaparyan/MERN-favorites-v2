import React, { useContext, useState, useRef } from 'react';
import Select from 'react-select';
import { useIntl } from 'react-intl';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { FORM } from '../../../constants';
import {
  SelectContainer,
  customStyles,
  InputContainer,
  Input
} from '../FilterAndSearch/FilterAndSearchStyled';
import localization from './localization';

const { SELECT, INPUT } = FORM;

const FilterAndSearch = () => {
  const {
    filter_FavItem,
    clearFilter,
    search_FavItem,
    clearSearch,
    filterFavItems,
    search_filter_FavItems,
    clearSearchFilter
  } = useContext(FavItemContext);

  const searchInput = useRef('');
  const { formatMessage } = useIntl();

  const options = [
    { value: SELECT.OPTIONS.FILM, label: SELECT.LABELS.FILM },
    { value: SELECT.OPTIONS.MUSIC, label: SELECT.LABELS.MUSIC },
    { value: SELECT.OPTIONS.BOOKS, label: SELECT.LABELS.BOOKS },
    { value: SELECT.OPTIONS.OTHER, label: SELECT.LABELS.OTHER },
    { value: SELECT.OPTIONS.ALL, label: SELECT.LABELS.ALL_CARDS }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const filterByCategory = selectedOption => {
    if (searchInput.current.value === '') {
      if (selectedOption.value === SELECT.OPTIONS.ALL) {
        setSelectedOption(selectedOption);
        clearFilter();
        clearSearchFilter();
      } else {
        setSelectedOption(selectedOption);
        clearSearchFilter();
        filter_FavItem(selectedOption.value);
      }
    } else {
      if (selectedOption.value === SELECT.OPTIONS.ALL) {
        setSelectedOption(selectedOption);
        clearFilter();
        clearSearchFilter();
      } else {
        setSelectedOption(selectedOption);
        clearFilter();
        filter_FavItem(selectedOption.value);
        search_filter_FavItems([searchInput.current.value, selectedOption.value]);
      }
    }
  };

  const searchByInput = e => {
    if (filterFavItems === null) {
      if (searchInput.current.value !== '') {
        search_FavItem(e.target.value);
      } else {
        clearSearchFilter();
        clearSearch();
      }
    } else {
      search_filter_FavItems([e.target.value, selectedOption.value]);
    }
  };

  return (
    <>
      <InputContainer>
        <Input
          ref={searchInput}
          onChange={searchByInput}
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.searchCardByName)}
        />
      </InputContainer>

      <SelectContainer>
        <Select
          value={selectedOption}
          onChange={filterByCategory}
          options={options}
          styles={customStyles}
          placeholder={formatMessage(localization.filterYourCards)}
        />
      </SelectContainer>
    </>
  );
};
export default FilterAndSearch;
