/* eslint-disable max-len */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import yellow from '@material-ui/core/colors/yellow';

import BackdropWithCircularProgress from '../../common/components/Backdrop';
import Popup from '../../common/components/Popup';
import PersonCard from './PersonCard';
import Filters from '../../common/components/Filters';
import Favorites from '../../common/components/Favorites';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  favorite: {
    color: yellow[500],
  },
}));

const PeopleLayout = ({
  isLoading,
  people,
  favorites,
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
  handleDragEnter,
  handleDragOver,
  handleDrop,
  handleDragEnd,
  handleRemoveFromFavorites,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              {films && (
                <Favorites
                  favorites={favorites}
                  handleClick={handleSelectPerson}
                  handleDragEnter={handleDragEnter}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  handleRemove={handleRemoveFromFavorites}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List dense>
            {people?.map((person) => (
              <ListItem
                id={person.id}
                key={person.id}
                button
                component="li"
                onClick={handleSelectPerson}
                draggable
                onDragEnd={handleDragEnd}
              >
                <ListItemText primary={person.name} />
                {favorites.some((favorite) => favorite.id === person.id) && (
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="favorites" className={classes.favorite}>
                      <StarIcon color="inherit" />
                    </IconButton>
                  </ListItemSecondaryAction>
                )}
              </ListItem>
            ))}
          </List>
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
  favorites: PropTypes.arrayOf(PropTypes.shape({
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
  handleDragEnter: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleRemoveFromFavorites: PropTypes.func.isRequired,
};

PeopleLayout.defaultProps = {
  isLoading: false,
  people: null,
  favorites: null,
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
