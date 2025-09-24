import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private readonly VISITOR_COUNT_KEY = 'portfolio-visitor-count';
  private readonly LAST_VISIT_KEY = 'portfolio-last-visit';

  constructor() { }

  getVisitorCount(): number {
    const storedCount = localStorage.getItem(this.VISITOR_COUNT_KEY);
    return storedCount ? parseInt(storedCount, 10) : 0;
  }

  incrementVisitorCount(): void {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem(this.LAST_VISIT_KEY);
    
    if (lastVisit !== today) {
      const currentCount = this.getVisitorCount();
      const newCount = currentCount + 1;
      
      localStorage.setItem(this.VISITOR_COUNT_KEY, newCount.toString());
      localStorage.setItem(this.LAST_VISIT_KEY, today);
    }
  }

  getLastVisitDate(): string | null {
    return localStorage.getItem(this.LAST_VISIT_KEY);
  }

  resetVisitorCount(): void {
    localStorage.removeItem(this.VISITOR_COUNT_KEY);
    localStorage.removeItem(this.LAST_VISIT_KEY);
  }
}