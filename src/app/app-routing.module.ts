import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './core-components/main-container/main-container.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:MainContainerComponent,
    loadChildren:() => import('../app/pages/mainmodule/mainmodule.module').then(m => m.MainmoduleModule),
    canLoad:[AuthGuard]
  },
  {
    path:'',
    redirectTo:'/',
   pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'login',
   pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
