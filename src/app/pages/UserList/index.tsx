import React from 'react';
import { IUser } from '../../types/dto';
import { DataTable } from '../../components';
import { getUsers } from '../../../agent';

const UserList = () => {
    const [userDatas, setUserDatas] = React.useState<Array<IUser>>([]);

    React.useEffect(() => {
        getTableUsers()
    },[])

    const getTableUsers = async () => {
        const usersResponse = await getUsers();
        setUserDatas(usersResponse)
    }
    
    const columns = [{
        label: 'ID',
        value: 'id'
    },
    {
        label: 'First Name',
        value: 'firstname'
    },
    {
        label: 'Last Name',
        value: 'lastname'
    }
    , 
]
    
    const editRow = async (user: IUser) => {
        console.log(user)
    }

    const deleteRow = async (user: IUser) => {
        console.log(user)
    }

    return(
        <>
            <DataTable 
                tableDatas={userDatas}
                columns={columns}
                onEdit={editRow}
                onDelete={deleteRow}
            />
        </>
    )
}

export default UserList;