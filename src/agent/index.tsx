import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { IUser } from 'src/app/types/dto';
import { firebaseConfig } from '../app/utils/config';
import uuid from 'uuid-random';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, 'users');

const getUsers = async () => {
  const usersSnapshot = await getDocs(userCollection);
  const userList = usersSnapshot.docs.map(user => ({pk: user.id, ...user.data()}));
  return userList as IUser[];
}

const addUser = async (user: IUser) => {
  const docRef = doc(db, "users", user.pk);
  await setDoc(docRef, user);
}

const editUser = async (user: IUser) => {
  const docRef = doc(db, "users", user.pk);
  await setDoc(docRef, user);
}

const deleteUser = async (user: IUser) => {
  await deleteDoc(doc(db, "users", user.pk));
}

export { getUsers, addUser, deleteUser, editUser }