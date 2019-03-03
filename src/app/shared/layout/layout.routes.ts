import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    /* When module is loaded, route to dashboard module  */
    {
      path: '',
      redirectTo: 'exploration',
      pathMatch: 'full'
    },
    {
      path: 'exploration',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          loadChildren: '../../dashboard/dashboard.module#DashboardModule'
        },
        {
          path: 'playground',
          loadChildren: '../../playground/playground.module#PlaygroundModule'
        }
        /*,
        {
          path: 'banking',
          loadChildren: '../../banking/banking.module#BankingModule'
        }
        */
      ],
      data: {
        title: 'Layout'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }