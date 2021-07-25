import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InitSetupComponent } from './init-setup/init-setup.component';
import { FormsModule } from '@angular/forms';
import { ApiInterceptorService } from './services/api-interceptor.service';
import { LoginComponent } from './login/login.component';
import { AppBodyComponent } from './app-body/app-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InitSetupComponent,
    LoginComponent,
    AppBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
