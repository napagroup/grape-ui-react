"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.columns = void 0;
var columns = [{
  columns: [{
    accessor: 'firstName',
    Header: 'First Name',
    title: 'test-first-name-column'
  }, {
    accessor: 'lastName',
    Header: 'Last Name',
    title: 'test-last-name-column'
  }],
  Header: 'Name',
  title: 'test-name-column'
}, {
  columns: [{
    accessor: 'age',
    Header: 'Age',
    title: 'test-age-column'
  }],
  Header: 'Info',
  title: 'test-info-column'
}];
exports.columns = columns;