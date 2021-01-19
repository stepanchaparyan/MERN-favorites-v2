import React from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Welcome from '../Welcome.js';
import {
  Module,
  WelcomeText,
  LongText,
  LinkStyled,
  Logo,
  Music,
  Films,
  Books,
  Other
} from '../WelcomeStyled';
import Img from '../../../../assets/elephant.png';
import localization from '../localization';
import { LINK } from '../../../../constants';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({ isAuthencated: true })
  };
});

describe('Welcome component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(Welcome);
  });

  // create unit test of components without snapshot
  test('render Welcome component', () => {
    const component = shallow(<Welcome />);

    expect(component.find(Module).exists()).toEqual(true);

    const welcomeText = component.find(WelcomeText);
    expect(welcomeText.text()).toEqual(localization.welcomeText.defaultMessage);

    const longText = component.find(LongText).at(0);
    expect(longText.text()).toEqual(localization.longText.defaultMessage);

    const music = component.find(Music);
    expect(music.text()).toEqual(localization.music.defaultMessage);

    const films = component.find(Films);
    expect(films.text()).toEqual(localization.films.defaultMessage);

    const books = component.find(Books);
    expect(books.text()).toEqual(localization.books.defaultMessage);

    const other = component.find(Other);
    expect(other.text()).toEqual(localization.other.defaultMessage);

    const logo = component.find(Logo);
    expect(logo.props().src).toEqual(Img);

    const linkStyled = component.find(LinkStyled);
    expect(linkStyled.text()).toEqual(localization.createYourCard.defaultMessage);
    expect(linkStyled.props().to).toEqual(LINK.TO.HOME);
  });
});
