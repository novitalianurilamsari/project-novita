import React from 'react';
import { render, screen } from '@testing-library/react';
import SongCard from './index';

test('All elements are renderes', async () => {
  render(<SongCard />);

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(screen.getByTestId('song_track')).toBeInTheDocument();
  expect(screen.getByTestId('title_track')).toBeInTheDocument();
  expect(screen.getByTestId('artist_track')).toBeInTheDocument();
});
