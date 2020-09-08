import { IWithClass } from '../../../shared/types/common.types';
import { EAccent, EColor, EFontFamily } from '../../../shared/types/styles.types';

export enum ETypographyVariant {
  MAIN = 'MAIN',
  SECONDARY = 'SECONDARY',
  BODY = 'BODY',
  TITLE = 'TITLE'
}

interface ITypographyBaseProps extends IWithClass {
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontFamily?: EFontFamily;
  fontSize?: number;
  uppercase?: boolean;
  style?: React.CSSProperties;
}

// If we are using variant you can't change color, accent or font family
interface ITypographyVariantProps extends ITypographyBaseProps {
  variant?: ETypographyVariant;
  fontFamily?: never;
  fontSize?: never;
  color?: never;
  accent?: never;
}

// If we are using color you can't use accent prop at the same time
interface ITypographyColorProps extends ITypographyBaseProps {
  variant?: never;
  color?: EColor;
  accent?: never;
}

// If we are using accent you can't uce color prop at the same time
interface ITypographyAccentProps extends ITypographyBaseProps {
  variant?: never;
  accent?: EAccent;
  color?: never;
}

export type ITypographyProps =
  ITypographyVariantProps |
  ITypographyColorProps |
  ITypographyAccentProps;
