import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Monitor, X, CheckCircle } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';
import { dummyData, Alumni } from '../../data/dummy';

interface MentorshipBookingProps {
  mentorId: string;
  onClose: () => void;
}

const MentorshipBooking: React.FC<MentorshipBookingProps> = ({ mentorId, onClose }) => {
  const [step, setStep] = useState<'slots' | 'details' | 'confirmation'>('slots');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [sessionType, setSessionType] = useState<'career' | 'technical' | 'interview'>('career');
  const [message, setMessage] = useState('');
  
  const { addNotification } = useAppStore();
  
  const mentor = dummyData.alumni.find(a => a.id === mentorId) as Alumni;
  const slots = dummyData.mentorshipSlots.find(m => m.mentorId === mentorId)?.slots || [];
  
  if (!mentor) return null;

  const formatSlot = (slot: string) => {
    const date = new Date(slot);
    return {
      date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    };
  };

  const handleBookSession = () => {
    addNotification(`Session booked with ${mentor.name} for ${formatSlot(selectedSlot).date} at ${formatSlot(selectedSlot).time}! 🎉`, 'success');
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
        <div className="border-b border-border-secondary p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-foreground">Book Session with {mentor.name}</h2>
                <p className="text-sm text-muted-text">{mentor.role} at {mentor.company}</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-surface-secondary"
            >
              <X size={20} />
            </button>
          </div>

          {/* Step indicator */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            {[
              { key: 'slots', label: 'Time Slot', icon: Calendar },
              { key: 'details', label: 'Session Details', icon: Monitor },
              { key: 'confirmation', label: 'Confirmation', icon: CheckCircle }
            ].map((stepItem, index) => {
              const IconComponent = stepItem.icon;
              const isActive = stepItem.key === step;
              const isCompleted = 
                (step === 'details' && stepItem.key === 'slots') ||
                (step === 'confirmation' && ['slots', 'details'].includes(stepItem.key));
              
              return (
                <div key={stepItem.key} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isCompleted ? 'bg-success text-success-foreground' :
                    isActive ? 'bg-primary text-primary-foreground' :
                    'bg-surface-secondary text-muted-text'
                  }`}>
                    <IconComponent size={16} />
                  </div>
                  <span className={`ml-2 text-sm ${
                    isActive ? 'text-foreground font-medium' : 'text-muted-text'
                  }`}>
                    {stepItem.label}
                  </span>
                  {index < 2 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      isCompleted ? 'bg-success' : 'bg-border'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 'slots' && (
              <motion.div
                key="slots"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">Choose a Time Slot</h3>
                <p className="text-muted-text">Select your preferred time for the mentorship session</p>
                
                <div className="grid gap-3 sm:grid-cols-2">
                  {slots.map((slot) => {
                    const formatted = formatSlot(slot);
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedSlot === slot
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-primary/30 hover:bg-surface-secondary'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Calendar size={20} />
                          <div>
                            <div className="font-medium">{formatted.date}</div>
                            <div className="text-sm opacity-75">{formatted.time}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-foreground">Session Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Session Type
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { key: 'career', label: 'Career Guidance', desc: 'General career advice' },
                      { key: 'technical', label: 'Technical Discussion', desc: 'Code review, architecture' },
                      { key: 'interview', label: 'Interview Prep', desc: 'Mock interviews, tips' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setSessionType(type.key as any)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          sessionType === type.key
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30'
                        }`}
                      >
                        <div className="font-medium text-foreground">{type.label}</div>
                        <div className="text-xs text-muted-text">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message to Mentor (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you'd like to discuss..."
                    rows={4}
                    className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
              </motion.div>
            )}

            {step === 'confirmation' && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <CheckCircle size={48} className="mx-auto mb-4 text-success" />
                  <h3 className="text-lg font-semibold text-foreground">Confirm Your Session</h3>
                  <p className="text-muted-text">Review your booking details</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-surface-secondary">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-text">Date & Time</span>
                      <span className="font-medium text-foreground">
                        {formatSlot(selectedSlot).date} at {formatSlot(selectedSlot).time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-text">Session Type</span>
                      <span className="font-medium text-foreground capitalize">
                        {sessionType.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-text">Duration</span>
                      <span className="font-medium text-foreground">45 minutes</span>
                    </div>
                  </div>

                  {message && (
                    <div className="p-4 rounded-xl bg-surface-secondary">
                      <div className="text-sm text-muted-text mb-1">Your Message</div>
                      <div className="text-foreground">{message}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t border-border-secondary p-6 flex items-center justify-between">
          <button
            onClick={() => {
              if (step === 'slots') onClose();
              else if (step === 'details') setStep('slots');
              else if (step === 'confirmation') setStep('details');
            }}
            className="btn-ghost"
          >
            {step === 'slots' ? 'Cancel' : 'Back'}
          </button>

          <button
            onClick={() => {
              if (step === 'slots') setStep('details');
              else if (step === 'details') setStep('confirmation');
              else handleBookSession();
            }}
            disabled={step === 'slots' && !selectedSlot}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 'confirmation' ? 'Book Session' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorshipBooking;