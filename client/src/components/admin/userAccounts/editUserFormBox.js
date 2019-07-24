import React from 'react';
import { Formik, Form } from 'formik';
/* --- Components --- */
import EditUserForm from './editUserForm';
import { nextMonth } from '../../../shared/moment';

const DeleteUserFormBox = ({
  showSubModal,
  handleCloseModal,
  addFlashMessage,
  clickedUserData,
  editUserAccountValidation,
  editUser,
  bankAccount,
}) => {
  const handleEditUser = async (values, { setSubmitting, resetForm }) => {
    const { companyName, lunchQty, dinnerQty, ...others } = values;
    const lunchQtyValue = lunchQty === '' ? null : lunchQty;
    const dinnerQtyValue = dinnerQty === '' ? null : dinnerQty;
    const userInfo = {
      companyName,
      lunchQty: lunchQtyValue,
      dinnerQty: dinnerQtyValue,
      ...others,
      nextMonth,
    };

    try {
      await editUser(userInfo);
      await Promise.all([resetForm({}), handleCloseModal()]);
      return window.location.reload(true);
    } catch (error) {
      await addFlashMessage(
        'error',
        `${companyName} 고객 계정 수정에 실패하였습니다. 다시 시도해 주세요.`,
      );
    }
    return setSubmitting(false);
  };

  return (
    <Formik
      initialValues={clickedUserData}
      render={props => (
        <Form>
          <EditUserForm
            {...props}
            showSubModal={showSubModal}
            bankAccount={bankAccount}
          />
        </Form>
      )}
      onSubmit={handleEditUser}
      validationSchema={editUserAccountValidation}
    />
  );
};

export default DeleteUserFormBox;
