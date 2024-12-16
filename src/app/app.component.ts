import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { UserModalService } from '@features/users/modal/user-modal.service';
import { IncidentModalService } from '@features/incidents/modal/incident-modal.service';
import { UserModalComponent } from '@features/users/modal/user-modal.component';
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
  private readonly _userModalSvc = inject(UserModalService)
  private readonly _incidentModalSvc = inject(IncidentModalService)
  onClickNewUser():void{
    this._userModalSvc.openModal<UserModalComponent>(UserModalComponent);
  }
  onClickNewIncident():void{
    this._incidentModalSvc.openModal<IncidentModalComponent>(IncidentModalComponent);
  }
}
