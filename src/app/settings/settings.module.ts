import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from '@app/settings/settings.component';
import { SettingsRoutingModule } from '@app/settings/settings-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
  exports: [SettingsComponent],
  declarations: [SettingsComponent],
  providers: []
})
export class SettingsModule { }
