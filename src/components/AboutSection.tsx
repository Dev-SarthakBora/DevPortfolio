import { motion } from 'framer-motion';
import { useState } from 'react';

const learningPlatforms = [
  { label: 'ChatGPT / AI Tools', value: 90 },
  { label: 'Google Skills Boost', value: 60 },
  { label: 'Books / Guides', value: 40 },
  { label: 'YouTube Tech', value: 90 },
  { label: 'LeetCode / HackerRank', value: 75 },
];

const hobbies = [
  { label: 'Gaming', value: 85 },
  { label: 'Movies', value: 70 },
  { label: 'Listening Music', value: 80 },
  { label: 'Exploring Tech / AI', value: 65 },
  { label: 'Organizing Workspace', value: 55 },
];

const approachSteps = [
  'Start by understanding the business goal behind the data',
  'Clean and validate data to ensure accuracy',
  'Explore trends and patterns through EDA',
  'Apply statistical or ML techniques when relevant',
  'Present insights in a clear, business-friendly format',
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'learning' | 'hobbies'>('learning');
  const data = activeTab === 'learning' ? learningPlatforms : hobbies;

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-heading gradient-text text-3xl md:text-4xl lg:text-5xl">About Me</h2>
          <p className="text-muted-foreground text-base md:text-lg">Passionate about turning data into decisions</p>
        </motion.div>

        {/* Who I Am */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-3 md:mb-4">👋 Who I Am</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
            I'm a data analyst who enjoys transforming raw, messy data into clear insights that support smarter decisions.
            I work across data cleaning, exploratory data analysis, and visualization, using tools like Python, SQL, and BI platforms.
            My approach focuses on understanding the story behind the data and communicating insights in a clear, actionable way.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Visualization Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            {/* Bar Chart Visualization */}
            <div className="h-48 md:h-52 flex items-end justify-between gap-1.5 md:gap-2 mb-6 px-2 md:px-4">
              {data.map((item, index) => (
                <div key={item.label} className="flex flex-col items-center flex-1 min-w-0">
                  <span className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">{item.value}%</span>
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.value}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="data-bar w-full rounded-t-sm"
                    style={{ 
                      background: `linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                      minHeight: '10px'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Labels */}
            <p className="text-center text-xs md:text-sm text-muted-foreground mb-2">
              {activeTab === 'learning' ? 'Personal Usage: Preferred Learning Platforms' : 'Personal Interests: Hobbies & Activities'}
            </p>
            <p className="text-center text-[10px] md:text-xs text-muted-foreground/70 mb-4 md:mb-6 leading-relaxed">
              {data.map(d => d.label).join(' · ')}
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center gap-2 md:gap-3">
              <button
                onClick={() => setActiveTab('learning')}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-lg border transition-all duration-300 ${
                  activeTab === 'learning'
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                Learning Platforms
              </button>
              <button
                onClick={() => setActiveTab('hobbies')}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-lg border transition-all duration-300 ${
                  activeTab === 'hobbies'
                    ? 'bg-secondary/20 border-secondary text-secondary'
                    : 'border-border hover:border-secondary/50'
                }`}
              >
                Hobbies
              </button>
            </div>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-2">🧠 How I Approach Data Problems</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">My analytical workflow and decision-making process</p>
            </div>
            
            <ul className="space-y-3 md:space-y-4">
              {approachSteps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 md:gap-3 text-muted-foreground text-sm md:text-base"
                >
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] md:text-xs text-primary flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
