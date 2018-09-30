import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
/* --- Components --- */
import SwitchReserve from './switchReserve';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 33,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 6,
    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 36,
      paddingLeft: theme.spacing.unit * 12,
      paddingRight: theme.spacing.unit * 12,
    },
  },
});

const SimpleModal = ({
  show,
  apiRequest,
  tommrow,
  reserveInfo,
  handleClose,
  handleChange,
  handleSave,
  classes,
}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={show}
    onClose={handleClose}
  >
    <div
      className={`tc modal ${classes.paper}`}
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h3 variant="title" id="modal-title" className="mb2">
        Reservation
      </h3>
      <SwitchReserve
        tommrow={tommrow}
        apiRequest={apiRequest}
        reserveInfo={reserveInfo}
        handleChange={handleChange}
        handleSave={handleSave}
        handleClose={handleClose}
      />
    </div>
  </Modal>
);

export default withStyles(styles)(SimpleModal);
