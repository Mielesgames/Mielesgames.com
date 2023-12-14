import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { FnafComponent } from './Pages/fnaf/fnaf.component';
import { AvatarEditorComponent } from './Pages/avatar-editor/avatar-editor.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';

const routes: Routes = [
  { path: 'Home', component: HomepageComponent },
  { path: 'FNAF', component: FnafComponent },
  { path: "Avatar", component: AvatarEditorComponent},
  { path: "About", component: AboutPageComponent},
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
