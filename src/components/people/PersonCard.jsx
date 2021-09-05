import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minWidth: 320,
    maxWidth: 600,
  },
  title: {
    fontWeight: 600,
  },
}));

const PersonCard = ({ person }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mb={2}>
        <Typography component="span" className={classes.title}>
          {'Born: '}
        </Typography>
        <Typography component="span">
          {person.birthYear}
        </Typography>
      </Box>
      {!!person.species.length && (
        <Box mb={2}>
          <Typography component="span" className={classes.title}>
            {'Species: '}
          </Typography>
          <Typography component="span">
            {`${person.species.map(({ name }) => name).join(', ')}`}
          </Typography>
        </Box>
      )}
      <Box mb={2}>
        <Typography component="span" className={classes.title}>
          {'Movies: '}
        </Typography>
        <Typography component="span">
          {person.films.map(({ title, releaseDate }) => (
            `${title} (${new Date(releaseDate).getFullYear()})`
          )).join(', ')}
        </Typography>
      </Box>
      {!!person.starships.length && (
        <Box mb={2}>
          <Typography component="span" className={classes.title}>
            {'Starships: '}
          </Typography>
          <Typography component="span">
            {person.starships.map(({ name }) => name).join(', ')}
          </Typography>
        </Box>
      )}
    </div>
  );
};

PersonCard.propTypes = {
  person: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    birthYear: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.shape({})),
    appearedInFilm: PropTypes.string,
    species: PropTypes.arrayOf(PropTypes.shape({})),
    starships: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

PersonCard.defaultProps = {
  person: null,
};

export default memo(PersonCard);
