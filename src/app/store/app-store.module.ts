import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '@app/store/reducers';
import { effects } from '@app/store/effects';
import { services } from '@app/store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...services],
  declarations: [],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule { }
