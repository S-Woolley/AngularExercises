import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {
    console.log('on init');
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  entertedTitle = '';
  entertedRequest = '';
  add = output<{title: string; text:string}>();
  // onSubmit(titleElement: string, requestElement: string) {
  //   console.log(titleElement +": " + requestElement);
  //   this.add.emit({title: titleElement, text: requestElement});
  //   this.form().nativeElement.reset();
  // }
  onSubmit() {
    console.log(this.entertedTitle +": " + this.entertedRequest);
    this.add.emit({title: this.entertedTitle, text: this.entertedRequest});
    //this.form().nativeElement.reset();
    this.entertedTitle = '';
    this.entertedRequest = '';
  }
}
