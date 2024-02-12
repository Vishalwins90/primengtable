import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { TableComponent } from './shared/compoents/table/table.component';
import { CommonTableComponent } from './core/common-table/common-table.component';

const routes: Routes = [
{
  path:'',
  component:CommonTableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
