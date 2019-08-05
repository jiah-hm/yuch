import React from 'react';
/* --- Components --- */
import AdminConfirmContainer from '../../../shared/adminConfirm/adminConfirmContainer';

const DeleteUserFormBox = ({
  handleCloseModal,
  addFlashMessage,
  closeSubModal,
  deleteUser,
  clickedUserData,
}) => {
  const handleDeleteUser = async () => {
    const { id, companyName } = clickedUserData;

    const res = await deleteUser(id);
    if (!res.error) {
      await Promise.all([closeSubModal(), handleCloseModal()]);
      return window.location.reload(true);
    }
    return addFlashMessage(
      'error',
      `${companyName} 고객 계정 삭제에 실패하였습니다. 비밀번호를 확인해주세요.`,
    );
  };

  return (
    <AdminConfirmContainer
      handleButtonClick={handleDeleteUser}
      confirmType="delete"
    />
  );
};

export default DeleteUserFormBox;
