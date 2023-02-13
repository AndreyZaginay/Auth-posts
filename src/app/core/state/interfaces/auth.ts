import { SystemUser } from '@shomas/entities';

export interface AuthState {
  currentUser: SystemUser;
  isLoggedIn: boolean;
  error: Error | undefined;
}

