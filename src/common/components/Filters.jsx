import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from './Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {},
  formWrapper: {
    paddingTop: theme.spacing(4),
  },
  fieldWrapper: {
    padding: theme.spacing(0, 2, 4),
  },
}));

const Filters = ({
  films,
  species,
  selectedFilms,
  selectedSpecies,
  startYear,
  endYear,
  isRelationshipAnd,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container className={classes.formWrapper}>
        <Grid item className={classes.fieldWrapper} xs={12}>
          <FormControlLabel
            control={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Switch
                checked={isRelationshipAnd}
                onChange={handleChange}
                color="primary"
                name="isRelationshipAnd"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={
              isRelationshipAnd
                ? 'Relative all selected fields'
                : 'Relative one of selected fields'
            }
          />
        </Grid>
        <Grid item className={classes.fieldWrapper} xs={12}>
          {films && (
            <Autocomplete
              id="films-autocomplete-field"
              name="films"
              options={films}
              value={selectedFilms}
              label="Movies"
              handleSelect={handleChange}
            />
          )}
        </Grid>
        <Grid item className={classes.fieldWrapper} xs={12}>
          {species && (
            <Autocomplete
              id="species-autocomplete-field"
              name="species"
              options={species}
              value={selectedSpecies}
              label="Species"
              handleSelect={handleChange}
            />
          )}
        </Grid>
        <Grid item className={classes.fieldWrapper} xs={12}>
          <FormControl fullWidth>
            <TextField
              name="startYear"
              value={startYear}
              label="Start Year"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item className={classes.fieldWrapper} xs={12}>
          <FormControl fullWidth>
            <TextField
              name="endYear"
              value={endYear}
              label="End Year"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
            <FormHelperText variant="outlined">
              For example: 112 BBY
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

Filters.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  species: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedFilms: PropTypes.arrayOf(PropTypes.shape({})),
  selectedSpecies: PropTypes.arrayOf(PropTypes.shape({})),
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  isRelationshipAnd: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  selectedFilms: [],
  selectedSpecies: [],
  startYear: '',
  endYear: '',
  isRelationshipAnd: false,
};

export default memo(Filters);
