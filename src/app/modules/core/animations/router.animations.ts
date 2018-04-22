import { trigger, state, animate, style, transition } from '@angular/core';
/*
export function moveIn() {
  return trigger('moveIn', [
      state('void', style({ 'max-width': '0' })),
      state('*', style({ 'max-width': '100%' })),
      transition(':enter', [
          style({ opacity: '0', 'max-width': '0' }),
          animate('.4s ease-in-out', style({ opacity: '1', 'max-width': '100%' }))
      ]),
      transition(':leave', [
          style({ opacity: '1', 'max-width': '100%' }),
          animate('.4s ease-in-out', style({ opacity: '0', 'max-width': '0' }))
      ])

  ]);
}
*/
export function moveIn() {
  return trigger('moveIn', [
    state('void', style({ }) ),
    state('*', style({ }) ),
    transition(':enter', [
      style({opacity:'0', left: '100%'}),
      animate('.6s ease-in-out', style({opacity:'1', left: '0' }))
    ]),
    transition(':leave', [
      style({opacity:'1', left: '0'}),
      animate('.3s ease-in-out', style({opacity:'0', left: '-100%'}))
    ])
  ]);
}

export function fallIn() {
    return trigger('fallIn', [
      transition(':enter', [
        style({ opacity:'0' }),
        animate('8s 4s ease-in-out', style({ opacity:'1' }))
      ]),
      transition(':leave', [
        style({ opacity:'1' }),
        animate('2s ease-in-out', style({ opacity:'0' }))
      ])
    ]);
  }
  
  export function moveInLeft() {
    return trigger('moveInLeft', [
      transition(':enter', [
        style({opacity:'0', transform: 'translateX(-100px)'}),
        animate('.6s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
      ])
    ]);
  }