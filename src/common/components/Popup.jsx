import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(({
  children,
  classes,
  onClose,
  ...other
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomizedDialogs = ({
  children,
  title,
  button,
  handleClose,
  handleAction,
}) => (
  <Dialog onClose={handleClose} open>
    <DialogTitle onClose={handleClose}>
      {title}
    </DialogTitle>
    <DialogContent dividers>
      {children}
    </DialogContent>
    {handleAction && button && (
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          {button}
        </Button>
      </DialogActions>
    )}
  </Dialog>
);

CustomizedDialogs.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  handleAction: PropTypes.func,
};

CustomizedDialogs.defaultProps = {
  button: null,
  handleAction: null,
};

export default memo(CustomizedDialogs);
