import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import { IUser } from 'src/app/types/dto';
import { firebaseConfig } from '../app/utils/config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUsers = async () => {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map(user => user.data());
  return userList as IUser[];
}

export { getUsers }