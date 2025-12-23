import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, BarChart3, Brain, Database, TrendingUp, Users, Heart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  whatIDid: string[];
  insights: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
  github: string;
  demo: string;
  hasBackDetails: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Retail Sales Analysis',
    description: 'Click to explore insights & business impact',
    whatIDid: [
      'Cleaned and transformed raw retail sales data',
      'Built interactive dashboards in Power BI',
      'Analyzed category-wise and monthly trends',
    ],
    insights: 'Identified high-revenue categories and seasonal demand spikes, helping improve inventory and sales strategy.',
    tags: ['Excel', 'Power BI', 'EDA'],
    icon: <BarChart3 className="w-12 h-12" />,
    gradient: 'from-primary to-secondary',
    github: 'https://github.com/Dev-SarthakBora/retail-analysis/',
    demo: 'https://dev-sarthakbora.github.io/retail-analysis/',
    hasBackDetails: true,
  },
  {
    id: 2,
    title: 'BikeDekho Sales Analysis',
    description: 'Click to view analysis & insights',
    whatIDid: [
      'Cleaned bike purchase dataset',
      'Analyzed gender-based buying behavior',
      'Created summary dashboards',
    ],
    insights: 'Revealed key demographic trends influencing bike purchases, supporting targeted marketing decisions.',
    tags: ['Excel', 'EDA', 'Data Cleaning'],
    icon: <Brain className="w-12 h-12" />,
    gradient: 'from-secondary to-accent',
    github: 'https://github.com/Dev-SarthakBora/BikeDekhoAnalysis/',
    demo: 'https://dev-sarthakbora.github.io/BikeDekhoAnalysis/',
    hasBackDetails: true,
  },
  {
    id: 3,
    title: 'Data Cleaning in SQL',
    description: 'Click to see SQL workflow & insights',
    whatIDid: [
      'Removed duplicates & handled null values',
      'Optimized complex queries',
      'Performed exploratory analysis in SQL',
    ],
    insights: 'Improved query performance by 65% and uncovered hidden data inconsistencies affecting reporting accuracy.',
    tags: ['SQL', 'EDA'],
    icon: <Database className="w-12 h-12" />,
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Dev-SarthakBora/Data-Cleaning-in-SQL/',
    demo: 'https://dev-sarthakbora.github.io/Data-Cleaning-in-SQL/',
    hasBackDetails: true,
  },
  {
    id: 4,
    title: 'Market Trend Analysis',
    description: 'Time series analysis of market trends with visualization showing seasonal patterns and forecasting future demand.',
    whatIDid: [],
    insights: '',
    tags: ['Python', 'Time Series', 'Forecasting'],
    icon: <TrendingUp className="w-12 h-12" />,
    gradient: 'from-green-500 to-teal-500',
    github: '#',
    demo: '#',
    hasBackDetails: false,
  },
  {
    id: 5,
    title: 'Customer Segmentation',
    description: 'K-means clustering algorithm to segment customers into distinct groups for targeted marketing strategies.',
    whatIDid: [],
    insights: '',
    tags: ['Clustering', 'ML', 'Visualization'],
    icon: <Users className="w-12 h-12" />,
    gradient: 'from-yellow-500 to-orange-500',
    github: '#',
    demo: '#',
    hasBackDetails: false,
  },
  {
    id: 6,
    title: 'Healthcare Data Analysis',
    description: 'Analyzed patient data to identify treatment effectiveness patterns and improve healthcare outcomes.',
    whatIDid: [],
    insights: '',
    tags: ['Statistics', 'EDA', 'Power BI'],
    icon: <Heart className="w-12 h-12" />,
    gradient: 'from-red-500 to-pink-500',
    github: '#',
    demo: '#',
    hasBackDetails: false,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`glass-card project-card p-6 min-h-[420px] ${project.hasBackDetails ? 'cursor-pointer' : ''} ${isFlipped ? 'flipped' : ''}`}
      onClick={() => project.hasBackDetails && setIsFlipped(!isFlipped)}
    >
      <div className="project-card-inner" style={{ minHeight: '380px' }}>
        {/* Front */}
        <div className={`project-face project-front ${isFlipped ? 'opacity-0' : ''}`}>
          <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center text-white/90`}>
            {project.icon}
          </div>
          <h3 className="text-xl font-display font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={tag} className={i === 0 ? 'tag-chip-primary' : i === 1 ? 'tag-chip-secondary' : 'tag-chip-accent'}>
                {tag}
              </span>
            ))}
          </div>
          {!project.hasBackDetails && (
            <div className="flex gap-4 mt-4">
              <a 
                href={project.github} 
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} /> Code
              </a>
              <a 
                href={project.demo} 
                className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          )}
        </div>

        {/* Back */}
        {project.hasBackDetails && (
          <div className={`project-face project-back p-2 ${!isFlipped ? 'opacity-0' : ''}`}>
            <h3 className="text-lg font-display font-bold text-primary mb-3">What I Did</h3>
            <ul className="text-sm text-muted-foreground mb-4 space-y-1">
              {project.whatIDid.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-secondary mb-1">Insights Delivered</h4>
            <p className="text-sm text-muted-foreground mb-4">{project.insights}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 text-sm"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Real-world data challenges solved</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
