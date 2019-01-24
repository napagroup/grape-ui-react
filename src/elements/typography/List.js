import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';
import {
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

const { grid: gridSchema } = getGlobalStyles();

const getInLineStyles = props => {
  const inlineStyles = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${getScaledSize(gridSchema.gutter, 0.5)};
      }
    }
  `;
  return `${props.inline ? inlineStyles : ''}`;
};

const getPaddingLeft = props => `padding-left:  ${(props.unstyled || props.inline) ? '0' : '2.5rem'};`;
const getListStyle = props => `${props.unstyled ? '> li { list-style: none; }' : ''}`;

const ListFactory = factoryProps => {
  const { tag } = factoryProps;
  return styled[tag]`
    ${getFontFamily}
    ${getFontSize}
    ${getFontWeight}
    ${getLetterSpacing}
    ${getLineHeight}
    ${getFontStyle}
    ${getColor}
    ${getTextAlign}
    ${getTextDecoration}
    margin: 0 0 ${gridSchema.gutter};
    ${getPaddingLeft}
    ${getListStyle}
    ${getInLineStyles}
    `;
};

const List = ListFactory({ tag: 'ul' });

List.ul = List;
List.ol = ListFactory({ tag: 'ol' });
List.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  inline: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  unstyled: PropTypes.bool,
};
export { List };
