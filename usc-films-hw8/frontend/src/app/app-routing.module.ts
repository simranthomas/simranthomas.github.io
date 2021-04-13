import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'watch/:mediaType/:id', component: MediaDetailsComponent},
  {path: 'mylist', component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
