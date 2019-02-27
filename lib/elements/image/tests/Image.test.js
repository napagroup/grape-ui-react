'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Image Component base', function () {
  it('should return a shallow Image object with base styling', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.Image, { alt: 'blue flower', src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }));
    expect((0, _enzymeToJson2.default)(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object without alt base styling', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.Image, { src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }));
    expect((0, _enzymeToJson2.default)(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.Image, { alt: 'blue flower', maxWidth: 200, src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }));
    expect((0, _enzymeToJson2.default)(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.Image, { alt: 'blue flower', src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', w: [1, 3 / 4, 2 / 3, 1 / 2] }));
    expect((0, _enzymeToJson2.default)(component.find('Img'))).toMatchSnapshot();
  });
});