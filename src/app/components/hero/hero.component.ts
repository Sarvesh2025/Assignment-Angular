import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  roles: string[] = ['Software Developer', 'Competitive Programmer'];
  currentRoleIndex = 0;
  displayText: string = '';
  isDeleting: boolean = false;
  private timeoutId: any;

  private readonly TYPING_SPEED = 100; // Speed for typing
  private readonly DELETING_SPEED = 50; // Speed for deleting
  private readonly PAUSE_TIME = 1000; // Pause time after complete word

  ngOnInit() {
    this.startTypeAnimation();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private startTypeAnimation() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      // Remove one character
      this.displayText = this.displayText.slice(0, -1);
    } else {
      // Add one character
      this.displayText = currentRole.slice(0, this.displayText.length + 1);
    }

    // Calculate typing speed
    let typeSpeed = this.isDeleting ? this.DELETING_SPEED : this.TYPING_SPEED;

    // Check if complete word is typed
    if (!this.isDeleting && this.displayText === currentRole) {
      // Pause at the end of typing
      typeSpeed = this.PAUSE_TIME;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      // Move to next word
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    }

    this.timeoutId = setTimeout(() => this.startTypeAnimation(), typeSpeed);
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadResume() {
    // The PDF file should be in the assets/documents folder
    const resumeUrl = 'assets/documents/SarveshPandeyResume.pdf';
    
    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'SarveshPandeyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}