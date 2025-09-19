import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/appStore';

const TagsInterestsStep: React.FC = () => {
  const { userRole, onboardingData, updateOnboardingData } = useAppStore();

  const availableTags = userRole === 'student' 
    ? [
        'Backend', 'Frontend', 'Full Stack', 'Mobile Dev', 'Data Science', 
        'Machine Learning', 'DevOps', 'UI/UX Design', 'Product Management',
        'Cybersecurity', 'Blockchain', 'Game Dev', 'Fintech', 'HealthTech',
        'Interview Prep', 'System Design', 'Competitive Programming'
      ]
    : [
        'Backend', 'Frontend', 'Full Stack', 'Mobile Dev', 'Data Science',
        'Machine Learning', 'DevOps', 'UI/UX Design', 'Product Management',
        'Engineering Management', 'System Design', 'Architecture', 'Mentorship',
        'Career Guidance', 'Startup Experience', 'Enterprise', 'Consulting',
        'Fintech', 'HealthTech', 'EdTech', 'E-commerce'
      ];

  const selectedTags = onboardingData.tags || [];

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    updateOnboardingData({ tags: newTags });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {userRole === 'student' 
            ? 'What are your interests and goals?' 
            : 'What\'s your expertise and experience?'
          }
        </h3>
        <p className="text-muted-text">
          {userRole === 'student'
            ? 'Select areas you\'re interested in or want to learn about (choose at least 3)'
            : 'Choose areas where you can mentor and share knowledge (select 3-5)'
          }
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableTags.map((tag, index) => (
          <motion.button
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => toggleTag(tag)}
            className={`tag-chip transition-all duration-200 ${
              selectedTags.includes(tag) ? 'selected' : ''
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Selected Count */}
      <div className="text-center">
        <p className="text-sm text-muted-text">
          Selected: {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''}
          {selectedTags.length > 0 && (
            <span className="ml-2">
              ({selectedTags.join(', ')})
            </span>
          )}
        </p>
      </div>

      <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
        <p className="text-sm text-accent">
          ⚡ {userRole === 'student' 
            ? 'These help us find the perfect mentors and opportunities for you'
            : 'Students will find you based on these expertise areas'
          }
        </p>
      </div>
    </div>
  );
};

export default TagsInterestsStep;