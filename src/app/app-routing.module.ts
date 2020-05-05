import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/users/user.component';
import { UserDescriptionComponent } from './pages/user-description/user-description.component'

const routes: Routes = [
  { path:'inicio', component: UserComponent },
  { path:'descripcion', component: UserDescriptionComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
