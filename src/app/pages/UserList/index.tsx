import React from 'react';
import { IUser } from '../../types/dto';
import { DataTable, Modal, Form } from '../../components';
import { getUsers } from '../../../agent';

const UserList = () => {
  const [userDatas, setUserDatas] = React.useState<Array<IUser>>([]);
  const [editing, setEditing] = React.useState<IUser>();

  React.useEffect(() => {
    getTableUsers();
  }, []);

  const getTableUsers = async () => {
    const usersResponse = await getUsers();
    setUserDatas(usersResponse);
  };

  const columns = [
    {
      label: 'ID',
      value: 'id',
    },
    {
      label: 'First Name',
      value: 'firstname',
    },
    {
      label: 'Last Name',
      value: 'lastname',
    },
    {
      label: 'Settings',
    },
  ];

  const editRow = async (user: IUser) => {
    setEditing(user);
  };

  const editOnSubmit = async () => {};

  const deleteRow = async (user: IUser) => {
    console.log(user);
  };

  return (
    <>
      <Modal title="Edit User" open={!!editing} closeModal={setEditing}>
        <Form form={editing} columns={columns} onSubmit={editOnSubmit} />
      </Modal>
      <DataTable
        tableDatas={userDatas}
        columns={columns}
        onEdit={editRow}
        onDelete={deleteRow}
        redirectKey="id"
        redirectTo="/user-detail/"
      />
    </>
  );
};

export default UserList;
