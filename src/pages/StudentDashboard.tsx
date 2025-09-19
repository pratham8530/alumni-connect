import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ChatCircle, 
  MagnifyingGlass, 
  BookOpen, 
  Star,
  Calendar,
  TrendUp,
  Heart
} from 'phosphor-react';
import { useAppStore } from '../store/appStore';
import { dummyData } from '../data/dummy';

type ActiveView = 'discover' | 'forums' | 'mentorship' | 'profile';

const StudentDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('profile');
  const { currentUser, openDrawer, addNotification } = useAppStore();

  const student = currentUser as any; // Type assertion for demo
  const matches = dummyData.matches.filter(m => m.studentId === student?.id);
  const forums = dummyData.forums;
  const mentorshipSlots = dummyData.mentorshipSlots;

  // Type guard to ensure we have student data
  if (!student || !('college' in student)) {
    return <div className="text-center py-12">Loading student profile...</div>;
  }

  const handleRequestMentorship = (mentorId: string) => {
    addNotification('Mentorship request sent! The mentor will respond soon.', 'success');
  };

  const handleJoinForum = (forumId: string) => {
    openDrawer('forum', forumId);
  };

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card card-hover"
      >
        <div className="flex items-start space-x-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
            <img
              src={student?.avatar}
              alt={student?.name}
              className="h-full w-full rounded-full bg-surface object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">{student?.name}</h2>
            <p className="text-muted-text">{student?.college} • {student?.year}</p>
            <p className="mt-2 text-sm text-muted-text">{student?.bio}</p>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {student?.tags?.map((tag) => (
                <span key={tag} className="tag-chip text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Profile Completion</span>
            <span className="text-sm text-muted-text">{student?.progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-surface-secondary">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${student?.progress}%` }}
            />
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
          onClick={() => setActiveView('discover')}
          className="card card-hover text-left"
        >
          <MagnifyingGlass size={24} className="mb-3 text-primary" />
          <h3 className="font-semibold text-foreground">Discover Mentors</h3>
          <p className="text-sm text-muted-text">Find alumni in your field</p>
        </button>

        <button
          onClick={() => setActiveView('forums')}
          className="card card-hover text-left"
        >
          <ChatCircle size={24} className="mb-3 text-accent" />
          <h3 className="font-semibold text-foreground">Join Forums</h3>
          <p className="text-sm text-muted-text">Ask questions & help others</p>
        </button>

        <button
          onClick={() => setActiveView('mentorship')}
          className="card card-hover text-left"
        >
          <Calendar size={24} className="mb-3 text-success" />
          <h3 className="font-semibold text-foreground">Book Sessions</h3>
          <p className="text-sm text-muted-text">1:1 mentorship calls</p>
        </button>
      </motion.div>
    </div>
  );

  const renderDiscover = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Discover Mentors</h2>
        <p className="text-muted-text">AI-matched alumni based on your interests and goals</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {matches.map((match) => {
          const alumni = dummyData.alumni.find(a => a.id === match.alumniId);
          if (!alumni) return null;

          return (
            <motion.div
              key={match.alumniId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent-light p-0.5">
                    <img
                      src={alumni.avatar}
                      alt={alumni.name}
                      className="h-full w-full rounded-full bg-surface object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{alumni.name}</h3>
                    <p className="text-sm text-muted-text">{alumni.role} at {alumni.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-success">{match.score}%</div>
                  <div className="text-xs text-muted-text">match</div>
                </div>
              </div>

              <p className="text-sm text-muted-text mb-3">{alumni.bio}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {match.matchReason.map((reason) => (
                  <span key={reason} className="tag-chip selected text-xs">
                    {reason}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleRequestMentorship(alumni.id)}
                className="btn-primary w-full text-sm"
              >
                <Calendar size={16} className="mr-2" />
                Request 1:1 Session
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderForums = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Discussion Forums</h2>
        <p className="text-muted-text">Join conversations and get help from the community</p>
      </div>

      <div className="grid gap-4">
        {forums.map((forum) => (
          <motion.div
            key={forum.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card card-hover"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">{forum.title}</h3>
                <p className="text-sm text-muted-text mb-3">{forum.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {forum.tags.map((tag) => (
                    <span key={tag} className="tag-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-xs text-muted-text">
                  <span>{forum.participants} members</span>
                  <span>Active {new Date(forum.lastActivity).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={() => handleJoinForum(forum.id)}
                className="btn-accent"
              >
                Join Discussion
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'discover':
        return renderDiscover();
      case 'forums':
        return renderForums();
      case 'mentorship':
        return <div className="text-center text-muted-text py-12">Mentorship booking coming soon...</div>;
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
            { key: 'discover', label: 'Discover', icon: MagnifyingGlass },
            { key: 'forums', label: 'Forums', icon: ChatCircle },
            { key: 'mentorship', label: 'Mentorship', icon: Calendar },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveView(tab.key as ActiveView)}
              className={`inline-flex items-center space-x-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeView === tab.key
                  ? 'bg-primary text-primary-foreground'
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
    </div>
  );
};

export default StudentDashboard;