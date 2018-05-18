import { Component } from '@angular/core';

import {
  state,
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('* => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.7s ease-in')
      ]),
      transition('* => *', [
        animate('0.7s 0.2s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'homePage';
  }
}
