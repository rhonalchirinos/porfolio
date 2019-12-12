import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
