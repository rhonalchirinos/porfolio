import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './page/articles/articles.component';
import { HomeComponent } from './page/home/home.component';
import { PorfolioComponent } from './page/porfolio/porfolio.component';
import { SkillsComponent } from './page/skills/skills.component';
import { StudiesComponent } from './page/studies/studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'studies', component: StudiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
