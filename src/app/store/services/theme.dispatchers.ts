import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@app/store/reducers';
import * as ThemeAction from '@app/store/actions';

@Injectable()
export class ThemeDispatchers {
  constructor(private store: Store<EntityState>) { }

  changeTheme(theme: string) {
    this.store.dispatch(new ThemeAction.ChangeTheme(theme));
  }

}
