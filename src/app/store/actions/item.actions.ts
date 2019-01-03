import { Action } from '@ngrx/store';
import { Item } from '@app/core';
import { DataServiceError } from '@app/store/services';
import { DataAction, DataErrorAction } from '@app/store/actions/data.actions';

export const GET_ITEMS = '[Item] GET_ITEMS';
export const GET_ITEMS_SUCCESS = '[Item] GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = '[Item] GET_ITEMS_ERROR';
export const GET_ITEMS_SCROLL = '[Item] GET_ITEMS_SCROLL';
export const GET_ITEMS_SCROLL_SUCCESS = '[Item] GET_ITEMS_SCROLL_SUCCESS';
export const GET_ITEMS_SCROLL_ERROR = '[Item] GET_ITEMS_SCROLL_ERROR';

export const SET_ITEM_LOADING = '[Item] SET_ITEM_LOADING';

export abstract class ItemAction implements DataAction<Item> {
  readonly type: string;
  constructor(public readonly payload: Item) { }
}

export abstract class ItemErrorAction implements DataErrorAction<Item> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Item>) { }
}

export class GetItems implements Action {
  readonly type = GET_ITEMS;
  constructor(public readonly count: number) { }
}

export class GetItemsSuccess implements Action {
  readonly type = GET_ITEMS_SUCCESS;
  constructor(public readonly payload: Item[]) { }
}

export class GetItemsError implements Action {
  readonly type = GET_ITEMS_ERROR;
  constructor(public readonly payload: any) { }
}

export class GetItemsScroll implements Action {
  readonly type = GET_ITEMS_SCROLL;
  constructor(public readonly count: number) { }
}

export class GetItemsScrollSuccess implements Action {
  readonly type = GET_ITEMS_SCROLL_SUCCESS;
  constructor(public readonly payload: Item[]) { }
}

export class GetItemsScrollError implements Action {
  readonly type = GET_ITEMS_SCROLL_ERROR;
  constructor(public readonly payload: any) { }
}

export class SetItemLoading {
  readonly type = SET_ITEM_LOADING;
  constructor(public payload = true) { }
}

export type AllItemActions =
  | GetItems
  | GetItemsSuccess
  | GetItemsError
  | GetItemsScroll
  | GetItemsScrollSuccess
  | GetItemsScrollError
  | SetItemLoading;
