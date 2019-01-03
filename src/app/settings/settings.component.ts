import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Theme } from '@app/core';
import { ThemeDispatchers } from '@app/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SettingsComponent implements OnInit {
  selected: Theme;
  themes = [
    {
      'value': 'LIGHT-THEME',
      'label': 'Light'
    },
    {
      'value': 'DARK-THEME',
      'label': 'Dark'
    }
  ];

  @Input() selectedTheme: Theme;

  constructor(
    private themeDispatchers: ThemeDispatchers
  ) { }

  ngOnInit() { }

  onSelect(theme) {
    console.log(theme);
    this.themeDispatchers.changeTheme(theme.value);
  }

}
