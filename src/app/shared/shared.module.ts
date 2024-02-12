import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './compoents/table/table.component';
import { UiModuleModule } from './ui-module/ui-module.module';
import { CommonTableComponent } from '../core/common-table/common-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
let allcomponets=[
  TableComponent,
  CommonTableComponent
]
let modules: any = [
  CommonModule,
  UiModuleModule,
  FormsModule ,
  ReactiveFormsModule
];

@NgModule({
  declarations: allcomponets,
  imports: modules,
  exports: allcomponets.concat(modules)
})
export class SharedModule { }
