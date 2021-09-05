import axios from 'axios';
import { getPageNumber } from './helpers';

const swApi = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 60000,
});

const fetchAllEntities = async (endpoint) => {
  const results = [];
  const { data: firstPage } = await swApi.get(`/${endpoint}`);

  results.push(...firstPage.results);

  let nextPageNumber = getPageNumber(firstPage.next);

  while (nextPageNumber) {
    // eslint-disable-next-line no-await-in-loop
    const { data: nextPage } = await swApi.get(
      `/${endpoint}?page=${nextPageNumber}`,
    );

    nextPageNumber = getPageNumber(nextPage.next);
    results.push(...nextPage.results);
  }

  return results;
};

export const fetchPeople = () => fetchAllEntities('people');
export const fetchFilms = () => fetchAllEntities('films');
export const fetchStarships = () => fetchAllEntities('starships');
export const fetchSpecies = () => fetchAllEntities('species');
