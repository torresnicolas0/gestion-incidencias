import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { IncidentModalService } from '@features/incidents/modal/incident-modal.service';
import { IncidentModalComponent } from '@features/incidents/modal/incident-modal.component';

const MATERIAL_MODULES = [ MatCardModule ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _incidentModalSvc = inject(IncidentModalService)
  onClickNewIncident():void{
    this._incidentModalSvc.openModal<IncidentModalComponent>(IncidentModalComponent);
  }
}
