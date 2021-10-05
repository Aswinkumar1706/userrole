import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { Submenu1Component } from '../submenu1/submenu1.component';
import { Submenu2Component } from '../submenu2/submenu2.component';
import { Submenu3Component } from '../submenu3/submenu3.component';
import { Submenu4Component } from '../submenu4/submenu4.component';
import { Submenu5Component } from '../submenu5/submenu5.component';
import { Submenu6Component } from '../submenu6/submenu6.component';
import { SidebarComponent } from 'src/app/core-components/sidebar/sidebar.component';
import { MainContainerComponent } from 'src/app/core-components/main-container/main-container.component';
import { NavbarComponent } from 'src/app/core-components/navbar/navbar.component';
import { FooterComponent } from 'src/app/core-components/footer/footer.component';
import { RequiredsignDirectiveModule, RoleBasedBtnDirective } from 'src/app/services/role-based-btn.directive';


@NgModule({
  declarations: [
    Submenu1Component,Submenu2Component,Submenu3Component,Submenu4Component,Submenu4Component,Submenu5Component,Submenu6Component,
    MainContainerComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    RequiredsignDirectiveModule
  ]
})
export class MainmoduleModule { }
