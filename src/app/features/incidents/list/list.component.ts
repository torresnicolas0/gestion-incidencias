import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Incident } from '@features/incidents/incident.interfaces';
import { IncidentService } from '@features/incidents/incident.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      <app-grid [displayedColumns]="displayedColumns" [data]="incidents()" [sortableColumns]="sortables" />
    </section>
  `,
})
export class ListComponent implements OnInit {
  incidents = signal<Incident[]>([]);
  displayedColumns:ColumnKeys<Incident> = [ 'title', 'description', 'priority', 'status', 'assignedTo', 'createdBy', 'action' ];
  sortables:ColumnKeys<Incident> = [ 'title', 'description', 'priority', 'status', 'assignedTo', 'createdBy' ];

  private readonly _incidentSvc = inject(IncidentService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit():void {
    this.getAllIncidents();
  }

getAllIncidents() {
  this._incidentSvc.getAllIncidents()
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      tap((incidents: Incident[]) => this.incidents.set(incidents.map(incident => ({ ...incident, type: 'incident' }))))
    )
    .subscribe(
      (incidents: Incident[]) => this.incidents.set(incidents.map(incident => ({ ...incident, type: 'incident' }))),
      (error) => {
        console.error("Error al obtener incidents:", error);
        throw error;
      }
    );
}  
}
