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
  /**
   * 
   * Exercise 5 - Retrieving data with a specific query.
   * 
   * This function is currently a stub - it only returns a default value.
   * Complete this function such that it looks up a student in the database
   * with the associated gID, and returns that data inside an object.
   * 
   * As with the previous exercise, it is recommended you research the Firestore
   * library yourself, accessible via here:
   * 
   * https://firebase.google.com/docs/reference/js/firestore_.md#@firebase/firestore
   * 
   * Additionally, you can take a look at funcs/staffDetails.ts for an idea of how to complete
   * this function. The final result should be similar.
   * 
   * Note: It is important to note that you must return your data within an object
   * contained in a field called "student" (Typescript will also yell at you if you don't do this right). I.e.
   * 
   * {
   *    student: {
   *      gID: 5362313,
   *      name: "Elphaba Thropp"
   *      ...
   *    }
   * }
   * 
   * To confirm your implementation works, you will login and logout each time you 
   * make a change to the backend.
   * 
   */

  return {
    student: {
      gID: '0000000',
      name: 'NO_NAME',
      degree: 'NULL',
      house: 'black_eagles',
      profileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png',
      password: 'password',
      user_type: 'STUDENT',
      subjects: []
    }
  }

}