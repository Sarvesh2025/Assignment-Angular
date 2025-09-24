import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { label: 'Intern Experience', value: '3' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Students Mentored', value: '200+' },
    { label: 'Problems Solved', value: '2000+' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}