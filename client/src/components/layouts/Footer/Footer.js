import React from 'react';
import { useIntl } from 'react-intl';
import { Container } from './FooterStyled';
import localization from './localization';

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      {new Date().getFullYear()} {formatMessage(localization.allRightReservedMyCompany)}
    </Container>
  );
};

export default Footer;
