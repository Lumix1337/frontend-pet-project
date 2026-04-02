export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'Admin' | 'Project manager' | 'Team member';
  createdAt?: string;
}