import React, { useState } from 'react';
import { Formik, Form } from 'formik';
/* --- Components --- */
import BankForm from './bankForm';
import AdminConfirmContainer from '../../../shared/adminConfirm/adminConfirmContainer';

const EditBankFormBox = ({
  bankAccountValidation,
  editBankAccount,
  handleCloseModal,
  addFlashMessage,
  clickedUserData,
}) => {
  const [confirmMsg, setConfirmMesg] = useState(true);
  const checkIfUserIsAdmin = () => setConfirmMesg(false);
  const handleEditBankAccount = async (
    values,
    { setSubmitting, resetForm },
  ) => {
    const res = await editBankAccount(values);
    if (!res.error) {
      await Promise.all([resetForm({}), handleCloseModal()]);
      return window.location.reload(true);
    }
    addFlashMessage(
      'error',
      `${
        values.accountHolder
      } 님의 은행계좌 수정에 실패하였습니다. 이미 등록한 계좌정보인지 확인하신후, 다시 시도해주세요.`,
    );
    return setSubmitting(false);
  };
  return (
    <React.Fragment>
      {confirmMsg ? (
        <AdminConfirmContainer
          handleButtonClick={checkIfUserIsAdmin}
          confirmType="edit"
        />
      ) : (
        <Formik
          initialValues={clickedUserData[0]}
          render={props => (
            <Form className="mh1">
              <BankForm {...props} />
            </Form>
          )}
          onSubmit={handleEditBankAccount}
          validationSchema={bankAccountValidation}
        />
      )}
    </React.Fragment>
  );
};

export default EditBankFormBox;