import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LogoComponent } from './shell/svgs/logo/logo.component';
import { FooterComponent } from './shell/footer/footer.component';
import { StatusComponent } from './pages/status/status.component';
import { BannerComponent } from './shell/banner/banner.component';
import { TeabotreComponent } from './pages/projects/teabotre/teabotre.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FetchErrorComponent } from './components/fetch-error/fetch-error.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminTimelineComponent } from './pages/admin/admin-timeline/admin-timeline.component';


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
    TeabotreComponent,
    LoaderComponent,
    FetchErrorComponent,
    AdminComponent,
    AdminTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
