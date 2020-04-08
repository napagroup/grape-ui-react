const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const names = [
  'Ann', 'Alfred', 'Amanda', 'Betty', 'Bob', 'Brian', 'Christine', 'David', 'Debra', 'Elizabeth',
  'Eugene', 'Heather', 'Helen', 'James', 'Jennifer', 'Jill', 'Kevin', 'Kimberly', 'Lisa', 'Mark', 'Mary',
  'Michelle', 'Nicholas', 'Pamela', 'Patricia', 'Ralph', 'Sally', 'Sarah', 'Scott', 'Stacy', 'Tina', 'Wayne',
];
const lastNames = [
  'Allen', 'Anderson', 'Brown', 'Cook', 'Davis', 'Flores', 'Garcia', 'Henderson', 'Hill',
  'Jenkins', 'Johnson', 'Lee', 'Morris', 'Miller', 'Patterson', 'Perry', 'Roberts', 'Smith',
  'Taylor', 'Thompson', 'Walker', 'Washington',
];

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
  visits: Math.floor(Math.random() * 100),
});

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => ({
      ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
}
