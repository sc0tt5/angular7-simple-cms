import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as ItemActions from '@app/store/actions';
import { ItemDataService } from '@app/store/services';

// const filterAction = new ItemActions.GetItems();
const toAction = ItemActions.toAction();
type ItemAction = ItemActions.ItemAction;
type GetItems = ItemActions.GetItems;
type GetItemsScroll = ItemActions.GetItemsScroll;

@Injectable()
export class ItemEffects {

  @Effect()
  getItems$: Observable<Action> = this.actions$
    .ofType(ItemActions.GET_ITEMS)
    .pipe(
      switchMap((action: GetItems) =>
        toAction(
          this.itemDataService.getItems(action.count),
          ItemActions.GetItemsSuccess,
          ItemActions.GetItemsError
        )
      )
    );

  @Effect()
  getItemsScroll$: Observable<Action> = this.actions$
    .ofType(ItemActions.GET_ITEMS_SCROLL)
    // .withLatestFrom(this.store$)
    .pipe(
      switchMap((action: GetItemsScroll) =>
        toAction(
          this.itemDataService.getItems(action.count), // same call for both page load and scroll load
          ItemActions.GetItemsScrollSuccess,
          ItemActions.GetItemsScrollError
        )
      )
      /* withLatestFrom(this.store$, (payload, state) => {
        return { payload: payload, stateData: state.items };
      }) */
    );

  constructor(
    private actions$: Actions,
    private itemDataService: ItemDataService
  ) { }
}
