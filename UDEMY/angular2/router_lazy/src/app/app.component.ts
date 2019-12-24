import { Component, OnInit } from '@angular/core';
import { UtilitiesService, myClass } from './services/utilities.service';
import { ThemeService } from './modules/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService]
})
export class AppComponent implements OnInit {
    slider1Value = 0;
    slider2Value = 100;

    constructor(private util: UtilitiesService, private theme: ThemeService) {}

    ngOnInit() {
      console.log(myClass.myFunc());
      setInterval(() => {
        this.slider1Value = this.util.getRandomNumber();
      }, 1800);
      setInterval(() => {
        this.slider2Value = this.util.getRandomNumber();
      }, 1200);
    }

    onClick() {
      this.theme.isDarkTheme() ? this.theme.setLightTheme() : this.theme.setDarkTheme();
    }
    menuOpened() {
      alert('algun pajuo abrio el menu!!!');
    }
}
