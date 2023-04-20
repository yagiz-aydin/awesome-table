import React from 'react';
import { IUser } from '../../types/dto';
import { DataTable, Modal, Form } from '../../components';
import { getUsers } from '../../../agent';
import { DefaultLayout } from '../../layouts';

const UserList = () => {
  const [userDatas, setUserDatas] = React.useState<Array<IUser>>([]);
  const [form, setForm] = React.useState<IUser>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getTableUsers();
  }, []);

  const getTableUsers = async () => {
    setLoading(true)
    const usersResponse = await getUsers();
    setUserDatas(usersResponse);
    setLoading(false)
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
    setForm(user);
  };

  const editOnSubmit = async () => {};

  const deleteRow = async (user: IUser) => {
    console.log(user);
  };

  return (
    <DefaultLayout>
      <Modal title="Edit User" open={!!form} closeModal={setForm}>
        <Form form={form} setForm={setForm} columns={columns} onSubmit={editOnSubmit} />
      </Modal>
      <DataTable
        loading={loading}
        tableDatas={userDatas}
        columns={columns}
        onEdit={editRow}
        onDelete={deleteRow}
        redirectKey="id"
        redirectTo="/user-detail/"
      />
    </DefaultLayout>
  );
};

export default UserList;
