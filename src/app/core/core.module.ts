import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTableComponent } from './common-table/common-table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule
  ]
  
})
export class CoreModule { }
