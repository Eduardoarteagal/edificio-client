import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdificioListComponent } from './edificio-list/edificio-list.component';
import { EdificioCreateComponent } from './edificio-create/edificio-create.component';

const routes: Routes = [
  { path: 'edificios', component: EdificioListComponent },
  { path: 'edificio-create', component: EdificioCreateComponent },
  { path: '', redirectTo: '/edificios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }