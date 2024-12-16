import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { UserService } from '@features/users/user.service';
import { UserModalService } from './user-modal.service';
import { APP_CONSTANTS } from '@shared/constants';
import { MatButtonModule } from '@angular/material/button';
import { SnackBarService } from '@shared/services/snack-bar.service';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_MODULES = [ MatDialogModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatSelectModule ];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MATERIAL_MODULES ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class UserModalComponent implements OnInit{
  userForm!:FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialgo = inject(MAT_DIALOG_DATA);
  private readonly _userSvc = inject(UserService);
  private readonly _modalSvc = inject(UserModalService);
  private readonly _snackBar = inject(SnackBarService);

  get appConstants() {
    return APP_CONSTANTS;
  }

  ngOnInit(): void {
    this._buildForm();
    this.userForm.patchValue(this._matDialgo.data);
  }

  async onSubmit() {
    let message = APP_CONSTANTS.MESSAGES.USER_UPDATED;
    const user = this.userForm.value;

    if(this._matDialgo.data) {
      this._userSvc.updateUser(this._matDialgo.data.id, user);
    } else {
      this._userSvc.newUser(user);
      message = APP_CONSTANTS.MESSAGES.USER_ADDED;
    }

    this._snackBar.showSnackBar(message);
    this._modalSvc.closeModal();
  }

  getTitle():string {
    return this._matDialgo.data ? APP_CONSTANTS.UI_ELEMENTS.MODAL.TITLE_SAVE : APP_CONSTANTS.UI_ELEMENTS.MODAL.TITLE_ADD;
  }

  getBtn():string {
    return this._matDialgo.data ? APP_CONSTANTS.UI_ELEMENTS.MODAL.BTN_SAVE : APP_CONSTANTS.UI_ELEMENTS.MODAL.BTN_ADD;
  }
  
  private _buildForm():void {
    this.userForm = this._fb.nonNullable.group({
      name:['', Validators.required],
      email:['', Validators.required],
      role:['', Validators.required]
    })
  }
}
