import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { IUser } from 'src/app/types/dto';
import { firebaseConfig } from '../app/utils/config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUsers = async () => {
  const userCollection = collection(db, 'users');
  const usersSnapshot = await getDocs(userCollection);
  const userList = usersSnapshot.docs.map(user => user.data());
  return userList as IUser[];
}

const addUser = async (user: IUser) => {
  await setDoc(doc(db, "users"), user);
}

const deleteUser = async (user: IUser) => {
  await deleteDoc(doc(db, "users", user.id));
}

export { getUsers, addUser, deleteUser }