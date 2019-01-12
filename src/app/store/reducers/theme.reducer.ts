import { Theme } from '@app/core';
import * as ThemeActions from '@app/store/actions';

export interface ThemeState {
  active: string;
  themes: Theme[];
  error: boolean;
}

export const initialState: ThemeState = {
  active: 'DARK-THEME',
  themes: [],
  error: false
};

export function reducer(
  state = initialState,
  action: ThemeActions.AllThemeActions
): ThemeState {
  switch (action.type) {

    case ThemeActions.CHANGE_THEME: {
      return {
        ...state,
        active: action.payload
      };
    }

    case ThemeActions.CHANGE_THEME_SUCCESS: {
      return {
        ...state,
        active: action.payload
      };
    }

    case ThemeActions.CHANGE_THEME_ERROR: {
      return {
        ...state
      };
    }

  }

  return state;
}
