import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { ListPageComponent } from './list-page/list-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'post/:category', component: ListPageComponent },
  { path: 'post/:category/:id', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', redirectTo: '/post/art', pathMatch: 'full' },
  { path: 'dummy', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
