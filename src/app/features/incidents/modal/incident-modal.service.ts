import { ComponentType } from "@angular/cdk/portal";
import { inject, Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Incident } from "@features/incidents/incident.interfaces";

@Injectable({providedIn: 'root'})
export class IncidentModalService {
    private readonly _dialog = inject(MatDialog);

    openModal<CT, T = Incident>(componentRef:ComponentType<CT>, data?:T, isEditing = true): void{
        const config = { data, isEditing };
        this._dialog.open( componentRef, {
            data:config,
            width:'600px'
        } );
    }

    closeModal():void{
        this._dialog.closeAll();
    }
}