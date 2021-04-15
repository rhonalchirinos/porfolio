import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFooterComponent } from './ng-footer/ng-footer.component';
import { NgHeaderComponent } from './ng-header/ng-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MySelfComponent } from './my-self/my-self.component';
import { TerminalPromptDirective } from './terminal-prompt.directive';


@NgModule({
  declarations: [
    NgFooterComponent,
    NgHeaderComponent,
    MySelfComponent,
    TerminalPromptDirective,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NgFooterComponent,
    NgHeaderComponent,
    MySelfComponent,
    TerminalPromptDirective,
  ]
})
export class ComponentsModule {

}


