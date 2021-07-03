import React from 'react';
import { useIntl } from 'react-intl';
import { Container, LinkStyled } from './FooterStyled';
import localization from './localization';
import { LINK } from '../../constants';

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      {new Date().getFullYear()} {formatMessage(localization.allRightReservedMyCompany)}
      <LinkStyled to={LINK.TO.CHAT}>
        <div>Chat board</div>
      </LinkStyled>
    </Container>
  );
};

export default Footer;
