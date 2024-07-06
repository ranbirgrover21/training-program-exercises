import { Subject } from "./subject";
import { User } from "./user";

export interface Student extends User {
  house: "black_eagles" | "blue_lions" | "golden_deer";
  password: string;
  user_type: 'STUDENT';
  subjects: Subject[];
  degree: string;
}