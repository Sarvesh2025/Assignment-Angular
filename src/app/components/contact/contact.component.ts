import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'sarvesh19dev@gmail.com',
      link: 'mailto:sarvesh19dev@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-7266857353',
      link: 'tel:+917266857353'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'India',
      link: 'https://maps.google.com/?q=India'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/i-am-sarvesh',
      link: 'https://linkedin.com/in/i-am-sarvesh'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
        this.contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${requiredLength} characters`;
    }
    return '';
  }

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}