import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IncidentService } from '@features/incidents/incident.service';
import { IncidentModalService } from './incident-modal.service';
import { APP_CONSTANTS } from '@shared/constants';
import { SnackBarService } from '@shared/services/snack-bar.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [MatDialogModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatOptionModule, MatSelectModule];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MATERIAL_MODULES],
  templateUrl: './incident-modal.component.html',
  styleUrl: './incident-modal.component.scss',
})
export class IncidentModalComponent implements OnInit {
  incidentForm!: FormGroup;
  isEditing: boolean;

  constructor(
    private readonly _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _matDialogData: { data: any; isEditing: boolean },
    private readonly _incidentSvc: IncidentService,
    private readonly _modalSvc: IncidentModalService,
    private readonly _snackBar: SnackBarService
  ) {
    this.isEditing = this._matDialogData.isEditing;
  }

  get appConstants() {
    return APP_CONSTANTS;
  }

  ngOnInit(): void {
    this._buildForm();
    if (this._matDialogData?.data) {
      this.incidentForm.patchValue(this._matDialogData.data);
    }
  }

  async onSubmit() {
    let message = APP_CONSTANTS.MESSAGES.INCIDENT_UPDATED;
    const incident = this.incidentForm.value;

    if (this._matDialogData?.data) {
      await this._incidentSvc.updateIncident(this._matDialogData.data.id, incident);
    } else {
      await this._incidentSvc.newIncident(incident);
      message = APP_CONSTANTS.MESSAGES.INCIDENT_ADDED;
    }

    this._snackBar.showSnackBar(message);
    this._modalSvc.closeModal();
  }

  getTitle(): string {
    return this._matDialogData?.data
      ? APP_CONSTANTS.UI_ELEMENTS.MODAL.TITLE_SAVE
      : APP_CONSTANTS.UI_ELEMENTS.MODAL.TITLE_ADD;
  }

  getBtn(): string {
    return this._matDialogData?.data
      ? APP_CONSTANTS.UI_ELEMENTS.MODAL.BTN_SAVE
      : APP_CONSTANTS.UI_ELEMENTS.MODAL.BTN_ADD;
  }

  private _buildForm(): void {
    this.incidentForm = this._fb.nonNullable.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      assignedTo: ['', Validators.required],
      createdBy: ['', Validators.required],
    });
  }
}
