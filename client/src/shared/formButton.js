import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: '20px 14px',
    paddingTop: '2px',
    paddingBottom: '1px',
    fontSize: '14px',
    lineHeight: '28px',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '31px',
    },
  },
});

const FormButton = ({
  typeValue,
  variantValue,
  buttonName,
  width,
  isSubmitting,
  classes,
}) => {
  const widthValue =
    width === 'big' ? '8em' : width === 'small' ? '5em' : '7em';
  return (
    <React.Fragment>
      <Button
        type={typeValue}
        variant={variantValue}
        color="primary"
        size="small"
        style={{ width: widthValue }}
        className={classes.button}
        disabled={isSubmitting}
      >
        {buttonName}
      </Button>
    </React.Fragment>
  );
};

export const Unwrapped = FormButton;
export default withStyles(styles)(FormButton);
