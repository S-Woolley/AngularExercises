import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'control',
     '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {

  constructor() { 
    afterRender(() => {
      console.log('ControlComponent rendered');
    });

    afterNextRender(() => {
      console.log('ControlComponent next render cycle completed');
    });
  }
  ngAfterContentInit(): void {
    console.log('After content init in ControlComponent');
  }
 // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // }

  private el = inject(ElementRef);
  title = input.required<string>();
  control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Control clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
