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
    description: 'Comprehensive sales analysis revealing revenue patterns and category performance',
    whatIDid: [
      'Cleaned and transformed 10,000+ sales records',
      'Built interactive Power BI dashboards',
      'Analyzed category-wise revenue trends',
      'Identified seasonal demand patterns',
    ],
    insights: 'Discovered top 3 categories generating 67% of revenue. Identified Q4 sales spike of 34%, enabling optimized inventory planning and 15% reduction in stockouts.',
    tags: ['Excel', 'Power BI', 'EDA'],
    icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-primary to-secondary',
    github: 'https://github.com/Dev-SarthakBora/retail-analysis/',
    demo: 'https://dev-sarthakbora.github.io/retail-analysis/',
    hasBackDetails: true,
  },
  {
    id: 2,
    title: 'BikeDekho Sales Analysis',
    description: 'In-depth analysis of bike purchasing patterns and demographic trends',
    whatIDid: [
      'Cleaned and structured bike purchase dataset',
      'Analyzed gender and age-based buying behavior',
      'Created comprehensive summary dashboards',
      'Performed correlation analysis on key variables',
    ],
    insights: 'Revealed key demographic trends influencing bike purchases. Found 40% higher conversion in 35-45 age group, supporting targeted marketing decisions.',
    tags: ['Excel', 'EDA', 'Data Cleaning'],
    icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-secondary to-accent',
    github: 'https://github.com/Dev-SarthakBora/BikeDekhoAnalysis/',
    demo: 'https://dev-sarthakbora.github.io/BikeDekhoAnalysis/',
    hasBackDetails: true,
  },
  {
    id: 3,
    title: 'Data Cleaning in SQL',
    description: 'Advanced SQL techniques for data quality and query optimization',
    whatIDid: [
      'Cleaned 50,000+ row housing dataset',
      'Removed duplicates and handled null values',
      'Standardized date formats and addresses',
      'Optimized complex JOIN queries',
    ],
    insights: 'Improved query performance by 65% through indexing and optimization. Uncovered 2,300+ duplicate records (4.6% of data) affecting report accuracy.',
    tags: ['SQL', 'EDA', 'Optimization'],
    icon: <Database className="w-10 h-10 md:w-12 md:h-12" />,
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
    icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
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
    icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
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
    icon: <Heart className="w-10 h-10 md:w-12 md:h-12" />,
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
      className={`glass-card project-card p-4 md:p-6 ${project.hasBackDetails ? 'cursor-pointer' : ''} ${isFlipped ? 'flipped' : ''}`}
      onClick={() => project.hasBackDetails && setIsFlipped(!isFlipped)}
    >
      {/* Flip hint for interactive cards */}
      {project.hasBackDetails && (
        <div className="absolute top-3 right-3 z-10 text-xs text-muted-foreground/60 flex items-center gap-1">
          <span className="hidden sm:inline">Click to flip</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      )}

      <div 
        className="project-card-inner relative"
        style={{ 
          minHeight: project.hasBackDetails ? '380px' : 'auto',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
      >
        {/* Front */}
        <div className={`${project.hasBackDetails ? 'project-face project-front' : ''}`}>
          <div className={`w-full h-40 md:h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center text-white/90`}>
            {project.icon}
          </div>
          <h3 className="text-lg md:text-xl font-display font-bold mb-2 md:mb-3">{project.title}</h3>
          <p className="text-muted-foreground text-xs md:text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span key={tag} className={i === 0 ? 'tag-chip-primary' : i === 1 ? 'tag-chip-secondary' : 'tag-chip-accent'}>
                {tag}
              </span>
            ))}
          </div>
          {/* Always show links on non-flippable cards */}
          {!project.hasBackDetails && (
            <div className="flex gap-4 pt-2">
              <a 
                href={project.github} 
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} /> Code
              </a>
              <a 
                href={project.demo} 
                className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          )}
        </div>

        {/* Back - Only for flippable cards */}
        {project.hasBackDetails && (
          <div 
            className="project-face project-back p-2"
            style={{ 
              transform: 'rotateY(180deg)',
              opacity: isFlipped ? 1 : 0,
              pointerEvents: isFlipped ? 'auto' : 'none'
            }}
          >
            <h3 className="text-base md:text-lg font-display font-bold text-primary mb-2 md:mb-3">What I Did</h3>
            <ul className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 space-y-1">
              {project.whatIDid.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <h4 className="text-xs md:text-sm font-semibold text-secondary mb-1">Key Insights</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{project.insights}</p>
            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 text-sm font-medium"
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
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-heading gradient-text text-3xl md:text-4xl lg:text-5xl">Featured Projects</h2>
          <p className="text-muted-foreground text-base md:text-lg">Real-world data challenges solved with measurable impact</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
