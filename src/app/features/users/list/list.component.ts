import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, User } from '@features/users/user.interfaces';
import { UserService } from '@features/users/user.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      <app-grid [displayedColumns]="displayedColumns" [data]="users()" [sortableColumns]="sortables" />
    </section>
  `,
})
export class ListComponent implements OnInit {
  users = signal<User[]>([]);
  displayedColumns:ColumnKeys<User> = [ 'name', 'role', 'email', 'action' ];
  sortables:ColumnKeys<User> = [ 'name', 'role', 'email' ];

  private readonly _userSvc = inject(UserService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit():void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userSvc.getAllUsers()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((users: User[]) => this.users.set(users.map(user => ({ ...user, type: 'user' }))))
      )
      .subscribe(
        (users: User[]) => this.users.set(users.map(user => ({ ...user, type: 'user' }))),
        (error) => {
          console.error("Error al obtener useros:", error);
          throw error;
        }
      );
  }  
}
