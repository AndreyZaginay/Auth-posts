export interface AuthState {
    currentUser: User | null;
    isLoggedIn: boolean;
    error: string | null;
}

export interface User {
    email: string;
    password: string;
}