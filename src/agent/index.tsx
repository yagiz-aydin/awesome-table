import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { IUser } from 'src/app/types/dto';
import { firebaseConfig } from '../app/utils/config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, 'users');

const getUsers = async () => {
  const usersSnapshot = await getDocs(userCollection);
  const userList = usersSnapshot.docs.map(user => ({pk: user.id, ...user.data()}));
  return userList as IUser[];
}

const getUserDetail = async (pk: string) => {
  const docRef = doc(db, "users", pk);
  const usersSnapshot = await getDoc(docRef);
  if(!usersSnapshot.exists()){
    return 'Does not exist'
  }
  const _user = {pk: usersSnapshot.id, ...usersSnapshot.data()}  
  return _user as IUser;
}

const addUser = async (user: IUser) => {
  const docRef = doc(db, "users", user.pk);
  const response = await setDoc(docRef, user);
  return response
}

const editUser = async (user: IUser) => {
  const docRef = doc(db, "users", user.pk);
  const response = await setDoc(docRef, user);
  return response
}

const deleteUser = async (user: IUser) => {
  const response = await deleteDoc(doc(db, "users", user.pk));
  return response
}

export { getUsers, getUserDetail, addUser, deleteUser, editUser }