import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { getDb } from "../utils/db";
import HTTPError from 'http-errors';

interface Staff {
  "gId": string,
  "name": string,
  "password": string,
  "role": string,
  "faculty": string,
  "education": string[],
  "teaching": string[],
  "user_type": "STAFF",
  "profileUrl": string
}

interface StaffDetailsReturn {
  staff: Staff;
}

export async function staffDetails(gID: string) : Promise<StaffDetailsReturn> {
  const db = getDb();
  const querySnapshot = await getDocs(query(collection(db, 'staff'), where('gID', '==', gID), limit(1)));

  if (querySnapshot.empty) throw HTTPError(400, 'Invalid Staff GID');

  return {
    staff: querySnapshot.docs[0].data() as Staff
  };
}