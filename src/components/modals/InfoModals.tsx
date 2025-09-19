import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'phosphor-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'features' | 'demo' | 'contact';
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, type }) => {
  const content = {
    about: {
      title: 'About AlumniConnect',
      body: (
        <div className="space-y-4">
          <p className="text-muted-text">
            AlumniConnect is a comprehensive platform designed to bridge the gap between students and alumni, 
            fostering meaningful connections and career growth opportunities.
          </p>
          <p className="text-muted-text">
            Our platform enables students to connect with experienced alumni for mentorship, career guidance, 
            and industry insights while allowing alumni to give back to their alma mater and build professional networks.
          </p>
          <div className="rounded-xl bg-surface-secondary p-4">
            <h4 className="mb-2 font-semibold text-foreground">Key Features</h4>
            <ul className="space-y-1 text-sm text-muted-text">
              <li>• AI-powered alumni-student matching</li>
              <li>• 1:1 mentorship programs</li>
              <li>• Interactive Q&A forums</li>
              <li>• Career guidance and interview prep</li>
              <li>• Company insights and placement tips</li>
            </ul>
          </div>
        </div>
      )
    },
    features: {
      title: 'Platform Features',
      body: (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-surface-secondary p-4">
              <h4 className="mb-2 font-semibold text-primary">For Students</h4>
              <ul className="space-y-1 text-sm text-muted-text">
                <li>• Find mentors by expertise</li>
                <li>• Join discussion forums</li>
                <li>• Get career guidance</li>
                <li>• Access company insights</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
            <div className="rounded-xl bg-surface-secondary p-4">
              <h4 className="mb-2 font-semibold text-accent">For Alumni</h4>
              <ul className="space-y-1 text-sm text-muted-text">
                <li>• Mentor students</li>
                <li>• Share experiences</li>
                <li>• Provide company tips</li>
                <li>• Build network</li>
                <li>• Earn recognition</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-4">
            <h4 className="mb-2 font-semibold text-foreground">AI-Powered Matching</h4>
            <p className="text-sm text-muted-text">
              Our intelligent matching algorithm connects students with the most relevant alumni 
              based on career interests, skills, and goals.
            </p>
          </div>
        </div>
      )
    },
    demo: {
      title: 'Demo Script & Guide',
      body: (
        <div className="space-y-4">
          <div className="rounded-xl bg-surface-secondary p-4">
            <h4 className="mb-2 font-semibold text-foreground">Quick Demo Flow</h4>
            <ol className="space-y-2 text-sm text-muted-text">
              <li><strong>1.</strong> Select Student role → Complete 3-step onboarding</li>
              <li><strong>2.</strong> Visit Discover → View AI-matched alumni</li>
              <li><strong>3.</strong> Request 1:1 mentorship → Book a slot</li>
              <li><strong>4.</strong> Open Forums → Join discussion & post question</li>
              <li><strong>5.</strong> Try FAQ Chatbot → Ask about placement tips</li>
              <li><strong>6.</strong> Switch to Alumni role → Share experience</li>
            </ol>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <h4 className="mb-2 font-semibold text-primary">💡 Pro Tips</h4>
            <ul className="space-y-1 text-sm text-muted-text">
              <li>• All interactions use dummy data for demonstration</li>
              <li>• Animations and micro-interactions showcase UX polish</li>
              <li>• Both student and alumni flows are fully functional</li>
              <li>• Chatbot provides realistic conversational experience</li>
            </ul>
          </div>
        </div>
      )
    },
    contact: {
      title: 'Contact & Support',
      body: (
        <div className="space-y-4">
          <p className="text-muted-text">
            This is a prototype demonstration of the AlumniConnect platform. 
            For questions about the project or implementation details:
          </p>
          <div className="space-y-3">
            <div className="rounded-xl bg-surface-secondary p-4">
              <h4 className="mb-2 font-semibold text-foreground">Project Information</h4>
              <p className="text-sm text-muted-text">
                Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations. 
                All data is mocked for demonstration purposes.
              </p>
            </div>
            <div className="rounded-xl bg-surface-secondary p-4">
              <h4 className="mb-2 font-semibold text-foreground">Technical Stack</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Phosphor Icons'].map((tech) => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
            <p className="text-sm text-accent font-medium">
              🚀 Ready to build the real platform? Let's connect!
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-border-secondary bg-surface shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-secondary p-6">
              <h2 className="text-xl font-bold text-foreground">
                {content[type].title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-muted-text transition-colors hover:bg-surface-secondary hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[calc(90vh-8rem)] overflow-y-auto p-6">
              {content[type].body}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;