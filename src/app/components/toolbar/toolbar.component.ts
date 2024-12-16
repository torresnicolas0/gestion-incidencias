import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from '@shared/constants';
import { AuthStateService } from '@shared/data-access/auth-state.service';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatToolbarModule, RouterModule, CommonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  private router = inject(Router);
  private authStateService = inject(AuthStateService);
  currentRoute = '';
  isAuthenticated = false;

  get appConstants() {
    return APP_CONSTANTS;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
    this.authStateService.authState$.subscribe(user => {
      this.isAuthenticated = !!user;
    });  
  }

  async logOut(): Promise<void> {
    try {
      await this.authStateService.logOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
