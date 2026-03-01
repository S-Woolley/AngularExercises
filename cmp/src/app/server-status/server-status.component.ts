import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements  OnInit {
  private statuses = ['online', 'offline', 'maintenance'];
  //private intervalId?: ReturnType<typeof setInterval> ;
  private destroyRef = inject(DestroyRef);
  //currentStatus = this.statuses[0];
   currentStatus = signal<string>(this.statuses[0]);
  constructor() {
    effect(() => {
      console.log('Server status changed to: ' + this.currentStatus());
    });
  }

  // ngOnInit() {
  //   this.intervalId = setInterval(() => {
  //     this.changeStatus();
  //   }, 5000);
  // }

    ngOnInit() {
    const intervalId = setInterval(() => {
      this.changeStatus();
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }

  changeStatus() {
    const currentIndex = this.statuses.indexOf(this.currentStatus());
    const nextIndex = (currentIndex + 1) % this.statuses.length;
    this.currentStatus.set(this.statuses[nextIndex]);
  }

  // ngOnDestroy() {
  //   clearTimeout(this.intervalId);
  // }
}
