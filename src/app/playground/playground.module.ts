import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    SharedModule
  ],
  declarations: [PlaygroundComponent]
})
export class PlaygroundModule { }
