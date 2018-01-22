import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibrosComponent }      from './libros/libros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LibroDetailComponent }  from './libro-detail/libro-detail.component';

const routes: Routes = [
  	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: LibroDetailComponent },
  	{ path: 'libros', component: LibrosComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
