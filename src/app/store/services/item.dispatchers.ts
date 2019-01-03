import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@app/store/reducers';
import * as ItemAction from '@app/store/actions';

@Injectable()
export class ItemDispatchers {
  constructor(private store: Store<EntityState>) { }

  getItems(count: number) {
    this.store.dispatch(new ItemAction.GetItems(count));
  }

  getItemsScroll(count: number) {
    this.store.dispatch(new ItemAction.GetItemsScroll(count));
  }
}
