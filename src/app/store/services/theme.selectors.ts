import { Injectable } from '@angular/core';
import { Store, select, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState } from '@app/store/reducers';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getThemeState = createSelector(
  getEntityState,
  (state: EntityState) => state.themes
);

@Injectable()
export class ThemeSelectors {
  constructor(private store: Store<EntityState>) { }
  themeState$ = this.store.pipe(select(getThemeState));
}
