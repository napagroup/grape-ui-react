import { css } from 'styled-components';
import * as fontSizeAssets from '../../assets/json/fontSize.json';

// export const textStylesBase = props => {
//   const { italic, lg, sm, } = props;
//   const baseFontFamily = fontFamilyNative;
//   let fontSize = fontSizeAssets.p.base;
//   if (sm) { fontSize = fontSizeAssets.p.sm; }
//   if (lg) { fontSize = fontSizeAssets.p.lg; }
//   const Primitive = css`
//     font-family: ${baseFontFamily};
//     font-size: ${fontSize};
//     line-height: 1.5;
//     ${italic ? 'font-style: italic;' : ''}
//   `;
//   return Primitive;
// };

export const textStyleBaseFactory = ({ textStyleBaseElementType }) => {
  const sourceAsset = fontSizeAssets[textStyleBaseElementType];
  const fontSize = sourceAsset.base;
  const actualStyle = css`
    font-size: ${fontSize};
    line-height: 1.5;
  `;
  return actualStyle;
};

// textStylesBase.propTypes = {
//   elementType: PropTypes.string.isRequired,
//   italic: PropTypes.bool,
//   lg: PropTypes.bool,
//   sm: PropTypes.bool,
// };

// textStylesBase.defaultProps = {
//   italic: false,
//   lg: false,
//   sm: false,
// };
