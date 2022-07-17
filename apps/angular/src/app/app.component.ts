import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>


    <style>
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100%;
        /*height: 50%;*/
        /*background: darkgrey;*/
      }

    </style>

  `
})
export class AppComponent {
}
