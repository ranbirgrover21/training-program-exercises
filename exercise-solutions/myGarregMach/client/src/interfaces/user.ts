export interface User {
  gID: string;
  name: string;
  profileUrl: string;
  password: string;
  user_type: 'STAFF' | 'STUDENT';
}