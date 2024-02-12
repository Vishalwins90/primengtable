import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from '../compoents/table/table.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { TreeTableModule } from 'primeng/treetable';
import { TreeSelectModule } from 'primeng/treeselect';
import { AvatarModule } from 'primeng/avatar'; 
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CheckboxModule } from 'primeng/checkbox';

let ngprime=[
  TableModule,
  ButtonModule,
  InputTextModule,
  ToggleButtonModule,
  MessagesModule,
  PaginatorModule,
  TreeTableModule,
  TreeSelectModule,
  AvatarModule,
  AvatarGroupModule,
  CheckboxModule
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngprime
  ],
  exports: [
    ...ngprime
  ]
})
export class UiModuleModule { }
