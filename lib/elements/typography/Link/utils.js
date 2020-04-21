"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.emailHrefString = emailHrefString;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

function emailHrefString(props) {
  var _context, _context2, _context4, _context5;

  const otherProps = {
    bcc: props.bcc,
    body: props.body,
    cc: props.cc,
    subject: props.subject
  };
  const trimmedProps = (0, _map.default)(_context = (0, _filter.default)(_context2 = (0, _keys.default)(otherProps)).call(_context2, key => !!props[key])).call(_context, key => {
    var _context3;

    return encodeURI((0, _concat.default)(_context3 = "".concat(key, "=")).call(_context3, props[key]));
  }).join('&');
  return (0, _concat.default)(_context4 = (0, _concat.default)(_context5 = "".concat(props.to || trimmedProps ? 'mailto:' : '')).call(_context5, props.to || '')).call(_context4, trimmedProps ? "?".concat(trimmedProps) : '');
}