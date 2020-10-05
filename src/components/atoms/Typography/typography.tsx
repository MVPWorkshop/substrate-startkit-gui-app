import React from 'react';
import { ETypographyVariant, ITypographyProps } from './typography.types';
import { accentToClassName, classes, colorToClassName, fontFamilyToClassName } from '../../../shared/utils/styles.util';
import styles from './typography.module.scss';

function getVariantClassName(variant: ETypographyVariant) {
  return {
    [ETypographyVariant.MAIN]: styles.main,
    [ETypographyVariant.BODY]: styles.body,
    [ETypographyVariant.SECONDARY]: styles.secondary,
    [ETypographyVariant.TITLE]: styles.title
  }[variant];
}

const Typography: React.FC<ITypographyProps> = (props) => {

  const {
    element: Element = 'p',
    variant,
    color,
    className,
    uppercase,
    fontSize,
    accent,
    fontFamily,
    children,
    style,
    textAlign
  } = props;

  const classColor = color && colorToClassName(color).color;
  const classAccent = accent && accentToClassName(accent).color;
  const classFontFamily = fontFamily && fontFamilyToClassName(fontFamily);
  const classVariant = variant && getVariantClassName(variant);

  return (
    <Element
      className={classes(
        styles.typography,
        classVariant,
        classColor,
        classAccent,
        classFontFamily,
        fontSize ? `fs-${fontSize}` : '',
        uppercase ? 'text-uppercase' : '',
        className
      )}
      style={{
        ...style,
        textAlign
      }}
    >
      {children}
    </Element>
  )
}

export default Typography;
