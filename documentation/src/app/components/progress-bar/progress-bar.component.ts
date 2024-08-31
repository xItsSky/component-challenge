import {Component, input, signal} from '@angular/core';
import {
  SkyProgressBarComponent
} from "../../../../../projects/sky-components-library/src/lib/progress-bar/sky-progress-bar.component";

@Component({
  selector: 'sky-library-progress-bar',
  standalone: true,
  imports: [
    SkyProgressBarComponent
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  value = signal<number>(50);

  updateValue(value: number) {
    if(value >= 0 && value <= 100) {
      this.value.set(value);
    }
  }
}
