import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Campground Master',
      description: 'A user-friendly campground application for searching, creating, reviewing, and rating grounds. Features complete authentication flow with Passport.js, fully functional CRUD routes, image uploads via Cloudinary, and automatic geocoding of ground addresses using Maptiler.',
      image: './../../assets/images/campground.png',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Maptiler', 'Cloudinary'],
      features: ['Authentication Flow', 'CRUD Operations', 'Image Uploads', 'Geocoding', 'Reviews & Ratings'],
      githubUrl: 'https://github.com/Sarvesh2025/CampgroundMaster',
      liveUrl: 'https://campground-master-updated.onrender.com/',
      category: 'Full Stack'
    },
    {
      title: 'AI-Powered B2B Dashboard',
      description: 'Built for Kraya AI, serving 200+ businesses with AI-powered sales automation. Features automated follow-up systems, WhatsApp integration, and performance analytics dashboard.',
      image: '../../assets/images/kraya.png',
      technologies: ['Next.js', 'Redux', 'Material UI', 'AWS', 'SQL'],
      features: ['AI Automation', 'WhatsApp Integration', 'Analytics Dashboard', 'Multi-tenant Support'],
      githubUrl: 'https://github.com/SarveshPandey19/kraya-dashboard',
      liveUrl: 'https://kraya-ai.com',
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Tailwind CSS, showcasing skills, projects, and experience with smooth animations and visitor tracking.',
      image: './../../assets/images/portfolio.png',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      features: ['Responsive Design', 'Dark/Light Mode', 'Contact Form', 'Visitor Counter', 'Resume Download'],
      githubUrl: 'https://github.com/SarveshPandey19/portfolio',
      liveUrl: 'https://sarveshpandey.dev',
      category: 'Frontend'
    },
    {
      title: 'RESTful API Suite',
      description: 'Developed comprehensive RESTful APIs using NodeJS for retrieving store details with advanced filtering capabilities, optimizing performance and reducing response time by 20%.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express.js', 'SQL', 'Postman', 'Performance Optimization'],
      features: ['RESTful Design', 'Advanced Filtering', 'Performance Optimization', 'Comprehensive Testing'],
      githubUrl: 'https://github.com/SarveshPandey19/restful-api-suite',
      liveUrl: 'https://api-docs.sarveshpandey.dev',
      category: 'Backend'
    }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  selectedCategory = 'All';

  // Carousel state
  scrollIndex = 0;
  visibleCount = 3; // Number of projects visible at once (adjust as needed)

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  get visibleProjects() {
    const filtered = this.filteredProjects;
    return filtered.slice(this.scrollIndex, this.scrollIndex + this.visibleCount);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.scrollIndex = 0; // Reset carousel on category change
  }

  openUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  scrollLeft() {
    if (this.scrollIndex > 0) {
      this.scrollIndex--;
    }
  }

  scrollRight() {
    if (this.scrollIndex < this.filteredProjects.length - this.visibleCount) {
      this.scrollIndex++;
    }
  }
}