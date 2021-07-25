import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from './app-body/app-body.component';
import { InitSetupComponent } from './init-setup/init-setup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: "initial-setup", component: InitSetupComponent},
  {path: "login", component: LoginComponent},
  {path: "app", component: AppBodyComponent, canActivate: [AuthGuardService]},
  {path: "", redirectTo: "app", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
