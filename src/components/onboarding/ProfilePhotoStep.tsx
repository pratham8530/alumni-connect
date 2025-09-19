import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, User } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';

const ProfilePhotoStep: React.FC = () => {
  const { userRole, onboardingData, updateOnboardingData } = useAppStore();
  const [dragOver, setDragOver] = useState(false);

  const handleBioChange = (bio: string) => {
    updateOnboardingData({ bio });
  };

  const handlePhotoUpload = () => {
    // In a real app, this would handle file upload
    // For demo, we'll just set a placeholder
    updateOnboardingData({ photo: '/images/avatars/default.png' });
  };

  const handleVerificationUpload = () => {
    // Mock verification for alumni
    updateOnboardingData({ rollNumber: 'VERIFIED_' + Date.now() });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Complete your profile
        </h3>
        <p className="text-muted-text">
          Add a photo and bio to make a great first impression
        </p>
      </motion.div>

      {/* Profile Photo Upload */}
      <div className="text-center">
        <div className="mb-4">
          <div className="relative mx-auto w-24 h-24">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-surface">
                {onboardingData.photo ? (
                  <img 
                    src={onboardingData.photo} 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={32} className="text-muted-text" />
                )}
              </div>
            </div>
            <button
              onClick={handlePhotoUpload}
              className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-primary-foreground shadow-lg hover:bg-primary-light"
            >
              <Camera size={16} />
            </button>
          </div>
        </div>

        <button
          onClick={handlePhotoUpload}
          className="btn-ghost text-sm"
        >
          <Upload size={16} className="mr-2" />
          Upload Photo (Optional)
        </button>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Short Bio *
        </label>
        <textarea
          value={onboardingData.bio || ''}
          onChange={(e) => handleBioChange(e.target.value)}
          placeholder={
            userRole === 'student'
              ? 'Tell us about your goals, what you\'re studying, or what you\'re passionate about...'
              : 'Share your experience, what you can help students with, or your professional journey...'
          }
          rows={4}
          className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
        <p className="mt-1 text-xs text-muted-text">
          {(onboardingData.bio || '').length}/200 characters
        </p>
      </div>

      {/* Alumni Verification */}
      {userRole === 'alumni' && (
        <div className="rounded-xl border border-border-secondary bg-surface-secondary p-4">
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <Upload size={16} className="mr-2" />
            Quick Verification
          </h4>
          <p className="text-sm text-muted-text mb-3">
            Help us verify your alumni status (optional for demo)
          </p>
          
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={handleVerificationUpload}
              className="btn-ghost text-sm"
            >
              Upload Student ID
            </button>
            
            <div>
              <input
                type="text"
                placeholder="Enter student roll number"
                value={onboardingData.rollNumber || ''}
                onChange={(e) => updateOnboardingData({ rollNumber: e.target.value })}
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {onboardingData.rollNumber && (
            <div className="mt-3 rounded-lg bg-success/10 p-2">
              <p className="text-xs text-success">
                ✓ Verification submitted - will be reviewed for badge
              </p>
            </div>
          )}
        </div>
      )}

      <div className="rounded-xl bg-surface-secondary p-4 text-center">
        <p className="text-sm text-muted-text">
          🎉 You're almost done! Your profile will be ready after this step.
        </p>
      </div>
    </div>
  );
};

export default ProfilePhotoStep;