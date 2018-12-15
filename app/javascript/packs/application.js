import React from 'react';
import { render } from 'react-dom';
import App from '../components/index';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<App/>, container);
});