import createDataMap from './createDataMap';

/**
 * Expand people with films, starships, species
 * @param {Array} people
 * @param {Array} films
 * @param {Array} starships
 * @param {Array} species
 * @returns {Array} people with extra data
 */
const completePeopleAdditionalData = ({
  people,
  films,
  starships,
  species,
}) => {
  const filmsMap = createDataMap(films, 'url');
  const starshipsMap = createDataMap(starships, 'url');
  const speciesMap = createDataMap(species, 'url');

  return people.map((person) => {
    const filmsWithPerson = person.films
      .map((url) => ({
        id: filmsMap[url].id,
        title: filmsMap[url].title,
        releaseDate: filmsMap[url].releaseDate,
      }))
      .sort((a, b) => {
        const timestampA = new Date(a.releaseDate).getTime();
        const timestampB = new Date(b.releaseDate).getTime();

        return timestampA - timestampB;
      });

    const personStarships = person.starships
      .map((url) => ({
        id: starshipsMap[url].id,
        name: starshipsMap[url].name,
      }));

    const personSpecies = person.species.map((url) => ({
      id: speciesMap[url].id,
      name: speciesMap[url].name,
    }));

    return {
      ...person,
      films: filmsWithPerson,
      starships: personStarships || null,
      species: personSpecies || null,
    };
  });
};

export default completePeopleAdditionalData;
