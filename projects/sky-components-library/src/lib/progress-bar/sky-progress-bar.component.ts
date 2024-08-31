import {AfterViewInit, Component, effect, ElementRef, inject, input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sky-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './sky-progress-bar.component.html',
  styleUrl: './sky-progress-bar.component.scss'
})
export class SkyProgressBarComponent implements AfterViewInit {
  @ViewChild('progress') progressRef!: ElementRef<HTMLDivElement>;

  readonly #renderer = inject(Renderer2);

  value = input.required<number>();
  color = input<string>('#ffffff');
  backgroundColor = input<string>('#05043e');

  ngAfterViewInit(): void {
    this.#renderer.setStyle(this.progressRef.nativeElement, 'color', this.color());
    this.#renderer.setStyle(this.progressRef.nativeElement, 'background-color', this.backgroundColor());
    this.#renderer.setStyle(this.progressRef.nativeElement, 'width', '0%');
  }

  constructor() {
    effect(() => {
      this.#renderer.setStyle(this.progressRef.nativeElement, 'width', `${Math.min(this.value(), 100)}%`);
    });
  }
}
