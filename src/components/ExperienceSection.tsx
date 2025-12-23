import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'My Next Job',
    company: 'Freelance / Contract',
    period: 'Start - End',
    description: 'My Role Here',
    color: 'primary',
  },
  {
    title: 'Data Analytics Intern',
    company: 'Labmentix',
    period: '2022 - 2023',
    description: 'Assisted in data collection, cleaning, and analysis. Created visualizations and reports to support business decisions. Learned industry-standard tools and methodologies.',
    color: 'secondary',
  },
  {
    title: 'Learning & Self-Development',
    company: 'Continuous Growth',
    period: 'Ongoing',
    description: 'Constantly expanding my skillset through online courses, certifications, and hands-on projects. Focused on staying current with the latest data science trends and technologies.',
    color: 'accent',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 relative z-10 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Professional Journey</h2>
          <p className="text-muted-foreground text-lg">My data analytics career path</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className={`text-xl font-display font-bold text-${exp.color}`}>{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground/70 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
