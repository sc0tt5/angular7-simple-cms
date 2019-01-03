import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { routerTransition } from '@app/core/animations/router.transition';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
// import { takeUntil, filter } from 'rxjs/operators';
// import { NIGHT_MODE_THEME, selectorSettings, SettingsState } from './settings';
import { ThemeSelectors } from '@app/store';
import { ThemeState } from '@app/store/reducers/theme.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})

export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;

  themeState$: Observable<ThemeState>;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private themeSelectors: ThemeSelectors
  ) {
    this.themeState$ = this.themeSelectors.themeState$;
  }

  ngOnInit(): void {
    this.subscribeToSettings();
  }

  ngOnDestroy(): void {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }

  private subscribeToSettings() {
    this.store
      // .select(getAllThemes)
      // .pipe(takeUntil(this.unsubscribe$))
      // .subscribe(settings => this.setTheme(settings));
      .subscribe(state => {
        console.log(state);
        this.setTheme(state.entityCache.themes);
      });
  }

  private setTheme(themeState: ThemeState) {
    const effectiveTheme = themeState.active.toLowerCase();
    this.componentCssClass = effectiveTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    classList.remove(...toRemove);
    classList.add(effectiveTheme);
  }

}
