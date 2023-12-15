import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoqPageRoutingModule } from './stoq-routing.module';

import { StoqPage } from './stoq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoqPageRoutingModule
  ],
  declarations: [StoqPage]
})
export class StoqPageModule {}
