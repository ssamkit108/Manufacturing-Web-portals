import { ViewOrdersComponent } from './parts/view-orders/view-orders.component';
import { PartsComponent } from './parts/parts.component';
import { PartsListComponent } from './parts/parts-list/parts-list.component';
import { AddPartsComponent } from './parts/add-parts/add-parts.component';
import { Parts } from './shared/parts.model';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: 'parts', pathMatch: 'full' },
  {
    path: 'parts',
    children: [
      { path: '', component: PartsListComponent },
      { path: 'addpart', component: AddPartsComponent },
    ],
  },
  { path: 'vieworders', component: ViewOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
