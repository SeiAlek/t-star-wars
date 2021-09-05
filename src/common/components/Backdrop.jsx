import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    marginTop: 0,
  },
}));

const BackdropWithCircularProgress = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={isOpen} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

BackdropWithCircularProgress.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

BackdropWithCircularProgress.defaultProps = {
  isOpen: false,
  handleClose: null,
};

export default memo(BackdropWithCircularProgress);
