import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { TableComponent } from './component';
import { defaultTableStylesBase } from './utils';
var Table = styled(TableComponent)(_templateObject(), defaultTableStylesBase, flexbox);
/** @component */

export { Table };