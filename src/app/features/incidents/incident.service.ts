import { inject, Injectable } from "@angular/core";
import { Firestore, collection, collectionData, query, orderBy, doc, getDoc, updateDoc, deleteDoc, addDoc, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { APP_CONSTANTS } from "@shared/constants";
import { Incident } from "@features/incidents/incident.interfaces";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class IncidentService {
    private readonly _firestore = inject(Firestore);
    private readonly _IncidentCollection = collection(this._firestore, APP_CONSTANTS.INCIDENCE.COLLECTION_NAME);

    newIncident(incident:Partial<Incident>):Promise<DocumentReference<DocumentData, DocumentData>>{
        return addDoc(this._IncidentCollection, {
            created: Date.now(),
            updated: Date.now(),
            ...incident,
        })
    }

    getAllIncidents():Observable<Incident[]> {
        const queryFn = query(this._IncidentCollection, orderBy('created', 'desc'));
        return collectionData(queryFn, {idField: 'id'}) as Observable<Incident[]>
    }

    async getIncidentById(id:string):Promise<Incident> {
        const docRef = this._getDocRef(id);
        const documentData = await getDoc(docRef);
        return documentData.data() as Incident;
    }

    updateIncident(id:string, incident:Incident):void {
        const docRef = this._getDocRef(id);
        updateDoc(docRef, {
            ...incident,
            updated: Date.now(),
        });
    }

    deleteIncident(id:string):void {
        const docRef = this._getDocRef(id);
        deleteDoc(docRef);
    }

    private _getDocRef(id:string) {
        return doc(this._firestore, APP_CONSTANTS.INCIDENCE.COLLECTION_NAME, id);
    }
}
