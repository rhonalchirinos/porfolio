import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './slider/slider.component';
import { MySelfComponent } from './my-self/my-self.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    MySelfComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent
  ],
})
export class ComponentsModule { }
