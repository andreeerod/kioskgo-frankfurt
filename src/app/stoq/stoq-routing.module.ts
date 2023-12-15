import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoqPage } from './stoq.page';

const routes: Routes = [
  {
    path: '',
    component: StoqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoqPageRoutingModule {}
