import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import {
  defaultTextStylesBase,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
} from './textStyles';

const { fontSize: fontSizeSchema, grid: gridSchema } = getGlobalStyles();

const getHeaderFontSizeFromTag = factoryProps => {
  const { tag: factoryPropsTag } = factoryProps;
  const tag = factoryPropsTag || 'h1';
  const getHeaderFontSizeMemoized = props => {
    const { display } = props;
    const overrides = {
      ...props,
      fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    };
    return getFontSize(overrides);
  };
  return getHeaderFontSizeMemoized;
};


const getHeaderFontWeight = props => {
  const {
    display, fontWeight,
  } = props;
  const headerFontWeight = fontWeight !== defaultTextStylesBase.fontWeight ? fontWeight : undefined;
  const overrides = {
    ...props,
    fontWeight: headerFontWeight || (display ? '300' : headerFontWeight),
  };
  return getFontWeight(overrides);
};
const headerFactory = factoryProps => {
  const { tag } = factoryProps;
  const getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return styled[tag]`
    ${getFontFamily}
    ${getHeaderFontSize}
    ${getHeaderFontWeight}
    ${getLetterSpacing}
    ${getLineHeight}
    ${getFontStyle}
    ${getColor}
    ${getTextAlign}
    ${getTextDecoration}
    margin: 0 0 ${gridSchema.gutter};
  `;
};

const Header = headerFactory({ tag: 'h1' });

Header.h1 = Header;
Header.h2 = headerFactory({ tag: 'h2' });
Header.h3 = headerFactory({ tag: 'h3' });
Header.h4 = headerFactory({ tag: 'h4' });
Header.h5 = headerFactory({ tag: 'h5' });
Header.h6 = headerFactory({ tag: 'h6' });

Header.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  italic: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

export { Header };
