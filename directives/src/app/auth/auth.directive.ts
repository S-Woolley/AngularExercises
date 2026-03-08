import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  private authService = inject(AuthService);
  userType = input.required<Permission>({ alias: 'appAuth' });
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor() { 
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('User has permission to see this element');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
      //const hasPermission = this.authService.activePermission() === this.userType();
    });
  }

}
