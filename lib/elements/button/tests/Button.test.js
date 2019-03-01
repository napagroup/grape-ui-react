'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require('styled-components');

var _globalStyles = require('../../../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);
  return component.toJSON();
};
describe('Button base', function () {
  it('should return a Button', function () {
    var element = _react2.default.createElement(
      _.Button,
      null,
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with disabled', function () {
    var element = _react2.default.createElement(
      _.Button,
      { disabled: true, id: 'exampleColor' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', function () {
  it('should return a Button with bgColor and color', function () {
    var element = _react2.default.createElement(
      _.Button,
      { bg: 'green', color: 'brandDanger', id: 'exampleColor' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', function () {
    var element = _react2.default.createElement(
      _.Button,
      { id: 'exampleColor', sm: true },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', function () {
    var element = _react2.default.createElement(
      _.Button,
      { id: 'exampleColor', lg: true },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with a zIndex when using a string', function () {
    var element = _react2.default.createElement(
      _.Button,
      { zIndex: '500' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', function () {
    var element = _react2.default.createElement(
      _.Button,
      { zIndex: 500 },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button using theme colors', function () {
  it('should return a Button', function () {
    var globalStyles = (0, _globalStyles.getGlobalStyles)();
    var colors = globalStyles.colors;

    var theme = {
      colors: Object.assign({}, colors, {
        yellow: {
          base: 'hsl(65, 65%, 50%)',
          dark: 'hsl(65, 65%, 25%)',
          light: 'hsl(65, 65%, 68%)'
        }
      }),
      space: [0, 4, 8, 16]
    };
    var element = _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: theme },
      _react2.default.createElement(
        _.Button,
        { bg: 'yellow', color: 'yellow.dark' },
        'Do this'
      )
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Button using styled system fontSize', function () {
    it('should return a Button with specified font size', function () {
      var element = _react2.default.createElement(
        _.Button,
        { fontSize: 3, variant: 'primary' },
        'Do this'
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button using variant style theme colors', function () {
    xit('should return a Button', function () {
      var theme = {
        buttons: {
          primary: {
            '&:hover': {
              backgroundColor: 'black'
            },
            backgroundColor: 'blue',
            color: 'white'
          }
        },
        space: [0, 4, 8, 16]
      };
      var element = _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          _.Button,
          { variant: 'primary' },
          'Do this'
        )
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});