import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [SharedComponent],
  exports: [FormsModule]
})
export class SharedModule { }
