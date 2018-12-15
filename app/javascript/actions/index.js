import { FETCH_NONPROFIT } from './types';
import axios from 'axios';

export function fetchNonprofit() {
  let request = axios.get('/nonprofit-name.json')

  return {
    type: FETCH_NONPROFIT,
    payload: request
  }
}