import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { Router, RouterLink } from '@angular/router';
import { SnackBarService } from '@shared/services/snack-bar.service';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { APP_CONSTANTS } from '@shared/constants';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, RouterLink, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _snackBarService = inject(SnackBarService);

  get appConstants() {
    return APP_CONSTANTS;
  }

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      await this._authService.signUp({ email, password });

      this._snackBarService.showSnackBar(this.appConstants.UI_ELEMENTS.AUTH.MESSAGES.USER_CREATED_SUCCESS);
      this._router.navigateByUrl('/home');
    } catch (error) {
      this._snackBarService.showSnackBar(this.appConstants.UI_ELEMENTS.AUTH.MESSAGES.GENERAL_ERROR);
      console.log(error);
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      this._snackBarService.showSnackBar(this.appConstants.UI_ELEMENTS.AUTH.MESSAGES.WELCOME_BACK);
      this._router.navigateByUrl('/home');
    } catch (error) {
      this._snackBarService.showSnackBar(this.appConstants.UI_ELEMENTS.AUTH.MESSAGES.GENERAL_ERROR);
      console.log(error);
    }
  }
}
