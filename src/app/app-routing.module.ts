import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUserComponent } from './lista-user/lista-user.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { ActualizarUserComponent } from './actualizar-user/actualizar-user.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';

const routes: Routes = [
  {path: 'users', component: ListaUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'registrar-user', component: RegistrarUserComponent},
  {path: 'actualizar-user/:id', component: ActualizarUserComponent},
  {path: 'user-detalles/:id', component: UserDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
