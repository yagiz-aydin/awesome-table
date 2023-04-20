import React from 'react';
import { IUser } from '../../types/dto';
import { DataTable, Modal, Form, Button } from '../../components';
import { getUsers, addUser, editUser, deleteUser } from '../../../agent';
import { DefaultLayout } from '../../layouts';
import { AddButtonContainer } from './styled';
import uuid from 'uuid-random';
import { IColumnProps } from "../../types/"

const columns: Array<IColumnProps> = [
  {
    label: 'Primary Key',
    value: 'pk',
    hidden: true
  },
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

const UserList = () => {
  const iniitalUserObject: IUser = {
    pk: uuid(),
    id: '',
    firstname: '',
    lastname: '',
  };

  const [userDatas, setUserDatas] = React.useState<Array<IUser>>([]);
  const [form, setForm] = React.useState<IUser>(iniitalUserObject);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    getTableUsers();
  }, []);

  const getTableUsers = async () => {
    setLoading(true);
    const usersResponse = await getUsers();
    setUserDatas(usersResponse);
    setLoading(false);
  };

  const editRow = async (user: IUser) => {
    setOpenEditModal(true);
    setForm(user);
  };

  const onAddButtonClick = () => {
    setForm(iniitalUserObject);
    setOpenAddModal(true);
  };

  const deleteRow = async (user: IUser) => {
    setLoading(true);
    await deleteUser(user);
    await getTableUsers();
    setLoading(false);
  };

  const editOnSubmit = async () => {
    await editUser(form);
    await getTableUsers();
    setOpenEditModal(false);
  };

  const addOnSubmit = async () => {
    await addUser(form);
    await getTableUsers();
    setOpenAddModal(false);
  };

  return (
    <DefaultLayout>
      <Modal
        title="Edit User"
        open={openEditModal}
        closeModal={setOpenEditModal}
      >
        <Form
          form={form}
          setForm={setForm}
          columns={columns}
          onSubmit={editOnSubmit}
          hiddenFields={['pk']}
          requiredFields={['id', 'firstname', 'lastname']}
        />
      </Modal>
      <AddButtonContainer>
        <Button.Add onClick={onAddButtonClick} text="+ Add User" />
      </AddButtonContainer>
      <Modal title="Add User" open={openAddModal} closeModal={setOpenAddModal}>
        <Form
          form={form}
          setForm={setForm}
          columns={columns}
          onSubmit={addOnSubmit}
          hiddenFields={['pk']}
          requiredFields={['id', 'firstname', 'lastname']}
        />
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
