import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
