import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { LayoutRoutingModule } from './layout.routes';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    NavigationComponent,
    TopnavbarComponent
  ]
})
export class LayoutModule {

  
 }
