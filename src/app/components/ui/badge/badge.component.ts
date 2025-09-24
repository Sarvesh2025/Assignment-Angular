import { Component, Input } from '@angular/core';
import { cn } from '../../../../lib/utils';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default';
  @Input() class = '';

  get badgeClasses() {
    return cn(
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      {
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80': this.variant === 'default',
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': this.variant === 'secondary',
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80': this.variant === 'destructive',
        'text-foreground': this.variant === 'outline',
      },
      this.class
    );
  }
}