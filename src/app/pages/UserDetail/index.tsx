import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Form, Modal } from 'src/app/components';
import { useActionContext } from 'src/app/context';
import { DefaultLayout } from 'src/app/layouts';
import { IColumnProps } from 'src/app/types';
import { iniitalUserObject } from 'src/app/utils/initials';
import { IUser } from '../../types/dto';
import { EditButtonContainer } from './styled';

const fields: Array<IColumnProps> = [  
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
  ];

const UserDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [form, setForm] = React.useState<IUser>(iniitalUserObject)
    const {EditUser, GetUserDetail, loading} = useActionContext();
    const [openAddModal, setOpenAddModal] = React.useState<boolean>(false);

    React.useEffect(() => {
        if(id){
            GetUserDetail(id).then((response: IUser | "Does not exist") => {
                if(typeof response === 'string' ){
                    return navigate('/')
                }
                setForm(response)
            } )
        }
    },[id])

    return <DefaultLayout>
        <Card.Personal
          userInformations={form}
          loading={loading}
        />
        <Modal title="Edit User" open={openAddModal} closeModal={setOpenAddModal}>
            <Form
            form={form}
            setForm={setForm}
            fields={fields}
            onSubmit={async (user: IUser) => { 
                await EditUser(user);
                setOpenAddModal(false)
            }}
            hiddenFields={['pk']}
            requiredFields={['id', 'firstname', 'lastname']}
            />
        </Modal>
        <EditButtonContainer>
            <Button.Add onClick={() => setOpenAddModal(true)} text="Edit User" />
        </EditButtonContainer>
    </DefaultLayout>
}

export default UserDetail;