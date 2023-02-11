export interface AuthState {
    currentUser: User;
    isLoggedIn: boolean;
    error: string | null;
}

export interface User {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    secondName: string
}

export interface loginCredentials {
    email: string;
    password: string;
}

export interface registerCredentials {
    email: string;
    password: string;
    firstName: string;
    secondName: string
}
