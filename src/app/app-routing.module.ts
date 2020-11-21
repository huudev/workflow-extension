import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'background',
    loadChildren: () => import('./pages/background/background.module').then(m => m.BackgroundModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then(m => m.OptionsModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./pages/popup/popup.module').then(m => m.PopupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
