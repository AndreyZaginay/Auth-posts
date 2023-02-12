import { BaseCredentials } from "./base-credentials";

export type RegisterCredentials = BaseCredentials & Required<{ firstname: string; lastname: string }>;
