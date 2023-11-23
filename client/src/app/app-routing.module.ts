import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'Home', component: HomepageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
