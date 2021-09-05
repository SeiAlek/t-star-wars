import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';
import { useSnackbar } from 'notistack';
import * as API from '../../common/api';
import {
  completePeopleAdditionalData,
  formatYear,
  compareDate,
  isDateRightFormat,
} from '../../common/helpers';
import PeopleLayout from './PeopleLayout';

function PeopleContainer() {
  const { enqueueSnackbar } = useSnackbar();
  const [people, setPeople] = useState();
  const [films, setFilms] = useState();
  const [species, setSpecies] = useState();
  const [isLoading, setIsLoading] = useState();
  const [personId, setPersonId] = useState();
  const [isRelationshipAnd, setIsRelationshipAnd] = useState(true);
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const isPersonHasEntity = useRef((person, entityId, propertyName) => (
    person[propertyName].some(({ id }) => entityId === id)
  ));

  const peopleFilteredByFilms = useMemo(() => {
    if (selectedFilms.length > 0) {
      const filteredPeople = people?.filter((person) => selectedFilms.every(({ id }) => (
        isPersonHasEntity.current(person, id, 'films')
      )));

      return filteredPeople;
    }

    return people;
  }, [selectedFilms, people]);

  const peopleFilteredByFilmsAndSpecies = useMemo(() => {
    if (selectedSpecies.length > 0) {
      const filteredPeople = peopleFilteredByFilms?.filter(
        (person) => selectedSpecies.every(({ id }) => (
          isPersonHasEntity.current(person, id, 'species')
        )),
      );

      return filteredPeople;
    }

    return peopleFilteredByFilms;
  }, [selectedSpecies, peopleFilteredByFilms]);

  const peopleFilteredByBirthYear = useMemo(() => {
    const filterStartYear = isDateRightFormat(startYear) ? startYear : '999999 BBY';
    const filterEndYear = isDateRightFormat(endYear) ? endYear : '999999 ABY';

    const filteredPeople = peopleFilteredByFilmsAndSpecies?.filter((person) => {
      const isBirthYearMoreStart = compareDate(person.birthYear, filterStartYear) >= 0;
      const isBirthYearLessEnd = compareDate(filterEndYear, person.birthYear) >= 0;

      return person.birthYear && isBirthYearMoreStart && isBirthYearLessEnd;
    });

    return filteredPeople;
  }, [peopleFilteredByFilmsAndSpecies, startYear, endYear]);

  const filteredPeople = useMemo(() => {
    if (isRelationshipAnd) {
      return peopleFilteredByBirthYear;
    }

    const filterStartYear = isDateRightFormat(startYear) ? startYear : '999999 BBY';
    const filterEndYear = isDateRightFormat(endYear) ? endYear : '999999 ABY';

    return people.filter((person) => {
      const hasFilm = selectedFilms.some((film) => isPersonHasEntity.current(person, film.id, 'films'));
      const hasSpecie = selectedSpecies.some((specie) => isPersonHasEntity.current(person, specie.id, 'species'));

      const isBirthYearMoreStart = compareDate(person.birthYear, filterStartYear) >= 0;
      const isBirthYearLessEnd = compareDate(filterEndYear, person.birthYear) >= 0;
      const isBornInFilteredPeriod = person.birthYear && isBirthYearMoreStart && isBirthYearLessEnd;

      return [hasFilm, hasSpecie, isBornInFilteredPeriod].some(Boolean);
    });
  }, [
    people,
    isRelationshipAnd,
    selectedSpecies,
    selectedFilms,
    startYear,
    endYear,
    peopleFilteredByBirthYear,
  ]);

  const selectedPerson = useMemo(() => {
    const foundPerson = people?.find(({ id }) => id === personId);

    if (!foundPerson) {
      return null;
    }

    return foundPerson;
  }, [people, personId]);

  const fetchData = useRef(async () => {
    try {
      setIsLoading(true);

      const [
        peopleWithLinks,
        fetchedFilms,
        fetchedStarships,
        fetchedSpecies,
      ] = await Promise.all([
        await API.fetchPeople()
          .then((fetchedPeople) => fetchedPeople.map((fetchedPerson) => ({
            id: fetchedPerson.url.replace(/\D/ig, ''),
            name: fetchedPerson.name,
            birthYear: formatYear(fetchedPerson.birth_year),
            films: fetchedPerson.films,
            species: fetchedPerson.species,
            starships: fetchedPerson.starships,
            url: fetchedPerson.url,
          }))),
        await API.fetchFilms()
          .then((data) => data.map(({ title, release_date: releaseDate, url }) => ({
            id: url.replace(/\D/ig, ''),
            title,
            releaseDate,
            url,
          }))),
        await API.fetchStarships()
          .then((data) => data.map(({ name, url }) => ({
            id: url.replace(/\D/ig, ''),
            name,
            title: name,
            url,
          }))),
        await API.fetchSpecies()
          .then((data) => data.map(({ name, url }) => ({
            id: url.replace(/\D/ig, ''),
            name,
            title: name,
            url,
          }))),
      ]);

      return {
        peopleWithLinks,
        fetchedFilms,
        fetchedStarships,
        fetchedSpecies,
      };
    } catch (err) {
      return enqueueSnackbar(err.message);
    } finally {
      setIsLoading(false);
    }
  });

  const fetchAndSetData = useRef(async () => {
    const {
      peopleWithLinks,
      fetchedFilms,
      fetchedStarships,
      fetchedSpecies,
    } = await fetchData.current();

    const peopleWithData = completePeopleAdditionalData({
      people: peopleWithLinks,
      films: fetchedFilms,
      starships: fetchedStarships,
      species: fetchedSpecies,
    });

    setPeople(peopleWithData);
    setFilms(fetchedFilms);
    setSpecies(fetchedSpecies);
  });

  useEffect(() => {
    fetchAndSetData.current();
  }, []);

  const handleSelectPerson = useRef((e) => {
    const { id } = e.currentTarget;

    setPersonId(id);
  });

  const handleChange = useRef((e, value, name) => {
    const setterName = name || e.target.name;
    const setterValue = value || e.target.value;
    const setters = {
      films: () => setSelectedFilms(setterValue),
      species: () => setSelectedSpecies(setterValue),
      isRelationshipAnd: () => setIsRelationshipAnd((prev) => !prev),
      startYear: () => setStartYear(formatYear(setterValue)),
      endYear: () => setEndYear(formatYear(setterValue)),
    };

    if (setters[setterName]) {
      setters[setterName]();
    }
  });

  return (
    <PeopleLayout
      isLoading={isLoading}
      people={filteredPeople}
      films={films}
      species={species}
      selectedPerson={selectedPerson}
      selectedFilms={selectedFilms}
      selectedSpecies={selectedSpecies}
      startYear={startYear}
      endYear={endYear}
      isRelationshipAnd={isRelationshipAnd}
      handleSelectPerson={handleSelectPerson.current}
      handleChange={handleChange.current}
    />
  );
}

export default PeopleContainer;
