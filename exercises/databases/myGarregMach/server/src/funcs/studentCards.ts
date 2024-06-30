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
  const db = getDb();
  const studentsRef = collection(db, 'students');
  const allStudents = await getDocs(studentsRef);

  const studentCards : StudentCard[] = [];

  allStudents.forEach((doc) => {
    const data = doc.data();

    studentCards.push({
      name: data.name,
      degree: data.degree,
      house: data.house,
      profileUrl: data.profileUrl
    });
  });

  return { studentCards };
}