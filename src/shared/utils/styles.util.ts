import { Nullable } from '../types/util.types';
import { EAccent, EColor, EFontFamily } from '../types/styles.types';

/**
 * @description Transforms EColor ts enum into a class inside the scss styles,
 * the colors are mapped based on their variable names inside variables.scss
 * @param color
 */
export function colorToClassName(color: EColor) {
  const colorNames = {
    [EColor.WHITE]: 'white',
    [EColor.BLACK]: 'black',
    [EColor.GRAY_LIGHTER]: 'grayLighter',
    [EColor.GRAY_DARK]: 'grayDark',
    [EColor.GRAY_DARKER]: 'grayDarker',
    [EColor.GRAY_DARKEST]: 'grayDarkest',
    [EColor.PINK]: 'pink',
    [EColor.GREEN]: 'green',
    [EColor.PURPLE_GRADIENT]: 'purpleGradient',
    [EColor.SUBSTRATE_GRAY]: 'substrateGray',
  }

  return {
    bgColor: `bg-color-${colorNames[color]}`,
    color: `color-${colorNames[color]}`
  }
}

/**
 * @description Transforms EAccent ts enum into a class inside the scss styles,
 * the accents are mapped based on their variable names inside variables.scss
 * @param accent
 */
export function accentToClassName(accent: EAccent) {
  const accentNames = {
    [EAccent.PRIMARY]: 'accentPrimary',
    [EAccent.SECONDARY]: 'accentSecondary',
    [EAccent.TERTIARY]: 'accentTertiary'
  }

  return {
    bgColor: `bg-color-accent-${accentNames[accent]}`,
    color: `color-accent-${accentNames[accent]}`
  }
}

export function fontFamilyToClassName(fontFamily: EFontFamily) {
  return {
    [EFontFamily.ROBOTO]: 'ff-roboto',
    [EFontFamily.POPPINS]: 'ff-poppins'
  }[fontFamily];
}

export function classes(...args: Nullable<any>[]) {
  let className = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] && typeof args[i] === 'string') {
      className += args[i] + ' ';
    }
  }

  return className;
}
