import { SystemUser } from '@shomas/entities';

export interface AuthState {
  currentUser: SystemUser | undefined;
  isLoggedIn: boolean;
  error: Error | undefined;
}

