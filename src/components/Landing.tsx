import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'phosphor-react';
import { useAppStore } from '../store/appStore';

const Landing: React.FC = () => {
  const { setUserRole } = useAppStore();

  const handleRoleSelect = (role: 'student' | 'alumni') => {
    setUserRole(role);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
    },
    hover: {
      y: -12,
      scale: 1.05,
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <motion.div
          variants={cardVariants}
          className="mb-16"
        >
          <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            AlumniConnect
          </h1>
        </motion.div>

        {/* Role Selection Cards */}
        <motion.div
          variants={cardVariants}
          className="grid gap-8 sm:grid-cols-2 sm:gap-12"
        >
          {/* Student Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleRoleSelect('student')}
            className="role-card group"
          >
            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-primary/10 p-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap size={48} className="text-primary" />
                </div>
              </div>
              
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                I'm a Student
              </h2>
              
              <p className="mb-6 text-muted-text">
                Connect with alumni, get career guidance, join study groups, 
                and prepare for interviews with experienced professionals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {['Find Mentors', 'Join Forums', 'Career Guidance', 'Interview Prep'].map((feature) => (
                  <span
                    key={feature}
                    className="tag-chip text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="role-bg-student"
            />
          </motion.div>

          {/* Alumni Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleRoleSelect('alumni')}
            className="role-card group"
          >
            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-accent/10 p-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Users size={48} className="text-accent" />
                </div>
              </div>
              
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                I'm an Alumni
              </h2>
              
              <p className="mb-6 text-muted-text">
                Share your journey, mentor students, contribute to your alma mater, 
                and build a stronger professional network.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {['Mentor Students', 'Share Experience', 'Give Back', 'Network'].map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="role-bg-alumni"
            />
          </motion.div>
        </motion.div>

        {/* Demo Notice */}
        <motion.div
          variants={cardVariants}
          className="mt-12"
        >
          <p className="text-sm text-muted-text">
            🎯 <strong>Demo Mode:</strong> Pick your role — all data is dummy for demonstration purposes
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;