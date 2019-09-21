import React from 'react';
/* --- Components --- */
import { stableSort, getSorting } from '../../../utils/sort';
import Paper from '../../../shared/paper';
import CateringTable from './cateringTable';

const CateringPaper = ({
  // local state
  users,
  // global state
  selectedSearchItem,
  // actions
  updateUserCatering,
  addFlashMessage,
  saveSelectedItemValue,
  resetSelectedItemValue,
}) => {
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('companyName');

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  let sortedDataA;
  let sortedDataB;
  if (users && users.length <= 10) {
    sortedDataA = stableSort(users, getSorting(order, orderBy));
    sortedDataB = [];
  }
  if (users && users.length > 10) {
    const line =
      users.length % 2 === 0 ? users.length / 2 : users.length / 2 + 0.5;
    sortedDataA = stableSort(users, getSorting(order, orderBy)).slice(0, line);
    sortedDataB = stableSort(users, getSorting(order, orderBy)).slice(
      line,
      users.length,
    );
  }

  return (
    <div id="print" className="paper users-catering--width">
      <Paper
        component={
          <CateringTable
            order={order}
            orderBy={orderBy}
            sortedData={sortedDataA}
            handleRequestSort={handleRequestSort}
            selectedSearchItem={selectedSearchItem}
            updateUserCatering={updateUserCatering}
            addFlashMessage={addFlashMessage}
            saveSelectedItemValue={saveSelectedItemValue}
            resetSelectedItemValue={resetSelectedItemValue}
          />
        }
      />
      <Paper
        classes="paper--sec"
        component={
          <CateringTable
            order={order}
            orderBy={orderBy}
            sortedData={sortedDataB}
            handleRequestSort={handleRequestSort}
            selectedSearchItem={selectedSearchItem}
            updateUserCatering={updateUserCatering}
            addFlashMessage={addFlashMessage}
            saveSelectedItemValue={saveSelectedItemValue}
            resetSelectedItemValue={resetSelectedItemValue}
          />
        }
      />
    </div>
  );
};

export default CateringPaper;