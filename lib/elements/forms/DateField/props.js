import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

var _context;

import { typography } from 'src/utils/styledHelpers';
export var defaultControlColorProps = {
  captionColor: 'inherit',
  dayHoverBgColor: 'brandLinkHover',
  dayHoverColor: 'white.light',
  disabledColor: 'gray.light',
  menuBgColor: 'white.light',
  outsideColor: 'gray.dark',
  selectedBetweenBgColor: 'brandLink.light',
  selectedBetweenColor: 'black',
  selectedBgColor: 'brandLink',
  selectedColor: 'white.light',
  todayBorderColor: 'black',
  weekdayColor: 'gray.light',
  weekNumberBorderColor: 'gray.light',
  weekNumberColor: 'gray'
};
export var defaultDayPickerProps = {
  numberOfMonths: 1,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
export var propsToTrim = ['assistiveText', 'color', 'controlId', 'isRequired', 'plainText'];
export var styledWrapperPropsToTrim = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_Object$keys(propsToTrim)), _toConsumableArray(_Object$keys(typography.propTypes)), ['disabled', 'format', 'value']);