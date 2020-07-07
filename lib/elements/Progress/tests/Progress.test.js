"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _grid = require("../../../elements/grid");

var _index = require("../index");

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    stroke: rgba(0,0,0,0);\n    stroke-dashoffset: ", ";\n  }\n  50% {\n    stroke: #32cd32;\n  }\n  100% {\n    stroke: rgba(0,0,0,0);\n    stroke-dashoffset: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    background-color: red;\n    opacity: 0.7;\n    width: 0%;\n  }\n  20% {\n    background-color: orange;\n    width: 10%;\n  }\n  29% {\n    width: 40%;\n  }\n  30% {\n    background-color: yellow;\n    width: 50%;\n  }\n  50% {\n    background-color: green;\n    width: 70%;\n  }\n  70% {\n    background-color: blue;\n    width: 75%;\n  }\n  80% {\n    width: 77%;\n  }\n  93% {\n    width: 90%;\n  }\n  100% {\n    background-color: purple;\n    opacity: 1;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const customKeyframe = (0, _styledComponents.keyframes)(_templateObject());

const customCircularKeyframe = props => (0, _styledComponents.keyframes)(_templateObject2(), props.circumference, -1 * props.circumference);

describe('Linear Progress - snapshots', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return an Indeterminate Linear Progress with default styling', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, null)), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Determinate Linear Progress with the appropriate styling', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        diameter: 20,
        indicatorColor: "orange",
        isDeterminate: true,
        trackColor: "#e0ffff"
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Linear Progress with custom animations and captions', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        animationDuration: "5s",
        animationIterationCount: 2,
        animationName: // styled components keyframes and css functions
        (0, _styledComponents.css)(_templateObject3(), customKeyframe),
        caption: /*#__PURE__*/_react.default.createElement(_grid.Flex, {
          justifyContent: "flex-end",
          py: 2
        }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
          animationDuration: "5s",
          diameter: 20,
          isDeterminate: true,
          loop: false,
          progressType: "circular",
          strokeWidth: 2
        })),
        hideTrack: true,
        loop: false
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Linear Progress with custom caption, value and total', () => {
    var _context;

    const value = 20;
    const total = 150;
    const caption = (0, _concat.default)(_context = "".concat(value, "% of ")).call(_context, total);
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        caption: caption,
        total: total,
        value: value
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
});
describe('Circular Progress - snapshots', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return an Indeterminate Circular Progress with default styling', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        progressType: "circular"
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Determinate Circular Progress with the appropriate styling', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        indicatorColor: "red",
        isDeterminate: true,
        progressType: "circular",
        trackColor: "white.dark"
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Circular Progress with custom animations', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        animationDuration: "5s",
        animationName: // styled components keyframes and css functions
        (0, _styledComponents.css)(_templateObject4(), customCircularKeyframe),
        progressType: "circular"
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Circular Progress with custom caption, value and total', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_index.Progress, {
        caption: "3/5",
        captionProps: {
          textAlign: 'center'
        },
        progressType: "circular",
        total: 5,
        value: 3
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
});