import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTableComponent } from '../core/common-table/common-table.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
