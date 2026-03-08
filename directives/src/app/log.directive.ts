import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()' // Listen for click events on the host element
  } 
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  onLog() {
  console.log('CLICKED');
  console.log('Host element:', this.elementRef.nativeElement);
  }

  constructor() { }

}
