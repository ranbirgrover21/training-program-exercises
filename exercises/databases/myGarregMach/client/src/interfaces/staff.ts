import { User } from "./user";

export interface Staff extends User {
  role: string;
  faculty: string;
  education: string[];
  teaching: string[];
  user_type: 'STAFF';
}