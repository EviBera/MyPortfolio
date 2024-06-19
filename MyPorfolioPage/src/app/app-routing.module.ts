import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, title: 'Évi Bera - About'},
  { path: 'projects', component: ProjectsComponent, title: 'Évi Bera - Projects'},
  { path: 'contact', component: ContactComponent, title: 'Évi Bera - Contact'},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
