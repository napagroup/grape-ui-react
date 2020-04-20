import "core-js/modules/es.array.join";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
export function emailHrefString(props) {
  var _context, _context2, _context4, _context5;

  var otherProps = {
    bcc: props.bcc,
    body: props.body,
    cc: props.cc,
    subject: props.subject
  };

  var trimmedProps = _mapInstanceProperty(_context = _filterInstanceProperty(_context2 = _Object$keys(otherProps)).call(_context2, function (key) {
    return !!props[key];
  })).call(_context, function (key) {
    var _context3;

    return encodeURI(_concatInstanceProperty(_context3 = "".concat(key, "=")).call(_context3, props[key]));
  }).join('&');

  return _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = "".concat(props.to || trimmedProps ? 'mailto:' : '')).call(_context5, props.to || '')).call(_context4, trimmedProps ? "?".concat(trimmedProps) : '');
}