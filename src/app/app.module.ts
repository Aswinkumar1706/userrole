import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainContainerComponent } from './core-components/main-container/main-container.component';
import { SidebarComponent } from './core-components/sidebar/sidebar.component';
import { NavbarComponent } from './core-components/navbar/navbar.component';
import { FooterComponent } from './core-components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RequiredsignDirectiveModule, RoleBasedBtnDirective } from './services/role-based-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RequiredsignDirectiveModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
