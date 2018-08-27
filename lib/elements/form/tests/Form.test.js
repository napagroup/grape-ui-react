'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

require('jest-styled-components');

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Form Component base', function () {
  it('should return a Form object without class inline', function () {
    var component = renderer.create(_react2.default.createElement(_index.Form, null));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Form object with class inline', function () {
    var component = renderer.create(_react2.default.createElement(_index.Form, { 'class': 'inline' }));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});