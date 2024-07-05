import { collection, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { getDb } from "../utils/db";
import HTTPError from 'http-errors';

interface Subject {
  courseCode: string;
  courseTitle: string;
  mark: number;
}

interface Student {
  gID: string;
  name: string;
  degree: string;
  house: 'blue_lions' | 'black_eagles' | 'golden_deer';
  profileUrl: string;
  password: string;
  user_type: 'STUDENT';
  subjects: Subject[];
}

interface StudentDetailsReturn {
  student: Student
}

export async function studentDetails(gID: string) : Promise<StudentDetailsReturn> {
  const db = getDb();
  const querySnapshot = await getDocs(query(collection(db, 'students'), where('gID', '==', gID), limit(1)));

  if (querySnapshot.empty) throw HTTPError(400, 'Invalid Student sGID');

  return {
    student: querySnapshot.docs[0].data() as Student
  };

}