import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Seeking Data Analyst Role',
    company: 'Full-time / Contract / Freelance',
    period: 'Available Now',
    description: 'Actively seeking opportunities to apply my data analysis skills in a dynamic team environment. Open to roles in business intelligence, data analytics, or data science.',
    color: 'primary',
  },
  {
    title: 'Data Analytics Intern',
    company: 'Labmentix',
    period: '2022 - 2023',
    description: 'Assisted in data collection, cleaning, and analysis across multiple projects. Created visualizations and reports to support business decisions. Gained hands-on experience with industry-standard tools including Python, SQL, and Power BI.',
    color: 'secondary',
  },
  {
    title: 'Certifications & Training',
    company: 'Self-paced Learning & Professional Development',
    period: '2021 - Present',
    description: 'Completed comprehensive courses in Python, SQL, Artificial Intelligence Fundamentals, and Data Visualization. Built portfolio projects demonstrating practical skills in data analysis and business intelligence.',
    color: 'accent',
    tags: ['Google Data Analytics', 'Python for Data Science', 'AI Foundations'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6 relative z-10 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-heading gradient-text text-3xl md:text-4xl lg:text-5xl">Professional Journey</h2>
          <p className="text-muted-foreground text-base md:text-lg">My data analytics career path</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="glass-card p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className={`text-lg md:text-xl font-display font-bold text-${exp.color}`}>{exp.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground/70 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{exp.description}</p>
                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-chip-primary text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
