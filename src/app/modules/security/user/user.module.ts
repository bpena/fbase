import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from '@security/user/components/user-menu/user-menu.component';
import { MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserI18NService } from '@security/user/i18n/user-i18n.service';
import { CoreModule } from '@core/core.module';
import { UserComponent } from './user.component';
import { UserRouting } from '@security/user/user.routing';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    UserRouting
  ],
  declarations: [
    UserMenuComponent,
    ProfileComponent,
    UserComponent
  ],
  exports: [
    ProfileComponent,
    UserMenuComponent
  ],
  providers: [
      UserI18NService
  ]
})
export class UserModule { }
