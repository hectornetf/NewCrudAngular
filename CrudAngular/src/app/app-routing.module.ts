import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './users/update/update.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/create', component: CreateUserComponent },
  {path: 'users/update/:id', component: UpdateComponent },
  {path: 'users/delete/:id', component: DeleteUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
