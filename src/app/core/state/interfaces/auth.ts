import { SystemUser } from "../../entities/system-user";

export interface AuthState {
  currentUser: SystemUser;
  isLoggedIn: boolean;
  error: Error | undefined;
}

