import { Item } from '@app/core';
import * as ItemActions from '@app/store/actions';

export interface ItemState {
  items: Item[];
  pageloading: boolean;
  scrollloading: boolean;
  error: boolean;
}

export const initialState: ItemState = {
  items: [],
  pageloading: false,
  scrollloading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: ItemActions.AllItemActions
): ItemState {
  switch (action.type) {

    case ItemActions.GET_ITEMS: {
      return {
        ...state,
        pageloading: true
      };
    }

    case ItemActions.GET_ITEMS_ERROR: {
      return {
        ...state,
        pageloading: false
      };
    }

    case ItemActions.GET_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        pageloading: false
      };
    }

    case ItemActions.GET_ITEMS_SCROLL: {
      return {
        ...state,
        scrollloading: true
      };
    }

    case ItemActions.GET_ITEMS_SCROLL_ERROR: {
      return {
        ...state,
        scrollloading: false
      };
    }

    case ItemActions.GET_ITEMS_SCROLL_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        scrollloading: false
      };
    }

    case ItemActions.SET_ITEM_LOADING: {
      return {
        ...state,
        pageloading: action.payload == null ? true : action.payload
      };
    }
  }
  return state;
}

function modifyItemState(
  itemState: ItemState,
  itemChanges: Partial<Item>
): ItemState {
  return {
    ...itemState,
    pageloading: false,
    items: itemState.items.map(h => {
      if (h.id === itemChanges.id) {
        return { ...h, ...itemChanges };
      } else {
        return h;
      }
    })
  };
}
