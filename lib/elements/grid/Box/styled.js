import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border, flexbox, layout, position, space, system } from 'styled-system';
import { BoxComponent } from './component';
var Box = styled(BoxComponent)(_templateObject(), system({
  boxSizing: true
}), border, flexbox, layout, position, space);
Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
Box.defaultProps = {
  boxSizing: 'border-box'
};
/** @component */

export { Box };