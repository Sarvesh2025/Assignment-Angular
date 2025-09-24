export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  resume: {
    fileName: string;
    downloadText: string;
  };
  sections: {
    about: {
      enabled: boolean;
      stats: Array<{ label: string; value: string }>;
    };
    skills: {
      enabled: boolean;
      categories: Array<{
        title: string;
        skills: Array<{ name: string; level: number; icon: string }>;
      }>;
    };
    experience: {
      enabled: boolean;
    };
    projects: {
      enabled: boolean;
    };
    contact: {
      enabled: boolean;
    };
  };
}

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: 'Your Name',
    title: 'Full Stack Developer & UI/UX Designer',
    subtitle: 'Creating beautiful, functional, and user-centered digital experiences',
    bio: 'Passionate about creating beautiful, functional, and user-centered digital experiences. I love turning complex problems into simple, elegant solutions.',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  socialLinks: {
    github: 'https://github.com/Sarvesh2025',
    linkedin: 'https://linkedin.com/in/i-am-sarvesh',
    twitter: 'https://twitter.com/yourusername',
    email: 'sarvesh19dev@gmail.com'
  },
  resume: {
    fileName: 'Your_Name_Resume.txt',
    downloadText: 'Download Resume'
  },
  sections: {
    about: {
      enabled: true,
      stats: [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '30+' },
        { label: 'Technologies', value: '20+' }
      ]
    },
    skills: {
      enabled: true,
      categories: []
    },
    experience: {
      enabled: true
    },
    projects: {
      enabled: true
    },
    contact: {
      enabled: true
    }
  }
};