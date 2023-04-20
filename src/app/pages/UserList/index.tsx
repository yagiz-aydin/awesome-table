import React from 'react';
import { IUser } from '../../types/dto';
import { DataTable, Modal, Form, Button } from '../../components';
import { DefaultLayout } from '../../layouts';
import { AddButtonContainer } from './styled';
import { IColumnProps } from "../../types/"
import { useActionContext } from 'src/app/context';
import { iniitalUserObject } from 'src/app/utils/initials';
import uuid from 'uuid-random';

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
  const [tableData, setTableData] = React.useState<IUser[]>([]);
  const [form, setForm] = React.useState<IUser>({...iniitalUserObject, pk: uuid()});
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = React.useState<boolean>(false);

  const editRow = async (user: IUser) => {
    setOpenEditModal(true);
    setForm(user);
  };

  const onAddButtonClick = () => {
    setForm({...iniitalUserObject, pk: uuid()});
    setOpenAddModal(true);
  };

  const {
    GetUsers,
    DeleteUser,
    EditUser,
    AddUser,
    loading
  } = useActionContext()

  React.useEffect(() => {
    getTableData()
  },[])

  const getTableData = async () =>{
    GetUsers().then((users: IUser[]) => setTableData(users))
  }

  console.log(form)
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
          fields={columns}
          onSubmit={async (user: IUser) => {
            await EditUser(user)
            await getTableData()
            setOpenEditModal(false)
          }}
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
          fields={columns}
          onSubmit={async (user: IUser) => { 
            await AddUser(user)
            await getTableData()
            setOpenAddModal(false)
          }}
          hiddenFields={['pk']}
          requiredFields={['id', 'firstname', 'lastname']}
        />
      </Modal>
      <DataTable
        loading={loading}
        tableDatas={tableData}
        columns={columns}
        onEdit={editRow}
        onDelete={async (user: IUser) => {
          await DeleteUser(user)
          await getTableData()
        }}
        linkKey="id"
        redirectKey="pk"
        redirectTo="/user-detail/"
      />
    </DefaultLayout>
  );
};

export default UserList;
