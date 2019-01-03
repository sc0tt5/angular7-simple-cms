import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ItemListRoutingModule } from '@app/items/item-list/item-list-routing.module';
import { ItemListComponent } from '@app/items/item-list/item-list.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ItemListRoutingModule,
    SharedModule
  ],
  exports: [ItemListComponent],
  declarations: [ItemListComponent],
  providers: []
})
export class ItemListModule { }
