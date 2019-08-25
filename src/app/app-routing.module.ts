import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { TeabotreComponent } from './pages/projects/teabotre/teabotre.component';

import { AboutComponent } from './pages/about/about.component';

import { StatusComponent } from './pages/status/status.component';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminTimelineComponent } from './pages/admin/admin-timeline/admin-timeline.component';


const routes: Routes = [
  {path: '', redirectTo: 'news/all/all', pathMatch: 'full'},

  {path: 'news', component: NewsComponent},
  {path: 'news/:project', component: NewsComponent},
  {path: 'news/:project/:type', component: NewsComponent},

  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/teabotre', component: TeabotreComponent},


  {path: 'status', component: StatusComponent},
  {path: 'about', component: AboutComponent},

  {path: 'admin', component: AdminComponent},
  {path: 'admin/timeline', component: AdminTimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
