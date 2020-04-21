"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.cleaveOption = exports.isCleaveInput = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

const cleaveMap = new _map.default();
cleaveMap.set('phone', {
  delimiter: '-',
  phone: true,
  phoneRegionCode: 'US'
});
cleaveMap.set('currency', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  prefix: '$'
});
cleaveMap.set('integer', {
  numeral: true,
  numeralDecimalScale: 0,
  numeralThousandsGroupStyle: 'thousand'
});
cleaveMap.set('numeric', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});
cleaveMap.set('postalCode', {
  blocks: [5, 4],
  delimiter: '-',
  delimiterLazyShow: true,
  numericOnly: true
});

const isCleaveInput = props => {
  if (props.email || props.password) {
    return false;
  }

  if (props.formatterOptions) {
    return true;
  }

  let foundKey = false;

  const checkKeys = (value, key) => {
    if (props[key] && !foundKey) {
      foundKey = true;
    }
  };

  (0, _forEach.default)(cleaveMap).call(cleaveMap, checkKeys);
  return foundKey;
};

exports.isCleaveInput = isCleaveInput;

const cleaveOption = props => {
  if (props.formatterOptions) {
    return props.formatterOptions;
  }

  let options = null;

  const setOptionWhenFound = (value, key) => {
    if (props[key]) {
      options = value;
    }
  };

  (0, _forEach.default)(cleaveMap).call(cleaveMap, setOptionWhenFound);
  return options;
};

exports.cleaveOption = cleaveOption;