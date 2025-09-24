import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'TypeScript', level: 80, icon: '�' },
        { name: 'Python', level: 50, icon: '🐍' },
        { name: 'C/C++', level: 70, icon: '⚙️' },
        { name: 'SQL', level: 75, icon: '🗄️' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        
        { name: 'Next.js', level: 80, icon: '⚡' },
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚂' },
        { name: 'Material UI', level: 75, icon: '🎨' },
        { name: 'Redux', level: 70, icon: '🔄' },
        { name: 'Angular', level: 60, icon: '🅰️' },
      ]
    },
    {
      title: 'AI/ML & Tools',
      skills: [
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'LangChain', level: 80, icon: '🔗' },
        { name: 'LangGraph', level: 70, icon: '📊' },
        { name: 'Git/GitHub', level: 95, icon: '📝' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' }
      ]
    }
  ];

  getSkillColor(level: number): string {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  }
}