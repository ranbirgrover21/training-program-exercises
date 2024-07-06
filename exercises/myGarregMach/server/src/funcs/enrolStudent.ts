import { addDoc, collection, doc, getDocs, limit, query, where } from "firebase/firestore";
import { getDb } from "../utils/db";
import HTTPError from 'http-errors';

export async function enrolStudent(gID: string, name: string, password: string, profileUrl: string, degree: string, house: string) : Promise<Record<string, never>> {
  const db = getDb();
  const studentRef = collection(db, 'students');

  if (!gID.startsWith('542')) throw HTTPError(400, 'Student gID does not start with 542.');

  if (!(/^-?\d+$/.test(gID)) || gID.length !== 7) throw HTTPError(400, 'Student gID is not all digits and not seven digits.');

  if (!name || !password || !degree || !house) throw HTTPError(400, 'Name, password, profileUrl, degree or house is not valid.');

  const q = query(studentRef, where('gID', '==', gID), limit(1));
  const qSnapshot = await getDocs(q);

  const q2 = query(collection(db, 'staff'), where('gID', '==', gID), limit(1));
  const q2Snapshot = await getDocs(q2);

  if (!qSnapshot.empty || !q2Snapshot.empty) throw HTTPError(400, 'gID is already taken.');

  await addDoc(studentRef, {
    gID : gID,
    name: name,
    password : password,
    profileUrl : profileUrl,
    degree: degree,
    house: house,
    subjects: [],
    user_type: 'STUDENT'
  })

  return {};
}