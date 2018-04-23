import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontComponent } from './front.component';
import { FrontRouting } from './front.routing';

@NgModule({
  imports: [
    CommonModule,
    FrontRouting
  ],
  declarations: [FrontComponent]
})
export class FrontModule { }
