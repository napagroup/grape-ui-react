import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';
import { FlexComponent } from './component';
var Flex = styled(FlexComponent)(_templateObject(), flexbox, layout, position, space);
Flex.defaultProps = {
  display: 'flex'
};
/** @component */

export { Flex };