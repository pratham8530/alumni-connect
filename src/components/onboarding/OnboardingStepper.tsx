import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';
import BasicInfoStep from './BasicInfoStep';
import TagsInterestsStep from './TagsInterestsStep';
import ProfilePhotoStep from './ProfilePhotoStep';

const OnboardingStepper: React.FC = () => {
  const { 
    userRole, 
    onboardingStep, 
    setOnboardingStep, 
    onboardingData, 
    completeOnboarding,
    cancelOnboarding,
    addNotification
  } = useAppStore();

  const totalSteps = 3;
  const progress = (onboardingStep / totalSteps) * 100;

  const handleNext = () => {
    if (onboardingStep < totalSteps) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      completeOnboarding();
      addNotification('Profile created successfully! Welcome aboard! 🎉', 'success');
    }
  };

  const handleBack = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(onboardingStep - 1);
    }
  };

  const canProceed = () => {
    switch (onboardingStep) {
      case 1:
        return onboardingData.name && onboardingData.name.trim().length > 0;
      case 2:
        return onboardingData.tags && onboardingData.tags.length > 0;
      case 3:
        return onboardingData.bio && onboardingData.bio.trim().length > 0;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (onboardingStep) {
      case 1:
        return <BasicInfoStep />;
      case 2:
        return <TagsInterestsStep />;
      case 3:
        return <ProfilePhotoStep />;
      default:
        return null;
    }
  };

  const stepTitles = {
    1: userRole === 'student' ? 'Tell us about you' : 'Basic Information',
    2: userRole === 'student' ? 'Your interests & goals' : 'Your expertise & experience',
    3: 'Complete your profile'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl max-h-[90vh] rounded-2xl bg-surface shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="border-b border-border-secondary p-6 flex-shrink-0">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {userRole === 'student' ? 'Student' : 'Alumni'} Onboarding
            </h2>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-muted-text">
                Step {onboardingStep} of {totalSteps}
              </div>
              <button
                onClick={cancelOnboarding}
                className="p-1 rounded-full hover:bg-surface-secondary text-muted-text hover:text-foreground"
                aria-label="Close onboarding"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {stepTitles[onboardingStep as keyof typeof stepTitles]}
              </span>
              <span className="text-sm text-muted-text">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-surface-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step Circles */}
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <motion.div
                  className={`stepper-circle ${
                    step < onboardingStep
                      ? 'completed'
                      : step === onboardingStep
                      ? 'active'
                      : 'inactive'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step < onboardingStep ? (
                    <CheckCircle size={20} />
                  ) : (
                    <span className="text-sm font-semibold">{step}</span>
                  )}
                </motion.div>
                {step < 3 && (
                  <div className={`mx-2 h-0.5 w-8 ${
                    step < onboardingStep ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={onboardingStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border-secondary p-6 flex-shrink-0">
          <button
            onClick={handleBack}
            disabled={onboardingStep === 1}
            className="btn-ghost disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {onboardingStep === totalSteps ? 'Complete Profile' : 'Next'}
            {onboardingStep < totalSteps && <ArrowRight size={16} className="ml-2" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingStepper;