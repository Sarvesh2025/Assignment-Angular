import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-counter',
  templateUrl: './visitor-counter.component.html',
  styleUrls: ['./visitor-counter.component.scss']
})
export class VisitorCounterComponent implements OnInit {
  visitorCount = 0;
  isVisible = false;

  ngOnInit() {
    this.updateVisitorCount();
    this.animateCounter();
  }

  private updateVisitorCount() {
    const storedCount = localStorage.getItem('portfolioVisitorCount');
    const lastVisit = localStorage.getItem('portfolioLastVisit');
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      // New day, increment counter
      this.visitorCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('portfolioVisitorCount', this.visitorCount.toString());
      localStorage.setItem('portfolioLastVisit', today);
    } else {
      // Same day, keep current count
      this.visitorCount = storedCount ? parseInt(storedCount) : 1;
    }
  }

  private animateCounter() {
    setTimeout(() => {
      this.isVisible = true;
    }, 2000); // Show counter after 2 seconds
  }
}