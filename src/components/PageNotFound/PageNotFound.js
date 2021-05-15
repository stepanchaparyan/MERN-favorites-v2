import React from 'react';
import { useIntl } from 'react-intl';
import { Container, Module, LinkStyled } from './PageNotFoundStyled';
import localization from './localization';
import { LINK } from '../../constants';

const PageNotFound = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Module>
        <LinkStyled to={LINK.TO.WELCOME}>{formatMessage(localization.goHomePage)}</LinkStyled>
      </Module>
    </Container>
  );
};
export default PageNotFound;
