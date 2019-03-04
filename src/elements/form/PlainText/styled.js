import { resolveColor } from 'src/utils/componentHelpers';
import styled from 'styled-components';
import { defaultControlStylesBase, control, controlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
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
  defaultTextStylesBase,
  typography,
} from 'src/elements/typography/textStyles';
import { PlainTextComponent } from './component';

const controlStylesBaseForPlainText = props => (!props.validationError ? controlStylesBase(props) : controlStylesBase({ ...props, activeColor: resolveColor('brandDanger'), borderColor: resolveColor('brandDanger') }));

export const PlainText = styled(PlainTextComponent)`
${getFontFamily}
${getFontSize}
${getFontWeight}
${getLetterSpacing}
${getLineHeight}
${getFontStyle}
${getColor}
${getTextAlign}
${getTextDecoration}
${controlStylesBaseForPlainText}
`;
PlainText.propTypes = {
  ...typography.propTypes,
  ...control.propTypes,
};

PlainText.defaultProps = {
  ...defaultTextStylesBase,
  ...defaultControlStylesBase,
};
