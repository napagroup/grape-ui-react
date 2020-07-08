import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {
  getProgress,
  Progress,
} from 'src/elements/Progress';

describe('Util Test - getProgress', () => {
  const linearProgress = (
    <Progress
      diameter={20}
      indicatorColor="orange"
      isDeterminate
      trackColor="#e0ffff"
    />
  );
  const options = {
    progress: linearProgress,
    progressPlacement: 'top',
    progressProps: {},
    showProgress: true,
  };
  it('should return the provided progress when given as a valid element', () => {
    const actual = getProgress(options);
    expect(actual).toEqual(options.progress);
  });
  it('should return the built-in progress when progress is not a valid element', () => {
    const actual = getProgress({ ...options, progress: null });
    expect(actual).not.toEqual(options.progress);
  });
});
