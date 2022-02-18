import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTilesComponent } from './grid-tiles/grid-tiles.component';
import { FlexboxTilesComponent } from './flexbox-tiles/flexbox-tiles.component';

const routes: Routes = [
  {
    path: 'grid',
    component: GridTilesComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxTilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModuleModule {}
