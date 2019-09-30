import React from 'react';
/* --- Components --- */
import Loader from '../../loader';

const CreateModal = Loader({
  loader: () =>
    import('./createSpecialMealModal' /* webpackChunkName: 'BankModal' */),
});
const EditModal = Loader({
  loader: () =>
    import('./editSpecialMealModal' /* webpackChunkName: 'BankModal' */),
});
const DeleteModal = Loader({
  loader: () =>
    import('./deleteSpecialMealModal' /* webpackChunkName: 'BankModal' */),
});

const ModalController = ({
  clickedBtn,
  formattedTmr,
  adminSpecialMealMsg,
  // globalState
  clickedUserData,
  // actions
  hideModal,
  addFlashMessage,
  createSpecialMeal,
  updateSpecialMeal,
  deleteSpecialMeal,
  resetSelectedItemValue,
  saveClickedItemData,
  getUsers,
}) => (
  <React.Fragment>
    {clickedBtn === 'create' && (
      <CreateModal
        formattedTmr={formattedTmr}
        hideModal={hideModal}
        addFlashMessage={addFlashMessage}
        createSpecialMeal={createSpecialMeal}
        getUsers={getUsers}
        adminSpecialMealMsg={adminSpecialMealMsg}
        resetSelectedItemValue={resetSelectedItemValue}
        saveClickedItemData={saveClickedItemData}
      />
    )}
    {clickedBtn === 'edit' && (
      <EditModal
        hideModal={hideModal}
        addFlashMessage={addFlashMessage}
        updateSpecialMeal={updateSpecialMeal}
        clickedUserData={clickedUserData}
      />
    )}{' '}
    {clickedBtn === 'delete' && (
      <DeleteModal
        hideModal={hideModal}
        addFlashMessage={addFlashMessage}
        deleteSpecialMeal={deleteSpecialMeal}
        clickedUserData={clickedUserData}
      />
    )}
  </React.Fragment>
);

export default ModalController;