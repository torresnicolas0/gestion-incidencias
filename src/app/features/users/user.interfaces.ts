import { Timestamp } from "@angular/fire/firestore";

export type ColumnKeys<T> = (keyof T)[];

// export interface User {
//     name: string;
//     email: string;
//     phone?: string;
//     role: 'User' | 'Admin';
//     action?: string;
//     created: Timestamp;
//     updated: Timestamp;
// }

export interface User {
    uid: string;
    email: string;
    name: string;
    role: 'Suscriptor' | 'User' | 'Admin';
    action?: string;
    created: Timestamp;
    updated: Timestamp;
}
