export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    age: number;
    discount: number;
    identityId: string;
}

export interface IUserUpdate {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    age: number;
    discount: number;
    identityId: string;
}
