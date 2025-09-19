import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/appStore';

const BasicInfoStep: React.FC = () => {
  const { userRole, onboardingData, updateOnboardingData } = useAppStore();

  const handleInputChange = (field: string, value: string | number) => {
    updateOnboardingData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {userRole === 'student' ? 'Let\'s get to know you!' : 'Tell us about yourself'}
        </h3>
        <p className="text-muted-text">
          {userRole === 'student' 
            ? 'Basic information to help connect you with the right mentors'
            : 'Help us verify your background and expertise'
          }
        </p>
      </motion.div>

      <div className="grid gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={onboardingData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {userRole === 'student' ? (
          <>
            {/* College */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                College/University *
              </label>
              <input
                type="text"
                value={onboardingData.college || ''}
                onChange={(e) => handleInputChange('college', e.target.value)}
                placeholder="e.g., ABC Institute of Technology"
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Academic Year *
              </label>
              <select
                value={onboardingData.year || ''}
                onChange={(e) => handleInputChange('year', e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select your year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Final Year">Final Year</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>
          </>
        ) : (
          <>
            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Current Company *
              </label>
              <input
                type="text"
                value={onboardingData.company || ''}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="e.g., TechCorp, Google, Microsoft"
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Job Title *
              </label>
              <input
                type="text"
                value={onboardingData.role || ''}
                onChange={(e) => handleInputChange('role', e.target.value)}
                placeholder="e.g., Software Engineer, Product Manager"
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Graduation Year */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Graduation Year *
              </label>
              <select
                value={onboardingData.gradYear || ''}
                onChange={(e) => handleInputChange('gradYear', parseInt(e.target.value))}
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select graduation year</option>
                {Array.from({ length: 20 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* LinkedIn URL (optional) */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                LinkedIn Profile (optional)
              </label>
              <input
                type="url"
                value={onboardingData.linkedinUrl || ''}
                onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </>
        )}
      </div>

      <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-primary">
          💡 This information helps us match you with the right people and opportunities
        </p>
      </div>
    </div>
  );
};

export default BasicInfoStep;