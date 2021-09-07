import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 300,
    padding: theme.spacing(2),
  },
}));

const Favorites = ({
  favorites,
  handleClick,
  handleDrop,
  handleDragEnter,
  handleDragOver,
  handleRemove,
}) => {
  const classes = useStyles();

  return (
    <Paper
      id="favorites"
      elevation={3}
      className={classes.root}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
    >
      <Typography variant="h6" align="center">
        Favorites
      </Typography>
      <List dense>
        {favorites?.map((person) => (
          <ListItem
            id={person.id}
            key={person.id}
            button
            component="li"
            onClick={handleClick}
          >
            <ListItemText primary={person.name} />
            <ListItemSecondaryAction
              className={classes.button}

            >
              <IconButton
                edge="start"
                id={person.id}
                onClick={handleRemove}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography variant="body2" align="center">
        Drag and drop characters to add them to Favorites
      </Typography>
    </Paper>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  })),
  handleClick: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  favorites: null,
};

export default memo(Favorites);
