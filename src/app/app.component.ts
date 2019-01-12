import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { routerTransition } from '@app/core/animations/router.transition';
import { Store } from '@ngrx/store';
import { ThemeSelectors } from '@app/store';
import { ThemeState } from '@app/store/reducers/theme.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})

export class AppComponent implements OnInit {

  @HostBinding('class') componentCssClass;

  themeState$: Observable<ThemeState>;

  constructor(
    private store: Store<any>,
    private themeSelectors: ThemeSelectors
  ) {
    this.themeState$ = this.themeSelectors.themeState$;
  }

  ngOnInit(): void {
    this.subscribeToSettings();
  }

  private subscribeToSettings() {
    this.store
      .subscribe(state => {
        this.setTheme(state.entityCache.themes);
      });
  }

  private setTheme(themeState: ThemeState) {
    const effectiveTheme = themeState.active.toLowerCase();
    this.componentCssClass = effectiveTheme;
  }

}
