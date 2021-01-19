import { size } from './size';
import { css } from 'styled-components';

const mobileSizeMin = `(min-width: ${size.mobileMin})`;
const mobileSizeMax = `(max-width: ${size.mobileMax})`;
const tabletSizeMin = `(min-width: ${size.tabletMin})`;
const desktopSizeMin = `(min-width: ${size.desktopMin})`;
const desktopLargeSizeMin = `(min-width: ${size.desktopLargeMin})`;

export const mobile = (...args) => css` @media ${mobileSizeMin} and @media ${mobileSizeMax} {
 ${css(...args)};
    } 
}`;

export const mobileUp = (...args) => css` @media ${mobileSizeMin} {
  ${css(...args)};
     } 
 }`;

export const tabletUp = (...args) => css` @media ${tabletSizeMin} {
  ${css(...args)};
     } 
 }`;

export const desktopUp = (...args) => css` @media ${desktopSizeMin} {
  ${css(...args)};
     }
 }`;

export const desktopLargeUp = (...args) => css` @media ${desktopLargeSizeMin} {
  ${css(...args)};
     }
 }`;
