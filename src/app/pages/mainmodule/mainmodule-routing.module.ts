import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Submenu1Component } from '../submenu1/submenu1.component';
import { Submenu2Component } from '../submenu2/submenu2.component';
import { Submenu3Component } from '../submenu3/submenu3.component';
import { Submenu4Component } from '../submenu4/submenu4.component';
import { Submenu5Component } from '../submenu5/submenu5.component';
import { Submenu6Component } from '../submenu6/submenu6.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:'submenu1',
        component:Submenu1Component
      },
      {
        path:'submenu2',
        component:Submenu2Component
      },
      {
        path:'submenu3',
        component:Submenu3Component
      },
      {
        path:'submenu4',
        component:Submenu4Component
      },
      {
        path:'submenu5',
        component:Submenu5Component
      },
      {
        path:'submenu6',
        component:Submenu6Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
