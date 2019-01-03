import { ActionReducerMap } from '@ngrx/store';

// import * as fromActions from '@app/store/actions';
import * as fromItems from '@app/store/reducers/item.reducer';
import * as fromThemes from '@app/store/reducers/theme.reducer';

// export type Action = fromActions.ItemAction;

export interface EntityState {
  items: fromItems.ItemState;
  themes: fromThemes.ThemeState;
}

export const reducers: ActionReducerMap<EntityState> = {
  items: fromItems.reducer,
  themes: fromThemes.reducer
};
