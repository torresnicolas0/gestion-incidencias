import { inject, Injectable } from "@angular/core";
import { Firestore, collection, collectionData, query, orderBy, doc, getDoc, updateDoc, deleteDoc, addDoc, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { APP_CONSTANTS } from "@shared/constants";
import { User } from "@features/users/user.interfaces";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
    private readonly _firestore = inject(Firestore);
    private readonly _UserCollection = collection(this._firestore, APP_CONSTANTS.USER.COLLECTION_NAME);

    newUser(user:Partial<User>):Promise<DocumentReference<DocumentData, DocumentData>>{
        return addDoc(this._UserCollection, {
            created: Date.now(),
            updated: Date.now(),
            ...user,
        })
    }

    getAllUsers():Observable<User[]> {
        const queryFn = query(this._UserCollection, orderBy('created', 'desc'));
        return collectionData(queryFn, {idField: 'id'}) as Observable<User[]>
    }

    async getUserById(id:string):Promise<User> {
        const docRef = this._getDocRef(id);
        const documentData = await getDoc(docRef);
        return documentData.data() as User;
    }

    // updateUser(id:string, user:User):void {
    //     const docRef = this._getDocRef(id);
    //     updateDoc(docRef, {
    //         // ...user,
    //         updated: Date.now(),
    //     });
    // }
    updateUser(id: string, user: Partial<User>): void {
        const { name, role } = user;
        const docRef = this._getDocRef(id);
    
        updateDoc(docRef, {
            name,
            role,
            updated: Date.now(),
        });
    }
    
    deleteUser(id:string):void {
        const docRef = this._getDocRef(id);
        deleteDoc(docRef);
    }

    private _getDocRef(id:string) {
        return doc(this._firestore, APP_CONSTANTS.USER.COLLECTION_NAME, id);
    }
}
