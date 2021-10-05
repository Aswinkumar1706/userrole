import { Role } from "./role";

export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    username!: string;
    role: Role = new Role;
    token?: string
}
