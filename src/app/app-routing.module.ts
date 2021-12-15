import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontsComponent } from './fonts/fonts.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: 'fonts', component: FontsComponent},
  {path: 'info', component: InfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
