import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawnPage } from './withdrawn.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawnPageRoutingModule {}
