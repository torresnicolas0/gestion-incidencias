import { Component, input, OnInit, viewChild, signal, effect, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APP_CONSTANTS } from '@shared/constants';

import { IncidentService } from '@features/incidents/incident.service';

import { IncidentModalService } from '@features/incidents/modal/incident-modal.service';
import { IncidentModalComponent } from '@features/incidents/modal/incident-modal.component';
import { SnackBarService } from '@shared/services/snack-bar.service';

const MATERIAL_MODULES = [ MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule ];

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [ FilterComponent, MATERIAL_MODULES ],
  templateUrl: './grid.component.html'
})
export class GridComponent<T> implements OnInit {
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns = input<string[]>([]);

  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _incidentSvc = inject(IncidentService);
  private readonly _incidentModalSvc = inject(IncidentModalService);
  private readonly _snackBar = inject(SnackBarService);

  get appConstants() {
    return APP_CONSTANTS;
  }

  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter();
      } else {
        this.dataSource.filter = "";
      }

      if (this.data()) {
        this.dataSource.data = this.data();
      }

    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  openEditForm(data: T, type: 'user' | 'incident'): void {
    if (type === 'incident') {
      this._incidentModalSvc.openModal<IncidentModalComponent, T>(IncidentModalComponent, data, true);
    }
  }

  openItem(data: T, type: 'user' | 'incident'): void {
    if (type === 'incident') {
      this._incidentModalSvc.openModal<IncidentModalComponent, T>(IncidentModalComponent, data, false);
    }
  }

  deleteItem(id: string, type: 'user' | 'incident'): void {
    const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    if (confirmation) {
      if (type === 'incident') {
        this._incidentSvc.deleteIncident(id);
        this._snackBar.showSnackBar(APP_CONSTANTS.MESSAGES.INCIDENT_DELETED);
      }
    }
  }
}
