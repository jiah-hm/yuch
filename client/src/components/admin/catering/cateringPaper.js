import React from 'react';
/* --- Components --- */
import Paper from '../../../shared/paper';
import CateringTable from './cateringTable';
import { divideInTow } from '../../../utils/sort';

const CateringPaper = ({
  // local state
  users,
  editIndex,
  selectedRow,
  // global state
  selectedItemValue,
  // actions
  updateUserCatering,
  addFlashMessage,
  saveSelectedItemValue,
  resetSelectedItemValue,
  // funcs
  startEditing,
  endEditing,
  handleTableRowClick,
  saveYposition,
}) => {
  const handleUpdate = async (userId, values) => {
    const res = await updateUserCatering(userId, values);
    if (res.error) {
      addFlashMessage(
        'error',
        `${values.companyName} 식수 등록에 실패하였습니다. 다시 시도해주세요.`,
      );
    } else {
      await saveYposition();
      await Promise.all([
        addFlashMessage(
          'success',
          `${values.companyName} 식수 등록되었습니다.`,
        ),
        endEditing(),
      ]);
      // window.location.reload(true);
    }
  };

  const { sortedDataA, sortedDataB } = divideInTow(users);

  return (
    <div className="paper">
      {users.length === 0 ? (
        <Paper
          component={<h3 className="mt4 mb4">등록된 고객이 없습니다.</h3>}
        />
      ) : (
        <React.Fragment>
          <Paper
            isDivided={users.length > 10 && true}
            component={
              <CateringTable
                sortedData={sortedDataA}
                selectedItemValue={selectedItemValue}
                saveSelectedItemValue={saveSelectedItemValue}
                resetSelectedItemValue={resetSelectedItemValue}
                startEditing={startEditing}
                endEditing={endEditing}
                editIndex={editIndex}
                handleTableRowClick={handleTableRowClick}
                selectedRow={selectedRow}
                handleUpdate={handleUpdate}
              />
            }
          />
          {users.length > 10 && (
            <Paper
              classname="paper--sec"
              isDivided={true}
              component={
                <CateringTable
                  sortedData={sortedDataB}
                  selectedItemValue={selectedItemValue}
                  saveSelectedItemValue={saveSelectedItemValue}
                  resetSelectedItemValue={resetSelectedItemValue}
                  startEditing={startEditing}
                  endEditing={endEditing}
                  editIndex={editIndex}
                  handleTableRowClick={handleTableRowClick}
                  selectedRow={selectedRow}
                  handleUpdate={handleUpdate}
                />
              }
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default CateringPaper;
