import { CollectionReference, Firestore, QuerySnapshot, collection, getDocs, limit, query, where } from "firebase/firestore";
import { getDb } from "../utils/db";
import HTTPError from 'http-errors';

interface LoginReturn {
  gID: string;
  user_type: string;
}

async function execQuery(ref: CollectionReference, gID: string, password: string) : Promise<QuerySnapshot> {
  const q = query(ref, where('gID', '==', gID), where('password', '==', password), limit(1));

  const querySnapshot = await getDocs(q);

  return querySnapshot;
}

export async function login(gID: string, password: string) : Promise<LoginReturn> {
  const db = getDb();
  const studentsRef = collection(db, 'students');

  if (!(/^-?\d+$/.test(gID)) || !password) {
    throw HTTPError(400, 'Invalid gID or password');
  }

  const studentQuerySnapshot = await execQuery(studentsRef, gID, password);

  if (!studentQuerySnapshot.empty) {
    const studentData = studentQuerySnapshot.docs[0].data();
    return {
      gID: studentData['gID'],
      user_type: studentData['user_type']
    }
  }

  const staffRef = collection(db, 'staff');
  const staffQuerySnapshot = await execQuery(staffRef, gID, password);

  if (!staffQuerySnapshot.empty) {
    const staffData = staffQuerySnapshot.docs[0].data();

    return {
      gID: staffData['gID'],
      user_type: staffData['user_type']
    }
  }

  throw HTTPError(401, 'Invalid user credentials');
}