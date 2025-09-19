import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar, Buildings, LinkedinLogo, Briefcase } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';
import { dummyData, Alumni } from '../../data/dummy';

interface ProfileModalProps {
  alumniId: string;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ alumniId, onClose }) => {
  const { addNotification } = useAppStore();
  
  const alumni = dummyData.alumni.find(a => a.id === alumniId) as Alumni;
  
  if (!alumni) return null;

  const handleConnect = () => {
    addNotification(`Connection request sent to ${alumni.name}!`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface shadow-2xl"
      >
        {/* Header */}
        <div className="relative border-b border-border-secondary p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-surface-secondary"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-start space-x-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-accent to-accent-light p-0.5">
              <img
                src={alumni.avatar}
                alt={alumni.name}
                className="h-full w-full rounded-full bg-surface object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-2xl font-bold text-foreground">{alumni.name}</h2>
                {alumni.verified && (
                  <div className="rounded-full bg-success/10 px-2 py-1">
                    <span className="text-xs font-medium text-success">✓ Verified</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-4 text-muted-text mb-3">
                <div className="flex items-center space-x-1">
                  <Briefcase size={16} />
                  <span>{alumni.role}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Buildings size={16} />
                  <span>{alumni.company}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-text mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>Class of {alumni.gradYear}</span>
                </div>
                <span>•</span>
                <span>{alumni.experience} years experience</span>
              </div>
              
              <p className="text-muted-text">{alumni.bio}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {alumni.tags.map((tag) => (
                <span key={tag} className="tag-chip text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-surface-secondary">
                <div className="text-2xl font-bold text-primary">{alumni.points}</div>
                <div className="text-sm text-muted-text">Contribution Points</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface-secondary">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-text">Students Mentored</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface-secondary">
                <div className="text-2xl font-bold text-success">8</div>
                <div className="text-sm text-muted-text">Forum Contributions</div>
              </div>
            </div>
          </div>

          {/* Recent Experience */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Recent Shared Experience</h3>
            {dummyData.experiences
              .filter(exp => exp.author === alumni.name)
              .slice(0, 1)
              .map(exp => (
                <div key={exp.id} className="p-4 rounded-xl bg-surface-secondary">
                  <h4 className="font-medium text-foreground mb-2">{exp.title}</h4>
                  <p className="text-sm text-muted-text mb-3">{exp.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {exp.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag-chip text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-muted-text">
                      <span className="text-sm">{exp.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleConnect}
              className="btn-primary flex-1"
            >
              Connect
            </button>
            
            {alumni.linkedinUrl && (
              <a
                href={alumni.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center space-x-2"
              >
                <LinkedinLogo size={16} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileModal;