import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawnPageRoutingModule } from './withdrawn-routing.module';

import { WithdrawnPage } from './withdrawn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawnPageRoutingModule
  ],
  declarations: [WithdrawnPage]
})
export class WithdrawnPageModule {}
