/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react';
import SearchSongForm from './index';

test('loads and displays greeting', async () => {
    render(<SearchSongForm />)  

    expect(screen.getByTestId('search_input')).toBeInTheDocument()
  })