import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },
  {
    path: 'items',
    loadChildren: './items/item-list/item-list.module#ItemListModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
