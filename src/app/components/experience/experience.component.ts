import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Biz2X',
      location: 'Noida',
      duration: 'Sep 2024 - Present',
      type: 'Full-time',
      description: 'Currently working as ASE at Biz2X, developing scalable financial technology solutions. Focused on building robust backend systems and APIs for the lending platform.',
      achievements: [
        'Developing scalable financial technology solutions for the lending platform',
        'Building robust backend systems and APIs for loan processing',
        'Working with microservices architecture and cloud technologies'
      ],
      technologies: ['MEAN Stack', 'Microservices', 'Cloud Technologies', 'Financial APIs', 'Database Design']
    },
    {
      title: 'Software Development Engineer',
      company: 'Kraya AI (MiM-Essay)',
      location: 'Delhi',
      duration: 'Feb 2025 - August 2025',
      type: 'Full-time',
      description: 'Building B2B dashboard for Kraya, serving 200+ businesses with AI-powered sales automation. Leading development of scalable web applications using Next.js, Redux, and AWS.',
      achievements: [
        'Built B2B dashboard serving 200+ businesses with AI-powered sales automation',
        'Reduced manual follow-up time by 60% through automated calls and message responses',
        'Migrated WhatsApp messaging system from WATI to native API, improving delivery rates by 35%'
      ],
      technologies: ['Next.js', 'Redux', 'Material UI', 'Axios', 'SQL', 'AWS', 'Git']
    },
    {
      title: 'Web Development Intern',
      company: 'Global EBrand Inc',
      location: 'Remote',
      duration: 'Oct 2024 - Dec 2024',
      type: 'Internship',
      description: 'Developed RESTful APIs using NodeJS and created dynamic frontend upsell funnels using React.js. Focused on performance optimization and user experience enhancement.',
      achievements: [
        'Developed RESTful APIs using NodeJS, optimizing performance and reducing response time by 20%',
        'Created dynamic frontend upsell funnel with pre-purchase and post-purchase offers',
        'Significantly increased average order value through enhanced user experience'
      ],
      technologies: ['Node.js', 'Express.js', 'React.js', 'REST APIs', 'JavaScript']
    },
    {
      title: 'Full Stack Developer',
      company: 'SmartDagg Private Limited',
      location: 'Remote',
      duration: 'July 2024 - Oct 2024',
      type: 'Full-time',
      description: 'Specialized in creating customized websites for clients with focus on front-end development. Ensured seamless and efficient web solutions tailored to meet diverse client needs.',
      achievements: [
        'Specialized in creating customized websites for multiple clients',
        'Ensured seamless and efficient web solutions',
        'Tailored solutions to meet diverse client requirements'
      ],
      technologies: ['Frontend Development', 'Custom Web Solutions', 'Client Management']
    }
  ];

  education = [
    {
      degree: 'B. Tech. - Computer Science and Engineering',
      school: 'Institute of Engineering and Technology',
      location: 'India',
      duration: 'Nov 2021 - June 2025',
      description: 'GPA: 7.92. Focused on software engineering, data structures, algorithms, and web technologies.'
    },
   {
  degree: '12th Grade (Higher Secondary)',
  school: 'Oxford Public School',
  location: 'India',
  duration: 'April 2019 -  April 2021',
  description: 'CBSE Board - 82%. Successfully completed higher secondary education.'
}
  ];
}