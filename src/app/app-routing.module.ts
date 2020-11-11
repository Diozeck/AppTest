import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {UserinfoComponent} from './userinfo/userinfo.component';
import {ListarComponent} from './usuario/listar/listar.component';
import {AddComponent} from './usuario/add/add.component';
import {EditComponent} from './usuario/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
