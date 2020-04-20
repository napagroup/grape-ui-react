"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.makeData = makeData;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

const range = len => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
};

const names = ['Ann', 'Alfred', 'Amanda', 'Betty', 'Bob', 'Brian', 'Christine', 'David', 'Debra', 'Elizabeth', 'Eugene', 'Heather', 'Helen', 'James', 'Jennifer', 'Jill', 'Kevin', 'Kimberly', 'Lisa', 'Mark', 'Mary', 'Michelle', 'Nicholas', 'Pamela', 'Patricia', 'Ralph', 'Sally', 'Sarah', 'Scott', 'Stacy', 'Tina', 'Wayne'];
const lastNames = ['Allen', 'Anderson', 'Brown', 'Cook', 'Davis', 'Flores', 'Garcia', 'Henderson', 'Hill', 'Jenkins', 'Johnson', 'Lee', 'Morris', 'Miller', 'Patterson', 'Perry', 'Roberts', 'Smith', 'Taylor', 'Thompson', 'Walker', 'Washington'];

const getStatus = statusChance => {
  if (statusChance > 0.66) {
    return 'Relationship';
  }

  return statusChance > 0.33 ? 'Complicated' : 'Single';
};

const newPerson = () => ({
  age: 18 + Math.floor(Math.random() * 30),
  firstName: names[Math.floor(Math.random() * names.length)],
  lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
  progress: Math.floor(Math.random() * 100),
  status: getStatus(Math.random()),
  visits: Math.floor(Math.random() * 100)
});

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    var _context;

    const len = lens[depth];
    return (0, _map.default)(_context = range(len)).call(_context, () => ({ ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
    }));
  };

  return makeDataLevel();
}