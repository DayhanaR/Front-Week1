import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UberComponent } from './components/uber/uber.component';
import { PuntosColombiaComponent } from './components/puntos-colombia/puntos-colombia.component';

const routes: Routes = [
  {path: 'uber', component : UberComponent},
  {path: 'puntosColombia', component : PuntosColombiaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
