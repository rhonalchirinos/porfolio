import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './page/home/home.component';
import { PorfolioComponent } from './page/porfolio/porfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './page/skills/skills.component';
import { StudiesComponent } from './page/studies/studies.component';
import { ArticlesComponent } from './page/articles/articles.component'; 
import { AngularScrollAnimationsModule } from "angular-scroll-animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorfolioComponent,
    SkillsComponent,
    StudiesComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    AngularScrollAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
