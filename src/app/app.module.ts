import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { LogoComponent } from './shell/svgs/logo/logo.component';
import { FooterComponent } from './shell/footer/footer.component';
import { StatusComponent } from './pages/status/status.component';
import { BannerComponent } from './shell/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,

    // Shell components
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BannerComponent,

    // Pages
    NewsComponent,
    ProjectsComponent,
    StatusComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
