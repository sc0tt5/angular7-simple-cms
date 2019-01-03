import { Injectable } from '@angular/core';
import { Store, select, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState } from '@app/store/reducers';
import { ItemState } from '@app/store/reducers/item.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getItemState = createSelector(
  getEntityState,
  (state: EntityState) => state.items
);

const getAllItems = createSelector(
  getItemState,
  (state: ItemState) => state.items
);

const getItemsPageLoading = createSelector(
  getItemState,
  (state: ItemState) => state.pageloading
);

const getItemsScrollLoading = createSelector(
  getItemState,
  (state: ItemState) => state.scrollloading
);

@Injectable()
export class ItemSelectors {
  constructor(private store: Store<EntityState>) { }
  items$ = this.store.pipe(select(getAllItems));
  itemState$ = this.store.pipe(select(getItemState));
  pageloading$ = this.store.pipe(select(getItemsPageLoading));
  scrollloading$ = this.store.pipe(select(getItemsScrollLoading));
}
