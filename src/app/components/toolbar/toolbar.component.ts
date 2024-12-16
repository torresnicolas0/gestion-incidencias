import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { APP_CONSTANTS } from '@shared/constants';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatToolbarModule, RouterModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  private router = inject(Router);
  currentRoute = '';

  get appConstants() {
    return APP_CONSTANTS;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

}
