import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, PlusCircle } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';

interface ShareExperienceModalProps {
  onClose: () => void;
}

const ShareExperienceModal: React.FC<ShareExperienceModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { addNotification } = useAppStore();

  const availableTags = [
    'Interview Experience', 'Career Growth', 'Technical Skills', 'Leadership',
    'Company Culture', 'Salary Negotiation', 'Work-Life Balance', 'Remote Work',
    'Startups', 'Big Tech', 'Product Management', 'Engineering'
  ];

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    
    addNotification('Experience shared successfully! +15 points earned 🎉', 'success');
    onClose();
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface shadow-2xl"
      >
        <div className="border-b border-border-secondary p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Share Your Experience</h2>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-surface-secondary">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., My interview experience at Google"
              className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag-chip text-sm ${
                    selectedTags.includes(tag) ? 'selected' : ''
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Your Experience *</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your insights, lessons learned, interview process, tips for students..."
              rows={8}
              className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>
        </div>

        <div className="border-t border-border-secondary p-6 flex justify-between">
          <button onClick={onClose} className="btn-ghost">Cancel</button>
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusCircle size={16} className="mr-2" />
            Share Experience
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShareExperienceModal;