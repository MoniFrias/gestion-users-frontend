import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUserComponent } from './lista-user/lista-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUserComponent } from './actualizar-user/actualizar-user.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUserComponent,
    RegistrarUserComponent,
    ActualizarUserComponent,
    UserDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
