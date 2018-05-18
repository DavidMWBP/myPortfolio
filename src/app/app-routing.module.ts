import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes= [
  { path: 'aboutme', component: AboutMeComponent, data: { animation: 'aboutMe' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'resume' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: '', component: SplashComponent, data: { animation: 'homePage' } },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'pageNotFound' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }