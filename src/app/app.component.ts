import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import colornames from '../assets/colornames.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private clipboard: Clipboard) {}

  title = 'colors';
  public colorList: { name: string; hex: string }[] = colornames;

  copyHexCode(hex: string) {
    this.clipboard.copy(hex);
  }
}
