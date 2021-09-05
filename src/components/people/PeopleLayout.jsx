/* eslint-disable max-len */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import BackdropWithCircularProgress from '../../common/components/Backdrop';
import Popup from '../../common/components/Popup';
import PersonCard from './PersonCard';
import Filters from '../../common/components/Filters';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const PeopleLayout = ({
  isLoading,
  people,
  films,
  species,
  selectedPerson,
  selectedFilms,
  selectedSpecies,
  startYear,
  endYear,
  isRelationshipAnd,
  handleSelectPerson,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {films && species && (
            <Filters
              films={films}
              species={species}
              selectedFilms={selectedFilms}
              selectedSpecies={selectedSpecies}
              startYear={startYear}
              endYear={endYear}
              isRelationshipAnd={isRelationshipAnd}
              handleChange={handleChange}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {people?.map((person) => (
            <List dense key={person.id}>
              <ListItem
                button
                component="li"
                id={person.id}
                onClick={handleSelectPerson}
              >
                <ListItemText primary={person.name} />
              </ListItem>
            </List>
          ))}
          {people?.length === 0 && (
            <Typography variant="h6" align="center">Characters not found...</Typography>
          )}
        </Grid>
      </Grid>
      {selectedPerson && (
        <Popup title={selectedPerson.name} handleClose={handleSelectPerson}>
          <PersonCard person={selectedPerson} />
        </Popup>
      )}
      <BackdropWithCircularProgress isOpen={isLoading} />
    </div>
  );
};

PeopleLayout.propTypes = {
  isLoading: PropTypes.bool,
  people: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  })),
  films: PropTypes.arrayOf(PropTypes.shape({})),
  species: PropTypes.arrayOf(PropTypes.shape({})),
  selectedPerson: PropTypes.shape({
    name: PropTypes.string,
    appearedInFilm: PropTypes.arrayOf(PropTypes.shape({})),
    species: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  selectedFilms: PropTypes.arrayOf(PropTypes.shape({})),
  selectedSpecies: PropTypes.arrayOf(PropTypes.shape({})),
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  isRelationshipAnd: PropTypes.bool,
  handleSelectPerson: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

PeopleLayout.defaultProps = {
  isLoading: false,
  people: null,
  films: null,
  species: null,
  selectedPerson: null,
  selectedFilms: [],
  selectedSpecies: [],
  startYear: '',
  endYear: '',
  isRelationshipAnd: false,
};

export default memo(PeopleLayout);
