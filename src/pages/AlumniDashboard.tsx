import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Share, 
  Trophy, 
  Calendar,
  PlusCircle,
  Star,
  ChatCircle,
  Handshake
} from 'phosphor-react';
import { useAppStore } from '../store/appStore';
import { dummyData } from '../data/dummy';
import ShareExperienceModal from '../components/alumni/ShareExperienceModal';

type ActiveView = 'profile' | 'experiences' | 'mentorship' | 'contributions';

const AlumniDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('profile');
  const [showShareModal, setShowShareModal] = useState(false);
  const { currentUser, addNotification } = useAppStore();

  const alumni = currentUser as any; // Type assertion for demo
  const experiences = dummyData.experiences.filter(e => e.author === alumni?.name);
  const badges = dummyData.badges;

  // Type guard to ensure we have alumni data
  if (!alumni || !('company' in alumni)) {
    return <div className="text-center py-12">Loading alumni profile...</div>;
  }

  const handleShareExperience = () => {
    addNotification('Experience shared successfully! +15 points earned 🎉', 'success');
  };

  const handleAcceptMentorship = () => {
    addNotification('Mentorship request accepted! Student has been notified.', 'success');
  };

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card card-hover"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accent-light p-0.5">
              <img
                src={alumni?.avatar}
                alt={alumni?.name}
                className="h-full w-full rounded-full bg-surface object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold text-foreground">{alumni?.name}</h2>
                {alumni?.verified && (
                  <div className="rounded-full bg-success/10 px-2 py-1">
                    <span className="text-xs font-medium text-success">Verified</span>
                  </div>
                )}
              </div>
              <p className="text-muted-text">{alumni?.role} at {alumni?.company}</p>
              <p className="text-sm text-muted-text">Class of {alumni?.gradYear} • {alumni?.experience} years experience</p>
              <p className="mt-2 text-sm text-muted-text">{alumni?.bio}</p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {alumni?.tags?.map((tag) => (
                  <span key={tag} className="tag-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-accent">{alumni?.points}</div>
            <div className="text-sm text-muted-text">points</div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-secondary pt-4">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">12</div>
            <div className="text-xs text-muted-text">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">5</div>
            <div className="text-xs text-muted-text">Experiences Shared</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">8</div>
            <div className="text-xs text-muted-text">Forum Contributions</div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        <button
          onClick={() => setActiveView('experiences')}
          className="card card-hover text-left"
        >
          <Share size={24} className="mb-3 text-primary" />
          <h3 className="font-semibold text-foreground">Share Experience</h3>
          <p className="text-sm text-muted-text">Help students with insights</p>
        </button>

        <button
          onClick={() => setActiveView('mentorship')}
          className="card card-hover text-left"
        >
          <Handshake size={24} className="mb-3 text-accent" />
          <h3 className="font-semibold text-foreground">Mentor Students</h3>
          <p className="text-sm text-muted-text">Guide the next generation</p>
        </button>

        <button
          onClick={() => setActiveView('contributions')}
          className="card card-hover text-left"
        >
          <Trophy size={24} className="mb-3 text-success" />
          <h3 className="font-semibold text-foreground">View Rewards</h3>
          <p className="text-sm text-muted-text">Track your contributions</p>
        </button>
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card"
      >
        <h3 className="font-semibold text-foreground mb-4">Your Badges</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.slice(0, 2).map((badge) => (
            <div key={badge.id} className="text-center">
              <div className={`mx-auto mb-2 h-12 w-12 rounded-full flex items-center justify-center ${
                badge.tier === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                badge.tier === 'Silver' ? 'bg-gray-100 text-gray-600' :
                'bg-orange-100 text-orange-600'
              }`}>
                <Trophy size={20} />
              </div>
              <div className="text-xs font-medium text-foreground">{badge.name}</div>
              <div className="text-xs text-muted-text">{badge.tier}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderExperiences = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Career Experiences</h2>
          <p className="text-muted-text">Share your journey to help students</p>
        </div>
        <button
          onClick={() => setShowShareModal(true)}
          className="btn-primary"
        >
          <PlusCircle size={16} className="mr-2" />
          Share New Experience
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card card-hover"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground">{experience.title}</h3>
              <div className="flex items-center space-x-1 text-muted-text">
                <Star size={14} />
                <span className="text-sm">{experience.likes}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-text mb-3">{experience.content}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {experience.tags.map((tag) => (
                  <span key={tag} className="tag-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-text">
                {new Date(experience.timestamp).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMentorship = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Mentorship Requests</h2>
        <p className="text-muted-text">Students who want to connect with you</p>
      </div>

      <div className="space-y-4">
        {/* Mock mentorship requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card card-hover"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <img
                src="/images/avatars/aisha.png"
                alt="Aisha Patel"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-foreground">Aisha Patel</h3>
                <p className="text-sm text-muted-text">Final Year • ABC Institute of Tech</p>
                <p className="text-sm text-muted-text mt-1">
                  "Hi! I'm interested in backend development and would love to learn about your experience at MasterPay."
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['Backend', 'Fintech', 'Interview Prep'].map((tag) => (
                    <span key={tag} className="tag-chip selected text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handleAcceptMentorship}
                className="btn-primary text-sm"
              >
                Accept
              </button>
              <button className="btn-ghost text-sm">
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'experiences':
        return renderExperiences();
      case 'mentorship':
        return renderMentorship();
      case 'contributions':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Community Contributions</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h3 className="font-semibold text-foreground mb-4">Company Interview Tips</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-surface-secondary">
                    <div className="font-medium text-foreground">MasterPay Interview Process</div>
                    <div className="text-sm text-muted-text">3 rounds: Coding + System Design + Culture fit</div>
                  </div>
                </div>
                <button className="btn-ghost mt-4 w-full">Add Company Tips</button>
              </div>
              <div className="card">
                <h3 className="font-semibold text-foreground mb-4">Mentorship Impact</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-text">Students Mentored</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-text">Success Rate</span>
                    <span className="font-medium text-success">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderProfile();
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Navigation */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { key: 'profile', label: 'Profile', icon: Users },
            { key: 'experiences', label: 'Experiences', icon: Share },
            { key: 'mentorship', label: 'Mentorship', icon: Handshake },
            { key: 'contributions', label: 'Contributions', icon: Trophy },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveView(tab.key as ActiveView)}
              className={`inline-flex items-center space-x-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeView === tab.key
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-text hover:bg-surface-secondary hover:text-foreground'
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
      
      {showShareModal && (
        <ShareExperienceModal onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
};

export default AlumniDashboard;