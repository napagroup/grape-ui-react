import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from 'src/elements/Button';
import { Alert, alertToast } from 'src/elements/Alert';

jest.useFakeTimers();

describe('Alert toasts', () => {
  const alertCaption = 'hello';
  let renderUtils;
  it('should present a toast whenever a toast notification is invoked', () => {
    renderUtils = render(
      <div>
        <Button onClick={alertToast(alertCaption)} />
        <Alert.ToastContainer limit={2} toastPortalTarget={false} />
      </div>
    );
    const { getAllByText } = renderUtils;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      jest.runAllTimers();
    });
    expect(getAllByText(alertCaption).length).toBe(2);
  });
});
