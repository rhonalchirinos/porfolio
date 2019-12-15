import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { TerminalPromptDirective } from './terminal-prompt.directive';


@NgModule({
  declarations: [
    SelectLanguageComponent,
    TerminalPromptDirective
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  exports: [
    SelectLanguageComponent,
    TerminalPromptDirective
  ]
})
export class SharedModule { }
