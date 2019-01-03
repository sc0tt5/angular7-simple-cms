import { Action } from '@ngrx/store';
import { Theme } from '@app/core';
import { DataServiceError } from '@app/store/services';
import { DataAction, DataErrorAction } from '@app/store/actions/data.actions';

export const CHANGE_THEME = '[Theme] CHANGE_THEME';
export const CHANGE_THEME_SUCCESS = '[Theme] CHANGE_THEME_SUCCESS';
export const CHANGE_THEME_ERROR = '[Theme] CHANGE_THEME_ERROR';

export abstract class ThemeAction implements DataAction<Theme> {
  readonly type: string;
  constructor(public readonly payload: Theme) { }
}

export abstract class ThemeErrorAction implements DataErrorAction<Theme> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Theme>) { }
}

export class ChangeTheme implements Action {
  readonly type = CHANGE_THEME;
  constructor(public payload: string) { }
}

export class ChangeThemeSuccess implements Action {
  readonly type = CHANGE_THEME_SUCCESS;
  constructor(public readonly payload: string) { }
}

export class ChangeThemeError implements Action {
  readonly type = CHANGE_THEME_ERROR;
  constructor(public readonly payload: any) { }
}

export type AllThemeActions =
  | ChangeTheme
  | ChangeThemeSuccess
  | ChangeThemeError;
