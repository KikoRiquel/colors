import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ScrollingModule } from '@angular/cdk/scrolling';
import colornames from '../../assets/colornames.json';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexpageComponent {
  constructor(private clipboard: Clipboard) {}

  title = 'colors';
  public colorList: { name: string; hex: string }[] = colornames;

  copyHexCode(hex: string) {
    this.clipboard.copy(hex);
  }
}
