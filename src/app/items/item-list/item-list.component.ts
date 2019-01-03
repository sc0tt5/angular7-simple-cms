import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { Item } from '@app/core';
import { ItemSelectors, ItemDispatchers } from '@app/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemListComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  selected: Item;

  @Input() items: Item[];
  @Input() selectedItem: Item;
  infiniteScrollItems = 0;

  items$: Observable<Item[]>;
  pageloading$: Observable<boolean>;
  scrollloading$: Observable<boolean>;

  constructor(
    private itemDispatchers: ItemDispatchers,
    private itemSelectors: ItemSelectors
  ) {
    this.items$ = this.itemSelectors.items$;
    this.pageloading$ = this.itemSelectors.pageloading$;
    this.scrollloading$ = this.itemSelectors.scrollloading$;
  }

  ngOnInit() {
    this.infiniteScrollItems = 48; // display count on init load
    this.itemDispatchers.getItems(this.infiniteScrollItems);
  }

  onScroll() {
    this.infiniteScrollItems += 48; // display on scroll
    this.itemDispatchers.getItemsScroll(this.infiniteScrollItems);
  }

  byId(item: Item) {
    return item.id;
  }

  // go to item detail view
  onSelect(item: Item) {
    // this.commands.select(item);
  }
}
