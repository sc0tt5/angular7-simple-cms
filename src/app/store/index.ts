export * from '@app/store/actions';
export * from '@app/store/effects';
export * from '@app/store/reducers';
export * from '@app/store/services';

import {
  ItemDispatchers,
  ItemDataService,
  ItemSelectors,
  ThemeDispatchers,
  ThemeSelectors
} from '@app/store/services';

export const services = [
  ItemDataService,
  ItemDispatchers,
  ItemSelectors,
  ThemeDispatchers,
  ThemeSelectors
];
