import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SelectLanguageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  exports: [
    SelectLanguageComponent
  ]
})
export class SharedModule { }
