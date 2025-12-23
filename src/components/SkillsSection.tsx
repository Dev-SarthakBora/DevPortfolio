import { motion } from 'framer-motion';
import { Code, Wrench, Layers } from 'lucide-react';

const programmingSkills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'JAVA (DSA)', level: 50 },
];

const dataTools = [
  { name: 'Pandas / NumPy', level: 90 },
  { name: 'Tableau / Power BI', level: 80 },
  { name: 'Excel', level: 65 },
];

const competencies = [
  'Exploratory Data Analysis',
  'Statistical Modeling',
  'Data Cleaning & Wrangling',
  'Data Visualization',
  'Machine Learning',
  'Artificial Intelligence Foundations',
  'Database Design',
  'ETL Pipelines',
  'Feature Engineering',
  'Business Intelligence',
  'Scikit-learn',
  'Matplotlib / Seaborn',
  'GitHub',
  'Google Colab',
  'MySQL',
  'Data Structures & Algorithms',
  'Excel and Spreadsheet',
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="skill-bar-fill"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative z-10 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">Tools and technologies I work with daily</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">Programming Languages</h3>
            </div>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.2 + index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Data Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary">Data & Analytics Tools</h3>
            </div>
            <div className="space-y-6">
              {dataTools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Layers className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold text-accent">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {competencies.map((comp, index) => (
              <motion.span
                key={comp}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                viewport={{ once: true }}
                className="skill-pill"
              >
                {comp}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
