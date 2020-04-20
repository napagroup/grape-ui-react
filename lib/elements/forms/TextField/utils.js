import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Map from "@babel/runtime-corejs3/core-js-stable/map";
var cleaveMap = new _Map();
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
export var isCleaveInput = function isCleaveInput(props) {
  if (props.email || props.password) {
    return false;
  }

  if (props.formatterOptions) {
    return true;
  }

  var foundKey = false;

  var checkKeys = function checkKeys(value, key) {
    if (props[key] && !foundKey) {
      foundKey = true;
    }
  };

  _forEachInstanceProperty(cleaveMap).call(cleaveMap, checkKeys);

  return foundKey;
};
export var cleaveOption = function cleaveOption(props) {
  if (props.formatterOptions) {
    return props.formatterOptions;
  }

  var options = null;

  var setOptionWhenFound = function setOptionWhenFound(value, key) {
    if (props[key]) {
      options = value;
    }
  };

  _forEachInstanceProperty(cleaveMap).call(cleaveMap, setOptionWhenFound);

  return options;
};