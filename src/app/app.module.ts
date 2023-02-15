import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LatestPostThumbnailComponent } from './components/latest-post-thumbnail/latest-post-thumbnail.component';
import { RegularPostThumbnailComponent } from './components/regular-post-thumbnail/regular-post-thumbnail.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    MainPageComponent,
    AboutPageComponent,
    NavbarComponent,
    LatestPostThumbnailComponent,
    RegularPostThumbnailComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
