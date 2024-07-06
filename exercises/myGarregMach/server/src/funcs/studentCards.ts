import { collection, getDocs } from "firebase/firestore";
import { getDb } from "../utils/db";

interface StudentCard {
  name: string;
  degree: string;
  house: 'black_eagles' | 'golden_deer' | 'blue_lions';
  profileUrl: string;
}

interface StudentCardsReturn {
  studentCards: StudentCard[];
}

export async function studentCards() : Promise<StudentCardsReturn> {
  /**
   * Exercise 4 - Pre-processing retrieved database data.
   * 
   * This function is currently a stub. 
   * 
   * Your task is to complete this function, such that it reads from all the 
   * students in the students collection, then construct an array of studentCards,
   * which will be used for the return. 
   * 
   * You can take a look at the student data in the database to understand what a Student document
   * contains, but for quick reference, a single Student document in the database looks like this:
   * 
   * {
   *    gID: string;
   *    name: string;
   *    degree: string;
   *    house: 'blue_lions' | 'black_eagles' | 'golden_deer';
   *    profileUrl: string;
   *    password: string;
   *    user_type: 'STUDENT';
   *    subjects: Subject[];
   * }
   * 
   * The function should return an object with field 'studentCards', which 
   * contains an array of StudentCards. A StudentCard structure is specified in the
   * TypeScript interface above. 
   * 
   * You can make reference back to funcs/notices.ts to get an idea of what this function
   * might look like. 
   * 
   * To confirm your implementation works, you will login and logout each time you 
   * make a change to the backend.
   * 
   */

  return { 
    studentCards: [] 
  };
}