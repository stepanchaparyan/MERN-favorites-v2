import theme from '../styles/theme';
import { FAVITEM } from '../constants';

const { red, blue, limeGreen, orange, black } = theme;
const { TYPE } = FAVITEM;

export const colorPicker = category => {
  let color;
  switch (category) {
    case TYPE.FILM:
      color = red;
      break;
    case TYPE.MUSIC:
      color = blue;
      break;
    case TYPE.BOOKS:
      color = limeGreen;
      break;
    case TYPE.OTHER:
      color = orange;
      break;
    default:
      color = black;
  }
  return color;
};
