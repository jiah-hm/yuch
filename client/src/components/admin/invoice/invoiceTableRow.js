import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const styles = theme => ({
  resize: {
    [theme.breakpoints.up('md')]: {
      fontSize: '15.5px',
    },
  },
});

const SpecialMealTableRow = ({
  classes: { resize },
  row,
  // local state
  selectedRow,
  // global state
  searchedValue,
  // func
  onfocusOnSelectdRow,
}) => (
  <TableRow
    key={row.userId}
    onClick={() => onfocusOnSelectdRow(row.userId)}
    role="checkbox"
    aria-checked={selectedRow === row.userId}
    tabIndex={-1}
    selected={selectedRow === row.userId || searchedValue === row.companyName}
  >
    <TableCell align="right" className={resize}>
      <Link className="td-none c-point2 fw6" to={`/invoice/${row.userId}`}>
        {row.companyName}
      </Link>
    </TableCell>
    <TableCell align="right" className={resize}>
      {row.mealPrice}
    </TableCell>
    <TableCell align="right" className={resize}>
      {row.sumTotal}
    </TableCell>
  </TableRow>
);

export default withStyles(styles)(SpecialMealTableRow);
