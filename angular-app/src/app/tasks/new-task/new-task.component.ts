import { Component, EventEmitter, inject, Output,Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() shouldClose = new EventEmitter<boolean>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  private tasksService = inject(TasksService);

  onClose() {
    this.shouldClose.emit(true);
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    // console.log('Creating task...');
    // console.log('Title: ' + this.enteredTitle);
    // console.log('Summary: ' + this.enteredSummary);
    // console.log('Due Date: ' + this.enteredDueDate);
    // this.taskCreated.emit({ title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate });
    this.onClose();
  }
}
