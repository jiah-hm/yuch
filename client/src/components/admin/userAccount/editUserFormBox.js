import React from 'react';
import { Formik, Form } from 'formik';
/* --- Components --- */
import EditUserForm from './editUserForm';
import { nextMonth } from '../../../helpers/moment';

const DeleteUserFormBox = ({
  showSubModal,
  handleCloseModal,
  addFlashMessage,
  clickedUserData,
  editUserAccountValidation,
  editUser,
  bankAccount,
  formatToYYYYMMDD,
}) => {
  const handleEditUser = async (values, { setSubmitting, resetForm }) => {
    const { companyName, startDate, ...others } = values;
    const formattedDate = formatToYYYYMMDD(startDate);
    const userInfo = {
      companyName,
      startDate: formattedDate,
      ...others,
      nextMonth,
    };

    const res = await editUser(userInfo);
    if (!res.error) {
      await Promise.all([resetForm({}), handleCloseModal()]);
      return window.location.reload(true);
    }
    addFlashMessage(
      'error',
      `${companyName} 고객 계정 수정에 실패하였습니다. 다른 고객계정과 중복되는 업체명, 아이디, 이메일이 있는지 확인해주세요.`,
    );
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
