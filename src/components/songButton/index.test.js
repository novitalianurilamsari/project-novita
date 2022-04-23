import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SongButton from './index';

test('Button are clicked', async () => {
  render(<SongButton />);

  const button = screen.getByTestId('button_test', { name: 'setSelected' });
  fireEvent.click(button);
});
