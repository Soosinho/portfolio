import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService
  ) {
    translate.use('pt-BR')
  }

  changeLanguage() {
    this.translate.currentLang == 'pt-BR' ? this.translate.use('en-US') : this.translate.use('pt-BR')
  }
}
