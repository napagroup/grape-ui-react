import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { native as fontFamilyNative } from '../../assets/json/fontFamily.json';
import { base as fontSizeBase } from '../../assets/json/fontSize.json';

export const textStylesBase = props => {
  const { italic, } = props;
  const baseFontFamily = fontFamilyNative;
  const baseFontSize = fontSizeBase;
  const Primitive = css`
    font-family: ${baseFontFamily};
    font-size: ${baseFontSize};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
  `;
  return Primitive;
};

textStylesBase.propTypes = {
  italic: PropTypes.bool,
};

textStylesBase.defaultProps = {
  italic: false,
};
