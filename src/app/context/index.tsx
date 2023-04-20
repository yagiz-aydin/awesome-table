import React, { useContext, createContext } from "react";
import { IUser } from "../types/dto";
import { getUsers, getUserDetail, addUser, editUser, deleteUser } from '../../agent';

interface ContextProps {
    GetUsers: Function
    GetUserDetail: Function
    DeleteUser: Function
    EditUser: Function
    AddUser: Function
    loading: boolean
}

export const ActionContext = createContext({} as ContextProps );

const ActionProvider = (properties: any) => {
    const [loading, setLoading] = React.useState<boolean>();

    const GetUsers = async () => {
        setLoading(true);
        try{
            const response = await getUsers();
            return response;
        }catch(error){
            return error;
        }finally{
            setLoading(false);
        }
    };

    const GetUserDetail = async (pk: string) => {
        setLoading(true);
        try{
            const response = await getUserDetail(pk);
            return response;
        }catch(error){
            return error;
        }finally{
            setLoading(false);
        }
    };

    const DeleteUser = async (form: IUser) => {
        setLoading(true);
        try{
            const response = await deleteUser(form);
            return response;
        }catch(error){
            return error;
        }finally{
            setLoading(false);
        }
      };
    
      const EditUser = async (form: IUser) => {
        setLoading(true);
        try{
            const response = await editUser(form);
            return response;
        }catch(error){
            return error;
        }finally{
            setLoading(false);
        }
      };
    
      const AddUser = async (form: IUser) => {
        setLoading(true);
        try{
            const response = await addUser(form);
            return response;
        }catch(error){
            return error;
        }finally{
            setLoading(false);
        }
    }
    
    const ActionContextValue = {
        GetUsers,
        GetUserDetail,
        DeleteUser,
        EditUser,
        AddUser,
        loading
      };

    return <ActionContext.Provider value={ActionContextValue} {...properties} />;
}

const useActionContext = () => useContext(ActionContext);

export { useActionContext, ActionProvider };