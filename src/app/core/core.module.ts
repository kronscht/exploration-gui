import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from "@angular/router";

import { GraphQLModule } from '../apollo/apollo.config';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GraphQLModule

  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
