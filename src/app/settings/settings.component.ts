import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Theme } from '@app/core';
import { ThemeDispatchers } from '@app/store';
import { ThemeState } from '@app/store/reducers/theme.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SettingsComponent implements OnInit {
  selected: ThemeState;

  themes = [
    {
      'value': 'DARK-THEME',
      'label': 'Dark'
    },
    {
      'value': 'LIGHT-THEME',
      'label': 'Light'
    }
  ];

  @Input() selectedTheme: Theme;

  constructor(
    private themeDispatchers: ThemeDispatchers
  ) { }

  ngOnInit() { }

  onSelect(theme) {
    this.themeDispatchers.changeTheme(theme.value);
  }

}
