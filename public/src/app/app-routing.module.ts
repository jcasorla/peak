import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },  
{ path: 'movies',component: ListComponent },
  { path: 'new',component: NewComponent },
//   // use a colon and parameter name to include a parameter in the url
  { path: 'view/:id', component: ViewComponent },
  { path: 'review/:id', component: WriteComponent },
//   // redirect to /alpha if there is nothing in the url
//   { path: '', pathMatch: 'full', redirectTo: '/home' },
//   // the ** will catch anything that did not match any of the above routes
//   // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
